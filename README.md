# 🌐 B5A7 – My Portfolio Website

> Personal Portfolio Website built with NextJS, TypeScript, Tailwind CSS, Node.js, and ExpressJS.

---

## 🔹 Project Overview

This is a professional, responsive, and dynamic portfolio website. It showcases my skills, personal projects, blogs, and allows me (the portfolio owner) to manage content via a private dashboard.  

**Core Features:**

- **Authentication & Authorization:** Secure login system using JWT for owner-only access.
- **Dashboard:** Private dashboard to manage blogs and projects dynamically.
- **Blog Management:** Create, Read, Update, Delete (CRUD) blogs – Owner Only.
- **Project Showcase:** Dynamic list of personal projects with descriptions, live links, and features.
- **About Me Section:** Static personal information, work experience, and skills.
- **Responsive Design:** Fully mobile-friendly, modern UI with polished UX.
- **Notifications:** Success and error feedback using `react-hot-toast`.

---

## 🛠 Tech Stack

| Layer            | Technology/Library |
|-----------------|------------------|
| Frontend        | NextJS, TypeScript, Tailwind CSS, React |
| Backend         | Node.js, ExpressJS, Prisma (PostgreSQL) / MongoDB + Mongoose |
| Authentication  | JWT + bcrypt |
| Form Validation | React Hook Form + Zod |
| Animations/UI   | Framer Motion, Lucide Icons, Tailwind CSS |
| Notifications   | Sonner / react-hot-toast |

---

## 🌐 Public Pages

- **All Blogs:** ISR (Incremental Static Regeneration) for dynamic content updates.
- **Single Blog Pages:** SSG + ISR for dynamic generation.
- **About Me Section:** Static content for fast load times.
- **Projects Showcase:** Dynamic project list with thumbnails, live links, and features.

---

## 🔒 Private Pages (Owner Only)

- **Login:** JWT-based authentication with hashed passwords.
- **Dashboard:** Manage blogs and projects securely.
- **Blog & Project CRUD:** Add, edit, delete, and update content.
- **Admin Seed User:** Default credentials available for testing.

---

## ⚡ Bonus Features (Optional)

- Rich Text Editor for blog/project content using `React Quill`.
- Interactive UI with carousels, cards, and skeleton loaders.
- Lazy-loading of heavy assets for optimized performance.
- Accessibility-compliant components and semantic HTML.
- Strict form validation and API error handling with clear toast messages.

---

## 📦 Installation & Local Setup

Clone the frontend repository:

```bash
git clone https://github.com/yourusername/b5a7-portfolio-frontend.git
cd b5a7-portfolio-frontend

Install dependencies:

---
npm install

---

