<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Permission extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class);
    }

    public static function getPermissionsName(User $user): array
    {
        $permissions = [];
        foreach ($user->permissions as $permission) {
            $permissions[$permission->name] = $permission->id;
        }
        return $permissions;
    }
}
