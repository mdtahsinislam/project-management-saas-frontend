**Bug Report — Project Management SaaS (ProjectFlow)**  
Google Docs-এ কপি-পেস্ট করার জন্য ready।

---

# Bug Report Document  
**Project:** ProjectFlow — Project Management SaaS  
**Student:** MD. Tahsin Islam  
**Live Frontend:** https://project-management-saas-frontend-one.vercel.app/  
**Live Backend:** https://project-management-saas-eta.vercel.app/  
**Date:** October 2026  

---

## 1. Project Overview

| Item | Details |
|------|---------|
| Stack | Next.js, TypeScript, Prisma, PostgreSQL, JWT, Stripe, bKash, Google OAuth |
| Roles | ADMIN, OWNER, MEMBER |
| Frontend | Next.js App Router + React Query + Zustand |
| Backend | Next.js API Routes + Prisma |
| Deploy | Vercel (Frontend + Backend) |

---

## 2. Bug Summary Table

| # | Bug Title | Severity | Status |
|---|-----------|----------|--------|
| 1 | Prisma CLI commands not recognized | High | Fixed |
| 2 | JWT `expiresIn` TypeScript error | High | Fixed |
| 3 | Zod `.errors` property missing (Zod v4) | Critical | Fixed |
| 4 | Stripe API version mismatch | High | Fixed |
| 5 | Next.js dynamic `params` not awaited | Medium | Fixed |
| 6 | Admin dashboard counts always 0 | High | Fixed |
| 7 | Browser `confirm()` instead of toast | Low | Fixed |
| 8 | Google OAuth `origin_mismatch` | High | Fixed |
| 9 | Google OAuth domain limit exceeded | Medium | Fixed |
| 10 | bKash works on localhost, fails on live | High | Fixed |
| 11 | React hydration mismatch (`fdprocessedid`) | Low | Documented |
| 12 | Vercel build fail / missing env | Critical | Fixed |
| 13 | Project create validation fail (`teamId`) | Medium | Fixed |
| 14 | Login API connection timeout (frontend) | High | Fixed |
| 15 | PowerShell `mkdir -p` invalid syntax | Low | Fixed |

---

## 3. Detailed Bug Reports

### Bug #1 — Prisma CLI Commands Not Working

**Severity:** High  
**Environment:** Local (Windows + VS Code)  

**Description:**  
`npx prisma format`, `validate`, `db push`, `migrate` failed with “No command registered”.

**Root Cause:**  
Incorrect / incomplete Prisma package installation; CLI not linked properly.

**Steps to Reproduce:**  
1. Run `npx prisma db push`  
2. Error: unknown command  

**Fix:**  
```bash
npm uninstall prisma @prisma/client
npm install prisma@5.22.0 @prisma/client@5.22.0
npx prisma generate
npx prisma db push
```

**Status:** Fixed  

---

### Bug #2 — JWT `expiresIn` TypeScript Error

**Severity:** High  
**File:** `src/lib/jwt.ts`  

**Description:**  
`jwt.sign(..., { expiresIn })` failed type-check; `string` not assignable to expected type.

**Root Cause:**  
`jsonwebtoken` types expect `StringValue | number`; env values needed proper typing/cast.

**Fix:**  
```ts
const ACCESS_EXPIRES = process.env.JWT_ACCESS_EXPIRES_IN || "15m";
return jwt.sign(payload, ACCESS_SECRET, {
  expiresIn: ACCESS_EXPIRES as string | number,
});
```

**Status:** Fixed  

---

### Bug #3 — Zod Validation `.errors` Does Not Exist (Build Breaker)

**Severity:** Critical  
**Files:** Multiple API routes (`auth`, `organizations`, `projects`, `tasks`, `payments`)  

**Description:**  
Vercel build failed:  
`Property 'errors' does not exist on type 'ZodError<...>'`

**Root Cause:**  
Zod v4 uses `.issues` instead of `.errors`.

**Steps to Reproduce:**  
1. `npm run build`  
2. Type-check fails on `parsed.error.errors`

**Fix:**  
```ts
// Before
return errorResponse("Validation failed", 400, parsed.error.errors);

// After
return errorResponse("Validation failed", 400, parsed.error.issues);
```

Applied across all routes.

**Status:** Fixed — production build succeeded  

---

### Bug #4 — Stripe API Version Mismatch

**Severity:** High  
**File:** `src/lib/stripe.ts`  

**Description:**  
```text
Type '"2024-11-20.acacia"' is not assignable to type '"2026-08-26.dahlia"'
```

