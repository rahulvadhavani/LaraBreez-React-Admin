<?php

namespace App\Http\Controllers;

use App\Http\Requests\Admin\CreateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $search = request()->search??'';
        $current_page = request()->current_page??'';
        $users = User::when(isset(request()->search) && !empty(request()->search),function($query){
            $query->where('name','like','%'.request()->search.'%')
            ->orWhere('email','like','%'.request()->search.'%');
        })->orderBy('id','desc')->paginate(10);
        $users->appends(request()->query());
        $data= ['users' => $users,'module' => 'Users','current_page' => $current_page,'search' => $search];
        if(request()->expectsJson()){
            return response()->json($data);
        }
        return inertia('User/Index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data= ['module' => 'Users Create'];
        return inertia('User/Create', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateUserRequest $request)
    {
        $postData = $request->validated();
        $postData['password'] = Hash::make($request->password);
        unset($postData['password_confirmation']);
        $user = User::create($postData);
        return to_route('users.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
    public function delete(string $id)
    {
        $user = User::where('id',$id)->first();
        if($user == null){
            return abort(404);
        }
        $user->delete();
        return to_route('users.index');
    }
}
