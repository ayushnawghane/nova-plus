<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>New Contact Form Submission</title>
</head>
<body style="margin:0; padding:32px 16px; background-color:#f4f7f5; font-family: Arial, Helvetica, sans-serif;">
    <div style="max-width:600px; margin:0 auto; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 4px 20px rgba(0,53,103,0.08);">
        <div style="background-color:#003567; padding:28px 32px;">
            <p style="margin:0; color:#ffffff; font-size:18px; font-weight:700;">Nova Plus</p>
            <p style="margin:4px 0 0; color:rgba(255,255,255,0.6); font-size:13px;">New website enquiry received</p>
        </div>

        <div style="padding:32px;">
            <table style="width:100%; border-collapse:collapse;">
                <tr>
                    <th style="text-align:left; padding:10px 0; width:35%; color:#5a6b7a; font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:0.04em; border-bottom:1px solid #eef1ef;">Name</th>
                    <td style="padding:10px 0; color:#1a2e3a; font-size:14px; border-bottom:1px solid #eef1ef;">{{ $enquiry->name }}</td>
                </tr>
                <tr>
                    <th style="text-align:left; padding:10px 0; color:#5a6b7a; font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:0.04em; border-bottom:1px solid #eef1ef;">Email</th>
                    <td style="padding:10px 0; color:#1a2e3a; font-size:14px; border-bottom:1px solid #eef1ef;">{{ $enquiry->email }}</td>
                </tr>
                @if($enquiry->company_name)
                <tr>
                    <th style="text-align:left; padding:10px 0; color:#5a6b7a; font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:0.04em; border-bottom:1px solid #eef1ef;">Company</th>
                    <td style="padding:10px 0; color:#1a2e3a; font-size:14px; border-bottom:1px solid #eef1ef;">{{ $enquiry->company_name }}</td>
                </tr>
                @endif
                @if($enquiry->query_type)
                <tr>
                    <th style="text-align:left; padding:10px 0; color:#5a6b7a; font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:0.04em; border-bottom:1px solid #eef1ef;">Inquiry Type</th>
                    <td style="padding:10px 0; color:#1a2e3a; font-size:14px; border-bottom:1px solid #eef1ef;">{{ $enquiry->query_type }}</td>
                </tr>
                @endif
                @if($enquiry->message)
                <tr>
                    <th style="text-align:left; padding:10px 0; vertical-align:top; color:#5a6b7a; font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:0.04em;">Message</th>
                    <td style="padding:10px 0; color:#1a2e3a; font-size:14px; line-height:1.6;">{{ $enquiry->message }}</td>
                </tr>
                @endif
            </table>
        </div>

        <div style="padding:18px 32px; background-color:#f7f9f8; text-align:center;">
            <p style="margin:0; color:#9aabb4; font-size:11px;">Submitted via the Nova Plus contact form &middot; {{ $enquiry->created_at?->format('d M Y, g:i A') }}</p>
        </div>
    </div>
</body>
</html>
