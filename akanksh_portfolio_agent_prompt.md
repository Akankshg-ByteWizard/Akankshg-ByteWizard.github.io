# 🔥 AGENT PROMPT: Build Akanksh Gatla's Neobrutalist Portfolio Website

---

## WHO YOU ARE BUILDING FOR

**Name:** Akanksh Gatla  
**Role:** Data Engineer / Software Developer  
**GitHub:** https://github.com/Akankshg-ByteWizard  
**LinkedIn:** https://www.linkedin.com/in/akanksh-gatla/  
**HackerRank:** https://www.hackerrank.com/gattla_akanksh  
**Education:** M.S. Computer Science & Engineering — University at Buffalo, New York  
**Background:** B.Tech CSE — Lovely Professional University, India  
**Resume:** https://drive.google.com/file/d/12a5CgFCURNS7PL7mmcLVvT-s5_vBa4oB/preview

---

## THE MISSION

Build a **single-file HTML+CSS portfolio** (no JavaScript, no frameworks, no build tools) that is genuinely unforgettable. The goal is NOT to copy harkunwar.com. Instead, use it as a **quality benchmark** and completely **surpass it** with a bold neobrutalist identity that screams DATA ENGINEER with personality and grit.

The website must be **100% pure HTML + CSS only** — prove that constraints breed creativity.

---

## DESIGN DIRECTION: NEOBRUTALIST DATA TERMINAL

### Core Aesthetic Identity
- **Vibe:** Bold neobrutalism meets data terminal — think RAW, LOUD, STRUCTURED  
- **Feel:** Like a hacker's dashboard designed by a brutalist architect  
- **NOT:** Soft gradients, floating cards, pastel SaaS-ware, or generic Bootstrap layouts

### Neobrutalism Design Rules (from neobrutalism.dev)
Apply these principles throughout every component:
1. **Hard black borders** — `2px–4px solid #000` on ALL interactive elements and cards  
2. **Box shadows** that look like physical offset: `4px 4px 0px #000` or `6px 6px 0px #000`  
3. **Flat, saturated colors** — no gradients, no transparency gimmicks. Use bold fills  
4. **On-hover translate effects** — elements "push down" on hover: `transform: translate(4px, 4px); box-shadow: none`  
5. **Typography with attitude** — mix weights aggressively: ultra-bold headings with clean body  
6. **Grid + offset layouts** — elements don't align "politely". Some things intentionally break the grid  
7. **High-contrast badges/tags** — bright yellow, orange, electric green on black backgrounds  

### Color Palette
```css
--nb-bg: #FFFBF0;           /* Warm off-white — the "page" */
--nb-black: #0A0A0A;        /* Near-black borders and text */
--nb-yellow: #FFE135;       /* Primary accent — signature neobrutalist yellow */
--nb-orange: #FF6B35;       /* Secondary accent — data/energy */
--nb-electric: #00FF88;     /* Data-green for metrics, success states */
--nb-blue: #0055FF;         /* Links, education, info */
--nb-red: #FF2D55;          /* Warnings, featured items */
--nb-white: #FFFFFF;        /* Pure white for cards/panels */
--nb-grid: #E8E0D0;         /* Subtle grid lines */
```

### Typography
```css
/* Primary: Space Mono or Courier Prime — monospace for the "terminal/data" feel */
/* Headings: Bebas Neue or Black Han Sans — ultra-bold for section titles */
/* Use Google Fonts CDN: */
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Bebas+Neue&family=DM+Sans:wght@400;500;700;900&display=swap');
```

---

## SECTIONS TO BUILD

### 1. 🔝 STICKY NAVBAR
- Left: `AG` logo badge — hard border, yellow fill, black text  
- Center: Nav links styled as **pill tags** with black borders — hover triggers the neobrutalist "push" effect  
- Right: GitHub, LinkedIn, HackerRank icons as brutalist icon buttons  
- Sticky, with a bottom border `3px solid #000` separating from content  
- On scroll: background becomes `var(--nb-yellow)` — unexpected and bold  

---

### 2. 🦁 HERO SECTION
This is the most important section. Make it UNFORGETTABLE.

**Layout:** Two-column — left text, right a bold "data terminal" visual  

**Left side content:**
```
> AKANKSH GATLA
━━━━━━━━━━━━━━━
Data Engineer | Software Developer
University at Buffalo, New York
```

