<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('users')->insert([
            ['name' => 'Admin', 'email' => 'admin@email.com', 'password' => Hash::make('1514190931')],
            ['name' => 'Financeiro', 'email' => 'financial@email.com', 'password' => Hash::make('1514190931')],
            ['name' => 'Media', 'email' => 'media@email.com', 'password' => Hash::make('1514190931')],
            ['name' => 'Líder', 'email' => 'leader@email.com', 'password' => Hash::make('1514190931')],
            ['name' => 'Media-Líder', 'email' => 'medialeader@email.com', 'password' => Hash::make('1514190931')],
        ]);
    }
}
