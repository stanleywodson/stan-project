<?php

namespace App\Http\Controllers\Cell;

use App\Http\Controllers\Controller;
use App\Models\Wordcell;
use Doctrine\Inflector\Rules\Word;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WordcellController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/CellWord', [
            'wordcells' => Wordcell::orderBy('sketch', 'desc')->paginate(5),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|min:3|max:255',
            'body' => 'required|string',
            'sketch' => 'boolean'
        ]);

        Wordcell::updateOrCreate(
            ['id' => $request->id],
            [
                'title' => $request->title,
                'body' => $request->body,
                'sketch' => $request->sketch,
            ]
        );

        return redirect()
            ->route('wordcell.index')
            ->with('successWordcell', 'Palavra de Célula registrada com sucesso!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        dd('showww');
        return Inertia::render('Admin/CellWord', [
           'wordcell' => Wordcell::find($id),
        ]);
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
        Wordcell::destroy($id);
        return redirect()->route('wordcell.index')->with('successWordcell', 'Palavra de Célula deletada com sucesso!');
    }
}
