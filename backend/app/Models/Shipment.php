<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shipment extends Model
{
    use HasFactory;

    protected $hidden = ['created_at', 'updated_at'];

    protected $casts = ['id' => 'string'];

    protected $fillable = [
        'user_id', 'waybill_id', 'carrier_id', 'status', 'weight',
        'shipping_date', 'delivery_date', 'instructions',
        'description', 'exception'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function waybill()
    {
        return $this->belongsTo(Waybill::class);
    }

    public function carrier()
    {
        return $this->belongsTo(Carrier::class);
    }
}
