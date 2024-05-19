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
        Role::create(["name"=> "admin"]);
        Role::create(["name"=> "engineer"]);
        Role::create(["name"=> "logistic"]);
        Role::create(["name"=> "warehouse"]);
        Role::create(["name"=> "feeding"]);
        Role::create(["name"=> "operator"]);
    }
}
