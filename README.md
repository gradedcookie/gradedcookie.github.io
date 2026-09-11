# Minimalist Portfolio & PC Builds Website for GitHub Pages

A clean, responsive, lightweight static website designed specifically for **GitHub Pages** (built with pure semantic HTML5, modern CSS3, and vanilla JavaScript—zero frameworks, zero build steps, zero external dependencies).

## 📁 Repository Structure

```text
├── index.html              # Main homepage & 4-build showcase grid
├── about.html              # About Me page with bio, portrait & technical skills
├── README.md               # Setup and deployment documentation
├── css/
│   └── style.css           # Minimalist dark theme stylesheet
├── js/
│   └── slideshow.js        # Vanilla JS slideshow (supports keyboard, touch swipe & dots)
├── images/                 # Image directory
│   ├── IMG_0101.jpg        # Profile photo of Caleb (About page)
│   │
│   │── Build 01: Caleb's White Contrast Airflow Rig (19 Photos)
│   ├── IMG_1002.jpg to IMG_1022.jpg (17 files)
│   ├── IDG_20260905_114104_401.jpg
│   ├── IDG_20260905_114121_201.jpg
│   │
│   │── Build 02: Josh's Panoramic AERO Rig (2 Photos)
│   ├── josh build.jpg
│   ├── josh build (2).jpg
│   │
│   │── Build 03: Hayley's White AIO Showcase (3 Photos)
│   ├── hayley.jpg
│   ├── hayley (2).jpg
│   ├── hayley (3).jpg
│   │
│   └── Build 04: Tyson's White Gaming Rig (2 Photos)
│       ├── tyson.jpg
│       └── tyson (2).jpg
└── builds/
    ├── build-1.html        # Build #01: White Contrast Airflow Rig (19-photo slideshow)
    ├── build-2.html        # Build #02: Josh's Panoramic AERO Rig (2-photo slideshow)
    ├── build-3.html        # Build #03: Hayley's White AIO Showcase (3-photo slideshow)
    └── build-4.html        # Build #04: Tyson's White Gaming Rig (2-photo slideshow)
```

---

## 🚀 How to Deploy to GitHub Pages (Step-by-Step)

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com).
2. Click the **+** icon in the top-right corner and select **New repository**.
3. Name your repository (e.g., `calebliddicoat.github.io` for your root domain, or `pc-builds` for `calebliddicoat.github.io/pc-builds`).
4. Set the repository to **Public**.
5. Leave "Add a README file" unchecked.
6. Click **Create repository**.

### Step 2: Add the Website Files & Images
1. Copy or extract these project files into your local repository folder.
2. Put all your photo files into the `images/` directory:
   - `IMG_0101.jpg` (profile portrait)
   - The 19 photos for Build #01
   - `josh build.jpg` and `josh build (2).jpg` for Build #02
   - `hayley.jpg`, `hayley (2).jpg`, and `hayley (3).jpg` for Build #03
   - `tyson.jpg` and `tyson (2).jpg` for Build #04

### Step 3: Commit and Push to GitHub
In your repository directory, run:

```bash
git init
git add .
git commit -m "Initial commit: Minimalist portfolio with all 4 custom PC builds"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)` folder, then click **Save**.
5. Your site will be published at `https://<username>.github.io/<repo>/` within 1–2 minutes.
