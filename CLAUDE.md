# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a **fullstack web development learning repository** organized by technology:

- `1.html/` - HTML fundamentals (block/inline elements, forms, tables)
- `2.css/` - CSS (selectors, flexbox, responsive, animation, transition)
- `3.tailwind/` - Tailwind CSS exercises
- `4.js/` - JavaScript (primitives, string, array, object manipulation)

## Development

No build system or dependencies. Files are static HTML/CSS/JS that run directly in a browser.

**To run exercises:**
- Open `.html` files directly in a browser
- For JS exercises: open the corresponding `ex01.html` which loads the `.js` file
- For CSS exercises: open the exercise `.html` files in the respective subdirectories

## Code Style

- **JavaScript**: Uses both function declarations and ES6+ features (arrow functions, classes, destructuring)
- **CSS**: External stylesheets via `<link>` or `<style>` blocks
- **Naming**: camelCase for JS, kebab-case for CSS classes
- **Immutability**: Prefer immutable patterns for object/array operations (see `4.js/4.4.object/js/ex01.js`)

## Notes

- Educational content and comments are in **Vietnamese**
- Exercise files follow the pattern `ex01.html`, `ex02.html`, etc.
- Reference documentation: [HTML Reference](https://htmlreference.io/)
