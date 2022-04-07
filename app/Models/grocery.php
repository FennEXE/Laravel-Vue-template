<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class grocery extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'price', 'amount', 'max_amount'];

}
