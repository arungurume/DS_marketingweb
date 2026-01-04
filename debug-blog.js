const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDirectory = path.join(process.cwd(), 'content/blog');

function getPostBySlug(slug) {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return { slug: realSlug, frontmatter: data };
}

function getAllPosts() {
    const slugs = fs.readdirSync(postsDirectory);
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        .sort((post1, post2) => (new Date(post1.frontmatter.date).getTime() > new Date(post2.frontmatter.date).getTime() ? -1 : 1));
    return posts;
}

const posts = getAllPosts();
console.log('Total posts:', posts.length);
console.log('--- Top 5 Newest Posts ---');
posts.slice(0, 5).forEach((p, i) => {
    console.log(`${i + 1}. Title: ${p.frontmatter.title}`);
    console.log(`   Date: ${p.frontmatter.date}`);
});
