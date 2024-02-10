<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Rule;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $rules = ["Супер - пользователь", "Логистика", "Кладовщик", "Оператор Фидинга", "Оператор ПП"];

        foreach ($rules as $rule) {
            Rule::create([
                'name' => $rule
            ]);
        }

        User::create([
            'name' => 'Николай',
            'lastname' => 'Сироткин',
            'login' => '4500',
            'password' => Hash::make('Komax1230'),
            'rule_id' => 1
        ]);
    }
}
