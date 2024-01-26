<?php

namespace Database\Seeders;

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
            ['name' => 'Admin', 'email' => 'admin@email.com', 'cpf' => 26413367075, 'status' => 'active', 'password' => Hash::make('1514190931')],
            ['name' => 'Financeiro', 'email' => 'financial@email.com', 'cpf' => 78253373015, 'status' => 'active', 'password' => Hash::make('1514190931')],
            ['name' => 'Media', 'email' => 'media@email.com', 'cpf' => 15296107020, 'status' => 'pending', 'password' => Hash::make('1514190931')],
            ['name' => 'Líder', 'email' => 'leader@email.com', 'cpf' => 55108688059, 'status' => 'pending', 'password' => Hash::make('1514190931')],
            ['name' => 'Media-Líder', 'email' => 'medialeader@email.com', 'cpf' => 99753781024, 'status' => 'disabled', 'password' => Hash::make('1514190931')],
        ]);
    }
}
