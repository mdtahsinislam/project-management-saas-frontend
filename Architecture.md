
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
# 🚀 Tech Stack

2. Frontend Technology
Layer,Live URL
Frontend,https://project-management-saas-frontend-one.vercel.app
Backend API,https://project-management-saas-eta.vercel.app/api/v1
Database,Prisma Postgres (pooled.db.prisma.io)
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


# 3. Role-Based Architecture
```
                    ┌─────────────┐
                    │   PUBLIC    │
                    │ Home, About │
                    │ Pricing,... │
                    └──────┬──────┘
                           │ Login / Register / Google
                           ▼
              ┌────────────┴────────────┐
              │                         │
     ┌────────▼────────┐     ┌──────────▼──────────┐
     │     ADMIN       │     │       OWNER         │
     │ /admin/*        │     │ /owner/*            │
     │ • Dashboard     │     │ • Organizations     │
     │ • Users         │     │ • Projects          │
     │ • Orgs/Projects │     │ • Tasks             │
     │ • Payments      │     │ • Profile           │
     │ • Audit Logs    │     └──────────┬──────────┘
     └─────────────────┘                │
                                        │ assigns tasks
                           ┌────────────▼────────────┐
                           │        MEMBER           │
                           │ /member/*               │
                           │ • My Tasks              │
                           │ • Profile               │
                           │ • Google login default  │
                           └─────────────────────────┘
```

## 🔐 Role-Based Access Control (RBAC)

<table>
  <thead>
    <tr>
      <th align="center">Role</th>
      <th align="left">Access Permissions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center"><strong>ADMIN</strong></td>
      <td>Full system access: Users, Organizations, Projects, Tasks, Payments, and Audit Logs</td>
    </tr>
    <tr>
      <td align="center"><strong>OWNER</strong></td>
      <td>Own Organizations → Projects → Tasks</td>
    </tr>
    <tr>
      <td align="center"><strong>MEMBER</strong></td>
      <td>Assigned Tasks, Comments, and Task Status Updates</td>
    </tr>
  </tbody>
</table>



# 🚀 Tech Stack & Deployment

## 2. Frontend Technology & Live URLs

<table>
  <thead>
    <tr>
      <th align="center">Layer</th>
      <th align="center">Technology / Service</th>
      <th align="center">Live URL / Details</th>
      <th align="center">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Frontend</strong></td>
      <td>
        <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
        <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
        <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
      </td>
      <td>
        <a href="https://project-management-saas-frontend-one.vercel.app" target="_blank">🌐 Visit Frontend</a>
      </td>
      <td><img src="https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel" alt="Vercel Deployment" /></td>
    </tr>
    <tr>
      <td><strong>Backend API</strong></td>
      <td>
        <img src="https://img.shields.io/badge/REST_API-009688?style=flat-square" alt="REST API" />
        <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js" />
      </td>
      <td>
        <a href="https://project-management-saas-eta.vercel.app/api/v1" target="_blank">⚙️ API Base URL</a>
      </td>
      <td><img src="https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel" alt="Vercel Deployment" /></td>
    </tr>
    <tr>
      <td><strong>Database</strong></td>
      <td>
        <img src="https://img.shields.io/badge/Prisma_Postgres-2D3748?style=flat-square&logo=prisma&logoColor=white" alt="Prisma Postgres" />
      </td>
      <td>Prisma Postgres — <code>pooled.db.prisma.io</code></td>
      <td><img src="https://img.shields.io/badge/Database-Configured-blue?style=flat-square" alt="Database" /></td>
    </tr>
  </tbody>
</table>

---

## 🔗 Quick Access

<table>
  <thead>
    <tr>
      <th>Service</th>
      <th>URL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>🌐 Live Frontend</td>
      <td><a href="https://project-management-saas-frontend-one.vercel.app">https://project-management-saas-frontend-one.vercel.app</a></td>
    </tr>
    <tr>
      <td>⚙️ Backend API</td>
      <td><a href="https://project-management-saas-eta.vercel.app/api/v1">https://project-management-saas-eta.vercel.app/api/v1</a></td>
    </tr>
    <tr>
      <td>🗄️ Database</td>
      <td>Prisma Postgres (pooled.db.prisma.io)</td>
    </tr>
  </tbody>
</table>

---

<p align="center">
  <strong>🚀 Project Management SaaS</strong><br/>
  Built with Next.js, TypeScript, and Prisma Postgres.
</p>



# 4. Backend Folder Structure

```
project-management-saas/                    # Backend
├── prisma/
│   ├── schema.prisma                       # All models + enums
│   └── seed.ts                             # Demo admin/owner/member
├── src/
│   ├── app/api/v1/
│   │   ├── auth/
│   │   │   ├── login/route.ts
│   │   │   ├── register/route.ts
│   │   │   ├── google/route.ts
│   │   │   ├── refresh/route.ts
│   │   │   ├── logout/route.ts
│   │   │   └── me/route.ts
│   │   ├── organizations/
│   │   │   ├── route.ts                    # GET list, POST create
│   │   │   └── [id]/route.ts               # GET, PATCH, DELETE
│   │   ├── projects/
│   │   │   ├── route.ts
│   │   │   └── [id]/route.ts
│   │   ├── tasks/
│   │   │   ├── route.ts
│   │   │   └── [id]/
│   │   │       ├── route.ts                # GET, PATCH, DELETE
│   │   │       ├── status/route.ts
│   │   │       ├── assign/route.ts
│   │   │       └── comments/route.ts
│   │   ├── payments/
│   │   │   ├── initiate/route.ts           # Stripe + bKash
│   │   │   ├── confirm-stripe/route.ts
│   │   │   ├── bkash/callback/route.ts
│   │   │   └── route.ts                    # list payments
│   │   ├── admin/
│   │   │   ├── dashboard/route.ts
│   │   │   ├── users/route.ts
│   │   │   └── audit-logs/route.ts
│   │   └── contact/route.ts
│   ├── lib/
│   │   ├── prisma.ts
│   │   ├── jwt.ts
│   │   ├── auth.ts                         # requireAuth, requireRole
│   │   ├── response.ts
│   │   ├── stripe.ts
│   │   ├── bkash.ts
│   │   ├── redis.ts                        # optional cache
│   │   └── rateLimit.ts
│   ├── validators/                         # Zod schemas
│   ├── services/
│   └── types/
├── .env
└── package.json

```
