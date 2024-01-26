<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $tel = $_POST['tel'];
  $message = $_POST['message'];

  $to = 'katya.nikadimova@mail.ru'; // Замените на ваш email
  $subject = 'Новое сообщение с формы обратной связи';
  $message = "Имя: $name\nEmail: $email\nТелефон: $tel\nСообщение: $message";

  mail($to, $subject, $message);
  
  // Перенаправление на исходную страницу
  header('Location: index.html');
  exit();
}