<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shipments', function (Blueprint $table) {
            $table->uuid('id');
            $table->foreignId('user_id')
                ->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('customer_id')
                ->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->string('origin');
            $table->string('destination');
            $table->enum('status', ['pending', 'in transit', 'delivered', 'exception'])->default('pending');
            $table->string('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shipments');
    }
};
