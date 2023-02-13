<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Carrier extends Model
{
    use HasFactory;

    protected $hidden = ['created_at', 'updated_at'];

    public function contact()
    {
        return $this->belongsTo(Contact::class);
    }

    public function shipment()
    {
        return $this->hasMany(Shipment::class);
    }
}
