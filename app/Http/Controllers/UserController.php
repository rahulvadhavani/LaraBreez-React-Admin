<?php

namespace App\Http\Controllers;

use App\Http\Requests\Admin\CreateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $search = request()->search ?? '';
        $current_page = request()->current_page ?? '';
        $users = User::when(isset(request()->search) && !empty(request()->search), function ($query) {
            $query->where('name', 'like', '%' . request()->search . '%')
                ->orWhere('email', 'like', '%' . request()->search . '%');
        })->orderBy('id', 'desc')->paginate(10)->onEachSide(1);
        $users->appends(request()->query());
        $data = ['users' => $users, 'module' => 'Users', 'breadcrumbs' => ['Users'], 'current_page' => $current_page, 'search' => $search];
        if (request()->expectsJson()) {
            return response()->json($data);
        }
        return inertia('Users/Index', $data);
    }




    /**
     * Write code on Method
     *
     * @return response()
     */
    public function create()
    {
        $data = ['module' => 'Create User', 'breadcrumbs' => ['Users', 'Create User']];
        return Inertia::render('Users/Create', $data);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function store(CreateUserRequest $request)
    {
        $data = $request->validated();
        $data['password'] = Hash::make($request->password);
        $data['name'] = "$request->first_name $request->last_name";
        if ($request->hasFile('avatar')) {
            $imagePath = $request->file('avatar')->store('public/uplaods/images');
            $data['avatar'] = basename($imagePath);
        }
        unset($data['password_confirmation']);
        User::create($data);
        return redirect()->route('users.index');
    }


    /**
     * Write code on Method
     *
     * @return response()
     */
    public function edit(User $user)
    {
        $data = ['module' => 'Edit User', 'user' => $user, 'breadcrumbs' => ['Users', 'Edit User']];
        return Inertia::render('Users/Edit', $data);
    }


    public function show(User $user)
    {
        $data = ['module' => 'User Detail', 'user' => $user, 'breadcrumbs' => ['Users', 'User Detail']];
        return Inertia::render('Users/Show', $data);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function update($id, CreateUserRequest $request)
    {
        $user = User::where('id', $id)->first();
        if ($user == null) {
            abort(404);
        }
        $requestData = $request->only('name', 'email');
        if (isset($request->password) && !empty($request->password)) {
            if (!Hash::check($request->current_password, $user->password)) {
                throw ValidationException::withMessages([
                    'current_password' => 'Invalid current password',
                ]);
            }
            $requestData['password'] = Hash::make($request->password);
        }
        if ($request->hasFile('avatar')) {
            $avatar = $user->getAttributes()['avatar'] ?? null;
            if ($avatar != null) {
                unlink(storage_path('app/public/uplaods/images/' . $avatar));
            }
            $imagePath = $request->file('avatar')->store('public/uplaods/images');
            $requestData['avatar'] = basename($imagePath);
        }
        $user->update($requestData);
        return redirect()->route('users.index');
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function delete($id)
    {
        $user = User::where('id', $id)->first();
        if ($user == null) {
            abort(404);
        }
        $avatar = $user->getAttributes()['avatar'] ?? null;
        if ($avatar != null) {
            unlink(storage_path('app/public/uplaods/images/' . $avatar));
        }
        $user->delete();
        return redirect()->route('users.index');
    }



    /**
     * Remove the specified resource from storage.
     */
    // public function delete(string $id)
    // {
    //     $user = User::where('id', $id)->first();
    //     if ($user == null) {
    //         return abort(404);
    //     }
    //     $user->delete();
    //     return to_route('users.index');
    // }
}
