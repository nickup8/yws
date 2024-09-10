<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMachineRequest;
use App\Http\Requests\UpdateMachineRequest;
use App\Http\Resources\MachineResource;
use App\Models\Machine;
use DB;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MachineController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Machine::query();
        $sortField = request('sort_field', 'created_at');
        $sortDirection = request('sort_direction', 'asc');
        if(request('name')){
            $query->where('name', 'like', '%' . request('name') . '%');
        }
        if(request('project')){
            $query->where('project', 'like', '%' . request('project') . '%');
        }
        if(request('area')){
            $query->where('area', 'like', '%' . request('area') . '%');
        }
        $machines = $query->orderBy($sortField, $sortDirection)->paginate(10)->onEachSide(1);
        return Inertia::render('Machine/MachineIndex', [
            'machines' => MachineResource::collection($machines),
            'queryParams' => request()->query() ?: null,
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $areas = DB::table('storage_feedings')->pluck('area')->unique()->sort()->values();

        return Inertia::render('Machine/MachineForm', [
            'areas' => $areas
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMachineRequest $request)
    {
        $data = $request->validated();
        $name = $data['name'];
        Machine::create($data);
        return redirect()->route('machines.index')->with('success', "Оборудование \"$name\" добавлено");
    }

    /**
     * Display the specified resource.
     */
    public function show(Machine $machine)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Machine $machine)
    {
        $areas = DB::table('storage_feedings')->pluck('area')->unique()->sort()->values();
        return Inertia::render('Machine/MachineForm', [
            'machines' => new MachineResource($machine),
            'areas' => $areas
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMachineRequest $request, Machine $machine)
    {
        $data = $request->validated();
        $name = $data['name'];
        $machine->update($data);
        return redirect()->route('machines.index')->with('success', "Оборудование \"$name\" обновлено");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Machine $machine)
    {
        //
    }

    public function settings_index() {

        return Inertia::render('Machine/MachineSettings');
    }
}
