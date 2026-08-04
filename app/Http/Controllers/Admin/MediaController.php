<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Upload;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class MediaController extends Controller
{
    public function index(): Response
    {
        $uploads = Upload::with('uploader:id,name')
            ->orderByDesc('id')
            ->get()
            ->map(fn (Upload $upload) => $this->transform($upload));

        return Inertia::render('Admin/Media/Index', [
            'uploads' => $uploads,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'files' => ['required', 'array', 'min:1'],
            'files.*' => ['image', 'max:4096'],
        ]);

        foreach ($request->file('files') as $file) {
            $path = $file->store('media', 'public');

            Upload::create([
                'disk' => 'public',
                'path' => $path,
                'original_name' => $file->getClientOriginalName(),
                'mime_type' => $file->getClientMimeType(),
                'size' => $file->getSize(),
                'uploaded_by' => Auth::id(),
            ]);
        }

        return back()->with('success', 'Media uploaded successfully.');
    }

    public function destroy(Upload $upload)
    {
        if (Blog::where('featured_image', $upload->path)->exists()) {
            return back()->with('error', 'This image is used by a blog and cannot be deleted.');
        }

        Storage::disk($upload->disk)->delete($upload->path);
        $upload->delete();

        return back()->with('success', 'Media deleted successfully.');
    }

    private function transform(Upload $upload): array
    {
        return [
            'id' => $upload->id,
            'url' => $upload->url(),
            'original_name' => $upload->original_name,
            'size' => $upload->size,
            'uploaded_by' => $upload->uploader?->name,
            'created_at' => $upload->created_at,
        ];
    }
}
