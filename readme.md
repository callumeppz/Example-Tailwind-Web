# Webpage Template Project

## Overview

This project contains a simple, responsive webpage template built using **HTML**, **Tailwind CSS**, and **custom CSS/JavaScript**. It provides a clean starting point for building web projects with utility-first styling and interactive elements.

---

## Features

* Responsive layout using Tailwind CSS CDN
* Custom button styles complementing Tailwind
* JavaScript for basic interactivity (button click handlers)
* Semantic HTML5 structure with accessible navigation
* Ready to extend with additional pages and components

---

## File Structure

```
project-root/
├── dist/
│   └── index.html          # Main HTML template
├── css/
│   └── styles.css          # Custom CSS styles
├── scripts.js              # JavaScript functionality
├── README.md               # Project overview and instructions
└── assets/                 # (Optional) images, fonts, icons, etc.
```

---

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Open the `dist/index.html` file in a web browser to view the template.

3. Modify the CSS in `css/styles.css` or add your own Tailwind classes in the HTML files as needed.

4. Edit `scripts.js` to customise interactivity.

---

## Tailwind CSS Usage

* Tailwind is included via CDN in the HTML head for easy use without a build step.
* Use Tailwind utility classes directly in your HTML elements.
* Override or extend Tailwind styles using your custom CSS file (`css/styles.css`).

Example button with Tailwind:

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click Me
</button>
```

---

## JavaScript Usage

* JavaScript is linked in the HTML file and runs after page load.
* The sample script handles clicks on buttons with IDs `ExampleButtonTAIL` and `ExampleButtonCSS`.
* Modify `scripts.js` to add your own interactive features.

---