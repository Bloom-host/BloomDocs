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
  - Minecraft
---

## Overview

Plan (Player Analytics) records server activity such as player counts and playtime and displays the results in a web dashboard. This guide covers installing Plan on a Paper-based server, connecting its web interface through Bloom's reverse proxy, and creating your first account.

**Related Pages:**

- [Installing Plugins](/installing-plugins)
- [Creating a Reverse Proxy](/ports-and-proxies)


---

## Install Plan

1. Download Plan from the [Spigot resource page](https://www.spigotmc.org/resources/plan-player-analytics.32536/).
2. Follow the [plugin installation guide](/installing-plugins) to upload the downloaded `.jar` file to your server's `plugins` folder.
3. Restart the server. Plan should create its configuration file at `plugins/Plan/config.yml`.

---

## Configure Plan

### Configure the Web Server

1. In the DuckPanel File Manager, open `plugins/Plan/config.yml`.
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

To allow Plan to download its GeoLite2 geolocation database, review and accept the [GeoLite2 End User License Agreement](https://www.maxmind.com/en/geolite2/eula), then update this setting in `plugins/Plan/config.yml`:

```yaml
Data_gathering:
  Accept_GeoLite2_EULA: true
```

Save the file and restart the server after changing this setting.

---

## Verify the Setup

1. Open `https://plan.example.com` in your browser, replacing the example address with your domain or subdomain.
2. Select **Create Account** and complete the registration form.
3. Confirm that the Plan dashboard loads and displays your server's analytics.

---

## Resources

- [Plan Spigot resource page](https://www.spigotmc.org/resources/plan-player-analytics.32536/)
- [Plan GitHub repository](https://github.com/plan-player-analytics/Plan)
