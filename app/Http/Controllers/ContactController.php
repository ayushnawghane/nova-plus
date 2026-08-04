<?php

namespace App\Http\Controllers;

use App\Mail\ContactEnquiry;
use App\Models\Enquiry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('ContactUs');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'company_name' => ['nullable', 'string', 'max:255'],
            'query_type' => ['nullable', 'string', 'max:255'],
            'message' => ['nullable', 'string', 'max:5000'],
        ]);

        $enquiry = Enquiry::create($validated);

        Mail::to(config('contact.email'))->send(new ContactEnquiry($enquiry));

        return back()->with('success', "Thanks for reaching out — we'll be in touch within 24 hours.");
    }
}
