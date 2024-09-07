<?php

namespace App\Http\Controllers;

use App\Http\Resources\SupplierResource;
use App\Models\Supplier;
use App\Http\Requests\StoreSupplierRequest;
use App\Http\Requests\UpdateSupplierRequest;
use Inertia\Inertia;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Supplier::query();
        $sortField = request('sort_field', 'created_at');
        $sortDirection = request('sort_direction', 'asc');
        if (request('supplier_code')) {
            $query->where('supplier_code', 'like', '%' . request()->supplier_code . '%');
        }
        if (request('supplier_name')) {
            $query->where('supplier_name', 'like', '%' . request()->supplier_name . '%');
        }
        $suppliers = $query->orderBy($sortField, $sortDirection)->paginate(10)->onEachSide(1);

        return Inertia::render('Supplier/SupplierIndex', [
            'suppliers' => SupplierResource::collection($suppliers),
            'queryParams' => request()->query() ?: null,
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Supplier/SupplierCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSupplierRequest $request)
    {
        $data = $request->validated();
        Supplier::create($data);
        return redirect()->route('suppliers.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Supplier $supplier)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Supplier $supplier)
    {
        return Inertia::render('Supplier/SupplierCreate', [
            'supplier' => new SupplierResource($supplier)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSupplierRequest $request, Supplier $supplier)
    {
        $data = $request->validated();
        $supplier->update($data);
        return redirect()->route('suppliers.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Supplier $supplier)
    {
        $name = $supplier->supplier_name;
        $supplier->delete();

        return to_route('suppliers.index')
            ->with('success', "Task \"$name\" was deleted");
    }
}
