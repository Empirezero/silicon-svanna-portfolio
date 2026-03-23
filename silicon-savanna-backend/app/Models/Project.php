<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'title',
        'summary',
        'image',
        'link_to_build',
        'technologies'
    ];

    protected $casts = [
        'technologies' => 'array'
    ];
}
