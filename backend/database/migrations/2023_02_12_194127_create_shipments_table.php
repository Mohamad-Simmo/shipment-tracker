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
            $table->id();
            $table->foreignId('waybill_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('carrier_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->enum('status', ['pending', 'in transit', 'delivered', 'exception'])
                ->default('pending');
            $table->decimal('weight', 8, 2);
            $table->dateTime('shipping_date');
            $table->dateTime('delivery_date');
            $table->string('instructions');
            $table->string('description')->nullable();
            $table->string('exception')->nullable();
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
