# Atif Aziz Memon: Portfolio

Personal portfolio site built with Bootstrap 5, AOS, and vanilla JavaScript.
No build step, no frameworks, no Node. Opens directly in a browser.

---

## Deploy to GitHub Pages (step by step)

### Option A: User site (cleanest URL: `atifm1726.github.io`)

1. Create a new GitHub repository named exactly **`atifm1726.github.io`**.

2. Push these files to the `main` branch:
   ```bash
   cd /path/to/static-site
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/atifm1726/atifm1726.github.io.git
   git push -u origin main
   ```

3. GitHub Pages activates automatically for user sites. Wait 1 to 2 minutes.

4. Live at: **`https://atifm1726.github.io`**

### Option B: Project site (URL includes repo name)

1. Create a new GitHub repository with any name, for example **`portfolio`**.

2. Push the files:
   ```bash
   cd /path/to/static-site
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/atifm1726/portfolio.git
   git push -u origin main
   ```

3. Go to the repo on GitHub, open **Settings**, then **Pages**.
   Under **Source**, select **Deploy from a branch**, branch **main**, folder **/ (root)**. Click Save.

4. Wait 1 to 2 minutes.

5. Live at: **`https://atifm1726.github.io/portfolio`**

### Updating content later

Edit `index.html`, then commit and push:
```bash
git add index.html
git commit -m "Update about section"
git push
```
GitHub Pages redeploys automatically within 1 to 2 minutes. No further configuration needed.

---

## Files to replace before going live

| File | What to do |
|------|------------|
| `assets/profile.jpg` | Replace with your actual headshot. Any size works; the CSS crops it to a circle automatically. |
| `assets/Atif_Memon_Resume.pdf` | Replace with your latest resume PDF. Keep the same filename or update the `href` in the hero section. |
| `assets/projects/chest-mnistv2.jpg` | Screenshot or cover image for the ChestMNIST project. |
| `assets/projects/noaa-storm.jpg` | Screenshot for the NOAA Storm Events project. |
| `assets/projects/finsentinel.jpg` | Screenshot for FinSentinel. |
| `assets/projects/brain-tumor.jpg` | Screenshot for Brain Tumor CNN. |
| `assets/projects/cancer-detection.jpg` | Screenshot for Cancer Detection on Hugging Face. |

Suggested image size for project thumbnails: 800 x 500 px, JPG or PNG.
If no image is provided, the site shows a colored placeholder icon automatically.

---

## Formspree contact form setup

1. Go to [formspree.io](https://formspree.io/) and create a free account.
2. Click **New Form**, give it a name, and copy the form ID (looks like `xabcdefg`).
3. In `index.html`, find this line:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORMSPREE_ID" ...>
   ```
4. Replace `YOUR_FORMSPREE_ID` with your actual form ID.
5. Verify your email address when Formspree sends the first submission notification.

The free Formspree plan allows 50 submissions per month.

---

## Other placeholders to fill in

### Email address (contact section)
In `index.html`, find:
```html
<a href="mailto:your@email.com">your@email.com</a>
```
Replace `your@email.com` with your actual email address (appears twice: in the `href` and as the link text).

### Undergraduate education
In `index.html`, find the education card marked "UG Placeholder" and replace:
- `[Undergraduate Degree Title]`
- `[University Name], [City, Country]`
- `[Start Year] to [End Year]`
- `[Your Major / Field of Study]`

### Project GitHub links
Each project card has a "View on GitHub" link. Find the `href="#"` placeholders and replace them with the actual GitHub repository URLs.

---

## How the site is structured

| File | Purpose |
|------|---------|
| `index.html` | All content and markup. Edit this to update any text. |
| `css/style.css` | All custom styles. Design tokens are CSS variables in `:root` at the top of the file. |
| `js/main.js` | AOS init, navbar scroll behavior, nav highlighting, mobile menu collapse, and Formspree AJAX. |
| `assets/` | Profile photo, resume PDF, and project thumbnails. |

All external libraries load from CDN. No `npm install`, no build step.

---

## Changing accent colors

Open `css/style.css` and edit the `:root` block at the top:
```css
:root {
  --blue:   #4A90E2;  /* primary accent */
  --coral:  #FF6B6B;  /* secondary accent */
  --gold:   #F5C518;  /* tertiary accent */
  ...
}
```
One change propagates everywhere that color is used.
