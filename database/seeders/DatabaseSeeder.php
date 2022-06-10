<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

use App\Models\Users;
use App\Models\Categories;
use App\Models\Posts;


// use Database\Factories\CategoryFactory;
// use Database\Factories\PostFactory;
// use Database\Factories\UserFactory;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        Posts::factory()->count(3)->create();
        Categories::factory()->count(3)->create();
        Users::factory()->count(3)->create();
        
        // DB::table('users')->insert([
        //     'name' => Str::random(10),
        //     'email' => Str::random(10).'@gmail.com',
        //     'password' => Hash::make('password'),
        // ]);

        

        // \App\Models\User::factory(10)->create();
    }
}
