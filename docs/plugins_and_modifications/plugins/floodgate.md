---
id: floodgate
title: Floodgate
slug: /plugins/floodgate
hide_table_of_contents: true
sidebar_label: Floodgate
description: An addon plugin for GeyserMC, to allow all bedrock players to join java servers, without a java account
keywords:
  - Bedrock
  - Java
  - Floodgate
  - Floodgate Installation
  - Spigot
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
---

### What does the plugin do?

Floodgate allows Bedrock players to connect to Java servers running [GeyserMC](/plugins/geysermc), without a Java Edition account.

## Usage

[Download the plugin](https://ci.opencollab.dev/job/GeyserMC/job/Floodgate/job/master/lastSuccessfulBuild/artifact/spigot/build/libs/floodgate-spigot.jar) and upload the jar into your `plugins` folder. Restart or turn on the server. If you need help installing plugins, check out [this guide](/installing-plugins).  

Once you've installed the plugin, you will have to modify your GeyserMC config. in `/plugins/Geyser-Spigot/config.yml` (Plugin folder may be different) set `auth-type` to `floodgate`

After that, restart your server; Bedrock players should now be able to connect to your Java server, without a Java Edition account.  

### Note: If you're using Tebex, you will have to change `username-prefix` to `*`. This is currently the only one Tebex supports, that will not cause conflicts with Java Edition accounts. 

## Info
[Website](https://geysermc.org/)  

[Jenkins](https://ci.opencollab.dev/job/GeyserMC/job/Floodgate/job/master/)  

[Wiki](https://github.com/GeyserMC/Floodgate/wiki)
