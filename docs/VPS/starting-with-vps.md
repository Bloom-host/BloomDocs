---
id: starting-with-vps
title: Getting Started with a VPS
hide_table_of_contents: false
sidebar_label: Getting Started
description: New to our VPS service and our panel? This guide will show you how to get started!
keywords:
  - Getting Started with a VPS
  - VPS
  - Virtual Private Server
---

Hey Bloomers! In this guide we will be going over how to get started with a VPS.

## What is a VPS?

A Virtual Private Server or a VPS is a virtual machine that allows you to do virtually anything. VPS on Bloom come by default with a bare Linux Command Line Interface (CLI) installation.

## Who is a VPS recommended for?

First off, we don't recommend VPS to people that have never used Linux. We provide dedicated Minecraft plans that come with Duck panel, an easy-to-use and highly customized panel that allows you to manage your Minecraft servers, and even allows you to set server split to host Discord bots, and many other type of servers.

We do recommend VPS to people that have experience with Linux and want full control of their server. As our dedicated Minecraft plans, our VPS also come with dedicated resources.

:::caution
A VPS is an unmanaged service. We do not provide support for installing or fixing things on your VPS. The only support Bloom provides is for issues related to the service itself: networking issues, issues connecting, issues with the panel, etc...

If you just want to host Minecraft servers we recommend our [Dedicated Minecraft Plans](https://bloom.host/minecraft)
:::

## How to get the credentials for your VPS and the panel

If you just ordered a VPS, you should've received an email titled "VPS created". This email contains the IP, username, root password and VNC details of your VPS.

You will also receive another email with a randomly generated password for our [VPS Panel](https://VPS.bloom.host). If you didn't received it, you can click the "Forgot Password?" button on the VPS panel sign in page.

![img](/VPS/starting-with-vps/1.png)

## Our VPS panel

Our VPS panel is under the VPS.bloom.host domain. Once you place a order, you will receive a randomly generated password to your email. If you didn't received the password, you can head to our [VPS panel](https://VPS.bloom.host) and click on the "Forgot Password?" button to reset your password.

To manage your VPS, just click on the arrow and it will open the management page.

![img](/VPS/starting-with-vps/4.png)

Via our panel you can perform power actions on your VPS, reset your password, reinstall your VPS or VNC into your VPS.

![img](/VPS/starting-with-vps/5.png)

## Connecting to your VPS via SSH

You need to connect to your VPS using SSH. For this you can either use an SSH client or the terminal. 

## How to connect to your VPS using PuTTY

You can download PuTTY from [putty.org](https://www.putty.org/)

![img](/VPS/starting-with-vps/0.png)

Start PuTTY, select the SSH option and then put your VPS IP in the Host Name (or IP address) field.

![img](/VPS/starting-with-vps/2.png)

After that, click on the "Open" button and the SSH connection will start, you will then be asked for a username. The default username is "Root", click enter and then you will be asked for the password. Keep in mind that the password is not shown and you do not see that you are typing but it its working, so just type your password and click on enter to connect.

![img](/VPS/starting-with-vps/3.png)

:::important
Need to connect to your VPS via VNC? Check out our guide here: [How to connect to your VPS via VNC](vnc.md)
:::
