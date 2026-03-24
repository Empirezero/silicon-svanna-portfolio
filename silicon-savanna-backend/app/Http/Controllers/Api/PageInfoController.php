<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PageInfo;
use Illuminate\Http\JsonResponse;

class PageInfoController extends Controller
{
    public function index(): JsonResponse
    {
        $pageInfo = PageInfo::first();
        return response()->json($pageInfo);
    }
}
