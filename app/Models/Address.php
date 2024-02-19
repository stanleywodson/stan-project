<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;
    protected $fillable = [
        'addressable_id',
        'addressable_type',
        'cep',
        'city',
        'neighborhood',
        'phone',
        'number',
        'complement',

    ];

    public function addressable()
    {
        return $this->morphTo();
    }
}
