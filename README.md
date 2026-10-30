# Atif Aziz Memon: Portfolio

Personal portfolio site built with Bootstrap 5, AOS, and vanilla JavaScript.
No build step, no frameworks, no Node. Opens directly in a browser.

## Traffic analytics (GoatCounter)

GoatCounter offers free hosted analytics for reasonable public usage, including
page views, estimated visitors, referring sites, browsers, and approximate location.
Sign up at https://www.goatcounter.com/signup, verify your email, and keep your
dashboard private in the account settings.

To activate, set this meta tag in `index.html` to the endpoint from your account:

```html
<meta name="goatcounter-endpoint" content="https://YOUR-ACCOUNT.goatcounter.com/count" />
```

Publish the changed files to GitHub Pages, then visit the live HTTPS site and
check your GoatCounter dashboard. Local HTTP/file previews are not counted.
Each visible page opening counts, including repeat visits and reloads within the
same session. Section navigation does not create a pageview. These opening counts
are not a count of distinct people. Background tabs count when first made visible.
The integration stays disabled until a valid endpoint is configured. Remove the
endpoint to disable it again. No API key or password belongs in these files.

`js/analytics.js` sends the page path and only the origin of referring sites,
excluding query strings and fragments. The resume button also records a named
download-click event. Analytics never receives contact form fields. Blockers can
prevent counting; location is approximate and may reflect a VPN or network exit.
Reports start after activation and cannot recover historical traffic.

The contact form sends voluntarily supplied names, emails, messages, and optional
phone numbers to the existing Formspree endpoint. View these in your Formspree
inbox; they are separate from analytics and cannot identify every visitor.

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
| SEC Disclosure Integrity | Uses a built-in document shield icon; no thumbnail file required. |
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
