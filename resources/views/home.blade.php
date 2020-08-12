<!--
**this page Entry point of our application
-->
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="{{ (App()->getLocale() == 'en') ? 'LTR':'RTL' }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Global stylesheets -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet"
        type="text/css">
   <link href="/assets/dashboard/global/icons/icomoon/styles.css" rel="stylesheet" type="text/css">
   @if(App()->getLocale() == "ar")
    <link href="/assets/dashboard/RTL/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="/assets/dashboard/RTL/css/bootstrap_limitless.min.css" rel="stylesheet" type="text/css">
    <link href="/assets/dashboard/RTL/css/layout.min.css" rel="stylesheet" type="text/css">
    <link href="/assets/dashboard/RTL/css/components.min.css" rel="stylesheet" type="text/css">
    <link href="/assets/dashboard/RTL/css/colors.min.css" rel="stylesheet" type="text/css">
   @else

     <link href="/assets/dashboard/LTR/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="/assets/dashboard/LTR/css/bootstrap_limitless.min.css" rel="stylesheet" type="text/css">
    <link href="/assets/dashboard/LTR/css/layout.min.css" rel="stylesheet" type="text/css">
    <link href="/assets/dashboard/LTR/css/components.min.css" rel="stylesheet" type="text/css">
    <link href="/assets/dashboard/LTR/css/colors.min.css" rel="stylesheet" type="text/css">
@endif
    <!-- /global stylesheets -->

    <!-- Core JS files -->
    <script src="/assets/dashboard/global/js/main/jquery.min.js"></script>
    <script src="/assets/dashboard/global/js/main/bootstrap.bundle.min.js"></script>

    <!-- /core JS files -->

    <!-- Theme JS files -->
    <script src="/assets/dashboard/global/js/plugins/visualization/d3/d3.min.js"></script>
    <script src="/assets/dashboard/global/js/plugins/visualization/d3/d3_tooltip.js"></script>
  

    
    <script src="/assets/dashboard/RTL/js/app.js"></script>

    <script>var langs = "{{ App()->getLocale()}}"</script>
    <title>Laravel</title>

</head>

<body>
<div id="app">
<master></master>
</div>
<script src="/js/app.js"></script>
</body>

</html>