Use a CSS-only typing animation for roles:  
→ `Data Engineer` → `Software Developer` → `ML Researcher` → `Pipeline Builder`  
(Pure CSS `@keyframes` with `steps()` + `width` animation)

**The personality line** (a data-engineer joke that shows character):
> "I turn raw data into insights and raw code into pipelines. Sometimes I even shower."

**CTA Buttons** (neobrutalist style):
- `[ SEE MY WORK → ]` — yellow fill, black border, shadow offset
- `[ GRAB MY RESUME ]` — white fill, black border — links to Google Drive

**Right side — "The Terminal Card":**
Create a fake terminal window (pure CSS) that "displays" Akanksh's stats:
```
┌─────────────────────────────────────┐
│ $ cat akanksh_profile.json          │
│                                     │
│ {                                   │
│   "experience": "4+ years",         │
│   "ms_degree": "UB New York",       │
│   "certifications": 9,              │
│   "projects": "6+",                 │
│   "publications": 1,                │
│   "coffee_consumed": "∞"            │
│ }                                   │
│                                     │
│ > ready to scale your data. ▋       │
└─────────────────────────────────────┘
```
Style this with `font-family: monospace`, green text on near-black background, box-shadow offset.  
The blinking cursor `▋` should blink using CSS `@keyframes`.

**Background of hero:**
A CSS-only dot grid pattern:
```css
background-image: radial-gradient(circle, var(--nb-black) 1px, transparent 1px);
background-size: 24px 24px;
background-color: var(--nb-bg);
```

---

### 3. 📰 NEWS / TIMELINE TICKER
Turn the News section into a **scrolling horizontal ticker** — pure CSS:
```css
@keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
```
Content inside the ticker (formatted as news items):
```
🗞 Jul '23 — Published at IREJT  ⚡  Feb '23 — Data Engineer @ Datalysys USA  ⚡  Dec '22 — MS @ UB  ⚡  Jan '20 — Data Engineer @ Unity Population Health  ...
```
Ticker bar: black background, yellow text, runs continuously.  
This goes BETWEEN hero and education — acts as a dramatic transition.

---

### 4. 🎓 EDUCATION SECTION
**Title:** `EDUCATION` — Bebas Neue, 5rem, black  

**Layout:** Two neobrutalist "cards" side by side  

Each card:
- Hard black border `3px solid #000`  
- Box shadow `6px 6px 0px #000`  
- On hover: `translate(6px, 6px)` + `box-shadow: none`  
- Top-left: a bold institution badge  

**University at Buffalo card:**
```
┌──────────────────────────────────┐
│ 🎓 UNIVERSITY AT BUFFALO         │
│ ─────────────────────────────── │
│ M.S. Computer Science Eng.       │
│ Dec '22 — Dec '23                │
│                                  │
│ [ ML ] [ Data Computing ]        │
│ [ Algorithms ] [ Programming ]   │
└──────────────────────────────────┘
```

**Lovely Professional University card:** Same treatment for B.Tech CSE.

Relevant courses as **yellow badge chips**: bold, small, with black border.

---

### 5. 💼 EXPERIENCE SECTION
**Title:** `EXPERIENCE` — same treatment  

**Layout:** A vertical timeline but NEOBRUTALIST style  
- The timeline line: `4px solid #000`, left-side  
- Timeline nodes: squares NOT circles — `20px × 20px`, yellow fill, black border  
- Cards: neobrutalist offset shadow, left-bordered with a `6px solid var(--nb-orange)` accent  

**Experiences to include:**

**Card 1 — Datalysys USA (Unity Population Health)**
```
Data Engineer
Feb '23 – Present | Buffalo, NY
──────────────────────────────────
• Designed and maintained ETL pipelines for population health data
• Worked with large-scale healthcare datasets
[ Python ] [ SQL ] [ ETL ] [ Healthcare Data ]
```

**Card 2 — Unity Population Health**
```
Data Engineer
Jan '20 – Dec '22 | Remote
──────────────────────────
• Promoted from Junior → Data Engineer
• Built data transformation workflows
[ SQL ] [ Python ] [ Data Pipelines ]
```

