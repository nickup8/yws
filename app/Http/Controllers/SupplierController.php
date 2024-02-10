<?php

namespace App\Http\Controllers;

use App\Http\Requests\SupplierRequest;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $suppliers = Supplier::all();

        return Inertia::render('Suppliers/Suppliers', [
            'suppliers' => $suppliers
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Suppliers/SupplierNew');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SupplierRequest $request)
    {
        $data = $request->validated();

        $supplier = Supplier::create([
            'code' => $data['code'],
            'title' => $data['title'],
            'address' => $data['address'],
            'phone' => $data['phone'],
            'email' => $data['email'],
            'fact_address' => $data['fact_address'],
            'inn' => $data['inn'],
            'contact_person' => $data['contact_person'],
            'comment' => $data['comment'],
            'ogrn' => $data['ogrn']
        ]);
        return
            redirect('/suppliers');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
