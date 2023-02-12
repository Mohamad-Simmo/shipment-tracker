<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Waybill extends Model
{
    use HasFactory;

    public function route()
    {
        return $this->hasOne(Route::class);
    }

    public function shipper()
    {
        return $this->belongsTo(Customer::class, 'shipper_id');
    }

    public function recipient()
    {
        return $this->belongsTo(Customer::class, 'recipient_id');
    }

    public function shipment()
    {
        return $this->belongsTo(Shipment::class);
    }
}
