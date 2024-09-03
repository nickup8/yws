<?php

namespace App\Http\Controllers;

use App\Models\StorageFeeding;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StorageFeedingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('StorageFeeding/StorageFeedingIndex');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('StorageFeeding/StorageFeedingForm');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(StorageFeeding $storageFeeding)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(StorageFeeding $storageFeeding)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, StorageFeeding $storageFeeding)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(StorageFeeding $storageFeeding)
    {
        //
    }
}
