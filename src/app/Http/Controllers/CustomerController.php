<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index()
    {
        // Customerモデルを使って、全件取得する
        $customers = Customer::all();

        // 取得した結果をinertia.jsを使ってreactのビューに渡す
        return inertia::render('Customer/Index', [
            'customers' => $customers,
        ]);
    }
}
