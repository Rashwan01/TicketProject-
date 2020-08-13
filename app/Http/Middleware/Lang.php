<?php

namespace App\Http\Middleware;

use Closure;

class Lang
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $siteLang = $request->header("lang");
        ($siteLang ? App()->setlocale($siteLang):App()->setlocale("ar"));
        return $next($request);
    }
}
