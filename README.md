# Tempus watches (React)

Stack: React 19, Vite, React Router, Bootstrap 5.

## Run it
    npm install
    npm run dev        # open the address it prints
    npm run build      # production files go to dist/

## Where to edit
- src/data/site.js      brand name, menu, slider offers, categories, GitHub link
- src/data/watches.js   all products and their image links
- src/components/Slider.jsx   reusable slider (see comment at top for props)
- src/pages/            Home, Watches, UnderDevelopment (About, Blog, Contact use this)
- src/styles/style.css  colors are the variables at the top (:root)
- public/images/        put your own watch photos here, then use "/images/file.jpg" in watches.js

## Clean URLs
Pages open as /watches, /about, etc. so the host must send every path to index.html.
Ready-made files are in public/: _redirects (Netlify), vercel.json (Vercel), .htaccess (Apache/cPanel).

## Publish on GitHub Pages
1. Create a new repository on GitHub (for example "tempus-watches") and push this folder to the main branch:
       git init
       git add .
       git commit -m "Initial commit"
       git branch -M main
       git remote add origin https://github.com/Rabina-Vishwakarma/tempus-watches.git
       git push -u origin main
2. On GitHub open Settings > Pages and set Source to "GitHub Actions".
3. The included workflow (.github/workflows/deploy.yml) builds and publishes on every push to main.
   Your site will be at https://rabina-vishwakarma.github.io/tempus-watches/
The build copies index.html to 404.html so page addresses like /watches also work when opened directly.
Social links in the footer are set in src/data/site.js.
