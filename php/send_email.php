<?php
$response = array();

// Get data from form
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = "fingerhutrachel@gmail.com";
$subject = "Mail From website";
$txt = "Name = " . $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@yoursite.com" . "\r\n" . "CC: somebodyelse@example.com";

if ($email != NULL) {
    if (mail($to, $subject, $txt, $headers)) {
        $response['success'] = true;
    } else {
        $response['success'] = false;
    }
} else {
    $response['success'] = false;
}

// Set header for JSON response
header("Content-Type: application/json");

// Output JSON-encoded response
echo json_encode($response);
?>