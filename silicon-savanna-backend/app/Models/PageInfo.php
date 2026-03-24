<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PageInfo extends Model
{
    protected $fillable = [
        'title',
        'role',
        'background_information',
        'hero_image'
    ];
}
