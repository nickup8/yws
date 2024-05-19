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

        User::create([
            "last_name" => "Сироткин",
            "first_name" => "Николай",
            "login" => "4500",
            "password" => Hash::make("Komax1230"),
        ])->assignRole(["admin"]);

        User::create([
            "last_name" => "Пупкин",
            "first_name" => "Василий",
            "login" => "4501",
            "password" => Hash::make("Komax1230"),
        ])->assignRole("logistic");
        User::create([
            "last_name" => "Петров",
            "first_name" => "Иван",
            "login" => "4502",
            "password" => Hash::make("Komax1230"),
        ])->assignRole("engineer");
    }
}
