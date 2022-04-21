<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Comments;
use App\Models\User;

class Blogposts extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'text'];

    public function comments()
    {
        return $this->hasMany(Comments::class); //Bind comments to a post.
    }

    public function user()
    {
        return $this->hasOne(User::class);
    }
}
