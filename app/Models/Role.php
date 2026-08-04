<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Role extends Model
{
    use HasFactory;

    public const ALL_PERMISSIONS = [
        'blogs.view',
        'blogs.create',
        'blogs.edit',
        'blogs.delete',
        'categories.manage',
        'media.manage',
        'enquiries.manage',
        'faqs.manage',
        'roles.manage',
        'users.manage',
    ];

    protected $fillable = [
        'name',
        'slug',
        'permissions',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'permissions' => 'array',
            'is_active' => 'boolean',
        ];
    }

    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }

    public function hasPermission(string $permission): bool
    {
        return in_array($permission, $this->permissions ?? [], true);
    }
}
