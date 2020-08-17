<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTodosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('todos', function (Blueprint $table) {
            $table->id();
            $table->foreignId("owner_id");
            $table->string("title");
            $table->string("slug");
            $table->longText("description");
            $table->enum("priority",['low','high']);
            $table->timestamp("date");
            $table->timestamps();
              $table->foreign("owner_id")
                     ->references("id")
                     ->on("users")
                     ->onDelete("cascade")
                     ->onUpdate("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('todos');
    }
}
