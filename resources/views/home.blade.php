<!--
**this page Entry point of our application
-->
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="rtl">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Global stylesheets -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet"
        type="text/css">
    <link href="/assets/dashboard/icons/icomoon/styles.css" rel="stylesheet" type="text/css">
    <link href="/assets/dashboard/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="/assets/dashboard/css/bootstrap_limitless.min.css" rel="stylesheet" type="text/css">
    <link href="/assets/dashboard/css/layout.min.css" rel="stylesheet" type="text/css">
    <link href="/assets/dashboard/css/components.min.css" rel="stylesheet" type="text/css">
    <link href="/assets/dashboard/css/colors.min.css" rel="stylesheet" type="text/css">
    <!-- /global stylesheets -->

    <!-- Core JS files -->
    <script src="/assets/dashboard/js/main/jquery.min.js"></script>
    <script src="/assets/dashboard/js/main/bootstrap.bundle.min.js"></script>
    <script src="/assets/dashboard/js/plugins/loaders/blockui.min.js"></script>
    <!-- /core JS files -->

    <!-- Theme JS files -->
    <script src="/assets/dashboard/js/plugins/visualization/d3/d3.min.js"></script>
    <script src="/assets/dashboard/js/plugins/visualization/d3/d3_tooltip.js"></script>
    <script src="/assets/dashboard/js/plugins/forms/styling/switchery.min.js"></script>
    <script src="/assets/dashboard/js/plugins/forms/selects/bootstrap_multiselect.js"></script>
    <script src="/assets/dashboard/js/plugins/ui/moment/moment.min.js"></script>
    <script src="/assets/dashboard/js/plugins/pickers/daterangepicker.js"></script>

    <script src="/assets/dashboard/js/app.js"></script>
    <script src="/assets/dashboard/js/dashboard.js"></script>
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
