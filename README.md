# NBA Coordinator Pro

A professional, institutional-grade self-assessment dashboard designed for **NBA Accreditation (Tier-I)**. This tool helps NBA coordinators and departments evaluate their readiness through a structured, guideline-based assessment of the 10 standard criteria (equivalent to 1000 marks).

## 📊 Key Features

- **Total 1000 Marks Tracking**: Full coverage of Criteria 1 to 10.
- **Guideline-Level Evaluation**: Assessment is performed via precise checkboxes for each guideline, ensuring objective scoring.
- **Real-Time Analytics**: 
  - Dynamic score updates as you click.
  - Interactive performance bar charts.
  - Distribution pie charts for criteria-wise weightage.
  - Cumulative summary table for audit preparation.
- **Smart Accreditation Estimation**: Automatically calculates estimates for 6-year and 3-year accreditation based on percentage scores.
- **Offline Persistence**: Auto-saves your progress to the browser's `localStorage`.
- **Institutional UI**: Clean, professional aesthetic built with Tailwind CSS, Recharts, and Motion animations.

## 🛠️ Technical Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Visualization**: Recharts
- **Animations**: Motion (motion/react)
- **Icons**: Lucide React
- **Language**: TypeScript

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd nba-coordinator-pro
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 📐 Criteria Structure
...
Governance, Institutional Support and Financial Resources (145)

## 🚢 Deployment to GitHub Pages

I have pre-configured this project for a smooth GitHub Pages deployment:
1. **Relative Paths**: `vite.config.ts` is set to `base: './'`, so your assets will load correctly even in subfolders.
2. **Automatic Build**: A GitHub Action (`.github/workflows/deploy.yml`) is included. 
   - Simply push to the `main` branch.
   - Go to your GitHub Repository **Settings > Pages**.
   - Under **Build and deployment > Source**, select **"GitHub Actions"**.
   - Your site will deploy automatically!

## ⚖️ License

This project is built for educational and internal institutional assessment purposes.
