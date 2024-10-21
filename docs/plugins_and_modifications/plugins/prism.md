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
  - Spigot
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
---

### What does the plugin do?

Prism is a highly configurable, powerful, high-performance grief management (rollbacks, restores, etc) plugin for your server.  

## Usage

:::important
Before you get started, you need to have created a MySQL database. More info on that can be found [here](/databases).
:::

[Download the plugin](https://www.spigotmc.org/resources/prism.99397/) and upload the jar into your `plugins` folder. Restart or turn on the server. If you need help installing plugins, check out [this guide](/installing-plugins).  

After that, go to the `Prism` folder, which can be found inside the `plugins` folder. From there, edit the `config.yml` file.  

Go down to the `datasource` section and under the `properties` sub-section enter your database details. Change `useNonStandardSql: true` to `useNonStandardSql: false`.  

:::caution
Do not copy the configuration below exactly, your login details for your own database will be different.
:::

```YML
datasource:
  type: mysql
  properties:
    hostname: 135.181.0.179
    username: u69_Abbywontseethis
    password: Impossible Password
    databaseName: prism
    prefix: prism_
    port: '3306'
    useNonStandardSql: false
```

Once you've done that, you need to restart the server in order for changes to take effect.  

## Info

[Spigot Page](https://www.spigotmc.org/resources/prism.99397/)

[Support](https://discord.gg/7FxZScH4EJ)

[Wiki](https://prism-bukkit.readthedocs.io/en/latest/)  

[GitHub](https://github.com/prism/PrismRefracted)
