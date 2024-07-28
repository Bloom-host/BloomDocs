---
id: optimization
slug: /optimization
title: Paper Server Optimization
hide_table_of_contents: true
sidebar_label: Server Optimization
description: How to optimize your minecraft server.
keywords:
  - Template
  - Paper
  - Fabric
  - Lag
  - Server
  - Server Optimization
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
---


Since 1.13, Minecraft servers have gotten progressively harder to run.
There are a few ways to make your server run better, we will be outlining some here.

But first, it's good to note that a "perfect" optimization guide does not exist, most optimization changes include changing or removing gameplay features. Each server will be different, *you* have to decide how much you want to change and sacrifice for performance.  

If you have performance headroom you might even want to do the opposite! For example, maybe you want an extra high view distance because you think it looks cool.

---  

## Choosing a Server JAR

The most significant choice to make before you even start optimizing is picking the server jar you want to use.

There are a lot of options you can choose from, but for simplicity's sake we're just going to outline the two best known "paths", the bukkit platform, and fabric. See our [Server Jars](/jars) page if you want to know more.

The gist of it is the bukkit platform is generally recommended for bigger public servers and fabric for smaller servers with friends.  
The bukkit platform allows you to use plugins, and fabric allows you to run mods.

For the Bukkit platform you have many options for a server jar, the most stable of which is [Paper](https://papermc.io). Paper includes many performance improvements, bug fixes and configuration options. If you want additional configuration options along with getting the latest stable patches early [Purpur](https://purpurmc.org/downloads) might be for you.

For Fabric check our [Fabric Setup](/fabric-setup) page. Fabric by itself doesn't change the game at all, to get performance improvements check out our [Fabric Performance Mods](../plugins_and_modifications/fabric_mods/performance-mods.md) page.

---
## Guides to optimize your server
There are **many** different options you can utilize to change your servers gameplay and performance. 

**We recommend checking out https://paper-chan.moe/paper-optimization/ for an in depth guide on how to optimize your server.** 

Remember that each server is be different, and that *you* have to decide for yourself which features you want to change. **Don't blindly copy paste values ;)**

You can also check this [guide]( https://github.com/YouHaveTrouble/minecraft-optimization) if you would prefer something less heavy on the details. 

---

## What to avoid:

Plugins that promise to fix your lag often end up doing the opposite, stay away from plugins like Clearlagg! - Plugins like these will promise to do things like removing entities. This will in fact help with lag, for a short bit. But your server will immediately try to spawn more entities again, which just results in more lag!  
What you should do instead, is change your server options and just lower the max entities allowed.

---
