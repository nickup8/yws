<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStorageFeedingLitsRequest;
use App\Http\Requests\UpdateStorageFeedingLitsRequest;
use App\Http\Resources\StorageFeedingListResoutce;
use App\Models\StorageFeeding;
use App\Models\StorageFeedingList;
use DB;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StorageFeedingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $lists = DB::table('storage_feeding_lists')->get();
        return Inertia::render('StorageFeeding/StorageFeedingIndex', [
            'lists' => StorageFeedingListResoutce::collection($lists)
        ]);
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
    public function store(StoreStorageFeedingLitsRequest $request)
    {
        $data = $request->validated();
        $count = 0;
        $prefix = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        for ($level = $data['start_lavel']; $level <= $data['count_lavel']; $level++) {
            for ($shelf = $data['start_slot']; $shelf <= $data['end_slot']; $shelf++) {
                if ($shelf < 10) {
                    $shelf = '00' . $shelf;
                } elseif ($shelf >= 10 && $shelf < 100) {
                    $shelf = '0' . $shelf;
                }
                StorageFeeding::create([
                    'name' => $data['rack'] . '-' . $shelf . '-' . $prefix[$level - 1],
                    'area' => $data['area'],
                ]);
                $count++;
            }
        };
        StorageFeedingList::create([
            'rack' => $data['rack'],
            'count_lavel' => $data['count_lavel'],
            'start_lavel' => $data['start_lavel'],
            'start_slot' => $data['start_slot'],
            'end_slot' => $data['end_slot'],
            'area' => $data['area'],
        ]);
        return to_route('storages_feeding.index')->with('success', "Создано \"$count\" МХ на фидинге");
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
    public function edit(StorageFeedingList $storageFeedingList , string $storages_feeding)
    {

        $list = DB::table('storage_feeding_lists')->where('id', $storages_feeding)->first();
        return Inertia::render('StorageFeeding/StorageFeedingForm', [
            'storageFeeding' => new StorageFeedingListResoutce($list)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStorageFeedingLitsRequest $request, StorageFeeding $storageFeeding, string $storages_feeding)
    {
        $list = DB::table('storage_feeding_lists')->where('id', $storages_feeding)->first();
        $prefix = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        $count = 0;
        for ($level = $list->start_lavel; $level <= $list->count_lavel; $level++) {
            for ($shelf = $list->start_slot; $shelf <= $list->end_slot; $shelf++) {
                if ($shelf < 10) {
                    $shelf = '00' . $shelf;
                } elseif ($shelf >= 10 && $shelf < 100) {
                    $shelf = '0' . $shelf;
                }
                StorageFeeding::where('name', $list->rack . '-' . $shelf . '-' . $prefix[$level - 1])->delete();
                $count++;
            }
        };

        $data = $request->validated();
        $countNew = 0;
        for ($level = $data['start_lavel']; $level <= $data['count_lavel']; $level++) {
            for ($shelf = $data['start_slot']; $shelf <= $data['end_slot']; $shelf++) {
                if ($shelf < 10) {
                    $shelf = '00' . $shelf;
                } elseif ($shelf >= 10 && $shelf < 100) {
                    $shelf = '0' . $shelf;
                }
                StorageFeeding::create([
                    'name' => $data['rack'] . '-' . $shelf . '-' . $prefix[$level - 1],
                    'area' => $data['area'],
                ]);
                $countNew++;
            }
        }

        StorageFeedingList::where('id', $storages_feeding)->update([
            'rack' => $data['rack'],
            'count_lavel' => $data['count_lavel'],
            'start_lavel' => $data['start_lavel'],
            'start_slot' => $data['start_slot'],
            'end_slot' => $data['end_slot'],
            'area' => $data['area'],
        ]);
        return to_route('storages_feeding.index')->with('success', "Обновлено \"$countNew\" МХ на фидинге");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(StorageFeeding $storageFeeding, string $storages_feeding)
    {
        $list = DB::table('storage_feeding_lists')->where('id', $storages_feeding)->first();
        $prefix = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        $count = 0;
        for ($level = $list->start_lavel; $level <= $list->count_lavel; $level++) {
            for ($shelf = $list->start_slot; $shelf <= $list->end_slot; $shelf++) {
                if ($shelf < 10) {
                    $shelf = '00' . $shelf;
                } elseif ($shelf >= 10 && $shelf < 100) {
                    $shelf = '0' . $shelf;
                }
                StorageFeeding::where('name', $list->rack . '-' . $shelf . '-' . $prefix[$level - 1])->delete();
                $count++;
            }
        };
        StorageFeedingList::where('id', $storages_feeding)->delete();
        return to_route('storages_feeding.index')->with('success', "Удалено \"$count\" МХ на фидинге");
    }
}
