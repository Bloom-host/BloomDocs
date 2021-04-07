---
id: pl3xmap
title: Pl3xmap
hide_title: true
hide_table_of_contents: false
sidebar_label: Pl3xmap
description: Pl3xmap is a plugin which shows a map of Minecraft worlds in a webpage that can be easily accessed by a player.
keywords:
  - Pl3xmap
  - Map
  - Plugin
  - Google Earth
  - Google Maps
  - Website
  - Spigot
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
image: https://bloom.host/assets/images/logo.png
---
# **Pl3xmap**

## What does the plugin do?
Pl3xmap allows you to see your Minecraft world in 2D in real time, like Google Maps. This plugin is most alike to Dynmap, however uses less storage with the trade off of a lower quality map. 

![img](../../static/img/pl3xmap/map.png)

# Usage
Download the Pl3xmap plugin and place into the `plugins` folder then restart your server. A file named `config.yml` among other files will be generated in the `/pl3xmap` folder. This file contains options to customise the appearance of your map as well as the web server your map will be on. 

:::tip

By default, pl3xmap will use an internal web server. It is recommended you stay with the internal web server unless you know what you are doing.

:::

Once you see your `config.yml` file generated, enter the file and find the following options featured below.

```
  internal-webserver:
    enabled: true
    bind: 0.0.0.0
    port: 8080
```

Here, you can set the port you wish to use for your pl3xmap to be served on. By default, you can see it is `8080` but you need to change to something higher of your choice!

:::important

Your port must be between 8100-25600 in order to open it on the Bloom DuckPanel!

:::

Once you have selected your port, save your `config.yml` file and restart the server, after this proceed to open your Bloom DuckPanel and navigate to the Ports & Proxies tab on your server. Here you will see all open ports, click Create Allocation on the bottom right to open a pop up, here enter the port number you specified earlier in `config.yml` and click Create Allocation on the pop up to save.

:::note

Your server needs to be restarted after the port has been allocated.

:::

## Info

[pl3xmap Download](https://ci.pl3x.net/job/Pl3xMap/)  

[pl3xmap Discord](https://discord.com/invite/mtAAnkk )  

[pl3xmap Wiki](https://github.com/pl3xgaming/Pl3xMap/wiki )
