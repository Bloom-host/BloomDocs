---
id: dynmap
title: Dynmap
slug: /multiplatform/dynmap
hide_table_of_contents: false
sidebar_label: Dynmap
description: Dynmap is a plugin which shows a map through a webpage, allowing players to be able to see the map from their web browser.
keywords:
  - Dynmap
  - Map
  - Dynmap
  - Plugin
  - Google Earth
  - Google Maps
  - Website
  - Spigot
  - Forge
  - Fabric
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
---

## What does the plugin do?
Dynmap allows you to see your Minecraft world in 3D in real time, like Google Maps.  

![Dynmap preview](https://cdn.discordapp.com/attachments/716405933105872938/750877749954084875/unknown.png)  

# Usage
Spigot/Paper: Download the Dynmap plugin and place into the `plugins` folder then restart your server to generate `configuration.txt`. Create a MySQL database. If you are unsure, [check out this guide](/databases).

For other platforms, refer to the [Dynmap installation guide](https://github.com/webbukkit/dynmap/wiki/Installation)

Now enter the database information into this section remembering to remove the `#`
(Note: Don't enter the information below enter the information from your MySQL database)  

```YAML
    storage:
    type: mysql
     hostname: 123.456.67.2
     port: 3306
     database: s123_dynmap
     userid: u12323402
     password:  123456789
```
Now go into the minecraft panel, click the "Ports & Proxies" tab, and create a new port. You will be able to choose a port that you want to use and enter the port number you just opened into the config file.

You can also add your Dynmap IP to Bloom's reverse proxy(on the sidebar of the panel,), changing the website link from `123.456.67.2:8123` to `subdomain.yourdomain.com`. Please read [this guide](/ports-and-proxies/).  

## Info

[Dynmap Spigot](https://www.spigotmc.org/resources/dynmap.274/)  

[Dynmap Reddit](https://www.reddit.com/r/Dynmap/)  

[Dynmap Discord](https://discord.gg/U9aXXUw)  

[Dynmap Wiki](https://github.com/webbukkit/dynmap/wiki)
