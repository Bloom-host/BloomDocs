---
id: whichsoftwaretouse
title: Different server jars and which one is right for you
hide_title: true
hide_table_of_contents: false
sidebar_label: Server jars and which one to use
description: This guide will help you add choose which jar to use.
keywords:
  - Spigot
  - Paper
  - Bukkit
  - Tunity
  - Forge
  - Fabric
  - Yatopia
  - Akarin
  - Purpur
  - Origami
  - NachoSpigot
  - Magma
  - Server Jars
  - Minecraft
  - Modded Server Jars
  - Plugin Server Jars
  - Bloom.host
image: ../static/img/WhichSoftwaretoUse/WhichSoftwaretoUse1.png
---
# Which jar to use?
Hey there Bloomers! In this guide, we will go over which jar is right for your server. The overall recommended jars would be Paper as it's the most stable of the jars and it has a reputation of being great.

## [Paper](https://github.com/PaperMC/Paper)
Paper is a fork of Spigot and aims to have better performance and stability. It also has an expanded API, allowing plugins to become even faster. This jar is highly recommended as it fixes exploits, bugs, and more as well as it greatly improves performance and stability of any Minecraft server. 

## [Tuinity](https://github.com/Spottedleaf/Tuinity)
Tunity is a fork of paper that brings more experimental changes for servers to play around with. It is known to increase TPS on high player count servers, allowing a smoother experience on bigger servers.

## [Spigot](https://www.spigotmc.org/)
Spigot is a [fork](https://en.wikipedia.org/wiki/Fork_(software_development)) of Bukkit that began in 2012. After Bukkit began defunct, it became the new standard as Bukkit plugins could all run on Spigot. Spigot is the most commonly used jar, and as of 8/17, [49% of Minecraft servers use Spigot](https://bstats.org/plugin/bukkit/_bukkit_/1).

## [Forge](https://files.minecraftforge.net/)
Forge is a jar that adds a modding API for developers to tap into. It is much more expansive than Bukkit, as players also have to install mods on their end, allowing for more possibilites. It's recommended for mods and modpacks.

## [Sponge](https://www.spongepowered.org/)
Sponge is a API designed to be an overhaul of the Bukkit API that allows you to run Forge as well as plugins. It doesn't run Bukkit or any of its fork plugins. Currently, Sponge is on version 1.12.2 and is recommended for if you want modpacks and plugins together as smoothly as possible.

## [Fabric](https://fabricmc.net/)
Fabric is a jar that makes modding easier and smoother than Forge. Fabric is considered superior to Forge due to a better API that is more documented. However, it has less mods to play around with. 

## [Bukkit](https://bukkit.org/)
Bukkit is an open source but defunct jar that was used in the early days of Minecraft plugin development. In 2014, Bukkit Project lead Warren Loo announced the end of the Bukkit project. The project was then DMCA by a former developer causing massive amounts of code to no longer be apart of Bukkit. If you want to learn the whole situation, read [Justin Flory blog post](https://blog.jwf.io/2020/04/open-source-minecraft-bukkit-gpl/) about it. BukkitCraft is a continuation that is still supported by Spigot, but is not recommended for servers as it's old and rarely recieves updates.

### [Akarin](https://github.com/Akarin-project/Akarin)
Akarin is a jar that focuses on multi-threading Minecraft. It has so far been unstable and it not recommended for use on production servers.

### [Purpur](https://github.com/pl3xgaming/Purpur)
Purpur is a fork of paper that aims to bring more gameplay changes to Minecraft, such as driveable Minecarts.

### [Origami](https://github.com/Minebench/Origami)
Origami is a paper fork which has several performance enhancements to it.

### [NachoSpigot](https://github.com/CobbleSword/NachoSpigot)
NachoSpigot is a open source fork of paper that aims to bring patches from later Paper versions to Minecraft 1.8.

### [Magma](https://magmafoundation.org/)
Magma is a jar that integrates Forge and Paper jars, allowing you to run Bukkit and its forks plugins with mods. It is considered unstable and is not recommended to use unless you know what you are doing.

## [Vanilla](https://www.minecraft.net/en-us/download/server)
Vanilla is the jar provided by Mojang to run Minecraft servers. This is the bare minimum for servers with no plugin API for plugins to hook into or a modding API like forge. It is not greatly optimized and only recommended for small groups of friends who want to play plain vanilla.
