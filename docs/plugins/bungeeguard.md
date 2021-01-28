---
id: bungeeguard
title: BungeeGuard
hide_title: true
hide_table_of_contents: false
sidebar_label: BungeeGuard
description: A plugin that protects against BungeeCord's UUID spoof exploit.
keywords:
  - Bungee
  - BungeeCord
  - Java
  - Spigot
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
image: https://bloom.host/assets/images/logo.png
---
# BungeeGuard

### What does the plugin do?

BungeeGuard is a plugin used to protect against BungeeCord's UUID spoof exploit which allows users to join without authenticating through the BungeeCord proxy, allowing them to join as any user.  

## Usage

:::important
Make sure your BungeeCord is on the latest version. Also, make sure to use version 1.2 or later of BungeeGuard as previous versions have an issue.
:::

[Download the plugin](https://ci.lucko.me/job/BungeeGuard/lastBuild/artifact/bungeeguard-universal/target/BungeeGuard.jar) then upload the jar into both your BungeeCord and Spigot `plugins` folder. Restart the servers. If you need help installing plugins, check out [this guide](https://docs.bloom.host/bukkit-plugins).  

After you have restarted the servers you installed BungeeGuard on, enter the `config.yml` file located in your BungeeCord's BungeeGuard directory and copy the authentication token. Paste this authentication token into the `config.yml` file within your Spigot servers' BungeeGuard directory.  

Example configuration:
```YAML
# Allowed authentication tokens.  
allowed-tokens:
  - "AUSXEwebkOGVnbihJM8gBS0QUutDzvIG009xoAfo1Huba9pGvhfjrA21r8dWVsa8"
```

Now, restart all your servers you installed BungeeGuard on and test to see if it's properly working!  

## Info
[Jenkins](https://ci.lucko.me/job/BungeeGuard/)  

[Wiki](https://github.com/lucko/BungeeGuard)
