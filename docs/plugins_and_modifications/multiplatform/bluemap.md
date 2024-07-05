---
id: bluemap
title: BlueMap 
slug: /multiplatform/bluemap
hide_table_of_contents: false
sidebar_label: BlueMap
description: BlueMap is a program which shows a fully 3D map of your Minecraft worlds in a webpage that can be easily accessed by a player.
keywords:
  - BlueMap
  - Map
  - Plugin
  - Mod
  - Google Earth
  - Google Maps
  - Streetview
  - Google Street view
  - Website
  - Spigot
  - Paper
  - Fabric
  - Forge
  - NeoForge
  - neo Forge
  - Sponge
  - CLI
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
---

## What does BlueMap do?
BlueMap is a program that reads your Minecraft world files and generates not only a map, but also full 3D-models of the whole surface.
With the web-app you then can look at those in your browser and basically view the world as if you were ingame!
Or just look at it from far away to get an overview.

It's an alternative to Dynmap or Squaremap, but unlike those, it is _fully_ 3D. You can orbit around everywhere, and fly through the world like spectator mode.


# Usage
Download BlueMap for your platform and install it like any other plugin/mod.
Config files for it will be generated in the `plugins/BlueMap` (plugin) directory or the `config/BlueMap` (modded) directory, depending on your platform.

Once it's installed, go to the `core.conf` file, and accept the EULA by setting the `accept-download` option to `true`.

:::tip

By default, BlueMap will use an internal web server. It is recommended you don't change that unless you know what you are doing.

:::

In the webserver.conf file, you can set the port you wish to use for your BlueMap. By default it is set to `8100`, but you may want to change it to something else.
You can do that by opening it and modifying the following line:

```
port: 8100
```

After you have decided on a port, proceed to the Ports & Proxies tab on the panel. Here you will see all your open ports, click `Create Allocation` on the bottom right to open a new one.
Enter the port number that is specified in `webserver.conf` and save.

:::note

Your server needs to be restarted after the port has been allocated.

:::

You can also create a Proxy for your BlueMap link, to remove the need to type `:8100` after your IP address: /ports-and-proxies/

For more information, the download link, their support Discord, the wiki and a demo! you can go to the [BlueMap website](https://bluemap.bluecolored.de/)
