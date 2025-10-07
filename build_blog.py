import re
from datetime import datetime
from pathlib import Path
import markdown

def parse_frontmatter(content):
    """Parse YAML frontmatter from markdown content."""
    frontmatter_regex = r'^---\n(.*?)\n---\n(.*)$'
    match = re.match(frontmatter_regex, content, re.DOTALL)

    if not match:
        return {}, content

    frontmatter_text = match.group(1)
    markdown_content = match.group(2)

    metadata = {}
    for line in frontmatter_text.split('\n'):
        if ':' in line:
            key, value = line.split(':', 1)
            metadata[key.strip()] = value.strip()

    return metadata, markdown_content

def format_date(date_string):
    """Format date string to 'Mon DD, YYYY' format."""
    try:
        date = datetime.strptime(date_string, '%Y-%m-%d')
        return date.strftime('%b %-d, %Y')
    except:
        return date_string

def generate_post_html(metadata, html_content):
    """Generate complete HTML page for blog post."""
    title = metadata['title']
    date = metadata['date']
    slug = metadata['slug']
    excerpt = metadata['excerpt']

    return f'''<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | Preston Vander Vos</title>
    <link rel="apple-touch-icon" sizes="180x180" href="../assets/icons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../assets/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../assets/icons/favicon-16x16.png">
    <link rel="manifest" href="../assets/icons/site.webmanifest">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://rsms.me/">
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <style>
        body {{ font-family: 'Inter', sans-serif; }}
        .markdown-content h1 {{ font-size: 2.25rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem; }}
        .markdown-content h2 {{ font-size: 1.875rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 0.75rem; }}
        .markdown-content h3 {{ font-size: 1.5rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.5rem; }}
        .markdown-content p {{ margin-bottom: 1rem; line-height: 1.75; }}
        .markdown-content ul, .markdown-content ol {{ margin-left: 1.5rem; margin-bottom: 1rem; }}
        .markdown-content li {{ margin-bottom: 0.5rem; }}
        .markdown-content code {{ background: #f3f4f6; padding: 0.125rem 0.25rem; border-radius: 0.25rem; font-size: 0.875rem; }}
        .dark .markdown-content code {{ background: #374151; }}
        .markdown-content pre {{ background: #f3f4f6; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; margin-bottom: 1rem; }}
        .dark .markdown-content pre {{ background: #374151; }}
        .markdown-content pre code {{ background: transparent; padding: 0; }}
        .markdown-content blockquote {{ border-left: 4px solid #10b981; padding-left: 1rem; margin: 1rem 0; font-style: italic; }}
        .dark .markdown-content blockquote {{ border-left-color: #6ee7b7; }}
        .markdown-content a {{ color: #10b981; text-decoration: underline; }}
        .dark .markdown-content a {{ color: #6ee7b7; }}
        .markdown-content img {{ max-width: 100%; height: auto; border-radius: 0.5rem; margin: 1rem 0; }}
    </style>
    <script>
        tailwind.config = {{
            darkMode: 'class',
            theme: {{
                extend: {{
                    colors: {{
                        'base-100': '#1f2937',
                        'base-200': '#374151',
                        'accent': '#6ee7b7',
                        'accent-light': '#10b981',
                    }},
                }}
            }}
        }}
    </script>
    <script>
        if (localStorage.theme === 'light' || (!('theme' in localStorage) && !window.matchMedia('(prefers-color-scheme: dark)').matches)) {{
          document.documentElement.classList.remove('dark')
          document.documentElement.classList.add('light')
        }} else {{
          document.documentElement.classList.add('dark')
        }}
    </script>
    <meta property="og:title" content="{title} | Preston Vander Vos">
    <meta property="og:description" content="{excerpt}">
    <meta property="og:url" content="https://pvandervos.com/blog/{slug}.html">
    <meta property="og:type" content="article">
</head>
<body class="bg-white dark:bg-base-100 text-gray-800 dark:text-gray-300 transition-colors duration-300" data-page="blog-post">
    <script src="../layout.js"></script>
    <script>
        const mainContent = `
            <article class="mb-16">
                <header class="mb-8 border-b-2 border-accent-light dark:border-accent pb-6">
                    <a href="../blog.html" class="text-accent-light dark:text-accent hover:underline mb-4 inline-block">← Back to Blog</a>
                    <h1 class="text-4xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h1>
                    <div class="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                        <time>{format_date(date)}</time>
                    </div>
                </header>

                <div class="markdown-content text-gray-700 dark:text-gray-300">
                    {html_content}
                </div>
            </article>
        `;

        document.addEventListener('DOMContentLoaded', () => {{
            loadLayout(mainContent);
        }});
    </script>
</body>
</html>'''

