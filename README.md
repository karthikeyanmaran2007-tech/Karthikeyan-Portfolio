# Karthikeyan M — Personal Portfolio

A minimalist, editorial personal portfolio website for **Karthikeyan M**, undergraduate in Artificial Intelligence and Machine Learning at R.M.D. Engineering College, Chennai.

Designed with inspiration from Linear, Vercel, and modern editorial developer portfolios.

---

## 🎨 Design System

- **Background**: `#0B0D11`
- **Secondary Background**: `#151922`
- **Primary Text**: `#EDEFF3`
- **Secondary Text**: `#9CA3AF`
- **Accent**: `#91ADFF`
- **Border**: `#272D39`
- **Typography**: Inter (Headings & Body), JetBrains Mono (Technical badges, numbers, code tags)

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Motion for React](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Project Structure

```text
├── public/
│   └── favicon.svg           # Minimalist KM. monogram favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky header with blurred backdrop & mobile drawer
│   │   ├── Hero.jsx           # Minimalist typography hero & CTA buttons
│   │   ├── About.jsx          # Editorial layout & verified background card
│   │   ├── FeaturedProject.jsx # Flagship project showcase & architecture modal
│   │   ├── Skills.jsx         # Categorized skill badges (no fake progress bars)
│   │   ├── Education.jsx      # Academic background timeline card
│   │   ├── Contact.jsx        # One-click copy email & mailto link
│   │   └── Footer.jsx         # Minimalist footer & back-to-top button
│   ├── data/
│   │   └── portfolio.js       # Central data model
│   ├── App.jsx               # Main page assembly
│   ├── index.css             # Tailwind CSS v4 setup and design tokens
│   └── main.jsx              # Application root
├── index.html                # SEO metadata and Google Fonts
├── vite.config.js            # Vite configuration with React & Tailwind plugins
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/karthikeyanmaran2007-tech/Karthikeyan-Portfolio.git
cd Karthikeyan-Portfolio
npm install
```

### Development Server

Run the development server locally:

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## ☁️ Deployment Guide

### Deploying to Vercel (Recommended)

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete portfolio build"
   git push origin main
   ```

2. Sign in to [Vercel](https://vercel.com/) with your GitHub account.

3. Click **"Add New..."** -> **"Project"**.

4. Select `Karthikeyan-Portfolio` from your GitHub repositories.

5. Vercel will automatically detect the configuration:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

6. Click **Deploy**. Your site will be live on an HTTPS `.vercel.app` domain in seconds!

---

## 📝 Configuring Social Links

To add your GitHub or LinkedIn URLs, open `src/data/portfolio.js` and update the `socialLinks` object:

```javascript
socialLinks: {
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
}
```

If left empty (`""`), the links are cleanly hidden so no broken URLs are displayed.

---

## 📄 License

This project is licensed under the MIT License.
