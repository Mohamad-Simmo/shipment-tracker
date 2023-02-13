<?php

namespace App\Http\Controllers;

use App\Models\Waybill;
use Illuminate\Http\Request;

class WaybillController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($fields)
    {
        return Waybill::create($fields);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Waybill  $waybill
     * @return \Illuminate\Http\Response
     */
    public function show(Waybill $waybill)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Waybill  $waybill
     * @return \Illuminate\Http\Response
     */
    public function edit(Waybill $waybill)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Waybill  $waybill
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Waybill $waybill)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Waybill  $waybill
     * @return \Illuminate\Http\Response
     */
    public function destroy(Waybill $waybill)
    {
        //
    }
}
