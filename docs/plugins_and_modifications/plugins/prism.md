---
id: prism
title: Prism
slug: /plugins/prism
hide_table_of_contents: true
sidebar_label: Prism
description: A cool (and highly configurable) plugin called Prism, which allows you to track player actions and rollback griefs.
keywords:
  - Prism
  - Grief Management
  - Core Protect
  - MySQL
  - Paper
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
---

### What does the plugin do?

Prism is a highly configurable, powerful, high-performance grief management (rollbacks, restores, etc) plugin for your server. Prism V4 is a complete rewrite of the plugin and works with Paper-based servers 1.21.4+.

## Usage

:::important
Although Prism can use a local database, it's recommended to use a MySQL database. That requires you to have created a MySQL database. More info on that can be found [here](/databases).
:::

[Download the plugin](https://modrinth.com/plugin/prism/versions) and upload the jar into your `plugins` folder.

Also upload the NBT-API plugin from [here](https://modrinth.com/plugin/nbtapi/versions) into your `plugins` folder. You need both the Prism and NBT-API jar files. If you need help installing plugins, check out [this guide](/installing-plugins).

Restart or turn on the server. After that, go to the `prism` folder, which can be found inside the `plugins` folder. From there, edit the `storage.conf` file.

Although Bloom says they provide a MySQL database, it's actually MariaDB under the hood. So near the beginning of the conf file, change `primary-storage-type=SQLITE` to `primary-storage-type=MARIADB`.

Then go down to the `mariadb` section and add the credentials from the database section of the Bloom panel, as follows (conf file comments have been removed for clarity, but you should keep them in the file):

:::caution
Do not copy the configuration below exactly, your login details for your own database will be different. **You will need to update the host, password, username, and database entries with the values from the Bloom panel.**
:::

```hocon
mariadb {
    use-hikari-optimizations=true
    use-stored-procedures=true
    host="xxxxx.bloom.host"
    password="YourPassword"
    port="3306"
    username="Your_database_username"
    batch-max=2000
    database="Your_database_name"
    prefix="prism_"
}
```

Once you've done that, you need to restart the server in order for changes to take effect. Check the log file for any errors from Prism. If necessary, adjust the database credentials in `storage.conf` and try again.

## Info

[Modrinth Page](https://modrinth.com/plugin/prism)

[Support](https://discord.gg/7FxZScH4EJ)

[Wiki](https://docs.prism-mc.org/)

[GitHub](https://github.com/prism/prism)
