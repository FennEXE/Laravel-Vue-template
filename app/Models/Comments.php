<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Blogposts;
use App\Models\User;

class Comments extends Model
{
    use HasFactory;

    protected $fillable = ['commenttitle', 'commenttext'];

    public function blogpost()
    {
        return $this->belongsTo(Blogpost::class);
    }

    public function user()
    {
        return $this->hasOne(User::class);
    }
}
