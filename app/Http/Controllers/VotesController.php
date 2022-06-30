<?php

namespace App\Http\Controllers;

use App\Models\Votes;
use Illuminate\Http\Request;

class VotesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $votes = Votes::get();
		return response()->json($posts);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validated();
        //
        $vote = Votes::create($validated)->posts()->attach(explode(',', $validated['category_id']));

        $votes = Votes::get($request['id']);
        return response()->json($votes);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\votes  $votes
     * @return \Illuminate\Http\Response
     */
    public function show(votes $votes)
    {
        $votes['upvotes'] = Votes::get($votes)->where('count', '=', 1)->count();
        $votes['downvotes'] = Votes::get($votes)->where('count', '=', 0)->count();
        return response()->json($votes);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\votes  $votes
     * @return \Illuminate\Http\Response
     */
    public function edit(votes $votes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\votes  $votes
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, votes $votes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\votes  $votes
     * @return \Illuminate\Http\Response
     */
    public function destroy(votes $votes)
    {
        //
    }
}
