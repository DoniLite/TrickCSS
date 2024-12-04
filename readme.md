
# Markdown Style

> Cette documentation est disponible en [français](./readme.fr.md)

This project is a fork of a feature that I quickly felt the need for while working with Markdown: **styling**. Indeed, a Markdown document rendered in raw HTML can lack style and aesthetics, especially if you need to receive content with an unknown structure and present it directly on a web page. That's why this project provides a set of ready-to-use styles to improve the visual rendering of Markdown documents.

## Features

- **Dark and light modes**: You can choose between a dark or light theme based on your or your users' preferences.
- **JavaScript for code copying**: Adds a copy button for each code block to easily retrieve code examples.

You can choose to load only the **CSS** or **JavaScript**, depending on your needs.

## Usage

To use the module, follow these steps to load assets from CDN servers:

```html
    <!-- Use this for CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/DoniLite/CSS/md.css">

    <!-- Add highlight theme for syntax coloring -->
    <!-- For more themes, refer to the official documentation https://highlightjs.org/#usage -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css"/>
    <!-- Insert the script -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>

    <!-- For JavaScript -->
     <script type="module" src="https://cdn.jsdelivr.net/gh/DoniLite/CSS/md.js" defer></script>
```

If you want to load the latest module or a specific version, consider this syntax:

```html
    <!-- For the latest currently available version -->
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/DoniLite/CSS@latest/md.css">

     <!-- If you want to load a specific version -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/DoniLite/CSS@{{specific_version_number}}/md.css">
```

## Style Application

Once the files are loaded, you can apply the desired theme. Note that the CSS traverses your entire document looking for appropriate tags to style, while minimizing conflicts with your existing styles. Use the following structure to inject Markdown content already converted to HTML:

```html
    <div class="markdown-content light-mode">
        <div class="markdown-content" id="parsedContent">
            <!-- Add your content here -->
        </div>
    </div>
```

**Note**: Replace `light-mode` with `dark-mode` if you want to activate dark mode by default.

## Render

[Note: The original document includes two screenshots, which cannot be displayed here]

## Possible Updates and Improvements

I plan to enrich the project with new features and other styles for documents converted to HTML:

- Adding new themes to offer more variety in visual rendering.
- Support for document types beyond Markdown for greater flexibility.
- Improvements to code copy button ergonomics and interactions.
- Performance optimization for processing large amounts of Markdown content.

## How to Contribute?

Want to contribute to this project or add features? Here are the steps to participate:

- **Fork the project:** Create a copy of the code in your own repository.
- **Create a development branch:** Work on your modifications in a `develop/description` branch (or an explicit branch name for your feature).
- **Make your modifications:** Implement your additions or corrections.
- **Submit your update:** Push your changes to your forked repository.
- **Create a Pull Request:** Request integration of your changes by creating a pull request to the original repository.
- **Wait for review:** Your code will be reviewed and validated by the community before being merged.

## License

This project is under the **MIT** license
