---
id: coreprotect
title: CoreProtect
slug: /plugins/coreprotect
hide_table_of_contents: true
sidebar_label: CoreProtect
description: A plugin that allows you to inspect blocks and inventories, as well as roll them back.
keywords:
  - CoreProtect
  - Grief Management
  - Core Protect
  - MySQL
  - Spigot
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
---

### What does the plugin do?

CoreProtect is a fast, efficient, data logging and anti-griefing tool. Rollback and restore any amount of damage.


## Usage


:::important
Before you get started, you need to have created a MySQL database. More info on that can be found [here](/databases).
:::
[Download the plugin](https://www.spigotmc.org/resources/coreprotect.8631/), and upload the jar into your `/plugins folder`, and then restart the server. If you need help installing plugins, check [How to install plugins](/installing-plugins).

 After that, go to the `CoreProtect` folder, which can be found inside the `plugins` folder. From there, edit the `config.yml` file.

Change the MySQL Settings, Example listed below, to the ones in your database, then Restart the server, Once you have done that, Coreprotect is now enabled and running on your server.  

``` YML
use-mysql: true
table-prefix: co_
mysql-host: 123.456.870.91
mysql-port: 3306
mysql-database: s69_coreprotect
mysql-username: u69_DuckNodes
mysql-password: SuperSecurePass
```

### Commands

One command you can use in CoreProtect is `/co i`. This will allow you to left click a block to see its history, and right click a block to see the history of the adjacent block.  

Another command you can use is `/co rollback u:<user> t:<time> r:<radius> a:<action> b:<blocks> e:<exclude>`. Running that command will print a list of every action (that you choose) within the radius and time period, by a user you choose. Not all of those parameters are necessary.  

There are, of course, more commands in the plugin, which you can check out [here](https://www.minerealm.com/community/viewtopic.php?f=32&t=6781).  

## Info

[Spigot Page](https://www.spigotmc.org/resources/coreprotect.8631/) 

[Hangar Page](https://hangar.papermc.io/CORE/CoreProtect)

[Modrinth Page](https://modrinth.com/plugin/coreprotect)

[Commands](https://docs.coreprotect.net/commands/)

[Permissions](https://docs.coreprotect.net/permissions/)

[Configuration](https://docs.coreprotect.net/config/)

[GitHub](https://github.com/PlayPro/CoreProtect/)
