<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create(["name"=> "Администратор"]);
        Role::create(["name"=> "Инженер-технолог"]);
        Role::create(["name"=> "Логистика"]);
        Role::create(["name"=> "Кладовщик"]);
        Role::create(["name"=> "Оператор фидинга"]);
        Role::create(["name"=> "Оператор P1"]);
    }
}
