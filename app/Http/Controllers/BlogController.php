<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\BlogCategory;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    public function index(): Response
    {
        $blogs = Blog::published()
            ->with('category:id,name')
            ->orderByDesc('published_at')
            ->orderByDesc('id')
            ->get();

        $categories = BlogCategory::where('is_active', true)
            ->withCount(['blogs' => fn ($q) => $q->published()])
            ->orderBy('name')
            ->get()
            ->filter(fn ($c) => $c->blogs_count > 0)
            ->map(fn ($c) => ['label' => $c->name, 'count' => $c->blogs_count])
            ->values();

        return Inertia::render('Blog', [
            'blogs' => $blogs->map(fn (Blog $blog) => $this->cardData($blog)),
            'categories' => $categories,
        ]);
    }

    public function show(string $slug): Response
    {
        $blog = Blog::published()->with('category:id,name')->where('slug', $slug)->firstOrFail();

        Blog::whereKey($blog->id)->increment('views');

        $related = Blog::published()
            ->where('id', '!=', $blog->id)
            ->when($blog->category_id, fn ($q) => $q->where('category_id', $blog->category_id))
            ->orderByDesc('published_at')
            ->limit(3)
            ->get()
            ->map(fn (Blog $b) => $this->cardData($b));

        return Inertia::render('BlogArticle', [
            'article' => [
                'id' => $blog->id,
                'slug' => $blog->slug,
                'title' => $blog->title,
                'excerpt' => $blog->excerpt,
                'content' => $blog->content,
                'category' => $blog->category?->name,
                'featured_image_url' => $blog->featured_image ? Storage::disk('public')->url($blog->featured_image) : null,
                'published_at' => $blog->published_at?->format('Y-m-d'),
                'read_time' => $blog->readTime(),
                'views' => $blog->views + 1,
                'author' => $blog->author?->name,
            ],
            'related' => $related,
        ]);
    }

    private function cardData(Blog $blog): array
    {
        return [
            'id' => $blog->id,
            'slug' => $blog->slug,
            'title' => $blog->title,
            'excerpt' => $blog->excerpt,
            'category' => $blog->category?->name,
            'featured_image_url' => $blog->featured_image ? Storage::disk('public')->url($blog->featured_image) : null,
            'is_featured' => $blog->is_featured,
            'published_at' => $blog->published_at?->format('Y-m-d'),
            'read_time' => $blog->readTime(),
            'views' => $blog->views,
        ];
    }
}
