<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Blogposts;
use App\Models\User;

class Comments extends Model
{
    use HasFactory;

    protected $fillable = ['content'];

    public function post()
    {
        return $this->belongsTo(Posts::class);
    }

    public function user()
    {
        return $this->hasOne(User::class);
    }
}