def generate_blog_listing(posts):
    """Generate the blog.html listing page with all posts."""
    # Sort posts by date (most recent first)
    sorted_posts = sorted(posts, key=lambda p: p['date'], reverse=True)

    # Generate article HTML for each post
    articles_html = []
    for post in sorted_posts:
        article = f'''<article class="blog-card border-b border-gray-200 dark:border-gray-700 pb-8" onclick="window.location.href='blog/{post['slug']}.html'">
                        <div class="mb-4">
                            <h2 class="text-2xl font-bold mb-2">
                                <a href="blog/{post['slug']}.html" class="blog-title text-gray-900 dark:text-white transition-colors duration-300">
                                    {post['title']}
                                </a>
                            </h2>
                            <p class="text-gray-500 dark:text-gray-400 text-sm">{format_date(post['date'])}</p>
                        </div>
                        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {post['excerpt']}
                        </p>
                    </article>'''
        articles_html.append(article)

    articles_section = '\n\n                    '.join(articles_html)

    return f'''<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog | Preston Vander Vos</title>
    <link rel="apple-touch-icon" sizes="180x180" href="assets/icons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/icons/favicon-16x16.png">
    <link rel="manifest" href="assets/icons/site.webmanifest">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://rsms.me/">
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <style>
        body {{ font-family: 'Inter', sans-serif; }}
        .blog-card {{
            cursor: pointer;
            transition: all 0.2s ease;
        }}
        .blog-card:hover {{
            transform: translateY(-2px);
        }}
        .blog-card:hover .blog-title {{
            color: #10b981 !important;
        }}
        .dark .blog-card:hover .blog-title {{
            color: #6ee7b7 !important;
        }}
    </style>
    <script>
        tailwind.config = {{
            darkMode: 'class',
            theme: {{
                extend: {{
                    colors: {{
                        'base-100': '#1f2937',
                        'base-200': '#374151',
                        'accent': '#6ee7b7',
                        'accent-light': '#10b981',
                    }},
                }}
            }}
        }}
    </script>
    <script>
        if (localStorage.theme === 'light' || (!('theme' in localStorage) && !window.matchMedia('(prefers-color-scheme: dark)').matches)) {{
          document.documentElement.classList.remove('dark')
          document.documentElement.classList.add('light')
        }} else {{
          document.documentElement.classList.add('dark')
        }}
    </script>
    <meta property="og:title" content="Blog | Preston Vander Vos">
    <meta property="og:description" content="My musings">
    <meta property="og:url" content="https://pvandervos.com/blog">
    <meta property="og:type" content="website">
</head>
<body class="bg-white dark:bg-base-100 text-gray-800 dark:text-gray-300 transition-colors duration-300" data-page="blog">
    <script src="../layout.js"></script>
    <script>
        const mainContent = `
            <section class="mb-16">
                <h1 class="text-4xl font-bold border-b-2 border-accent-light dark:border-accent pb-2 mb-6 text-gray-900 dark:text-white">Blog</h1>

                <div class="bg-gray-50 dark:bg-base-200 rounded-lg p-4 mb-8">
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic">
                        All opinions are mine. AI was not used to write any post.
                    </p>
                </div>

                <div class="space-y-8">
                    {articles_section}
                </div>
            </section>
        `;

        document.addEventListener('DOMContentLoaded', () => {{
            loadLayout(mainContent);
        }});
    </script>
</body>
</html>'''

def process_markdown_file(filepath):
    """Process a single markdown file and generate HTML."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    metadata, markdown_content = parse_frontmatter(content)

    # Convert markdown to HTML
    html_content = markdown.markdown(markdown_content, extensions=['fenced_code', 'tables'])

    # set defaults for slug and author
    slug = metadata.get('slug', Path(filepath).stem)
    metadata['slug'] = slug
    metadata['author'] = metadata.get('author', 'Preston Vander Vos')

    # Generate full HTML page
    html = generate_post_html(metadata, html_content)

    output_path = Path('blog') / f'{slug}.html'

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)

    print(f'Generated: blog/{slug}.html')
    return metadata

def build_blog():
    """Main function to build all blog posts and update blog.html."""
    posts_dir = Path('posts')

    if not posts_dir.exists():
        print('Error: posts/ directory not found')
        return

    md_files = list(posts_dir.glob('*.md'))

    if not md_files:
        print('No markdown files found in posts/')
        return

    print(f'Found {len(md_files)} markdown file(s)\n')

    posts = []
    for md_file in md_files:
        metadata = process_markdown_file(md_file)
        posts.append(metadata)

    blog_html = generate_blog_listing(posts)
    with open('blog.html', 'w', encoding='utf-8') as f:
        f.write(blog_html)

    print(f'Generated: blog.html')
    print(f'Successfully generated {len(posts)} blog post(s)')

if __name__ == '__main__':
    build_blog()