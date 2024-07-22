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

One of the biggest choices to make before you even start optimizing is choosing the server jar you want to use.

There are a lot of options you can choose from, but for simplicity's sake we're just going to outline the two best known "paths", the bukkit platform, and fabric. See our [Server Jars](/jars) page if you want to know more.

The gist of it is the bukkit platform is generally recommended for bigger public servers and fabric for smaller servers with friends.  
The bukkit platform allows you to use plugins, and fabric allows you to run mods.

For the Bukkit platform you have many options for a server jar, the most stable of which is [Paper](https://papermc.io). Paper includes many performance improvements, bug fixes and configuration options. If you want additional performance tweaks, but may break the more technical mechanics, or quality of life tweaks try [Purpur](https://purpurmc.org/downloads).
For Fabric check our [Fabric Setup](/fabric-setup) page. Fabric by itself doesn't change the game at all, to get performance improvements check out our [Fabric Performance Mods](../plugins_and_modifications/fabric_mods/performance-mods.md) page.

---
## Guides to optimize your server
There are **many** different options you can utilize to change your servers gameplay and performance. 

**We recommend checking out https://github.com/YouHaveTrouble/minecraft-optimization for an in depth guide on how to optimize your server.** 

Remember that each server is be different, and that *you* have to decide for yourself which features you want to change. **Don't blindly copy paste values ;)**

You can also check this [guide](https://paper-chan.moe/paper-optimization/) which goes way more in depth of what each option does and how each one may affect your server.

---

## What to avoid:

Plugins that promise to fix your lag often end up doing the opposite, stay away from plugins like Clearlagg! - Plugins like these will promise to do things like removing entities. This will in fact help with lag, for a short bit. But your server will immediately try to spawn more entities again, which just results in more lag!  
What you should do instead, is change your server options and just lower the max entities allowed.

An analogy `by BillyGalbreath`:  
> Lets say IRL you are tasked with keeping 50 trees (pretend these are your entities in game) in your yard, but some guy (clearlagg) comes around every 5 minutes and chops them all down. its your job to make sure there's always 50 trees there at a MINIMUM. so you have to go plant more. then mr clearlagg comes along 5 minutes later and chops them down again. (rinse and repeat)  
Same could be said about any mob stacking plugins. imagine you have to keep 50 trees in your land, but some other guy (mob stacker) deletes 49 of them and puts a sign on that 1 remaining that says "x50". theres really only 1 tree there, and you still have to keep a MINIMUM of 50, so you plant 49 more.

---
