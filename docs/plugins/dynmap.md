---
id: dynmap
title: Dynmap
hide_title: true
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
  - BloomVPS
  - Pterodactyl Panel
  - Minecraft
image: https://bloomvps.com/assets/images/logo.png
---
# **Dynmap**

## Info

[Dynmap Spigot](https://www.spigotmc.org/resources/dynmap.274/)

[Dynmap Reddit](https://www.reddit.com/r/Dynmap/)

[Dynmap Discord](https://discord.gg/U9aXXUw)

[Dynmap Wiki](https://github.com/webbukkit/dynmap/wiki)

## What does the plugin do?
Allows you to see your Minecraft world in 3D in real time, Like google maps and accessible from anywhere.
![Dynmap preview](https://cdn.discordapp.com/attachments/716405933105872938/750877749954084875/unknown.png)
# Usage
Download the Dynmap plugin and place into the **`plugins`** folder then restart your server to generate the **`configuration.txt`**, then create a MySQL database. if you are unsure [check out this guide!](https://docs.bloomvps.com/databases)

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
Now go into the BloomVPS discord and open a Support ticket and request that the Dynmap port to be opened on your server.  [join here!](https://discord.com/invite/bloom)

You can also request your Dynmap IP to be added to Blooms reverse proxy changing the website link from `123.456.67.2:8123` to `subdomain.yourdomain.com`, please read [this guide!](https://docs.bloomvps.com/reverse-proxy)

# Rendering a map
when you open up your dynmap for the first time it will be black because it has not been rendered yet, here is how to do this

First you need to pregenerate your chunks, if you want a plugin to do this, checkout [this guide!](https://docs.bloomvps.com/plugins/chunky)

once you have pregenerated your chunks you need to run the command

    /dynmap fullrender
   ![](https://cdn.discordapp.com/attachments/716405933105872938/750997843950698526/unknown.png)
this will run a full render of the world your currently on,  This will take a **really** long time to render depending on the `configuration.txt`

    deftemplatesuffix: hires

After a while, your map will be rendered and thats it!


