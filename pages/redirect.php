<?php
// Add your Bitly client ID and secret here
$clientID = 'YOUR_BITLY_CLIENT_ID';
$clientSecret = 'YOUR_BITLY_CLIENT_SECRET';

// Function to make a POST request to Bitly API
function callBitlyAPI($url, $data) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
    $result = curl_exec($ch);
    curl_close($ch);
    return $result;
}

// Check if Bitly authorization code is provided in the URL
if (isset($_GET['code'])) {
    $authCode = $_GET['code'];

    // Exchange the authorization code for an access token
    $accessTokenURL = 'https://api-ssl.bitly.com/oauth/access_token';
    $accessTokenData = array(
        'client_id' => $clientID,
        'client_secret' => $clientSecret,
        'code' => $authCode,
    );

    $accessTokenResponse = callBitlyAPI($accessTokenURL, $accessTokenData);
    $accessToken = json_decode($accessTokenResponse, true)['access_token'];

    // Save the access token to use in your extension
    // You can store it in a database or session as needed
    // For this example, we'll just print it for demonstration purposes
    echo "Access Token: " . $accessToken;
} else {
    // Redirect the user back to your extension with an error message if no code is provided
    header('Location: YOUR_EXTENSION_URL?error=1');
    exit;
}
