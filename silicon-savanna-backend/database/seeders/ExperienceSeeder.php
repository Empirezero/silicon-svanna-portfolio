<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Experience;

class ExperienceSeeder extends Seeder
{
    public function run(): void
    {
        $experiences = [
            [
                'job_title' => 'Full Stack Developer',
                'company' => 'Freelance',
                'company_image' => 'https://ui-avatars.com/api/?name=Freelance&background=394897&color=fff',
                'date_started' => '2021-01-01',
                'date_ended' => null,
                'is_current_working_here' => true,
                'technologies' => [
                    ['id' => 1, 'title' => 'React', 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'],
                    ['id' => 2, 'title' => 'Laravel', 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg'],
                    ['id' => 3, 'title' => 'Node.js', 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'],
                ],
                'points' => [
                    'Built and deployed full stack web applications for clients.',
                    'Developed RESTful APIs using Laravel and Node.js/Express.',
                    'Created responsive frontends using React and Tailwind CSS.',
                    'Managed cloud deployments and CI/CD pipelines.',
                ]
            ],
            [
                'job_title' => 'DevOps Intern',
                'company' => 'Silicon Savanna',
                'company_image' => 'https://ui-avatars.com/api/?name=Silicon+Savanna&background=F7AB0A&color=000',
                'date_started' => '2026-01-01',
                'date_ended' => null,
                'is_current_working_here' => true,
                'technologies' => [
                    ['id' => 1, 'title' => 'Angular', 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'],
                    ['id' => 2, 'title' => 'PHP', 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'],
                    ['id' => 3, 'title' => 'Docker', 'image' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'],
                ],
                'points' => [
                    'Building portfolio projects using Angular and Laravel.',
                    'Learning DevOps workflows, Git branching strategies and CI/CD.',
                    'Converting React/Next.js projects to Angular + Bootstrap.',
                    'Practicing bare-metal development without high-level abstractions.',
                ]
            ]
        ];

        foreach ($experiences as $experience) {
            Experience::create($experience);
        }
    }
}
