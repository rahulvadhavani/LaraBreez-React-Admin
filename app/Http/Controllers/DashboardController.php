<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class DashboardController extends Controller
{
    public function index()
    {
        $statistics = Cache::remember('statistics', 60 * 15, function () {
            return [
                'UsersCount' => User::count()
            ];
        });
        $statisticsData = [];
        $statisticsData['statistics'] = [
            ['module' => 'Users', 'count' => $statistics['UsersCount'], 'route' => route('users.index'), 'class' => 'bg-green-500', 'icon' => 'fas fa-solid fa-users'],
        ];
        $data = [
            'module' => 'Dashboard',
            'breadcrumbs' => ['Dashboard'],
            'statisticsData' => $statisticsData
        ];
        return inertia('Dashboard', $data);
    }
}
