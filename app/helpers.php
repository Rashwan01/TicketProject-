<?php

function uploadimage($request, $location)

{
    if ($request->get('image')) {
        if (str_word_count($request->image) > 20) {
            $image = $request->get('image');
            $name = time() . '.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            \Image::make($request->get('image'))->save(public_path($location) . "/" . $name);
            return  "$location/" . $name;
        }
        return $request->image;
    }
}
