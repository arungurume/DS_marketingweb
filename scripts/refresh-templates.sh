#!/usr/bin/env bash
# Rebuild the static site with the latest templates from the CMS and deploy it.
# Templates are fetched at build time (src/lib/templates.ts), so a rebuild is
# what makes new or edited templates appear.
#
# Usage:
#   npm run refresh:templates            # build + deploy
#   npm run refresh:templates -- --dry   # build only, do not deploy
set -euo pipefail

cd "$(dirname "$0")/.."

API='https://api-cms.digitalsigns.ai/cms/api/v1/ctc/public/templates?page=0&size=200'
PROJECT='prod'
DRY=0
[[ "${1:-}" == "--dry" ]] && DRY=1

echo "Checking template API..."
JSON=$(curl -sf --max-time 30 "$API") || { echo "ABORT: template API unreachable. Not building."; exit 1; }
COUNT=$(printf '%s' "$JSON" | python3 -c "import sys,json; d=json.load(sys.stdin); print(len(d.get('content',[])))")
TOTAL=$(printf '%s' "$JSON" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('totalElements',0))")

# getAllTemplates() silently returns [] on failure, so never ship an empty catalog.
if [[ "$COUNT" -eq 0 ]]; then
  echo "ABORT: API returned 0 templates. Not building."; exit 1
fi
# The site only requests the first 200. Raise size= in src/lib/templates.ts if exceeded.
if [[ "$TOTAL" -gt "$COUNT" ]]; then
  echo "ABORT: API has $TOTAL templates but only $COUNT fetched. Raise the page size in src/lib/templates.ts."; exit 1
fi
echo "API has $COUNT templates."

# Next caches fetch() results in .next/cache/fetch-cache, which would serve the
# old template list on rebuild. Clear it so the build reads the API again.
rm -rf .next/cache/fetch-cache

npm run build

BUILT=$(find out/templates -mindepth 2 -name index.html | wc -l | tr -d ' ')
echo "Built $BUILT template detail pages."
if [[ "$BUILT" -ne "$COUNT" ]]; then
  echo "ABORT: built $BUILT detail pages but API has $COUNT. Not deploying."; exit 1
fi

if [[ "$DRY" -eq 1 ]]; then
  echo "Dry run: build ok, not deploying."; exit 0
fi

firebase deploy --only hosting --project "$PROJECT"
echo "Done. Templates refreshed: $COUNT."
