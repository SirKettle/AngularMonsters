<?php

// Simple tweak to allow access from any origin
// Credits to http://stackoverflow.com/questions/8719276/cors-with-php-headers
//
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
}

///////////////////////////////////////
// SETUP //////////////////////////////
///////////////////////////////////////

// API credentials
//
$apikey = "2rer892vj4hphasrr5kunc9s";

// Number of items in response 
$returnitems = 5;

$url = "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?page_limit=".$returnitems."&page=1&country=uk&apikey=".$apikey;

// Building string for GET request
//
$requeststr = $url;

// CURL for communicating with web service
//
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $requeststr);
curl_setopt($ch, CURLOPT_VERBOSE, 1);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

$response = curl_exec($ch);
echo $response;
?>