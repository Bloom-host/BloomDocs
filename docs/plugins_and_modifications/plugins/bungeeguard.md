---
id: bungeeguard
title: BungeeGuard
slug: /plugins/bungeeguard
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

<div class="text--center">
<img src="https://bloom.host/logo-white.svg" alt="logo" height="50%" width="50%"/>
<h1>BungeeGuard</h1>
</div>

### What does the plugin do?

BungeeGuard is a plugin used to protect against BungeeCord's UUID spoof exploit which allows users to join without authenticating through the BungeeCord proxy, allowing them to join as any user.  

## Usage

:::important
Make sure your BungeeCord is on the latest version. Also, make sure to use version 1.2 or later of BungeeGuard as previous versions have an issue.
:::

[Download the plugin](https://ci.lucko.me/job/BungeeGuard/lastBuild/artifact/bungeeguard-universal/target/BungeeGuard.jar) then upload the jar into both your BungeeCord and Spigot `plugins` folder. Restart the servers. If you need help installing plugins, check out [this guide](/installing-plugins).  

After you have restarted the servers you installed BungeeGuard on, enter the `config.yml` file located in your BungeeCord's BungeeGuard directory and copy the authentication token. Paste this authentication token into the `config.yml` file within your Spigot servers' BungeeGuard directory.  

Example configuration:
```YAML
# Allowed authentication tokens.  
allowed-tokens:
  - "AUSXEwebkOGVnbihJM8gBS0QUutDzvIG009xoAfo1Huba9pGvhfjrA21r8dWVsa8"
```
Now, restart all your servers you installed BungeeGuard on and test to see if it's properly working!  
### BungeeGuard on Velocity
You can use BungeeGuard on Velocity if you are unable to use modern forwarding for any reason.

Follow these steps to get BungeeGuard running on Velocity:

:::important
Velocity has the BungeeGuard code built-in, so there’s no need to install the BungeeGuard plugin on the Velocity proxy.
:::

:::warning
BungeeGuard forwarding must be enabled in your `spigot.yml`. You cannot have modern forwarding and BungeeCord legacy forwarding enabled at the same time.
To enable BungeeCord forwarding mode correctly you must:
- have `settings.bungeecord` set to `true` in `spigot.yml`
- have `settings.velocity-support.enabled` set to `false` in `paper.yml`, if you are running a Paper (or a fork of it like Purpur or Pufferfish) server.
:::

1. [Download the plugin](https://ci.lucko.me/job/BungeeGuard/lastBuild/artifact/bungeeguard-universal/target/BungeeGuard.jar) then upload the jar into your Spigot `plugins` folder. Restart the server. If you need help installing plugins, check out [this guide](/installing-plugins).
2. Make sure that `player-info-forwarding` is set to `bungeeguard`.
3. Enter the `forwarding-secret` in `velocity.toml` into the `config.yml` in the Spigot/Paper server's BungeeGuard directory. Both of these must match exactly or you will not be able to join the server!

## Info
[Jenkins](https://ci.lucko.me/job/BungeeGuard/)  

[Wiki](https://github.com/lucko/BungeeGuard)
