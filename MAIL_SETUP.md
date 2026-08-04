# Contact Form — Mail Setup

The "Get In Touch" form on `/contact-us` (and the `GetInTouch` component used
there) saves every enquiry to the database and emails it to your sales inbox.

## How it works

1. Visitor submits the form → `ContactController@store` validates the input
   and creates an `Enquiry` record (`app/Models/Enquiry.php`).
2. A `App\Mail\ContactEnquiry` mailable is queued (`ShouldQueue`) and sent to
   the address configured in `CONTACT_EMAIL`, using the template at
   `resources/views/emails/contact.blade.php`.
3. Because the mail is queued, `composer run dev` must be running (it starts
   `php artisan queue:listen` alongside the server) — otherwise queue a
   worker separately: `php artisan queue:work`.

## Environment variables

Add/edit these in `.env`:

```bash
# Standard Laravel mail transport — pick one:

# Local/dev (default): writes emails to storage/logs/laravel.log instead of sending
MAIL_MAILER=log

# Real SMTP (e.g. Gmail, SES, Mailgun, your company mail server)
MAIL_MAILER=smtp
MAIL_HOST=smtp.yourprovider.com
MAIL_PORT=587
MAIL_USERNAME=your-smtp-username
MAIL_PASSWORD=your-smtp-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="no-reply@novaplus.sg"
MAIL_FROM_NAME="${APP_NAME}"

# Inbox that RECEIVES contact-form enquiries (can differ from MAIL_FROM_ADDRESS)
CONTACT_EMAIL="sales@novaplus.sg"
```

After changing `.env`, clear the cached config:

```bash
php artisan config:clear
```

## Verifying it works

1. Run `composer run dev` (starts the queue listener too).
2. Submit the form on `/contact-us`.
3. Check the result:
   - With `MAIL_MAILER=log` → open `storage/logs/laravel.log` and look for the
     "Nova Plus Enquiry: ..." subject line.
   - With real SMTP → check the `CONTACT_EMAIL` inbox.
4. Every submission is also saved in the `enquiries` table regardless of
   whether the email send succeeds, so nothing is lost if mail is misconfigured.

## Notes

- `config/contact.php` reads `CONTACT_EMAIL` (defaults to `sales@novaplus.sg`
  if unset) — this is the single place the recipient address is resolved
  from, so it's safe to reference `config('contact.email')` anywhere else in
  the app.
- The mailable sets `replyTo` to the visitor's own email, so replying to the
  notification email goes straight back to them.
