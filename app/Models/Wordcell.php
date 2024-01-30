<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wordcell extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'body', 'sketch'];

    protected $casts = [
        'created_at' => 'datetime:d/m/Y',
    ];
}
