<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Permission::truncate();
        $permissions = ['admin', 'financial', 'media', 'leader'];

        foreach($permissions as $permission) {
            Permission::factory()->create([
                'name' => $permission,
            ]);
        }

    }
}
