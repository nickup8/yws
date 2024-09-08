<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StorageFeedingList extends Model
{
    use HasFactory;

    protected $fillable = [
        'rack',
        'count_lavel',
        'start_lavel',
        'start_slot',
        'end_slot',
        'area'
    ];
}
