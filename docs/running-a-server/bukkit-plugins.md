---
id: bukkit-plugins
title: Bukkit Plugins
hide_title: true
hide_table_of_contents: false
sidebar_label: Installing Spigot Plugins
description: How to install minecraft plugins on your server.
keywords:
  - Template
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
  - Spigot
  - Plugins
  - Bloom.host
image: https://bloom.host/assets/images/logo.png
---
# Installing Plugins on your server
:::note
This tutorial assumes you're using [Bukkit](https://bukkit.org) (or a fork of it, such as [Spigot](https://spigotmc.org) or [Paper](https://papermc.io)).
:::

You'll first need to find the plugin you wish to install. Downloads can be found on a variety of sites. Common places are [Spigot's Resource forums](https://spigotmc.org/resources) or the [Bukkit Dev](https://dev.bukkit.org) website. Make sure you trust the source of your downloads, as plugins have high-level access to your server.

In any case, save the plugin to your local machine. Plugins can either be uploaded via the [web panel](https://mc.bloom.host) or through [SFTP](https://docs.bloom.host/how-to-use-sftp). If you're uploading in bulk, go with the latter.

In your server's root directory, locate the `/plugins` folder, if it's not there then create a new directory named `/plugins`. Navigate into this folder, and upload your plugin's file there! Most plugins will require you to restart your server before they take effect.
