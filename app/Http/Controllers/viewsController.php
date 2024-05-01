<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class viewsController extends Controller
{
    public function gestion(){
        return view('gestion');
    }
    
    public function transacciones(){
        return view('transacciones');
    }

    public function config(){
        return view('config');
    }
}
