<?php

namespace App\Http\Controllers;

use App\Http\Requests\Admin\StaticPageRequest;
use App\Models\StaticPage;
use Illuminate\Http\Request;

class StaticPageController extends Controller
{
    //


    public function index($slug)
    {
        $arr = array_keys(StaticPage::PAGES);
        if (!in_array($slug, $arr)) {
            abort('404');
        }
        $title =  StaticPage::PAGES[$slug];
        $content =  '';
        $page = StaticPage::where('slug', $slug)->first();
        if ($page) {
            $title = $page->title;
            $content = $page->content;
        }
        $staticPageData = [
            'title' => $title,
            'slug' => $slug,
            'content' => $content,
        ];
        $data = [
            'module' => $title,
            'breadcrumbs' => ['Static-Page', $title],
            'static_page_data'=>$staticPageData,
        ];
        return inertia('StaticPage/Index', $data);
    }
    public function update(StaticPageRequest $request)
    {
        $requestData = $request->only('slug', 'content');
        try {
            $requestData['title'] = StaticPage::PAGES[$request->slug];
            $page = StaticPage::updateOrCreate(['slug' => $requestData['slug']], $requestData);
        } catch (\Throwable $th) {
            return back()->with('error_message', 'Something went wrong!!');
        }
        return back()->with('success_message', 'Data updated successfully');
    }
}
