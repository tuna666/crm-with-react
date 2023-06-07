<?php

namespace App\Http\Controllers;

use App\Http\Requests\CustomerStoreRequest;
use App\Models\Customer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index()
    {
        $customers = Customer::latest()->paginate(5);

        // 取得した結果をinertia.jsを使ってreactのビューに渡す
        return inertia::render('Customer/Index', [
            'title' => 'Laravel： Vite + Inertia + React で CRUD サンプル',
            'customers' => $customers,
            'message' => session('message'),
        ]);
    }

    public function create()
    {
        return inertia::render('Customer/Create');
    }

    public function store(CustomerStoreRequest $request)
    {
        $customer = new Customer();
        $customer->last_name = $request->last_name;
        $customer->first_name = $request->first_name;
        $customer->email = $request->email;
        $customer->memo = $request->memo;
        $customer->save();

        return redirect()->route('customer.index')->with('message', '新規登録しました。');
    }

    public function show(Customer $customer)
    {
        return inertia::render('Customer/Show', [
            'customer' => $customer,
        ]);
    }
}
