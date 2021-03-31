---
id: spigot-plugins
title: Spigot Plugins
hide_title: true
hide_table_of_contents: false
sidebar_label: Spigot Plugins
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
# Installing Plugins

#### ⚠ Warning: 
This tutorial assumes you're using [Bukkit](https://bukkit.org) (or a fork of it, such as [Spigot](https://spigotmc.org) or [Paper](https://papermc.io)). - If you are not sure which to use, be sure to check out our [server jars](serverjars.md) document!

### What are plugins?
> 
> Plugins are addons you can use on your server to modify certain aspects of the game. Depending on the plugin, these changes may wary from minor quality-of-life tweaks to complete gamemode-wide changes.

### How do I install them?
>
> You'll first need to find the plugin you wish to install. Downloads can be found on a variety of sites. Common places are [Spigot's Resource forums](https://spigotmc.org/resources) or the [Bukkit Dev](https://dev.bukkit.org) website. Make sure you trust the source of your downloads, as plugins have high-level access to your server.
>
> In any case, save the plugin to your local machine. Plugins can either be uploaded via the [File Manager](file-manager-controls.md) or through [SFTP](how-to-use-sftp.md). If you're uploading in bulk, go with the latter.
>
> In your server's root directory, locate the `/plugins` folder, if it's not there then create a new directory named `/plugins`. Navigate into this folder, and upload your plugin's file there! Most plugins will require you to restart your server before they take effect.

### I installed a plugin, but it doesn't work.
>
> In quite a few cases, plugins may not load. There is a lot we can try to see what happened. 
>
> #### > Did you reboot the server?
> In most cases, you'll have to reboot the server (not `/reload`!) for these changes to take effect. 
> 
> #### > Did the plugin successfully load?
> When the server is starting, look out for any error messages in the console. If you are having trouble debugging these errors, be sure to ask for help on our [Discord server](https://discord.gg/bloom)!
>