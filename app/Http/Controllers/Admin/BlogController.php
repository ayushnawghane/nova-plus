<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\BlogCategory;
use App\Models\Upload;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    public function index(Request $request): Response
    {
        $blogs = Blog::with(['author:id,name', 'category:id,name'])
            ->orderByDesc('id')
            ->get()
            ->map(fn (Blog $blog) => $this->transform($blog));

        $canBrowseMedia = (bool) $request->user()?->hasPermission('media.manage');

        return Inertia::render('Admin/Blogs/Index', [
            'blogs' => $blogs,
            'categories' => BlogCategory::where('is_active', true)->orderBy('name')->get(['id', 'name']),
            'uploads' => $canBrowseMedia
                ? Upload::orderByDesc('id')->get()->map(fn (Upload $u) => [
                    'id' => $u->id,
                    'path' => $u->path,
                    'url' => $u->url(),
                    'original_name' => $u->original_name,
                ])
                : [],
        ]);
    }

    public function store(Request $request)
    {
        $validated = $this->validated($request);

        $validated['slug'] = $this->uniqueSlug($validated['title']);
        $validated['author_id'] = Auth::id();
        $validated['featured_image'] = $this->resolveFeaturedImage($request);

        Blog::create($validated);

        return back()->with('success', 'Blog created successfully.');
    }

    public function update(Request $request, Blog $blog)
    {
        $validated = $this->validated($request);

        if ($validated['title'] !== $blog->title) {
            $validated['slug'] = $this->uniqueSlug($validated['title'], $blog->id);
        }

        $validated['featured_image'] = $this->resolveFeaturedImage($request, $blog->featured_image);

        $blog->update($validated);

        return back()->with('success', 'Blog updated successfully.');
    }

    public function destroy(Blog $blog)
    {
        $blog->delete();

        return back()->with('success', 'Blog deleted successfully.');
    }

    private function resolveFeaturedImage(Request $request, ?string $current = null): ?string
    {
        if ($request->hasFile('featured_image')) {
            $file = $request->file('featured_image');
            $path = $file->store('media', 'public');

            Upload::create([
                'disk' => 'public',
                'path' => $path,
                'original_name' => $file->getClientOriginalName(),
                'mime_type' => $file->getClientMimeType(),
                'size' => $file->getSize(),
                'uploaded_by' => Auth::id(),
            ]);

            return $path;
        }

        if ($request->filled('featured_image_path')) {
            $path = $request->input('featured_image_path');

            if (Upload::where('path', $path)->exists()) {
                return $path;
            }
        }

        if ($request->boolean('remove_featured_image')) {
            return null;
        }

        return $current;
    }

    private function validated(Request $request): array
    {
        $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'excerpt' => ['required', 'string', 'max:1000'],
            'content' => ['required', 'string'],
            'category_id' => ['nullable', 'exists:blog_categories,id'],
            'published_at' => ['required', 'date'],
            'is_featured' => ['boolean'],
            'is_published' => ['boolean'],
            'featured_image' => ['nullable', 'image', 'max:4096'],
            'featured_image_path' => ['nullable', 'string'],
        ]);

        // 'featured_image_path' is read directly off the request in
        // resolveFeaturedImage() — it isn't a Blog column, just a signal for
        // picking an existing library image instead of uploading a new file.
        return $request->only([
            'title', 'excerpt', 'content', 'category_id',
            'published_at', 'is_featured', 'is_published',
        ]);
    }

    private function uniqueSlug(string $title, ?int $ignoreId = null): string
    {
        $base = Str::slug($title);
        $slug = $base;
        $i = 1;

        while (
            Blog::withTrashed()
                ->when($ignoreId, fn ($q) => $q->where('id', '!=', $ignoreId))
                ->where('slug', $slug)
                ->exists()
        ) {
            $slug = "{$base}-{$i}";
            $i++;
        }

        return $slug;
    }

    private function transform(Blog $blog): array
    {
        return [
            'id' => $blog->id,
            'title' => $blog->title,
            'slug' => $blog->slug,
            'excerpt' => $blog->excerpt,
            'content' => $blog->content,
            'category_id' => $blog->category_id,
            'category_name' => $blog->category?->name,
            'featured_image' => $blog->featured_image,
            'featured_image_url' => $blog->featured_image ? Storage::disk('public')->url($blog->featured_image) : null,
            'is_featured' => $blog->is_featured,
            'is_published' => $blog->is_published,
            'published_at' => $blog->published_at?->format('Y-m-d'),
            'views' => $blog->views,
            'author' => $blog->author?->name,
            'created_at' => $blog->created_at,
            'updated_at' => $blog->updated_at,
        ];
    }
}
