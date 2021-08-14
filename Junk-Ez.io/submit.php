<?php 
if(isset($_POST['submit'])){
    $to = "wastematesllc@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $fullName = $_POST['fullName'];
    $last_name = $_POST['last_name'];
    $subject = "New Driver Application";
    $subject2 = "Copy of your form submission";
    $form = $fullName . " wrote the following:" . "\n\n" . $_POST['form'];
    $message2 = "Here is a copy of your message " . $fullName . "\n\n" . $_POST['form'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$form,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $fullName . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>
