
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

# 5. Frontend Folder Structure
```
project-management-saas-frontend/
├── src/
│   ├── app/
│   │   ├── page.tsx                        # Landing
│   │   ├── about/, contact/, features/, pricing/
│   │   ├── login/, register/
│   │   ├── payment/success/, payment/cancel/
│   │   ├── admin/
│   │   │   ├── page.tsx                    # Overview stats
│   │   │   ├── organizations/, projects/
│   │   │   ├── users/, payments/, reports/
│   │   │   └── profile/
│   │   ├── owner/
│   │   │   ├── page.tsx
│   │   │   ├── organizations/, projects/, tasks/
│   │   │   └── profile/
│   │   └── member/
│   │       ├── page.tsx
│   │       ├── tasks/, profile/
│   ├── components/
│   │   ├── layout/                         # Navbar, Footer, DashboardShell
│   │   ├── auth/                           # DemoLogin, GoogleLoginButton
│   │   ├── organizations/OrganizationList.tsx
│   │   ├── projects/ProjectList.tsx
│   │   └── tasks/TaskList.tsx, TaskComments.tsx
│   ├── lib/
│   │   ├── api.ts                          # Axios + all APIs
│   │   └── utils.ts                        # getRoleRedirect, cn
│   ├── store/authStore.ts                  # Zustand
│   └── validators/auth.schema.ts
├── .env
└── package.json
```

```
# 7. Auth Flow
Email/Password:
  Register/Login → bcrypt verify → signAccessToken + signRefreshToken
  → localStorage + Zustand → role redirect

Google:
  GIS button → idToken → POST /auth/google
  → verifyIdToken → findOrCreate User (role=MEMBER)
  → JWT → /member

Protected API:
  Authorization: Bearer <accessToken>
  401 → interceptor → POST /auth/refresh → retry
  requireRole(['ADMIN','OWNER']) for mutations

```

```
# 8. Payment Flow
STRIPE:
  Frontend pay() → POST /payments/initiate { method: STRIPE }
  → Stripe Checkout Session → redirect checkoutUrl
  → success_url → /payment/success → confirm-stripe → DB SUCCESS

BKASH:
  Frontend pay() → POST /payments/initiate { method: BKASH }
  → createBkashPayment(callbackURL=backend/callback)
  → response.bkashURL → window.location.href
  → User pays on bKash → callback → execute → DB SUCCESS
```



## 📡 API Endpoints Documentation

<table>
  <thead>
    <tr>
      <th align="center">Module</th>
      <th align="left">HTTP Methods</th>
      <th align="left">Endpoints</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>🔐 Auth</strong></td>
      <td>
        <code>POST</code><br/>
        <code>GET</code>
      </td>
      <td>
        <code>POST /auth/login</code><br/>
        <code>POST /auth/register</code><br/>
        <code>POST /auth/google</code><br/>
        <code>POST /auth/refresh</code><br/>
        <code>POST /auth/logout</code><br/>
        <code>GET /auth/me</code>
      </td>
    </tr>
    <tr>
      <td><strong>🏢 Organizations</strong></td>
      <td>
        <code>GET</code><br/>
        <code>POST</code><br/>
        <code>PATCH</code><br/>
        <code>DELETE</code>
      </td>
      <td>
        <code>GET /organizations</code><br/>
        <code>POST /organizations</code><br/>
        <code>GET /organizations/:id</code><br/>
        <code>PATCH /organizations/:id</code><br/>
        <code>DELETE /organizations/:id</code>
      </td>
    </tr>
    <tr>
      <td><strong>📁 Projects</strong></td>
      <td>
        <code>GET</code><br/>
        <code>POST</code><br/>
        <code>PATCH</code><br/>
        <code>DELETE</code>
      </td>
      <td>
        <code>GET /projects</code><br/>
        <code>POST /projects</code><br/>
        <code>GET /projects/:id</code><br/>
        <code>PATCH /projects/:id</code><br/>
        <code>DELETE /projects/:id</code>
      </td>
    </tr>
    <tr>
      <td><strong>✅ Tasks</strong></td>
      <td>
        <code>GET</code><br/>
        <code>POST</code><br/>
        <code>PATCH</code><br/>
        <code>DELETE</code>
      </td>
      <td>
        <code>GET /tasks</code><br/>
        <code>POST /tasks</code><br/>
        <code>PATCH /tasks/:id</code><br/>
        <code>DELETE /tasks/:id</code><br/>
        <code>PATCH /tasks/:id/status</code><br/>
        <code>PATCH /tasks/:id/assign</code><br/>
        <code>POST /tasks/:id/comments</code>
      </td>
    </tr>
    <tr>
      <td><strong>💳 Payments</strong></td>
      <td>
        <code>GET</code><br/>
        <code>POST</code>
      </td>
      <td>
        <code>POST /payments/initiate</code><br/>
        <code>GET /payments</code><br/>
        <code>POST /payments/confirm-stripe</code><br/>
        <code>GET /payments/bkash/callback</code>
      </td>
    </tr>
    <tr>
      <td><strong>🛡️ Admin</strong></td>
      <td>
        <code>GET</code>
      </td>
      <td>
        <code>GET /admin/dashboard</code><br/>
        <code>GET /admin/users</code><br/>
        <code>GET /admin/audit-logs</code>
      </td>
    </tr>
    <tr>
      <td><strong>📩 Contact</strong></td>
      <td>
        <code>POST</code>
      </td>
      <td>
        <code>POST /contact</code>
      </td>
    </tr>
  </tbody>
