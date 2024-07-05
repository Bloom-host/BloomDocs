---
id: motd
title: motd
slug: /motd
hide_table_of_contents: true
sidebar_label: How to change MOTD
description: How to change the MOTD that people see on the server list. 
keywords:
  - Overview
  - MOTD
  - Spigot
  - 1.16
  - Minecraft
  - Bloom.host
---

## How to change your MOTD without a plugin

First you need to write your MOTD, you can use [this website](https://mctools.org/motd-creator) to help you. Once  you have your MOTD like you want it, copy the `server.properties` code, like the one shown below
![server.properties](https://cdn.discordapp.com/attachments/716405933105872938/751221395622723715/unknown.png)
Open your server panel and head to File Explorer, if you need a hand, check out [this guide!](/file-manager-controls). Now, enter your `server.properties` and head to the motd section and paste the copied text where the old one was, then restart your server and your changes will be made.

## How to change your MOTD with ServerListPlus
ServerListPlus is a plugin that changes your MOTD through a plugin also adding features like custom MOTDs for seperate players. You can download it [here!](https://www.spigotmc.org/resources/serverlistplus.241/) 

Now download and place the plugin into your servers `plugins` folder and restart. once you have restarted head, into the ServerListPlus folder and open the `config.yml`. Now you can change the MOTD how you like. [this website](https://mctools.org/motd-creator) can help you make one shown below. ![enter image description here](https://cdn.discordapp.com/attachments/716405933105872938/751223535405629510/unknown.png)

## How to change your MOTD with MiniMOTD
MiniMOTD is a plugin (Spigot/Paper/BungeeCord/Velocity) or mod (Fabric/Sponge only) that changes your MOTD using the MiniMessage system and supports RGB (1.16+). You can download it [here!](https://www.spigotmc.org/resources/minimotd-server-list-motd-plugin-with-rgb-gradients.81254/) 

Now download and place the plugin into your servers `plugins` folder (or mods folder) and restart. once you have restarted head, into the MiniMOTD folder and open the `config.hocon`. Now you can change the MOTD how you like. [the MiniMessage docs](https://docs.adventure.kyori.net/minimessage/format.html#minimessage-format) can help you make one shown below. ![enter image description here](/running_a_server/motd/minimotd-1.png). MiniMOTD also has some advanced features such as multiple icons per MOTD and [different MOTDs per virutal hosts](https://github.com/jpenilla/MiniMOTD/wiki#advanced-configuration) (BungeeCord/Velocity only).

The [MiniMessage docs](https://docs.adventure.kyori.net/minimessage/format.html#minimessage-format) can help you to create the MOTDs and use more advanced features such as gradient colours as MiniMessage works differently to other plugins.

## How to change your MOTD on Bungeecord
Changing your MOTD on Bungeecord is slightly different. You can still use ServerListPlus or MiniMOTD, following the guide above, but if you want to do it without ServerListPlus or MiniMOTD, enter your Bungeecord `config.yml` and head to the MOTD 
you can use [this website](https://mctools.org/motd-creator) to help you like the one below.
![Bungeecord motd](https://cdn.discordapp.com/attachments/716405933105872938/751224804815667230/unknown.png)
