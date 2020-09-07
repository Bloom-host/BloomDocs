---
id: setting-up-forge
title: Setting up Forge
hide_title: true
hide_table_of_contents: false
sidebar_label: Setting up Forge
description: This guide will help you setup Forge on your Minecraft server
keywords:
  - BloomVPS
  - Forge
  - Minecraft
  - Modded
---
Hey there Bloomers! In this guide, we will go over how to setup Forge on your Minecraft server.

To begin installing Forge, head over to their website to download their installer and launch the jar file. Have it open up in an empty directory and hit install server. Have something like the screenshot below.

![BloomVPS Forge](../static/img/setting-up-forge/forge2.png)

After you have installed it, head over to an [SFTP client](https://docs.bloom.host/how-to-use-sftp) such as FileZilla and uplaod everything inside your folder to your server.

Next, rename your forge-xxx file to server.jar or go to Startup Parameters and change the Server Jar File.

Restart your server and let the files generate. This may take a few minutes. 

A new folder will appear named `mods`. Place any jars of mods you want in here and restart. Make sure you also have the mods if needed. Then, login to the server!

In the end, it should look like this: 

![BloomVPS Forge](../static/img/setting-up-forge/forge3.png)
