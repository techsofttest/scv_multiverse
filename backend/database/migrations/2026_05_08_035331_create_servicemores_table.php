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
        Schema::create('servicemores', function (Blueprint $table) {
            $table->id();
            $table->string('service_id')->nullable();
            $table->string('more_title')->nullable();
            $table->string('more_content')->nullable();
            $table->string('more_image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('servicemores');
    }
};
