<?php

namespace Database\Seeders;

use App\Models\Car;
use App\Models\Dog;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        Dog::factory()->count(10)->create();
        Car::factory()->count(10)->create();
    }
}
