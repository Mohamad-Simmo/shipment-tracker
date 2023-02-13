<?php

namespace App\Http\Controllers;

use App\Models\Shipment;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class ShipmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Shipment::with([
            'waybill',
            'waybill.route',
            'waybill.shipper.contact',
            'waybill.recipient.contact',
            'carrier',
            'carrier.contact',
        ])->where('user_id', $request->user()->id)->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'carrier_id' => ['required'],
            'delivery_date' => ['required'],
            'destination' => ['required'],
            'method' => ['required'],
            'origin' => ['required'],
            'recipient_id' => ['required'],
            'shipper_id' => ['required'],
            'shipping_date' => ['required'],
            'weight' => ['required'],
        ]);


        $route_id = app('App\Http\Controllers\RouteController')
            ->store([
                'destination' => $fields['destination'],
                'method' => $fields['method'],
                'origin' => $fields['origin']
            ])->id;


        $waybill_id = app('App\Http\Controllers\WaybillController')
            ->store([
                'recipient_id' => $fields['recipient_id'],
                'shipper_id' => $fields['shipper_id'],
                'route_id' => $route_id
            ])->id;

        return Shipment::create([
            'user_id' => $request->user()->id,
            'waybill_id' => $waybill_id,
            'carrier_id' => $fields['carrier_id'],
            'weight' => $fields['weight'],
            'shipping_date' => $fields['shipping_date'],
            'delivery_date' => $fields['delivery_date'],
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Shipment::with([
            'waybill',
            'waybill.route',
            'waybill.shipper.contact',
            'waybill.recipient.contact',
            'carrier',
            'carrier.contact',
        ])->where('id', $id)->first();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
