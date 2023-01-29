---
id: jars
title: Server Jars
slug: /jars
hide_title: true
hide_table_of_contents: true
sidebar_label: Server Softwares
description: This guide will help you choose which jar to use.
keywords:
  - Spigot
  - Paper
  - Bukkit
  - Tuinity
  - Forge
  - Fabric
  - Purpur
  - Airplane
  - Pufferfish
  - Server Jars
  - Minecraft
  - Modded Server Jars
  - Plugin Server Jars
  - Bloom.host
  - Minestom 
image: https://bloom.host/assets/images/logo.png
---

<div class="text--center">
<img src="https://bloom.host/logo-white.svg" alt="logo" height="50%" width="50%"/>
<h1>Server Jars</h1>
</div>

## Recommended Software:

 ### [Paper](https://papermc.io/)
 Paper is a [fork](https://en.wikipedia.org/wiki/Fork_(software_development)) of Spigot and aims to have better performance and stability. It also has an expanded API, allowing plugins to become even faster. This jar is highly recommended as it fixes exploits, bugs, and more as well as it greatly improves performance and stability of any Minecraft server.  
 Paper works with Bukkit and Spigot plugins and is the recommended default jar.

---

## Modded Minecraft:
### [Forge](https://files.minecraftforge.net/) ([Installation Guide](forge-setup))
Forge is a jar that adds a modding API for developers to tap into. It is much more expansive than Bukkit, as players also have to install mods on their end, allowing for more possibilites. It's recommended for mods and modpacks. Mostly used for older versions of the game. (pre1.12)


 
### [Fabric](https://fabricmc.net/) ([Installation Guide](fabric-setup))
Fabric is a jar that makes modding easier and smoother than Forge. Fabric is considered superior to Forge due to a better API that is more documented. It's mostly used for more modern versions of the game.   
Fabric, with a few performance mods added, is recommended if you want to run a modern technical MC server.

---

## Other popular options: 

:::warning
Some popular Jars such as Sponge attempt to merge Bukkit and Forge to allow the use of Plugins and Mods in the same enviorment, while popular these implementations can end up combining the issues of both server types and be unstable as a result.
:::

### [Vanilla](https://www.minecraft.net/en-us/download/server)
Vanilla is the jar provided by Mojang to run Minecraft servers. This is the bare minimum for servers with no plugin API for plugins to hook into or a modding API like forge. It is not optimized and only recommended for small groups of friends who want to play plain vanilla.



### [Bukkit](https://bukkit.org/)
Bukkit is an open source but defunct jar that was used in the early days of Minecraft plugin development. In 2014, Bukkit Project lead Warren Loo announced the end of the Bukkit project. The project was then DMCA'd by a former developer causing massive amounts of code to no longer be apart of Bukkit. If you want to learn the whole situation, read [Justin Flory blog post](https://blog.jwf.io/2020/04/open-source-minecraft-bukkit-gpl/) about it. CraftBukkit is a continuation that is still supported by Spigot, but is not recommended for servers as it's old and rarely recieves updates. 



### [Spigot](https://www.spigotmc.org/)
Spigot is a fork of Bukkit that began in 2012. After Bukkit defuncted, it became the new standard as Bukkit plugins could all run on Spigot. Spigot is not recommended anymore as Paper has far surpassed it in performance and options.

### [Pufferfish](https://github.com/pufferfish-gg/Pufferfish)
"A highly optimized Paper fork designed for large servers requiring both maximum performance, stability, and "enterprise" features."  
Pufferfish is a fork of paper (and as such also includes all of the improvements paper adds) that aims to add even more performance optimizations over paper. It includes every change that airplane used to have. And adds some of its own changes too.



### [Purpur](https://purpurmc.org/)
"Purpur is a drop-in replacement for Paper servers designed for configurability and new, fun, exciting gameplay features.
"  
Purpur aims to make your server more configurable, it adds **a lot** of fun or useful (all off by default) [configuration options](https://purpurmc.org/docs/Configuration/) to your server, it adds these on top of the paper and pufferfish improvements.



### [Sponge](https://www.spongepowered.org/)
 Sponge is an API designed to be an overhaul of the Bukkit API, it also allows you to run Forge mods together with Sponge plugins. It doesn't run Bukkit or any of its fork plugins. Currently, Sponge is on version 1.12.2 and is recommended for if you want modpacks and plugins together as smoothly as possible.
 

 
### [Minestom](https://minestom.com/)
"Minestom is a complete rewrite of Minecraft server software, open-source and without any code from Mojang."  
Minestom is a *very* experimental developer API not meant to be used by end-users. Replacing Paper with this will not work since it does not implement the Bukkit API. It's very fast and can handle a lot of players. Only try if you like tinkering with code and are prepared to put in the work.
 

---

## Deprecated Server Software

:::warning
The server software mentioned in this section are no longer updated and are not recommended for use on your servers; however they are kept here for reference purposes.
:::

### [Airplane](https://airplane.gg/)
~~"A stable, optimized, well supported 1.16.5 & 1.17 Paper fork."  
Airplane is a fork of paper (and as such also includes all of the improvements paper adds) that aims to add even more performance optimizations over paper.~~  
Airplane isn't being updated to modern versions of the game.

It is recommended that an alternative JAR such as [Purpur](#purpur) or [Pufferfish](#pufferfish) should be used.

### [Tuinity](https://github.com/Spottedleaf/Tuinity)
~~Tuinity is a high performance fork of paper (and as such also includes all of the improvements paper adds) that brings more performance changes for servers to play around with. It can greatly increase TPS, allowing a smoother experience, especially on bigger servers.~~
Tuinity has now been merged into [Paper](#paper) with all of its improvements and optimizations, and as such Tuinity as a jar is now obsolete. 

---
