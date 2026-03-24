<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PageInfo;

class PageInfoSeeder extends Seeder
{
    public function run(): void
    {
        PageInfo::create([
            'title' => 'Dancan Ngugi',
            'role' => 'Full-Stack Developer',
            'background_information' => 'I am a passionate Full Stack Developer based in Nairobi, Kenya.
            I have experience building modern web and mobile applications across
            the entire stack — from robust backends with Laravel, Node.js/Express,
            Django, and Python, to responsive frontends with React and modern CSS.
            I also build cross-platform mobile apps with Flutter and manage deployments
            with my growing DevOps expertise. I love transforming ideas into practical
            digital solutions and writing clean, scalable code.',
            'hero_image' => null
        ]);
    }
}
