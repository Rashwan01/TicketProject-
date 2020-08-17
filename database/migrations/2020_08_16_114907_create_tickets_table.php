<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTicketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->string("slug");
            $table->longText("description");
            $table->tinyInteger("status")->default(0);//1 accept //2closed
            $table->foreignId("user_id");
            $table->string("image")->default("/tickets/avatar.png");
            $table->timestamps();
              $table->foreign("user_id")
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
        Schema::dropIfExists('tickets');
    }
}
