
# ProjectFlow — Full Project Architecture

```
# 1. High-Level Overview
┌─────────────────────┐         HTTPS / JWT          ┌──────────────────────────┐
│  Frontend (A7)      │ ───────────────────────────► │  Backend API (A6)        │
│  Next.js + React    │ ◄─────────────────────────── │  Next.js App Router      │
│  Vercel             │      JSON responses          │  Vercel                  │
└─────────────────────┘                              └────────────┬─────────────┘
                                                                  │
                         ┌────────────────────────────────────────┼────────────────┐
                         │                                        │                │
                         ▼                                        ▼                ▼
                  ┌──────────────┐                         ┌────────────┐   ┌────────────┐
                  │  PostgreSQL  │                         │   Stripe   │   │   bKash    │
                  │  (Prisma)    │                         │  (Checkout)│   │  (Sandbox) │
                  └──────────────┘                         └────────────┘   └────────────┘
                         ▲
                         │
                  ┌──────────────┐
                  │ Google OAuth │
                  │  (GIS + JWT) │
                  └──────────────┘


```

```
Layer,Live URL
Frontend,https://project-management-saas-frontend-one.vercel.app
Backend API,https://project-management-saas-eta.vercel.app/api/v1
Database,Prisma Postgres (pooled.db.prisma.io)
```

```
<p align="center">
  <img src="https://img.shields.io/badge/Next.js_14%2B-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" alt="TanStack React Query" />
  <img src="https://img.shields.io/badge/Zustand-443E38?style=for-the-badge" alt="Zustand" />
  <img src="https://img.shields.io/badge/Axios-671DDF?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
  <img src="https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white" alt="React Hook Form" />
  <img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge" alt="Zod" />
  <img src="https://img.shields.io/badge/Sonner-000000?style=for-the-badge" alt="Sonner" />
  <img src="https://img.shields.io/badge/Google_Identity_Services-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Google Identity Services" />
</p>
```
