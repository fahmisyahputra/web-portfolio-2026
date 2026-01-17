# Portfolio 2026 - Fahmi Syahputra

A high-performance, minimalist portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Designed with a strict "Apple-style" light aesthetic and fluid animations.

![Portfolio Preview](public/images/preview.png)

## ✨ Features

- **Strict Light Mode**: Clean, high-contrast design with a white/gray palette.
- **Dynamic Hero**: Custom typewriter effect and interactive abstract 3D visuals.
- **Experience Cards**: Wide-layout cards with hover lift effects and tech stack badges.
- **Micro-interactions**: Subtle animations using `framer-motion` for a premium feel.
- **Responsive**: Fully optimized for mobile, tablet, and desktop.

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Vercel (Recommended)

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/fahmisyahputra/web-portfolio-2026.git
    cd web-portfolio-2026
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
├── app/                  # Next.js App Router pages
├── components/           # Reusable UI components
│   ├── Hero.tsx          # Landing page hero with typewriter
│   ├── ExperienceCard.tsx# Wide layout project cards
│   ├── ContactSection.tsx# Contact info and social links
│   └── ...
├── lib/                  # Data and utility functions
│   └── data.ts           # content for experiences and profile
├── public/               # Static assets
└── ...
```

## 🎨 Customizing

To update the content (Name, Role, Experiences, Contacts), simply edit the **`lib/data.ts`** file. The site is built to be data-driven.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
