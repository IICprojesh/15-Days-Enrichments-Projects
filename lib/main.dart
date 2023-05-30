import 'package:first/login.dart';
import 'package:first/register.dart';
import 'package:first/home.dart';
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    initialRoute: 'login',
    routes: { 
      'login': (context) => const MyLogin(),
      'register': (context) =>const MyRegister(),
      'home': (context) =>  MyHome(),
    },
  ));
}