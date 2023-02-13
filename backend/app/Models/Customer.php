<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $hidden = ['created_at', 'updated_at'];

    protected $fillable = ['contact_id',];

    public function contact()
    {
        return $this->belongsTo(Contact::class);
    }

    public function shipper()
    {
        return $this->hasMany(Waybill::class, 'shipper_id');
    }

    public function recipient()
    {
        return $this->hasMany(Waybill::class, 'recipient_id');
    }
}
