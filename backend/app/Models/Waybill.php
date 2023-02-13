<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Waybill extends Model
{
    use HasFactory;

    protected $hidden = ['created_at', 'updated_at'];

    protected $fillable = [
        'shipper_id', 'recipient_id', 'route_id'
    ];

    public function route()
    {
        return $this->belongsTo(Route::class);
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
        return $this->hasOne(Shipment::class);
    }
}
