<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    public function shipments()
    {
        return $this->hasMany(Shipment::class, 'customer_id');
    }
}
