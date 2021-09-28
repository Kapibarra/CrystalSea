<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'php/PHPMailer-5.2.28/src/Exception.php';
require 'php/PHPMailer-5.2.28/src/PHPMailer.php';
require 'php/PHPMailer-5.2.28/src/SMTP.php';

$mail = new PHPMailer(true);
$mail_subject = 'Заявка с сайта';
$mail_to_email = 'nikita.nov2016@yandex.ru'; // your email
$mail_to_name = 'novikovweb.ru';

try {

	$mail_from_email = isset( $_POST['email'] ) ? $_POST['email'] : '';
	$mail_from_name = isset( $_POST['name'] ) ? $_POST['name'] : '';
	$mail_category = isset( $_POST['category'] ) ? $_POST['category'] : '';
	$mail_message = isset( $_POST['message'] ) ? $_POST['message'] : '';

	// Server settings
	$mail->isSMTP(); // Send using SMTP
	$mail->Host = 'smtp.yandex.com'; // Set the SMTP server to send through
	$mail->SMTPAuth = true; // Enable SMTP authentication
	$mail->Username = 'noviweb@yandex.ru'; // SMTP username
	$mail->Password = 'cf911313'; // SMTP password
	$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
	$mail->Port = 465; // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

	$mail->setFrom($mail->Username, 'Aquaroom.ru'); // Your email
	$mail->addAddress($mail_to_email, $mail_to_name); // Add a recipient на какой емейл отправить!! проверить!!!!

	for($ct=0; $ct<count($_FILES['file_attach']['tmp_name']); $ct++) {
		$mail->AddAttachment($_FILES['file_attach']['tmp_name'][$ct], $_FILES['file_attach']['name'][$ct]);
	}

	// Content
	$mail->isHTML(true); // Set email format to HTML

	$mail->Subject = $mail_subject;
	$mail->Body = '
		<strong>Category:</strong> ' . $mail_category . '<br>
		<strong>Name:</strong> ' . $mail_from_name . '<br>
		<strong>Email:</strong> ' . $mail_from_email . '<br>
		<strong>Message:</strong> ' . $mail_message;
	$mail->Send();

	echo 'Message has been sent';

} catch (Exception $e) {

	echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";

}