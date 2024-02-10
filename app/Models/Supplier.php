<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    use HasFactory;

    protected $fillable = [
        "code",
        "inn",
        "title",
        "address",
        "phone",
        "email",
        "comment",
        "fact_address",
        "contact_person",
        "ogrn"
    ];
}
