# Tempus — Luxury Watch Store Template

A modern, responsive watch e-commerce website template built with **React, Vite and Bootstrap**. Tempus features a premium watch-shopping layout, product discovery tools and an interactive watch customizer.

## Live Demo

**Website:** https://tempus-watch-store-phi.vercel.app/

**GitHub Repository:** https://github.com/Rabina-Vishwakarma/tempus-watch-store

## Features

### Homepage
- Premium watch-store landing page
- Promotional announcement slider
- Hero section with featured watch imagery
- Shop-by-category section
- Featured watch products
- Product highlights and sample customer reviews
- Call-to-action sections

### Watch Collection
- Browse the watch collection
- Filter products by category
- Search watches by name or brand
- Sort products by price (low to high and high to low)
- View product details in an interactive preview
- Navigate between products in the preview

### Watch Customizer
- Choose from different dial colours
- Select different strap styles
- Select case finishes
- Preview your selected watch design
- See the price update based on your selections

### Additional
- Responsive layout for desktop, tablet and mobile
- Reusable React components
- React Router navigation
- Custom fallback image for unavailable product images
- Centralized website and product data for easier customization
- Ready for Vite production builds

## Technologies Used

| Technology | Purpose |
|---|---|
| React 19 | UI development |
| Vite | Development server and build tool |
| React Router | Page navigation |
| Bootstrap 5 | Responsive layout and styling |
| Bootstrap Icons | Interface icons |
| JavaScript | Interactive functionality |
| CSS | Custom styling |

## Project Structure

```text
tempus-watch-store/
│
├── public/
│   ├── images/
│   ├── fallback.svg
│   ├── _redirects
│   └── vercel.json
│
├── src/
│   ├── components/
│   │   ├── Customizer.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── ScrollTopButton.jsx
│   │   ├── Slider.jsx
│   │   ├── SmartImg.jsx
│   │   ├── Spotlight.jsx
│   │   └── WatchCard.jsx
│   │
│   ├── data/
│   │   ├── site.js
│   │   └── watches.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Watches.jsx
│   │   └── UnderDevelopment.jsx
│   │
│   ├── styles/
│   │   └── style.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Getting Started

Follow these steps to run the project on your local machine.

### 1. Requirements

Make sure you have installed:

- Node.js
- npm
- Git (optional, for cloning the repository)

### 2. Clone the Repository

```bash
git clone https://github.com/Rabina-Vishwakarma/tempus-watch-store.git
```

### 3. Open the Project Folder

```bash
cd tempus-watch-store
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal (usually `http://localhost:5173`).

### 6. Create a Production Build

```bash
npm run build
```

### 7. Preview the Production Build

```bash
npm run preview
```

The production files are generated inside the `dist/` directory.

## Customization Guide

You can customize the template without changing the entire application.

### Change Website Name and Navigation

Edit:

```text
src/data/site.js
```

You can update:
- Brand name
- Tagline
- Navigation links
- Promotional slider content
- Watch categories
- Social profile links

**Note:** Replace the default social profile URLs with your own before publishing a customized website.

### Add or Edit Watch Products

Edit:

```text
src/data/watches.js
```

You can update:
- Product name
- Brand
- Category
- Price
- Product image
- Product information

### Change Images

Product and website images are stored in:

```text
public/images/
```

Add your own optimized images and update their filenames in the relevant data files.

### Change Colours and Styling

Edit:

```text
src/styles/style.css
```

The main theme colours are defined in the CSS variables near the top of the file.

### Customize Components

Reusable interface components are available inside:

```text
src/components/
```

You can modify the header, footer, slider, product cards, customizer and other components independently.

## Pages and Routes

| Route | Description |
|---|---|
| `/` | Homepage |
| `/watches` | Watch collection |
| `/about` | Under development |
| `/blog` | Under development |
| `/contact` | Under development |

The About, Blog and Contact routes currently use a shared placeholder page. They can be developed and customized for your own project.

## Important Notes

- This project is a front-end website template and demo.
- It does not currently include a backend, database, user authentication, shopping cart, payment gateway, order management or live inventory.
- Product information, prices, promotional messages and customer reviews are demonstration content. Replace them with accurate information before using the template for a real business.
- The newsletter and contact-related areas should be connected to suitable services before collecting customer information.
- Check the usage rights and licenses of all images, fonts and third-party assets before commercial redistribution.
- Test all links and replace placeholder social media URLs before launch.

## Deployment

The project is deployed using Vercel.

To deploy your own version:

1. Fork or clone this repository.
2. Push your customized project to GitHub.
3. Import the repository into Vercel.
4. Use the following build settings:

| Setting | Value |
|---|---|
| Framework | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

You can also deploy the project to another hosting provider that supports React/Vite static builds.

## Author

**Rabina Vishwakarma**

GitHub: https://github.com/Rabina-Vishwakarma

---

*Tempus — A modern watch-shopping experience designed with React.*
