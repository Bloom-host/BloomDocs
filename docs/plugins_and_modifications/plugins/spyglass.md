---
id: spyglass
title: Spyglass
slug: /plugins/spyglass
hide_table_of_contents: true
sidebar_label: Spyglass
description: A high-performance logging and rollback plugin called Spyglass, which allows you to track player actions and rollback griefs.
keywords:
  - Spyglass
  - Grief Management
  - Core Protect
  - Rollback
  - MySQL
  - Paper
  - Pterodactyl Panel
  - Minecraft
---

## What does the plugin do?

Spyglass is a high-performance logging and rollback plugin for your server. It records block, container, chat, command, combat and movement events, lets you search them, and rolls back griefs by player, time or area while keeping your server at 20 TPS. It can also import existing [CoreProtect](/plugins/coreprotect) data.

:::note
Spyglass is currently in preview. The latest release supports Paper 26.1.2, 26.2 and 26.3 and requires Java 25. For Minecraft 1.21.11, use the `1.0.13` release instead.
:::

---

## Usage

:::important
Although Spyglass can use a local SQLite database, it's recommended to use a MySQL database. That requires you to have created a MySQL database. See our [database guide](/databases) for instructions.
:::

[Download the plugin](https://www.spigotmc.org/resources/spyglass.136345/) and upload the jar into your `plugins` folder. Make sure to download the jar that matches your server's Minecraft version (for example, `Spyglass-1.1.0-mc26.3.jar` for Paper 26.3). Spyglass will refuse to load on a different version. If you need help installing plugins, check out our [plugin installation guide](/installing-plugins).

Restart or turn on the server. After that, go to the `Spyglass` folder, which can be found inside the `plugins` folder. From there, edit the `config.conf` file.

If you are using a Bloom database, near the beginning of the conf file, inside the `database` section, change `backend = "sqlite"` to `backend = "mariadb"`.

Then go down to the `mariadb` section and add the credentials from the database section of the Bloom panel, as follows (conf file comments have been removed for clarity, but you should keep them in the file):

:::caution
Do not copy the configuration below exactly, your login details for your own database will be different. **You will need to update the host, database, user, and password entries with the values from the Bloom panel.**
:::

```hocon
mariadb {
    host = "xxxxx.bloom.host"
    port = 3306
    database = "Your_database_name"
    user = "Your_database_username"
    password = "YourPassword"
    ssl = false
}
```

Once you've done that, you need to restart the server in order for changes to take effect. Check the log file for any errors from Spyglass. If necessary, adjust the database credentials in `config.conf` and try again.

The main command is `/spyglass`, which can be shortened to `/sg`. For example, `/sg tool` toggles the inspector wand, `/sg rollback p:griefer t:6h r:100` rolls back a player's changes from the last 6 hours within 100 blocks, and `/sg undo` reverses your last rollback.

:::tip
Moving from CoreProtect? Place your CoreProtect `database.db` file in `plugins/Spyglass/import/` and run `/sg import database.db` in-game.
:::

---

## Info

[SpigotMC Page](https://www.spigotmc.org/resources/spyglass.136345/)

[Support](https://discord.gg/XkpVHcHvH)

[Commands](https://github.com/medievalrp-net/Spyglass/blob/main/COMMANDS.md)

[GitHub](https://github.com/medievalrp-net/Spyglass)
