# Магазин Мебели

## Overview
Static Russian furniture store website imported from GitHub. The site is built with plain HTML, CSS, and JavaScript. Product images and hero/category visuals use remote photo URLs.

## Project Structure
- `index.html` — home page
- `catalog.html` — product catalog with filters
- `product.html` — product detail page
- `cart.html` — localStorage cart page
- `about.html` — company/about page
- `contact.html` — contact form page
- `styles.css` — shared styles
- `products.js` — product data and helpers
- `script.js` — shared UI behavior
- `server.js` — Node static server for Replit preview

## Runtime
- Development server: `node server.js`
- Host: `0.0.0.0`
- Port: `5000`

## Notes
- The imported about page was named `about (1).html`; `about.html` was added so existing navigation links work.
- No package installation is required.
- Home page includes an image slider, photo category cards, and a premium consultation showcase section.
- About page includes expanded company content and an embedded OpenStreetMap showroom map.
- Cart checkout requires a phone number or email before completing the simulated order.