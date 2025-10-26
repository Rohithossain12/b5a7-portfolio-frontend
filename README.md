
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

## 📦 Installation & Local Setup

Clone the frontend repository:

```bash
git clone https://github.com/Rohithossain12/b5a7-portfolio-frontend.git
cd b5a7-portfolio-frontend
````

Install dependencies:

```bash
npm install
```

Create `.env.local` if you want custom environment variables (optional):

```env
NEXT_PUBLIC_BASE_API=http://localhost:3005/api/v1
AUTH_SECRET=AwIL8qRZPL3jUQa2vz2jI
```

Run the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

> ⚠️ Note: If you don’t provide a `.env.local`, default variables will be used for local development.

---

## 🌐 Live Deployment

Live URL: `https://your-live-portfolio-url.com` *(replace with actual URL later)*

---

