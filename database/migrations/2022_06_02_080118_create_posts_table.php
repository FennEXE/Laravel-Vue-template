<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('vote_id');
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('user_id');
            $table->string('title');
            $table->text('content');
            $table->unsignedBigInteger('comment_id');
            $table->timestamps();
        });

        Schema::table('posts', function($table)
        {
            $table->foreign('vote_id')->references('id')->on('votes');
            $table->foreign('category_id')->references('id')->on('categories');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('comment_id')->references('id')->on('comments');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