**Root Cause:**  
Installed Stripe SDK version required a newer API version string.

**Fix:**  
```ts
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-08-26.dahlia",
});
```

**Status:** Fixed  

---

### Bug #5 — Next.js Dynamic Route `params` Not Awaited

**Severity:** Medium  
**Files:** `tasks/[id]/route.ts`, `organizations/[id]/route.ts`, etc.  

**Description:**  
Runtime / type issues accessing `params.id` in App Router handlers.

**Root Cause:**  
Newer Next.js treats `params` as a `Promise`.

**Fix:**  
```ts
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  // ...
}
```

**Status:** Fixed  

---

### Bug #6 — Admin Dashboard All Counts Show 0

**Severity:** High  
**File:** `src/app/admin/page.tsx`  

**Description:**  
Admin overview showed Total Users / Organizations / Projects / Tasks as 0 even though data existed in sub-pages.

**Root Cause:**  
Frontend expected keys like `totalUsers`; backend returned different key names.

**Fix:**  
Defensive key fallbacks:

```ts
const totals = {
  totalUsers: Number(
    data.totalUsers ?? data.usersCount ?? data.users ?? 0
  ),
  totalOrganizations: Number(
    data.totalOrganizations ?? data.organizationsCount ?? data.organizations ?? 0
  ),
  // ... same for projects & tasks
};
```

Also verified backend `/admin/dashboard` aggregates with `Promise.all` + Prisma counts.

**Status:** Fixed  

---

### Bug #7 — Browser Native `confirm()` for Delete

**Severity:** Low (UX)  
**Files:**  
- `OrganizationList.tsx`  
- `ProjectList.tsx`  
- `TaskList.tsx`  

**Description:**  
Delete used `window.confirm()` → ugly “localhost says” dialog.

**Fix:**  
Replaced with Sonner toast confirm:

```ts
toast(`Delete "${name}"?`, {
  description: "This will soft-delete the item.",
  action: {
    label: "Confirm",
    onClick: () => deleteMutation.mutate(id),
  },
  cancel: { label: "Cancel", onClick: () => {} },
  duration: 8000,
});
```

**Status:** Fixed  

---

### Bug #8 — Google OAuth `Error 400: origin_mismatch`

**Severity:** High  

**Description:**  
Google login failed on `localhost:3001` and later on live frontend URL.

**Root Cause:**  
Authorized JavaScript origins did not include the exact frontend origin/port.

**Fix:**  
Google Cloud Console → OAuth Client:

**Origins:**
```text
http://localhost:3000
http://localhost:3001
https://project-management-saas-frontend-one.vercel.app
```

**Redirect URIs:**
```text
http://localhost:3001
https://project-management-saas-frontend-one.vercel.app
https://project-management-saas-frontend-one.vercel.app/login
```

**Status:** Fixed  

---

### Bug #9 — Google OAuth “Domain limit exceeded”

**Severity:** Medium  

**Description:**  
Save blocked: exceeded 10 unverified authorized domains.

**Root Cause:**  
Too many domains accumulated on OAuth consent screen + client.

**Fix:**  
- Removed unused domains from Consent Screen  
- Kept only required frontend origins/redirects  
- Backend URL not required for GIS button flow  

**Status:** Fixed  

---

### Bug #10 — bKash Works on Localhost, Not on Live

**Severity:** High  
**Files:**  
- `payments/initiate/route.ts`  
- `pricing/page.tsx`  
- Backend Vercel env  

**Description:**  
Toast “Payment initiated” appeared on live, but no redirect to bKash payment page. Stripe worked.

**Root Cause:**  
1. Backend Vercel missing/wrong `FRONTEND_URL` / `BACKEND_URL` / `BKASH_*`  
2. Callback URL must use live `BACKEND_URL`  

**Fix:**  
Backend env (Vercel):
```env
FRONTEND_URL=https://project-management-saas-frontend-one.vercel.app
BACKEND_URL=https://project-management-saas-eta.vercel.app
# + all BKASH_* credentials
```

Initiate route already returns `bkashURL`; frontend:

```ts
if (method === "BKASH" && data.bkashURL) {
  window.location.href = data.bkashURL;
}
```

Redeploy backend after env update.

**Status:** Fixed (after env + redeploy)  

---

### Bug #11 — React Hydration Mismatch

**Severity:** Low  

**Description:**  
Console warning about server/client HTML mismatch; attributes like `fdprocessedid`.

**Root Cause:**  
Browser extensions (password managers, form fillers) inject attributes before hydration — not app code.

