---
id: coreprotect
title: Coreprotect
hide_title: true
hide_table_of_contents: false
sidebar_label: CoreProtect
description: A cool (and highly configurable) plugin called Coreprotect, which allows you to track player actions and rollback griefs. 
keywords:
  - Prism
  - Grief Management
  - Core Protect
  - MySQL
  - Spigot
  - BloomVPS
  - Pterodactyl Panel
  - Minecraft
image: https://bloomvps.com/assets/images/logo.png
---
# Coreprotect

## Info
[Spigot Page](https://www.spigotmc.org/resources/coreprotect.8631/)
[Commands Help](https://www.minerealm.com/community/viewtopic.php?f=32&t=6781)

### What does the plugin do?
  
CoreProtect is a fast, efficient, data logging and anti-griefing tool. Rollback and restore any amount of damage. 


## Usage


:::important
Before you get started, you need to have created a MySQL database. More info on that can be found [here](https://docs.bloom.host/databases).
:::
[Download the plugin](https://www.spigotmc.org/resources/coreprotect.8631/), and upload the jar into your `/plugins folder`, and then restart the server. If you need help installing plugins, check [How to install plugins](https://docs.bloom.host/plugins). 
 
 After that, go to the `CoreProtect` folder, which can be found inside the `plugins` folder. From there, edit the `config.yml` file. 

Change the MySQL Settings, Example listed below, to the ones in your database, then Restart the server, Once you have done that, Coreprotect is now enabled and running on your server
if you need help with commands  be sure to check out [their Commands list](https://www.minerealm.com/community/viewtopic.php?f=32&t=6781)

``` YML
use-mysql: true
table-prefix: co_
mysql-host: 123.456.870.91
mysql-port: 3306
mysql-database: s69_coreprotect
mysql-username: u69_DuckNodes 
mysql-password: SuperSecurePass
```
 
