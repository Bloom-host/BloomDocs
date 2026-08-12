---
id: plan
slug: /multiplatform/plan
title: Plan (Player Analytics)
hide_table_of_contents: false
sidebar_label: Plan (Player Analytics)
description: Install and configure Plan Player Analytics on a Bloom Minecraft server.
keywords:
  - Plan
  - Player Analytics
  - Stats
  - Reverse proxy
  - Spigot
  - Fabric
  - Plugin
  - Mod
  - Minecraft
---

## Overview

Plan (Player Analytics) records server activity such as player counts and playtime and displays the results in a web dashboard. This guide covers installing Plan on a Paper, Spigot, or Fabric server, connecting its web interface through Bloom's reverse proxy, and creating your first account.

**Related Pages:**

- [Installing Plugins](/installing-plugins)
- [Installing Mods](/mods-install)
- [Creating a Reverse Proxy](/ports-and-proxies)

---

## Install Plan

1. Download the Plan build that matches your platform and Minecraft version. Use the [Spigot resource page](https://www.spigotmc.org/resources/plan-player-analytics.32536/) for Paper or Spigot, or download the appropriate `PlanFabric-<version>-build-<build>.jar` from the [Plan GitHub releases](https://github.com/plan-player-analytics/Plan/releases) for Fabric.
2. Place `Plan.jar` in your server's `plugins` folder for Paper or Spigot, or place `PlanFabric.jar` in its `mods` folder for Fabric. See the [plugin installation guide](/installing-plugins) or [mod installation guide](/mods-install) for panel-specific instructions.
3. Restart the server. Plan should generate `Plan/config.yml` in its platform-specific data directory. Those being the `plugins` directory for Paper and `config` for Fabric.

---

## Configure Plan

### Configure the Web Server

1. In the DuckPanel File Manager, open Plan's generated `config.yml`. Use port `8804` when creating Plan's allocation. If it is unavailable, choose a different port and update the configuration shown below to match.
2. Update the following settings. Replace `plan.example.com` with the domain or subdomain you configured in the reverse proxy guide.

```yaml
Webserver:
  Port: 8804
  Alternative_IP:
    Enabled: true
    Address: "plan.example.com"
  Security:
    SSL_certificate:
      KeyStore_path: proxy
```

3. Save the file and restart the server to apply the changes.

### Enable Location Tracking *(optional)*

To allow Plan to download its GeoLite2 geolocation database, review and accept the [GeoLite2 End User License Agreement](https://www.maxmind.com/en/geolite2/eula), then update this setting in Plan's `config.yml`:

```yaml
Data_gathering:
  Accept_GeoLite2_EULA: true
```

Save the file and restart the server after changing this setting.

---

## Verify the Setup

1. Open `https://plan.example.com` in your browser, replacing the example address with your domain or subdomain.
2. Select **Create Account**, complete the registration form, then run the displayed `/plan register --code <code>` command in-game to finalize the account.
3. Confirm that the Plan dashboard loads and displays your server's analytics.

---

## Resources

- [Plan Spigot resource page](https://www.spigotmc.org/resources/plan-player-analytics.32536/)
- [Plan GitHub releases](https://github.com/plan-player-analytics/Plan/releases/latest)
- [Plan GitHub repository](https://github.com/plan-player-analytics/Plan)
