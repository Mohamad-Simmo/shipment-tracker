<?php

namespace App\Http\Controllers;

use App\Models\Waybill;
use Illuminate\Http\Request;

class WaybillController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($fields)
    {
        $id = $fields['id'];
        unset($fields['id']);

        $rest = $fields;
        return Waybill::updateOrCreate(['id' => $id], $rest);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Waybill  $waybill
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Waybill::destroy($id);
    }
}
