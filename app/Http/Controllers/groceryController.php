<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class groceryController extends Controller
{
	public function index()
	{
		echo "received";
		$grocery = grocery::All();
		return response()->json($grocery);
	}

	public function create()
	{
		$this->authorize('create', grocery::class);
	}

	public function store(grocery $grocery)
	{
		$validated = $grocery->validate();

		$grocery = grocery::create([
			'name' => $validated['name'],
			'price' => $validated['price'],
			'amount' => $validated['amount'],
			'max_amount' => $validated['max_amount'],		
		]);

		return response()->json(grocery::All());
	}

	public function edit(grocery $grocery)
	{
		//
	}

	public function update(grocery $grocery)
	{
		//I forgot how to do this part
		$validated = $grocery->validate();
		
		$grocery = grocery::create([
			'name' => $validated['name'],
			'price' => $validated['price'],
			'amount' => $validated['amount'],
			'max_amount' => $validated['max_amount'],		
		]);
	}

	public function destroy(grocery $grocery)
	{
		$product->delete();

		return response()->json(grocery::All());
	}
}
