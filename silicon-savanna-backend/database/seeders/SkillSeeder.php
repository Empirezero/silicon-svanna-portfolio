<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Skill;

class SkillSeeder extends Seeder
{
    public function run(): void
    {
        $skills = [
            ['title' => 'JavaScript', 'progress' => 85, 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'],
            ['title' => 'TypeScript', 'progress' => 75, 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'],
            ['title' => 'React', 'progress' => 90, 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'],
            ['title' => 'Angular', 'progress' => 70, 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'],
            ['title' => 'Node.js', 'progress' => 80, 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'],
            ['title' => 'Laravel', 'progress' => 85, 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg'],
            ['title' => 'Python', 'progress' => 75, 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'],
            ['title' => 'Django', 'progress' => 70, 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'],
            ['title' => 'Flutter', 'progress' => 65, 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg'],
            ['title' => 'PHP', 'progress' => 80, 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'],
            ['title' => 'MySQL', 'progress' => 80, 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'],
            ['title' => 'MongoDB', 'progress' => 70, 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'],
            ['title' => 'Docker', 'progress' => 60, 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'],
            ['title' => 'Git', 'progress' => 90, 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'],
        ];

        foreach ($skills as $skill) {
            Skill::create($skill);
        }
    }
}
