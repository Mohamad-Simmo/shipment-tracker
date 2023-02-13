<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Route extends Model
{
    use HasFactory;

    protected $hidden = ['created_at', 'updated_at'];

    protected $fillable = [
        'origin', 'destination', 'stops', 'method'
    ];

    public function waybill()
    {
        return $this->hasOne(Waybill::class);
    }
}
