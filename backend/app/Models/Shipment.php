<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shipment extends Model
{
    use HasFactory;

    public function waybill() {
        return $this->hasOne(Shipment::class);
    }

    public function carrier() {
        return $this->hasOne(Carrier::class);
    }
}
