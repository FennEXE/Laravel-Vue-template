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

	public function show(Request $request)
	{
		$grocery = Grocery::get($request);
		return response()->json($grocery);
	}

	public function store(Request $request)
	{
		//Axios.post
		$grocery = Grocery::create([
			'name' => $request['name'],
			'price' => $request['value'],
			'amount' => $request['amount'],
			'max_amount' => $request['max_amount'],		
		]);

		$grocery = Grocery::get();
		return response()->json($grocery);
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
			
		$grocery = Grocery::get();
		return response()->json($grocery);
	}

	public function destroy(Grocery $grocery)
	{
		//Axios.delete
		$grocery->delete();
		$grocery = Grocery::get();
		return response()->json($grocery);
	}
}
