<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'total_blogs' => Blog::count(),
                'published_blogs' => Blog::where('is_published', true)->count(),
                'draft_blogs' => Blog::where('is_published', false)->count(),
                'total_views' => (int) Blog::sum('views'),
                'total_users' => User::count(),
                'total_roles' => Role::count(),
            ],
            'recentBlogs' => Blog::with('author:id,name')
                ->orderByDesc('id')
                ->limit(5)
                ->get(['id', 'title', 'slug', 'is_published', 'views', 'created_at', 'author_id']),
        ]);
    }
}
