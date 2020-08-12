<?php return array (
  'astrotomic/laravel-translatable' => 
  array (
    'providers' => 
    array (
      0 => 'Astrotomic\\Translatable\\TranslatableServiceProvider',
    ),
  ),
  'barryvdh/laravel-debugbar' => 
  array (
    'providers' => 
    array (
      0 => 'Barryvdh\\Debugbar\\ServiceProvider',
    ),
    'aliases' => 
    array (
      'Debugbar' => 'Barryvdh\\Debugbar\\Facade',
    ),
  ),
  'facade/ignition' => 
  array (
    'providers' => 
    array (
      0 => 'Facade\\Ignition\\IgnitionServiceProvider',
    ),
    'aliases' => 
    array (
      'Flare' => 'Facade\\Ignition\\Facades\\Flare',
    ),
  ),
  'fideloper/proxy' => 
  array (
    'providers' => 
    array (
      0 => 'Fideloper\\Proxy\\TrustedProxyServiceProvider',
    ),
  ),
  'fruitcake/laravel-cors' => 
  array (
    'providers' => 
    array (
      0 => 'Fruitcake\\Cors\\CorsServiceProvider',
    ),
  ),
  'intervention/image' => 
  array (
    'providers' => 
    array (
      0 => 'Intervention\\Image\\ImageServiceProvider',
    ),
    'aliases' => 
    array (
      'Image' => 'Intervention\\Image\\Facades\\Image',
    ),
  ),
  'laravel/tinker' => 
  array (
    'providers' => 
    array (
      0 => 'Laravel\\Tinker\\TinkerServiceProvider',
    ),
  ),
  'martinlindhe/laravel-vue-i18n-generator' => 
  array (
    'providers' => 
    array (
      0 => 'MartinLindhe\\VueInternationalizationGenerator\\GeneratorProvider',
    ),
  ),
  'mcamara/laravel-localization' => 
  array (
    'providers' => 
    array (
      0 => 'Mcamara\\LaravelLocalization\\LaravelLocalizationServiceProvider',
    ),
    'aliases' => 
    array (
      'LaravelLocalization' => 'Mcamara\\LaravelLocalization\\Facades\\LaravelLocalization',
    ),
  ),
  'nesbot/carbon' => 
  array (
    'providers' => 
    array (
      0 => 'Carbon\\Laravel\\ServiceProvider',
    ),
  ),
  'nunomaduro/collision' => 
  array (
    'providers' => 
    array (
      0 => 'NunoMaduro\\Collision\\Adapters\\Laravel\\CollisionServiceProvider',
    ),
  ),
  'proengsoft/laravel-jsvalidation' => 
  array (
    'providers' => 
    array (
      0 => 'Proengsoft\\JsValidation\\JsValidationServiceProvider',
    ),
    'aliases' => 
    array (
      'JsValidator' => 'Proengsoft\\JsValidation\\Facades\\JsValidatorFacade',
    ),
  ),
  'santigarcor/laratrust' => 
  array (
    'providers' => 
    array (
      0 => 'Laratrust\\LaratrustServiceProvider',
    ),
    'aliases' => 
    array (
      'Laratrust' => 'Laratrust\\LaratrustFacade',
    ),
  ),
  'tymon/jwt-auth' => 
  array (
    'aliases' => 
    array (
      'JWTAuth' => 'Tymon\\JWTAuth\\Facades\\JWTAuth',
      'JWTFactory' => 'Tymon\\JWTAuth\\Facades\\JWTFactory',
    ),
    'providers' => 
    array (
      0 => 'Tymon\\JWTAuth\\Providers\\LaravelServiceProvider',
    ),
  ),
);