**Card 3 — The Spark Foundation**
```
Data Scientist Intern
Apr '19 – Jun '19
──────────────────────────────────
• Worked on ML models and data analysis
[ Python ] [ Machine Learning ] [ EDA ]
```

Tech tags as neobrutalist badges: bright fills, black borders.

---

### 6. 🚀 PROJECTS SECTION
**Title:** `PROJECTS` — Bebas Neue  
**Layout:** A 2-3 column CSS Grid with neobrutalist project cards  

**Styling rules for each card:**
- Hard black border `3px solid #000`, box-shadow `6px 6px 0px #000`  
- Top bar: colored with one of the accent colors (rotate per project)  
- Project title bold, date small and muted  
- Bullet points as key achievements  
- GitHub link button: `[ → GITHUB ]` — neobrutalist pill button  
- Hover: card "stamps down" with translate effect  

**Projects to include:**

1. **State Crime Analysis & Safety Prediction** (Nov 2023)  
   - R² = 94.8% Random Forest model  
   - Flask web app for real-time predictions  
   - Interactive visualizations  
   - [GitHub link](https://github.com/Akankshg-ByteWizard/UB-CSE-587-State-Crime-Analysis-and-Safety-Prediction)

2. **Wikipedia API Scraping + Solr** (Oct 2023)  
   - 500+ Wikipedia docs scraped  
   - Apache Solr schema optimization  
   - Google Cloud Platform deployment  
   - [GitHub link](https://github.com/Akankshg-ByteWizard/Wikipedia-Scraping-Using-API-with-Solr-Integration-on-Google-Cloud-Platform)

3. **Boolean Query & Inverted Index** (Aug 2023)  
   - Flask REST API for document retrieval  
   - DAAT approach + skip pointers  
   - NLTK preprocessing pipeline  
   - [GitHub link](https://github.com/Akankshg-ByteWizard/Boolean-Query-and-Inverted-Index)

4. **Global Super Store CRUD App** (Apr 2023)  
   - PostgreSQL with strategic indexing  
   - 20% improvement in access times  
   - Real-time data tracking  
   - [GitHub link](https://github.com/Akankshg-ByteWizard/UB-CSE-560-Superstore-Database-Management-System-DBMS-Project)

5. **8-bit Computer Architecture Processor** (Apr 2023)  
   - Verilog + Xilinx Vivado  
   - Full FPGA hardware synthesis  
   - [GitHub link](https://github.com/Akankshg-ByteWizard/UB-CSE-590-Design-of-an-8-bit-Processor-non-pipelined)

6. **Healthcare ML Application** (May 2022)  
   - 89% F1 Score Random Forest Classifier  
   - AWS EC2 deployment  
   - Tableau dashboard integration  
   - Led a team of 5  
   - [GitHub link](https://github.com/Akankshg-ByteWizard/LPU-Health-Care-Application)

---

### 7. ⚙️ TECHNICAL SKILLS SECTION
**Title:** `TECH STACK`  

Do NOT just dump logos in a row. Make this visually spectacular.  

**Layout idea: "The Skill Grid"**  
Group by category, each group in its own neobrutalist bordered box:

```
┌─────────────────────────────────────────────┐
│  PROGRAMMING LANGUAGES                       │
│  [ Python ] [ Java ] [ C++ ] [ R ]          │
│  [ JavaScript ] [ SQL ] [ LaTeX ]            │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│  BIG DATA & FRAMEWORKS                       │
│  [ Apache Spark ] [ Hadoop ] [ Flask ]       │
│  [ Django ]                                  │
└─────────────────────────────────────────────┘
```

Make each skill badge:
- Hard border `2px solid #000`  
- Alternating accent fills (yellow, orange, electric green, white)  
- Box shadow `3px 3px 0px #000`  
- Hover: stamp effect  

Also include devicons via CDN for visual tech logos alongside the text badges.  
Use: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css`

**Categories:**
- Programming: Python, Java, C++, R, JavaScript, LaTeX, SQL
- Big Data: Apache Spark, Hadoop
- Databases: PostgreSQL, MongoDB, MySQL, MS SQL Server, Azure
- Frameworks: Flask, Django, Apache Spark, Hadoop
- Cloud: Azure, AWS EC2
- ML/AI: Random Forest, Scikit-learn, TensorFlow, NLP (NLTK)
- Tools: Tableau, Git, Solr, Verilog, Xilinx Vivado

---

### 8. 🏆 CERTIFICATIONS SECTION
**Title:** `CERTIFICATIONS & ACHIEVEMENTS`  

**Layout:** A horizontal scrolling card shelf (CSS `overflow-x: auto`, `scroll-snap-type: x mandatory`)  
No JavaScript needed — pure CSS scroll-snap!

Each cert card:
- `200px × 260px` neobrutalist card  
- Hard border + shadow  
- Icon area at top (placeholder colored block if no image)  
- Cert name bold below  
- Clickable → opens cert URL in new tab  

**Certifications:**
1. Databricks Data Engineer Associate → [Link](https://credentials.databricks.com/03a74b47-5eec-40b2-be64-eda13c77dca2)
2. Azure Data Engineer Associate → [Link](https://learn.microsoft.com/api/credentials/share/en-us/AkankshGatla-4890/C39607EBBB34A020)
3. Databricks Generative AI Fundamentals → [Link](https://credentials.databricks.com/29322a2c-5a8f-4006-85a6-4d3cd364ea59)
4. Databricks Lakehouse Fundamentals → [Link](https://credentials.databricks.com/c96c3fec-a253-48eb-9c6d-564e0bf94c11)
5. Google Intro to Generative AI → [Link](https://www.cloudskillsboost.google/public_profiles/b37c12bc-8d2d-4b64-9fad-4659079e0b8c/badges/6767750)
6. Data Analysis with Python (Jovian) → [Link](https://jovian.com/certificate/MFQTSMBTHA)
7. HackerRank Python → [Link](https://www.hackerrank.com/certificates/47fc3480abb9)
8. HackerRank SQL → [Link](https://www.hackerrank.com/certificates/f27f044906d4)
9. Intro to Data Science (Analytics Vidhya) → [Link](https://courses.analyticsvidhya.com/certificates/bywxlo1yqg)

Also include:
- 📄 **Research Publication:** "Predictions And Analytics In Healthcare: Advancements In Machine Learning" — Published at IRJET, Jul '23 → [Paper](https://www.irjet.net/archives/V10/i7/IRJET-V10I734.pdf)

---

### 9. 📬 CONTACT SECTION
**Layout:** Two-column neobrutalist contact card (like harkunwar.com but rawer)

**Left panel:** Black background, yellow text  
```
LET'S BUILD SOMETHING.
───────────────────────
Open to Data Engineering 
and ML opportunities.

📍 Buffalo, New York
📧 gattla.akanksh@gmail.com

[ GitHub ]  [ LinkedIn ]  [ HackerRank ]
```

**Right panel:** White background with a working HTML form using `formsubmit.co`  
- Name, Email, Message fields  
- Submit button: neobrutalist style — yellow fill, bold text, hard border  
- All form fields: hard borders, no rounded corners  

**Pure CSS form:**  
No JS needed — use `action="https://formsubmit.co/YOUR_EMAIL"` for submission.

---

### 10. 🦶 FOOTER
Black background, full-width  
```
© 2024 AKANKSH GATLA  |  BUILT WITH PURE HTML + CSS  |  NO JS. NO FRAMEWORKS. JUST CRAFT.
[ GitHub ] [ LinkedIn ] [ HackerRank ] [ Back to Top ↑ ]
```

"Back to Top" is a pure CSS anchor scroll: `<a href="#top">`.

---

## CSS TRICKS TO IMPLEMENT (Pure CSS Magic)

### 1. CSS-Only Typing Animation for Hero Roles
```css
@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}
@keyframes blink {
  50% { border-color: transparent; }
}
.role {
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid var(--nb-black);
  animation: typing 2s steps(20) 0s 1 normal both, blink .75s step-end infinite;
}
```
For multiple cycling roles, use `animation-delay` on each `.role` span.

### 2. Neobrutalist "Stamp" Hover Effect
```css
.nb-card {
  border: 3px solid #000;
  box-shadow: 6px 6px 0px #000;
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}
.nb-card:hover {
  transform: translate(6px, 6px);
  box-shadow: none;
}
```

### 3. CSS-Only Horizontal Ticker
```css
@keyframes ticker-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.ticker-inner {
  display: flex;
  width: max-content;
  animation: ticker-scroll 30s linear infinite;
}
```
Duplicate the content inside `.ticker-inner` for seamless loop.

### 4. CSS Scroll Progress Bar
```css
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background: var(--nb-yellow);
  animation: scroll-track linear;
  animation-timeline: scroll();
  transform-origin: left;
}
@keyframes scroll-track {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
```

### 5. CSS-Only Horizontal Cert Scroll Snap
```css
.cert-shelf {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
  padding-bottom: 16px;
}
.cert-card {
  scroll-snap-align: start;
  flex: 0 0 200px;
}
```

### 6. Dot Grid Background (Hero)
```css
.hero {
  background-color: var(--nb-bg);
  background-image: radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px);
  background-size: 24px 24px;
}
```

### 7. Neobrutalist Section Titles
```css
.section-title {
  font-family: 'Bebas Neue', cursive;
  font-size: 5rem;
  background-color: var(--nb-yellow);
  display: inline-block;
  padding: 0 1rem;
  border: 3px solid #000;
  box-shadow: 5px 5px 0px #000;
  margin-bottom: 3rem;
}
```

### 8. Skills Badge Hover Pop
```css
.skill-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border: 2px solid #000;
  box-shadow: 3px 3px 0px #000;
  font-weight: 700;
  font-size: 0.85rem;
  transition: transform 0.1s, box-shadow 0.1s;
  cursor: default;
}
.skill-badge:hover {
  transform: translate(3px, 3px);
  box-shadow: none;
}
```

---

## TECHNICAL REQUIREMENTS

1. **Single HTML file** — everything inline: CSS in `<style>`, no external CSS files  
2. **Allowed CDN links (in `<head>` only):**
   - Google Fonts: for Bebas Neue, Space Mono, DM Sans  
   - DevIcons CDN: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css`  
   - Font Awesome (for GitHub/LinkedIn/HackerRank icons): `https://kit.fontawesome.com/...` OR use inline SVGs  
3. **No JavaScript** — zero. Not even inline `onclick`. No `<script>` tags  
4. **No CSS frameworks** — no Bootstrap, no Tailwind, no custom utility classes from external sources  
5. **Mobile responsive** — use CSS media queries for breakpoints at `768px` and `480px`  
6. **Semantic HTML** — use `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`, `<main>`  
7. **All navigation links** are anchor links (`href="#section-id"`) with smooth scroll via `scroll-behavior: smooth` on `:root`  
8. **Resume modal** — use CSS `:target` trick to open/close the Google Drive iframe without JS:
   ```html
   <a href="#resume-modal">Open Resume</a>
   <div id="resume-modal" class="modal">
     <a href="#" class="close-modal">✕</a>
     <iframe src="..."></iframe>
   </div>
   ```
   ```css
   .modal { display: none; }
   .modal:target { display: flex; }
   ```

---

## QUALITY CHECKLIST

Before finishing, ensure:
- [ ] Every card has the correct neobrutalist shadow + border
- [ ] Every hover effect uses the "stamp down" translate pattern
- [ ] The typing animation cycles all roles smoothly
- [ ] The news ticker scrolls infinitely without gaps
- [ ] The cert shelf is horizontally scrollable with scroll-snap
- [ ] The hero terminal card has blinking cursor
- [ ] The scroll progress bar works via CSS scroll-timeline
- [ ] Color palette is consistent throughout (use CSS variables)
- [ ] All GitHub links and cert URLs are live and correct
- [ ] Mobile layout collapses correctly at 768px
- [ ] Resume modal opens/closes with CSS `:target` only
- [ ] Footer "Back to Top" is a pure anchor link
- [ ] Section titles all use the yellow badge treatment

---

## THE FINISHING TOUCH

At the very bottom of the `<footer>`, include:
```html
<p class="built-line">Built with pure HTML + CSS — no JavaScript, no frameworks, just clean code.</p>
```
This is the signature line. A nod to harkunwar.com but belonging entirely to Akanksh Gatla.

---

## WHAT TO DELIVER

A single file: **`portfolio.html`**  
Self-contained, opening perfectly in any modern browser.  
Every section present. Every link working. Every animation running.  
**Make it the kind of portfolio that gets forwarded.**

---

*Prompt crafted with full analysis of existing portfolio (index.html), inspiration site (harkunwar.com), and neobrutalism.dev design system principles.*
