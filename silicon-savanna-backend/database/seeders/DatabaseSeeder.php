<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            PageInfoSeeder::class,
            ProjectSeeder::class,
            SkillSeeder::class,
            ExperienceSeeder::class,
        ]);
    }
}
