<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Grocery;

class GroceryController extends Controller
{
	public function index()
	{
		$grocery = Grocery::get();
		return response()->json($grocery);
	}

	public function create()
	{
		$this->authorize('create', Grocery::class);
	}

	public function store(Grocery $grocery)
	{
		$validated = $grocery->validate();

		$grocery = Grocery::create([
			'name' => $validated['name'],
			'price' => $validated['price'],
			'amount' => $validated['amount'],
			'max_amount' => $validated['max_amount'],		
		]);

		return response()->json(Grocery::All());
	}

	public function edit(Grocery $grocery)
	{
		//
	}

	public function update(Grocery $grocery)
	{
		//I forgot how to do this part
		$validated = $grocery->validate();
		
		$grocery = Grocery::create([
			'name' => $validated['name'],
			'price' => $validated['price'],
			'amount' => $validated['amount'],
			'max_amount' => $validated['max_amount'],		
		]);
	}

	public function destroy(Grocery $grocery)
	{
		$product->delete();

		return response()->json(Grocery::All());
	}
}
