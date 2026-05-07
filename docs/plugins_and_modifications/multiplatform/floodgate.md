---
id: floodgate
title: Floodgate
slug: /multiplatform/floodgate
hide_table_of_contents: true
sidebar_label: Floodgate
description: A companion plugin for Geyser that allows Bedrock players to join online-mode servers without a Java account.
keywords:
  - Bedrock
  - Java
  - Floodgate
  - Floodgate Installation
  - BungeeCord
  - Spigot
  - Paper
  - Velocity
  - Fabric
  - NeoForge
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
---

Floodgate is a hybrid-mode plugin that enables [Geyser](/multiplatform/geysermc) to authenticate Bedrock Edition players without requiring them to own a Java Edition account. It allows these players to join servers even when `online-mode` is set to `true`.

## Installation

[Download the plugin](https://geysermc.org/download/?project=floodgate) for your specific platform (Spigot, Velocity, Fabric, etc.) and upload the `.jar` into your `plugins` or `mods` folder. Restart the server once to generate the necessary encryption keys.

If you need help installing plugins, check out [this guide](/installing-plugins).  

Once installed, you must configure Geyser to use Floodgate for authentication:
1. Locate the Geyser configuration file.
2. Find the `auth-type` setting.
3. Change the value from `online` or `offline` to `floodgate`.
4. Restart the server to apply the changes.

:::important
If you are running a proxy (Velocity or BungeeCord), Floodgate must be installed on the proxy itself. You do not need to install it on the backend "sub-servers" unless you require specific Floodgate features like skin handling or API access on those individual servers.
:::

:::note
Floodgate automatically generates a `key.pem` file. If you are using a proxy, this key must be identical across all servers in your network for authentication to work correctly.
:::

## Configuration & Compatibility

### Username Prefixes

By default, Floodgate adds a `.` prefix to Bedrock players (e.g., `.PlayerName`) to prevent name collisions with Java players. You can change this in the Floodgate `config.yml`.

## Additional Resources

* [Official Website](https://geysermc.org/)
* [Wiki](https://geysermc.org/wiki/floodgate/)
