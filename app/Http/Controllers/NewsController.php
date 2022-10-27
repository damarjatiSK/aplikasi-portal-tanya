<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    //dari sini akan ke Homepage
    public function index()
    {
        // dd(request('seacrh'));
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(12));
        return Inertia::render('Homepage', [
            'title' => "Kumpulan Tanya Jawab",
            'description' => "Selamat datang buat kamu yang sedang cari informasi",
            'news' => $news,
        ]);
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
        $news = new News();
        $news->title = $request->title;
        $news->description = $request->description;
        $news->category = $request->category;
        //kita sudah punnya author di database (dari email) jadi tidak perlu di pasing
        $news->author = auth()->user()->email;
        $news->save();
        // ini untuk notif setelah menambahkan data
        return redirect()->back()->with('success', 'berita berhasil dibuat');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function show(News $news)
    {
        $myMews = $news::where('author', auth()->user()->email)->get();
        //data akan masuk renderan inertia yang dashboard lalu dashboard dipanggil
        return Inertia::render('Dashboard', [
            'myNews' => $myMews,
        ]);
    }
    // tinggal kita panggil di depan (dasboard)

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function edit(News $news, Request $request)
    {
        return Inertia::render('EditNews', [
            'myNews' => $news->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        News::where('id', $request->id)->update([
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category,
        ]);
        return to_route('dashboard');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $news = News::find($request->id);
        $news->delete();
        return redirect()->back()->with('message', 'QnA berhasil dihapus');
    }

    //kita akan menangani global variabel dari index.php
    public function search(Request $request)
    {
        dd(request('seacrh'));
        // if ($request->has('search')) {
        //     $news = News::where('title', 'LIKE', '%' . $request->search . '%')->get();
        // } else {
        //     $news = News::all();
        // }

        // return view('dashboard');
        // // return view('dah', ['news' => $news]);
    }
}
