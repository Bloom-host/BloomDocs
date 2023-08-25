---
id: squaremap
title: Squaremap 
slug: /multiplatform/squaremap
hide_table_of_contents: false
sidebar_label: Squaremap
description: Squaremap is a plugin/mod which shows a map of Minecraft worlds in a webpage that can be easily accessed by a player.
keywords:
  - Pl3xMap
  - Squaremap
  - Map
  - Plugin
  - Mod
  - Google Earth
  - Google Maps
  - Website
  - Spigot
  - Fabric
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
---

## What does Squaremap do?
Squaremap allows you to see your Minecraft world in 2D in real time in a browser, like Google Maps. It's an alternative to Dynmap or Bluemap, however it uses way less storage and is significantly faster. The tradeoff being that there is no 3D or isometric view.


# Usage
Download Squaremap for your platform and install it. A file named `config.yml` among other files will be generated in the `/squaremap` folder. This file contains options to customise the appearance of your map as well as the web server your map will be on. 

:::tip

By default, Squaremap will use an internal web server. It is recommended you don't change that unless you know what you are doing.

:::

open the config.yml file and search for the following lines:

```
  internal-webserver:
    enabled: true
    bind: 0.0.0.0
    port: 8080
```

Here, you can set the port you wish to use for your Squaremap . By default it is set to `8080` but you need to change to something higher of your choice!

:::important

Your port must be between 8100-25600 in order to open it on the Bloom DuckPanel!

:::

After saving your `config.yml` proceed to the Ports & Proxies tab on the panel. Here you will see all your open ports, click `Create Allocation` on the bottom right to open a new one.
Enter the port number you specified earlier in `config.yml` and save.

:::note

Your server needs to be restarted after the port has been allocated.

:::

For more information, the download link, their support discord, the wiki and a demo! you can go to the [Squaremap Github page](https://github.com/jpenilla/squaremap)
