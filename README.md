# Wearmerce Admin Dashboard

A comprehensive, full-stack Admin Dashboard for managing e-commerce stores, built with Next.js, React, Prisma, PostgreSQL, and Tailwind CSS.

## 🌟 Features In-Depth

This project comes packed with modern features and tools to provide a seamless administrative experience:

- **Next.js App Router**: Utilizing the latest Next.js features for server-side rendering, routing, and optimized performance.
- **Authentication**: Secure and robust authentication implemented with **Better Auth** (supporting Google, Facebook, and Email/Password). _(Note: Clerk variables are also included for alternative/legacy setups)._
- **Database Management**: Built on top of **PostgreSQL** (compatible with Supabase) and managed via **Prisma ORM** for fully type-safe database access and migrations.
- **Payment & Checkout**: Deep integration with **Stripe** to handle webhooks, transactions, and secure payments.
- **Image & Media Uploads**: Integrated with **Cloudinary** for scalable image hosting and management.
- **Modern User Interface**:
  - Styled with **Tailwind CSS**.
  - Accessible, customizable components using **Radix UI** and **Shadcn UI** patterns.
  - Complex data tables for managing products, categories, and orders using **TanStack React Table**.
  - Interactive analytics and charts via **Recharts**.
  - Beautiful toast notifications using **Sonner**.
- **Forms & Validation**: Form state and submission handled by **React Hook Form**, with strict schema validation using **Zod**.
- **State Management**: Global application state handled efficiently by **Zustand**.
- **Email Notifications**: Built-in support for sending emails (e.g., confirmations, alerts) using **Nodemailer**.

---

## 🚀 Installation Guide

Follow these steps to get the project up and running locally.

### Prerequisites

- Node.js (v18+)
- **Bun** (recommended, as `bun.lockb` is present) or npm/yarn/pnpm.
- A PostgreSQL database (e.g., Supabase, Neon, or local).

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd ecommerce-admin
```

### 2. Install Dependencies

Using Bun (Recommended):

```bash
bun install
```

Or using npm:

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory based on the configuration guide below and fill in your specific credentials.

### 4. Database Setup

Generate the Prisma client and push the schema to your database:

```bash
npx prisma generate
npx prisma db push
```

### 5. Run the Development Server

Start the Next.js development server:

```bash
bun run dev
# or: npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🔐 Environment Variables (.env)

Below is a detailed guide of all the required environment variables to run this project successfully. You must define these in your `.env` file.

### Frontend URL

URL for the frontend storefront that will interact with this admin panel.

```env
FRONTEND_STORE_URL=http://localhost:3001 # Your frontend store URL
```

### Stripe Configuration

Required for payment processing and webhook handling.

```env
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### Authentication (Better Auth) - Primary

Configuration for Better Auth and OAuth providers.

```env
BETTER_AUTH_SECRET=your_super_secret_string
BETTER_AUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Facebook OAuth
FACEBOOK_CLIENT_ID=your_facebook_client_id
FACEBOOK_CLIENT_SECRET=your_facebook_client_secret
```

### Authentication (Clerk) - Alternative/Legacy

If using Clerk for authentication, provide these keys.

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

### Media Uploads (Cloudinary)

Required for product image uploads.

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
```

### Database Configuration (PostgreSQL/Supabase)

Prisma requires connection strings to your PostgreSQL database. If using Supabase or a pooler, separate the transaction and session connections.

```env
# Transaction connection pooler string (used by Prisma Client)
DATABASE_URL="postgresql://user:password@host:6543/postgres?pgbouncer=true&connection_limit=1"

# Session connection pooler string (used for direct migrations)
DIRECT_URL="postgresql://user:password@host:5432/postgres"
```

### Email Notifications (Nodemailer)

Credentials for sending outgoing emails.

```env
NODEMAILER_USER="your_email@gmail.com"
NODEMAILER_APP_PASSWORD="your_app_password" # Use App Passwords for Gmail
```