**Mitigation:**  
- Test in Incognito  
- Optional `suppressHydrationWarning` on form inputs  
- Does not break functionality  

**Status:** Documented / Non-blocking  

---

### Bug #12 — Vercel Deployment Build Failure

**Severity:** Critical  

**Description:**  
`Error: Command "npm run build" exited with 1` due to TypeScript (Zod + Stripe).

**Fix:**  
- Zod `.issues` fix  
- Stripe API version fix  
- All required env variables set in Vercel Dashboard  
- `vercel --prod` after env  

**Status:** Fixed — both apps live  

---

### Bug #13 — Project Create Validation Failed (`teamId`)

**Severity:** Medium  
**File:** `project.validator.ts` + Project create form  

**Description:**  
Creating project failed when optional team field was empty or non-cuid value.

**Root Cause:**  
`teamId: z.string().cuid().optional()` rejected empty string; form sometimes sent invalid value.

**Fix:**  
- Make `teamId` truly optional / omit when empty  
- Frontend: do not send `teamId` if blank  
- Validator accepts `undefined` only  

**Status:** Fixed  

---

### Bug #14 — Frontend Login `ERR_CONNECTION_TIMED_OUT`

**Severity:** High  

**Description:**  
Login from frontend timed out to backend API.

**Root Cause:**  
Wrong/missing `NEXT_PUBLIC_API_BASE_URL` or backend Deployment Protection / cold start.

**Fix:**  
```env
NEXT_PUBLIC_API_BASE_URL=https://project-management-saas-eta.vercel.app/api/v1
```
Disable Vercel Authentication on backend if needed; verify Postman still works.

**Status:** Fixed  

---

### Bug #15 — PowerShell `mkdir -p` Invalid

**Severity:** Low  

**Description:**  
`mkdir -p src/lib src/validators ...` failed on Windows PowerShell.

**Root Cause:**  
`-p` is Unix/bash syntax.

**Fix:**  
```powershell
New-Item -ItemType Directory -Force -Path src/lib, src/validators, src/services, ...
```
Or create folders from VS Code explorer.

**Status:** Fixed  

---

## 4. Testing Evidence (Post-Fix)

| Feature | Result |
|---------|--------|
| Email/password login (Admin/Owner/Member) | Pass |
| Google login (MEMBER) | Pass (after origins) |
| Organization CRUD + soft delete | Pass |
| Project CRUD + filters | Pass |
| Task CRUD, status, comments | Pass |
| Admin dashboard stats | Pass (non-zero) |
| Audit logs | Pass |
| Stripe payment | Pass |
| bKash payment (sandbox) | Pass on local; live after env |
| Contact form → DB | Pass |
| Responsive Navbar | Pass |
| Password show/hide | Pass |
| Toast delete confirm | Pass |

---

## 5. Lessons Learned

1. **Zod major versions** break APIs (`.errors` → `.issues`) — always check changelog before upgrade.  
2. **Vercel env ≠ local `.env`** — every secret must be set in Dashboard and redeployed.  
3. **Google OAuth** needs exact origin match; domain limits apply in testing mode.  
4. **Payment callbacks** must use production `BACKEND_URL` / `FRONTEND_URL`.  
5. **Admin UI** should tolerate flexible API response shapes with fallbacks.  
6. **UX:** Prefer in-app toasts over `window.confirm`.  

---

## 6. Submission Links

| Item | Link |
|------|------|
| Live Frontend | https://project-management-saas-frontend-one.vercel.app/ |
| Live Backend | https://project-management-saas-eta.vercel.app/ |
| Frontend Repo | *(your GitHub frontend repo URL)* |
| Backend Repo | *(your GitHub backend repo URL)* |
| Bug Report (this doc) | *(this Google Docs link after you upload)* |
| Problem-solving Repo | *(if required for Part 2)* |

---

## 7. Conclusion

All critical and high-severity bugs found during development and deployment of ProjectFlow were reproduced, documented, and resolved. The application is deployed and functional with role-based access, full CRUD for organizations/projects/tasks, dual payment methods (Stripe + bKash), Google OAuth, and admin tooling.

---

**Google Docs বানানোর ধাপ**

1. [docs.google.com](https://docs.google.com) → Blank document  
2. উপরের পুরো লেখা **Copy → Paste**  
3. Title: `Bug Report - ProjectFlow - MD. Tahsin Islam`  
4. Share → Anyone with the link (Viewer)  
5. Link কপি করে Assignment submission-এ দিন  

Repo link এখনো না থাকলে GitHub-এ push করে সেই URL টেবিলে বসিয়ে নিন।
