<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    protected $fillable = [
        'job_title',
        'company',
        'company_image',
        'date_started',
        'date_ended',
        'is_current_working_here',
        'technologies',
        'points'
    ];

    protected $casts = [
        'technologies' => 'array',
        'points' => 'array',
        'is_current_working_here' => 'boolean',
        'date_started' => 'date',
        'date_ended' => 'date'
    ];
}
