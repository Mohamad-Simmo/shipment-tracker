<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'email', 'phone', 'address'];

    public function carrier()
    {
        return $this->hasOne(Carrier::class);
    }

    public function customer()
    {
        return $this->hasOne(Customer::class);
    }
}
