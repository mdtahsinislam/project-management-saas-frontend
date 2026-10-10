
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
