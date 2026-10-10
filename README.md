# ProjectFlow — Frontend (Assignment 7)

Connected to Assignment 6 Backend:
`https://project-management-saas-eta.vercel.app/api/v1`

## Roles
- ADMIN → `/admin`
- OWNER → `/owner`
- MEMBER → `/dashboard`

## Demo Login (One-Click on /login)
| Role | Email | Password |
|------|-------|----------|
| ADMIN | admin@demo.com | Admin@123 |
| OWNER | owner@demo.com | Owner@123 |
| MEMBER | member@demo.com | Member@123 |

## Payments
- Stripe (redirect to Checkout)
- bKash (sandbox redirect)

## Setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Deploy (Vercel)
```bash
vercel --prod
```

Environment variables on Vercel:
- NEXT_PUBLIC_API_BASE_URL
- NEXT_PUBLIC_APP_URL
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
- NEXT_PUBLIC_GOOGLE_CLIENT_ID

## 12 Steps
1. Setup Next.js + Tailwind
2. Env + API client
3. Auth store (Zustand)
4. Login + One-Click Demo
5. Middleware / route guards
6. Public pages
7. Admin dashboard
8. Owner dashboard
9. Member dashboard
10. Stripe + bKash payment UI
11. loading/error/empty states + URL filters
12. Deploy + video
