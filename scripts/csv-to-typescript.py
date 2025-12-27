import csv
import json

def csv_to_typescript(csv_file_path):
    """
    Convert CSV file to TypeScript array format for spa locations data.
    Save your CSV data to 'spa-data.csv' and run: python3 csv-to-typescript.py
    """
    
    locations = []
    
    with open(csv_file_path, 'r', encoding='utf-8') as file:
        # Use tab as delimiter since the CSV appears to be tab-separated
        reader = csv.DictReader(file, delimiter='\t')
        
        for row in reader:
            location = {
                'businessType': row['business_type'],
                'city': row['city'],
                'country': row['country'],
                'region': row['region'],
                'mainImageFilename': row['main_image_filename'],
                'altText': row['alt_text'],
                'metaTitle': row['meta_title'],
                'metaDescription': row['meta_description'],
                'slug': row['slug'],
                'canonicalUrl': row['canonical_url'],
                'faqQ1': row['faq_q1'],
                'faqA1': row['faq_a1'],
                'faqQ2': row['faq_q2'],
                'faqA2': row['faq_a2'],
                'faqQ3': row['faq_q3'],
                'faqA3': row['faq_a3'],
                'benefitText': row['benefit_text'],
                'whatsappPrefillText': row['whatsapp_prefill_text'],
                'citySlug': row['city_slug'],
                'businessTypeSlug': row['business_type_slug']
            }
            
            # Add optional FAQ fields if they exist
            if row.get('faq_q4'):
                location['faqQ4'] = row['faq_q4']
                location['faqA4'] = row['faq_a4']
            if row.get('faq_q5'):
                location['faqQ5'] = row['faq_q5']
                location['faqA5'] = row['faq_a5']
            
            locations.append(location)
    
    # Generate TypeScript code
    ts_code = "export const spaLocationsData: SpaLocation[] = [\n"
    
    for i, loc in enumerate(locations):
        ts_code += "    {\n"
        ts_code += f'        businessType: "{loc["businessType"]}",\n'
        ts_code += f'        city: "{loc["city"]}",\n'
        ts_code += f'        country: "{loc["country"]}",\n'
        ts_code += f'        region: "{loc["region"]}",\n'
        ts_code += f'        mainImageFilename: "{loc["mainImageFilename"]}",\n'
        ts_code += f'        altText: "{loc["altText"]}",\n'
        ts_code += f'        metaTitle: "{loc["metaTitle"]}",\n'
        ts_code += f'        metaDescription: "{loc["metaDescription"]}",\n'
        ts_code += f'        slug: "{loc["slug"]}",\n'
        ts_code += f'        canonicalUrl: "{loc["canonicalUrl"]}",\n'
        ts_code += f'        faqQ1: "{loc["faqQ1"]}",\n'
        ts_code += f'        faqA1: "{loc["faqA1"]}",\n'
        ts_code += f'        faqQ2: "{loc["faqQ2"]}",\n'
        ts_code += f'        faqA2: "{loc["faqA2"]}",\n'
        ts_code += f'        faqQ3: "{loc["faqQ3"]}",\n'
        ts_code += f'        faqA3: "{loc["faqA3"]}",\n'
        
        if 'faqQ4' in loc:
            ts_code += f'        faqQ4: "{loc["faqQ4"]}",\n'
            ts_code += f'        faqA4: "{loc["faqA4"]}",\n'
        if 'faqQ5' in loc:
            ts_code += f'        faqQ5: "{loc["faqQ5"]}",\n'
            ts_code += f'        faqA5: "{loc["faqA5"]}",\n'
            
        ts_code += f'        benefitText: "{loc["benefitText"]}",\n'
        ts_code += f'        whatsappPrefillText: "{loc["whatsappPrefillText"]}",\n'
        ts_code += f'        citySlug: "{loc["citySlug"]}",\n'
        ts_code += f'        businessTypeSlug: "{loc["businessTypeSlug"]}"\n'
        
        if i < len(locations) - 1:
            ts_code += "    },\n"
        else:
            ts_code += "    }\n"
    
    ts_code += "];\n"
    
    # Save to file
    with open('spa-locations-generated.ts', 'w', encoding='utf-8') as f:
        f.write(ts_code)
    
    print(f"✅ Converted {len(locations)} locations")
    print("📄 Output saved to: spa-locations-generated.ts")
    print("\nCopy the generated array and replace the spaLocationsData array in spa-locations.ts")

if __name__ == "__main__":
    # Save your CSV data to this file
    csv_file = "spa-data.csv"
    
    try:
        csv_to_typescript(csv_file)
    except FileNotFoundError:
        print(f"❌ Error: {csv_file} not found")
        print("\nTo use this script:")
        print("1. Save your CSV data to 'spa-data.csv'")
        print("2. Run: python3 csv-to-typescript.py")
    except Exception as e:
        print(f"❌ Error: {e}")
