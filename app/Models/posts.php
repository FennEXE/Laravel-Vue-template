<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'content'];

    public function comments()
    {
        return $this->hasMany(Comments::class); //Bind comments to a post.
    }

    public function user()
    {
        return $this->belongsTo(Users::class); //Bind user to a post.
    }

    public function category()
    {
        return $this->belongsTo(Categories::class); //Bind category to a post.
    }
}
