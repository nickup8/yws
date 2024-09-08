<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('storage_feeding_lists', function (Blueprint $table) {
            $table->id();
            $table->string('rack');
            $table->string('count_lavel');
            $table->string('start_lavel');
            $table->string('start_slot');
            $table->string('end_slot');
            $table->string("area");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('storage_feeding_lists');
    }
};
