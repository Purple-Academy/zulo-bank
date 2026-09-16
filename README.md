# Zulo Bank

A modern full-stack online banking web application built as part of our college coursework. Zulo Bank simulates core banking operations including account management, transaction tracking, and interactive financial dashboards.

**Live Application:** [zulo-bank.vercel.app](https://zulo-bank.vercel.app)

---

## Overview

Zulo Bank provides a realistic simulation of a digital banking system. The project demonstrates state management, secure workflow handling, and responsive UI design designed for real-world scenarios.

### Key Features

* **Account Dashboard:** View account balances, recent transaction history, and account status in real-time.
* **Money Transfers:** Transfer funds between registered internal accounts or external simulated accounts.
* **Transaction History & Analytics:** Filter, search, and view detailed logs of income and expenses.
* **Security & Auth:** Protected routing and role-aware UI elements for account actions.
* **Responsive Design:** Optimized experience across mobile, tablet, and desktop viewports.

---

## Tech Stack

* **Frontend:** ReactJS, Tailwind CSS, TS
* **Deployment & Hosting:** Vercel

## Branch Strategy

This repo uses three long-lived branches:

| Branch        | Purpose                                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `development` | Active work happens here. All feature branches merge into `development` first. Things can be a bit unstable - that's expected. |
| `main`        | Stable, reviewed, tested code. Only updated from `development` once things are working. Protected - see below.                 |

### Everyday flow

```

feature-<branch_name> => development => main
```

You should almost never work directly on `main` or `production`. Nearly all day-to-day work happens on short-lived feature branches, which get merged into `development`.

## Branch Protection

The `main` branch is protected:

- Direct pushes are **blocked** for everyone, including admins.
- All changes must go through a **Pull Request(PR)**.
- At least **1 approval** from a Code owner (`@DatoKhojava`, `@GiorgiGochitidze`, or `@Giorgi014`) is required before merging.
- New commits pushed after approval **dismiss the previous approval** - it has to be re-reviewed.
- Force pushes and branch deletion are blocked(`main`, `development`, and `production`).

If you try to `git push origin main` directly, Github will reject it. This is intentional.

## Workflow for Contributors

1. **Start from `development`, not `main`:**

```bash
    git checkout development
    git pull origin development
    git checkout -b feature/short-description
```

2. **Make your changes, commit as you go:**

```bash
    git add .
    git commit -m "feat: add short description of what changed"
```

3. **Push your branch:**

```bash
    git push origin feature/short-description
```

4. **Open a Pull Request into `development`** on GitHub.
   - Give it a clear title and description.
   - Link any realted issue if applicable.

5. **Get it reviewed and merged.**
   - Once approved, merge via the GitHub UI (not locally).
   - Delete the feature branch after merging.

6. **Promoting `development` => `main`:**
   - Once `development` is stable and tested, open PR from `development` into `main`.
   - Requires approval from a Code Owner.
   - Only merge into `main` when the team agrees the code is ready.

7. **Promoting `main` => `production`:**
   - Done manually, only when the team intends to "release."
   - Not part of the regular day-to-day cycle.

## Commit Message Convention

Keep commit messages short and descriptive. Prefix with a type where possible:

- `feat:` - new feature or file.
- `fix:` - bug fix.
- `update:` - change to existing functionality.
- `refactor:` - code change with no functional difference.
- `docs:` - documentation only.

Example: `fix: incorrect balance calculation on transfer`

## Pull Request Rules

- No PR merges into `main` without at least 1 Code owner approval.
- Keep PRs focused - one feature or fix per PR where possible.
- Write short description of *what* changed and *why*.
- Resolve merge conflicts locally before requesting review.

## Getting Help

If you're stuck or a push gets rejected due to branch rules, don't force it - open PR instead, or ask in the team chat.