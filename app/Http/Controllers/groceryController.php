<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Grocery;

class GroceryController extends Controller
{
	public function index()
	{
		//Axios.get
		$grocery = Grocery::get();
		return response()->json($grocery);
	}

	public function create()
	{
		return response()->json("create");
		$this->authorize('create', Grocery::class);
	}

	public function store(Grocery $grocery)
	{
		//Axios.post?
		return response()->json("Store");
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
		return response()->json("edit");
		//
	}

	public function update(Request $request)
	{
		//Axios.put
		$grocery = Grocery::find($request["id"]);
		$grocery->update([
			'name' => $request["name"],
			'price' => $request["price"],
			'amount' => $request["amount"],
			'max_amount' => $request["max_amount"]]);	
	}

	public function destroy(Grocery $grocery)
	{
		//Axios.delete?
		$grocery->delete();
		return response()->json(Grocery::All());
	}
}
