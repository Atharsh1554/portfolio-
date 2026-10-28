# Atharsh S — Premium Interactive Developer Portfolio

> **Live Website:** [https://atharsh1554.github.io/portfolio-/](https://atharsh1554.github.io/portfolio-/)  
> **GitHub Repository:** [https://github.com/Atharsh1554/portfolio-](https://github.com/Atharsh1554/portfolio-)

A high-performance personal developer portfolio and academic hub engineered for **Atharsh S**, a pre-final-year B.E. Computer Science and Engineering student at R.M.D. Engineering College (Anna University &bull; Joining Year 2024 &bull; Batch 2024–2028 &bull; Semesters 1–4 Completed &bull; Semester 5 Pursuing) with international certification in Business Studies from the University of Cambridge.

Designed for software engineering internship applications, placement drives, recruiter reviews, and professional networking.

---

## Key Features & Highlights

- **Visual Identity:** Sophisticated dark charcoal/deep navy theme (`#070a13`, `#0d1322`), tasteful electric-violet (`#8b5cf6`) and cyan (`#06b6d4`) accents, subtle glassmorphism, responsive typography (Inter &amp; Outfit), and smooth micro-animations.
- **Theme Toggle:** Persistent light and dark mode switcher with `localStorage` memory and OS-preference fallback.
- **Dynamic Typewriter Hero:** Cycling role titles ("Pre-Final Year CSE Student", "Software Developer", "Full Stack Engineer", "Cloud & Problem Solving Enthusiast") without layout shift.
- **Academic Records & Semester Dashboard:** Cumulative CGPA visualization (conic gradient ring), semester-by-semester SGPA/CGPA cards (Semesters 1 through 5), coursework breakdown, and marksheets tracker.
- **Built-in Document Viewer Modal:** In-browser modal viewer supporting PDFs and images with zoom controls (+ / - / reset), direct file downloads, keyboard accessibility (`Esc` to close), and informative fallback states for pending uploads.
- **Certifications Showcase:** Real-time search by keyword/skill/issuer, domain category filters (*Cloud &amp; OCI*, *Programming &amp; DSA*, *Python &amp; Data Science*, *Management &amp; General*), and date sorting.
- **Verified GitHub Projects:** Interactive cards for **BrokerHub** (Production Admin Platform), **ForenSight** (Multimodal AI Forensic Layout Generator), **Millet Market** (Farmer Procurement Marketplace), **Food Donation App**, **GROOMER**, and Portfolio.
- **Centralized Data Model (`data/portfolio-data.js`):** Add a semester, certification, or project by updating a single configuration file—zero manual HTML rewriting required.
- **Accessibility & SEO:** Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), Open Graph metadata, ARIA labels, focus-visible outlines, and reduced-motion support.

---

## Project Structure

```text
week4_project/
├── index.html                   # Flagship interactive portfolio page
├── about.html                   # Dedicated deep-dive journey & philosophy page
├── style.css                    # Unified CSS custom properties & design tokens
├── about.css                    # Supplementary styles for about.html
├── script.js                    # Interactive DOM engine, modals, search, theme switcher
├── favicon.svg                  # Sleek branded SVG favicon
├── profile.jpg.JPG              # Original high-res profile photo
│
├── data/
│   └── portfolio-data.js        # SINGLE SOURCE OF TRUTH: All academic records,
│                                # projects, certifications, skills, and links
│
└── assets/
    ├── documents/               # Place your official PDFs & marksheets here
    │   ├── README.md            # File placement guide & filename conventions
    │   ├── resume.pdf           # (Recommended resume PDF location)
    │   ├── marksheet_sem1.pdf   # (Semester 1 result)
    │   ├── marksheet_sem2.pdf   # (Semester 2 result)
    │   ├── marksheet_sem3.pdf   # (Semester 3 result)
    │   ├── marksheet_sem4.pdf   # (Semester 4 result)
    │   ├── marksheet_12th.pdf   # (Class XII result)
    │   ├── marksheet_10th.pdf   # (Class X result)
    │   └── ...                  # Certificates (Infosys, OCI, NPTEL, etc.)
    │
    └── images/                  # Project banners, SVGs, and visual assets
        ├── proj_groomer.svg     # GROOMER slot booking platform banner
        ├── proj_dataviz.svg     # Data Visualization dashboard banner
        └── proj_portfolio.svg   # Portfolio architecture banner
```

---

## Maintainer's Guide: How to Update Content

You never need to edit multiple sections of HTML to add credentials or update marks. Everything is driven by `data/portfolio-data.js`.

### 1. Updating CGPA and Semester Results
Open [`data/portfolio-data.js`](data/portfolio-data.js) and locate the `academics` section:
```javascript
academics: {
  cumulativeCGPA: "8.45",           // <-- Enter your updated CGPA here
  latestCompletedSemester: "Semester 3",
  completedSemestersCount: 3,

  semesters: [
    {
      semNumber: 4,
      title: "Semester 4",
      academicYear: "2024 – 2025 (Even)",
      sgpa: "8.60",                 // <-- Update when results are published
      cgpa: "8.50",
      status: "Completed",
      marksheetUrl: "assets/documents/marksheet_sem4.pdf",
      hasDocument: true,            // <-- Set to true once PDF is placed
      subjects: [ "Operating Systems", "Computer Networks", ... ]
    }
  ]
}
```

### 2. Adding a New Certification
In `data/portfolio-data.js`, add a new object to the `certifications` array:
```javascript
{
  id: "cert-aws-cloud",
  title: "AWS Certified Cloud Practitioner",
  issuer: "Amazon Web Services",
  issueDate: "2026",
  category: "cloud", // 'cloud' | 'programming' | 'datascience' | 'other'
  categoryLabel: "Cloud Computing & AWS",
  skills: ["Cloud Concepts", "AWS Security", "Billing & Architecture"],
  documentUrl: "assets/documents/cert_aws_ccp.pdf",
  hasDocument: true, // true if PDF is placed, false if pending
  verificationUrl: "https://aws.amazon.com/verification"
}
```

### 3. Adding Marksheets & Resume PDFs
Save your PDF files directly into the `assets/documents/` folder matching the filename configured in `portfolio-data.js`:
- **Resume:** `assets/documents/Atharsh_S_Resume.pdf`
- **Sem 1 Marksheet:** `assets/documents/marksheet_sem1.pdf`
- **Sem 2 Marksheet:** `assets/documents/marksheet_sem2.pdf`
- **Sem 3 Marksheet:** `assets/documents/marksheet_sem3.pdf`

*Note:* If a document has not yet been placed, the portfolio's built-in Document Viewer gracefully informs viewers that the record is official and the file is pending upload.

---

## Local Development & Testing

Run any lightweight local HTTP server from the repository root:

```bash
# Using Python
python -m http.server 8080

# Using Node.js (npx)
npx serve .
```

Open your browser to `http://localhost:8080` to preview the site.

---

## Deploying to GitHub Pages

Since all asset, script, and stylesheet paths are written with relative paths, the site works out-of-the-box on both custom domains and GitHub Pages subpaths (`/portfolio-/`):

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Upgrade portfolio into premium interactive recruiter showcase"
   ```
2. Push to your repository:
   ```bash
   git push origin main
   ```
3. In your GitHub repository settings under **Pages**:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `/ (root)`
4. Your site will be live at `https://atharsh1554.github.io/portfolio-/` within 1–2 minutes.

---

## License

Personal Developer Portfolio © 2026 Atharsh S.