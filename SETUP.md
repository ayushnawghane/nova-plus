# Nova Plus — Setup & Install

Laravel + Inertia (React) app with a public marketing site, a Blog feature, and an
admin panel with role-based access control. Single project, single database.

## Requirements

- PHP 8.2+
- Composer
- Node.js 18+ (or Bun)

## Install

```bash
composer install
bun install        # or: npm install

cp .env.example .env
php artisan key:generate

php artisan migrate --seed
php artisan storage:link
```

`migrate --seed` creates the `roles` and `blogs` tables and seeds one **Admin**
role (full permissions) plus a default admin user:

```
email:    admin@novaplus.sg
password: NovaPlus@2026
```

Change this password after first login (Admin panel → Users).

## Run (development)

```bash
composer run dev
```

This starts `php artisan serve`, the queue listener, log tailing (`pail`), and the
Vite dev server together. Visit:

- **Public site:** `http://localhost:8000`
- **Blog:** `http://localhost:8000/blog`
- **Admin login:** `http://localhost:8000/admin/login`

## Build (production)

```bash
bun run build       # or: npm run build
```

Compiled assets are output to `public/build`. Make sure `php artisan storage:link`
has been run on the server so uploaded blog images are reachable at `/storage/...`.

## What's included

- **Blogs** — full CRUD in the admin panel (rich text editor, featured image
  upload, category, featured/published toggles), with a public listing page at
  `/blog` and article page at `/blog/{slug}`.
- **Roles & permissions** — `roles` table with a JSON `permissions` array
  (`blogs.view`, `blogs.create`, `blogs.edit`, `blogs.delete`, `roles.manage`,
  `users.manage`). Admin panel routes are gated per-permission via the
  `permission:` middleware (`app/Http/Middleware/EnsurePermission.php`).
  Add more roles (e.g. "Editor") from Admin panel → Roles.
- **Users** — manage admin panel accounts and their assigned role from
  Admin panel → Users.

## Notes

- Database is SQLite by default (`database/database.sqlite`); swap `DB_*` in
  `.env` for MySQL/Postgres if needed — no code changes required.
- Uploaded images are stored on the `public` disk (`storage/app/public`),
  served via the `public/storage` symlink created by `storage:link`.
