<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index()
    {
        $customers = Customer::paginate(5);

        // 取得した結果をinertia.jsを使ってreactのビューに渡す
        return inertia::render('Customer/Index', [
            'title' => 'Laravel： Vite + Inertia + React で CRUD サンプル',
            'customers' => $customers,
            'message' => session('message'),
        ]);
    }
}
