const { promises: fs } = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

async function generate() {
  const feed = new RSS({
    title: 'Pedro Duarte',
    site_url: 'https://ped.ro',
    feed_url: 'https://ped.ro/feed.xml',
    description: "Recent articles from the Pedro's blog.",
  });

  const posts = await fs.readdir(path.join(__dirname, '..', 'posts'));

  await Promise.all(
    posts.map(async (name) => {
      const content = await fs.readFile(path.join(__dirname, '..', 'posts', name));
      const { data } = matter(content);

      feed.item({
        title: data.title,
        url: 'https://ped.ro/blog/' + name.replace(/\.mdx?/, ''),
        date: data.publishedAt,
      });
    })
  );

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
