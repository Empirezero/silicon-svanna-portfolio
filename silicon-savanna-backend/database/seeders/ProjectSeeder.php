<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        $projects = [
            [
                'title' => 'Silicon Savanna Portfolio',
                'summary' => 'A personal portfolio built with Angular and Laravel showcasing my skills, experience and projects.',
                'image' => 'https://ui-avatars.com/api/?name=Portfolio&size=300&background=394897&color=fff',
                'link_to_build' => 'https://github.com/Empirezero',
                'technologies' => [
                    ['id' => 1, 'title' => 'Angular', 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'],
                    ['id' => 2, 'title' => 'Laravel', 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg'],
                    ['id' => 3, 'title' => 'Bootstrap', 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'],
                ]
            ],
            [
                'title' => 'Dan Portfolio (Next.js)',
                'summary' => 'Previous portfolio built with Next.js and Sanity CMS with dynamic content management and live updates.',
                'image' => 'https://ui-avatars.com/api/?name=Dan+Portfolio&size=300&background=F7AB0A&color=000',
                'link_to_build' => 'https://portfolio-azure-pi-11.vercel.app/',
                'technologies' => [
                    ['id' => 1, 'title' => 'Next.js', 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'],
                    ['id' => 2, 'title' => 'React', 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'],
                ]
            ],
            [
                'title' => 'E-Commerce App',
                'summary' => 'A full stack e-commerce application with product management, cart functionality and payment integration.',
                'image' => 'https://ui-avatars.com/api/?name=E-Commerce&size=300&background=28a745&color=fff',
                'link_to_build' => 'https://github.com/Empirezero',
                'technologies' => [
                    ['id' => 1, 'title' => 'React', 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'],
                    ['id' => 2, 'title' => 'Node.js', 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'],
                    ['id' => 3, 'title' => 'MongoDB', 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'],
                ]
            ],
            [
                'title' => 'Flutter Mobile App',
                'summary' => 'A cross-platform mobile application built with Flutter and Firebase for real-time data management.',
                'image' => 'https://ui-avatars.com/api/?name=Flutter+App&size=300&background=5317ba&color=fff',
                'link_to_build' => 'https://github.com/Empirezero',
                'technologies' => [
                    ['id' => 1, 'title' => 'Flutter', 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg'],
                    ['id' => 2, 'title' => 'Dart', 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg'],
                    ['id' => 3, 'title' => 'Firebase', 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'],
                ]
            ],
        ];

        foreach ($projects as $project) {
            Project::create($project);
        }
    }
}