</table>

---

## 🌐 Base API URL

<p>
  <a href="https://project-management-saas-eta.vercel.app/api/v1">
    <img src="https://img.shields.io/badge/API-Production-blue?style=for-the-badge&logo=fastapi&logoColor=white" alt="Production API" />
  </a>
</p>

```text
https://project-management-saas-eta.vercel.app/api/v1
```

## 📝 API Request Examples

### Login

```http
POST /auth/login
Content-Type: application/json
```

### Get Organizations

```http
GET /organizations
Authorization: Bearer <token>
```

### Create Project

```http
POST /projects
Authorization: Bearer <token>
Content-Type: application/json
```

### Create Task

```http
POST /tasks
Authorization: Bearer <token>
Content-Type: application/json
```

---

<p align="center">
  <strong>🚀 Project Management SaaS API</strong><br/>
  <sub>Authentication · Organizations · Projects · Tasks · Payments · Admin</sub>
</p>
```

```
# 10. Request Lifecycle
Browser
  → Axios (Bearer token)
  → Vercel Frontend (optional SSR)
  → Vercel Backend API Route
  → requireAuth / requireRole
  → Zod validate
  → Prisma / Stripe / bKash
  → successResponse / errorResponse
  → React Query cache invalidate
  → UI update + toast
```

```
11. Deployment Architecture
┌─────────────────────────────────────────┐
│              Vercel                      │
│  ┌─────────────┐    ┌─────────────────┐ │
│  │  Frontend   │    │    Backend      │ │
│  │  project    │───►│    project      │ │
│  │  (static+   │    │    (API routes) │ │
│  │   SSR)      │    └────────┬────────┘ │
│  └─────────────┘             │          │
└──────────────────────────────┼──────────┘
                               │
                    Prisma Postgres (cloud)
                               │
              Stripe API  ·  bKash Sandbox  ·  Google OAuth
```

## 13. 🔑 Demo Credentials (Seed Data)

<table>
  <thead>
    <tr>
      <th align="center">Role</th>
      <th align="left">Email</th>
      <th align="left">Password</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center"><strong>🛡️ ADMIN</strong></td>
      <td><code>admin@demo.com</code></td>
      <td><code>Admin@123</code></td>
    </tr>
    <tr>
      <td align="center"><strong>👑 OWNER</strong></td>
      <td><code>owner@demo.com</code></td>
      <td><em>As configured in seed data</em></td>
    </tr>
    <tr>
      <td align="center"><strong>👤 MEMBER</strong></td>
      <td><code>member@demo.com</code></td>
      <td><em>As configured in seed data</em></td>
    </tr>
  </tbody>
</table>

> **⚠️ Note:** These credentials are intended for demo and testing purposes only. OWNER and MEMBER passwords depend on your database seed configuration. Do not use demo credentials in production.

```


