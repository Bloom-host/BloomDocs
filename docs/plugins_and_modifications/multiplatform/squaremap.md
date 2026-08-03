---
id: squaremap
title: Squaremap
slug: /multiplatform/squaremap
hide_table_of_contents: false
sidebar_label: Squaremap
description: Install and configure Squaremap's live Minecraft world map on a Bloom server.
keywords:
  - Squaremap
  - Map
  - Plugin
  - Mod
  - Reverse proxy
  - Paper
  - Fabric
  - NeoForge
  - Sponge
  - Minecraft
---

## Overview

Squaremap is a lightweight live map viewer that displays Minecraft worlds in a top-down, vanilla-style 2D map. This guide covers installing Squaremap on a supported server, configuring its built-in web server, and connecting the map through Bloom's reverse proxy.

**Related Pages:**

- [Installing Plugins](/installing-plugins)
- [Installing Mods](/mods-install)
- [Creating a Reverse Proxy](/ports-and-proxies)

---

## Install Squaremap

1. Open the [Squaremap GitHub page](https://github.com/jpenilla/squaremap), select **Releases**, and download the `.jar` file that matches your server platform and Minecraft version.
2. Place the `.jar` file in your server's `plugins` folder for Paper or Sponge, or its `mods` folder for Fabric or NeoForge. Fabric installations also require [Fabric API](https://modrinth.com/mod/fabric-api). See the [plugin installation guide](/installing-plugins) or [mod installation guide](/mods-install) for panel-specific instructions.
3. Restart the server. Squaremap should generate `config.yml` and its other files inside a folder named `squaremap`.

---

## Configure Squaremap

### Configure the Web Server

1. In the DuckPanel File Manager, open Squaremap's generated `config.yml` file.
2. Choose an available port between `8100` and `25600`. Squaremap uses `8080` by default, which is outside DuckPanel's allocation range; the example below uses `8100`.
3. Update the web server settings, leaving the internal web server enabled and `bind` set to `0.0.0.0`:

```yaml
settings:
  internal-webserver:
    enabled: true
    bind: 0.0.0.0
    port: 8100
```

4. Save the file.
5. Follow the [reverse proxy guide](/ports-and-proxies) to connect a domain or subdomain to Squaremap. When creating the allocation, use the same port you set in `config.yml`.
6. Restart the server after creating the allocation so the port and configuration changes take effect.

---

## Verify the Setup

1. Open `https://map.example.com` in your browser, replacing the example address with the domain or subdomain you configured in the reverse proxy guide.
2. Confirm that the Squaremap page loads and displays your server's worlds.
3. Check the server console and confirm that Squaremap reports no startup errors.

---

## Resources

- [Squaremap GitHub page](https://github.com/jpenilla/squaremap)
- [Squaremap releases](https://github.com/jpenilla/squaremap/releases)
- [Squaremap wiki](https://github.com/jpenilla/squaremap/wiki)
