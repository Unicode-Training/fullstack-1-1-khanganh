# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an HTML/CSS learning repository for a fullstack course (student: khanganh). It contains class exercises, self-practice exercises, and review notes — all pure HTML/CSS with no build tools, frameworks, or JavaScript dependencies.

## Repository Structure

- `1.html/` — First class session: HTML exercise with notes (`note.md` contains Vietnamese-language HTML reference)
- `review/html/<YYYYMMDD>/` — Review exercises organized by date, each containing `index.html` + `style.css`
- `self/` — Self-practice exercises organized by CSS topic (e.g., `position/`, `overflow/`, `transform/`, `expand-collapse/`)

## Development

No build system, package manager, or test runner. Files are static HTML/CSS opened directly in a browser.

## Branching Convention

Branches follow the pattern `ex-YYYYMMDD` (e.g., `ex-20260204`). Each branch corresponds to an exercise session date.

## Key Patterns

- Exercises use pure CSS techniques (no JavaScript) — e.g., the checkbox hack for expand/collapse trees and modals
- The `self/` directory is gitignored on main but tracked on exercise branches
- Vietnamese language is used in notes and some content

## CSS-Only Interactivity (Checkbox Hack)

This repo relies on the hidden checkbox + label pattern for all interactive behavior:

- **Expand/collapse trees**: Hidden `<input type="checkbox">` + `<label for="...">` toggles sibling `<ul>` via `input:checked + label + ul { display: block }`. Checkbox IDs use flat counters (`n-1`, `n-2`, ...).
- **Modals**: Same pattern — a `<label>` opens/closes a modal by toggling a hidden checkbox, with CSS `:checked` controlling visibility.

When adding new interactive elements, use this checkbox hack pattern — never add JavaScript.
