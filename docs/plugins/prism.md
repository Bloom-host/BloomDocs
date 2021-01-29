---
id: prism
title: Prism
hide_title: true
hide_table_of_contents: false
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
image: https://bloom.host/assets/images/logo.png
---
# Prism

### What does the plugin do?

Prism is a highly configurable, powerful, high-performance grief management (rollbacks, restores, etc) plugin for your server.  

## Usage

:::important
Before you get started, you need to have created a MySQL database. More info on that can be found [here](https://docs.bloom.host/databases).
:::

[Download the plugin](https://jenkins.addstar.com.au/job/Prism-Bukkit%201.16/) and upload the jar into your `plugins` folder. Restart or turn on the server. If you need help installing plugins, check out [this guide](https://docs.bloom.host/bukkit-plugins).  

After that, go to the `Prism` folder, which can be found inside the `plugins` folder. From there, edit the `config.yml` file.  

Go down to the `mysql` section and enter your database details. Change `useNonStandardSql: true` to `useNonStandardSql: false`.  

:::caution
Do not copy the configuration below exactly, your login details for your own database will be different.
:::

```YML
  mysql:
    hostname: 135.181.0.179
    username: u69_Abbywontseethis
    password: 'Impossible Password'
    databaseName: s69_pogchamp
    prefix: prism_
    port: '3306'
    useNonStandardSql: false
```

Once you've done that, you need to restart the server in order for changes to take effect.  

## Info

[Spigot Page](https://www.spigotmc.org/resources/prism.75166/)  

[Jenkins](https://jenkins.addstar.com.au/job/Prism-Bukkit%201.16/)  

[Wiki](https://github.com/AddstarMC/Prism-Bukkit/wiki)  

[GitHub](https://github.com/AddstarMC/Prism-Bukkit)
