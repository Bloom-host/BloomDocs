---
id: GrimAC
title: GrimAC Anticheat
hide_table_of_contents: false
sidebar_label: GrimAC Anticheat
description: This guide explores the use of GrimAC as a cheating prevention tool. 
keywords:
  - GrimAC
  - Anticheat
  - Hacks
  - Cheats
---

:::note ViaVersion Notice
While it's usually recommended that you install ViaVersion on your Proxy, GrimAC users should install ViaVersion (and other Via plugins) on the backend for the best experience.
:::

## Overview

This guide will explain the install process and the basic configuration of GrimAC. GrimAC is an open source project, meaning you can review the code on their [GitHub](https://github.com/GrimAnticheat/Grim) 

Besides being a standalone Anticheat, GrimAC is also commonly used along with [Vulcan Anticheat](/vulcan) for a more comprehensive approach to hacking prevention and punishment.

Usually GrimAC is used to handle the following hacking methods, while Vulcan is usually used to cover combat specific hacks:

- Movement Hacks: GrimAC has a sophisticated movement mirroring system that allows the plugin to detect movements that shouldn't be possible. 
- Network Auditing: GrimAC is specially good at compensating for latency and other packet tweaking methods due to its ability to predict what a right packet (and order) should look like.

---

## Prerequisites

Before following this guide, make sure you have:

- [ ] GrimAC has [PacketEvents](https://modrinth.com/plugin/packetevents) as a depedency. However, the plugin now includes the plugin by default. You might need to add this plugin if you try to use older versions.

---

## Installation & Setup:

You can grab the [GrimAC Jar](https://modrinth.com/plugin/grimac/versions) from their Modrinth page. Once you have the plugin's `.jar` file you can drag and drop it on your server's `plugins` directory via the `File Manager`. The plugin will load and generate its `config` file upon restarting. Keep in mind GrimAC must go on each of your `backend` servers if you have a proxy based network. 

GrimAC is pretty much "plug and play", providing some pretty decent defaults. However, if you notice issues or the protection isn't quite up to spec, keep reading. Likewise if you have a network continue onto the following section to learn about the database options available.

## Configuration

In the `GrimAC` foler within `plugins` we'll find 2 main config files which are of interest to us, and a directory:

1. **config.yml**: Here we'll find the bulk of the configuration options we care about. Mainly, it includes everything detection related, meaning the triggers that cause GrimAC to act. We'll work 
2. **database.yml**: Where we'll be able to pick and configure which storage system we wish to use for GrimAC.
3. **databases (directory)**: The databases directory holds config files for each storage type, including both credentials and general database settings.

### Database


First we'll deal with `database.yml`. This is pretty simple, the dev teams recommends that anyone that is not running a network stays on the default, `SQLite`. However, if you are running a network (with multiple backends) or plan to do so eventually, you should use `mysql`. To start using MariaDb/MySQL, you need to change the first part of `database.yml`to look like the example below: 

```yaml
database:
  enabled: true
  routing:
    violation: mysql
    session: mysql
    player-identity: mysql
    setting: mysql
    blob: none
```

Now, you'll need to create a new database following our [Database Guide](/running_a_server/databases). After creating a database, you'll need to edit the `mysql.yml` file which we'll find within the `databases` directory. You'll only need to edit the credentials so they look like the example below, using your own credentials as seen in the guide liked previously:

```yaml
mysql:
  # Connection target.
  host: "ash-ppg-1020.bloom.host"
  port: 3306
  database: "s114029_GrimAC"
  user: "u114029_arhGJnqVKC"
  password: "jg3NQXbhDPDYXSdYqMB0gAdJ"
```

### Config

The GrimAC config is pretty straightforwards. If you ever have issues with a specific check, you can try to either lower or increase the detection value (depending on if you get false positives or false negatives) to your liking. 

If you have issues with too many misses or too many undue kicks, we recommend contacting the GrimAC community over on their [Database Guide](https://discord.com/invite/kqQAhTmkUF).

You can review the default config and its comments on their [GitHub](https://github.com/GrimAnticheat/Grim/blob/2.0/common/src/main/resources/config/en.yml).

---

## Info

- [GrimAC GitHub](https://github.com/GrimAnticheat/Grim)
- [GrimAC Wiki](https://github.com/GrimAnticheat/Grim/wiki)
- [GrimAC's Modrinth Page](https://modrinth.com/plugin/grimac)