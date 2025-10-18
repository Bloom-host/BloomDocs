---
id: coreprotect
title: CoreProtect
slug: /plugins/coreprotect
hide_table_of_contents: false
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
  - Purge
  - Purging CoreProtect
  - Database Growth
  - Acceptable Usage Policy
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

## Management of large databases

### Avoid Purging

Due to performance and size concerns, it is recommended **not to purge** your CoreProtect database using the `/co purge` command. The purge command can cause significant lag or timeouts on large databases and may temporarily slow your server.  

Instead of purging, it’s better to **create a new database and migrate to it** when your existing database becomes too large.

This approach ensures better performance and prevents possible database corruption during cleanup.

---

### Database Rotation Process

1. **Create a new MySQL database**  
   You can create a new database through the panel. See our [Creating Databases](/databases) guide for more information.

2. **Edit your CoreProtect configuration**  
   Open `/plugins/CoreProtect/config.yml` and replace the existing MySQL credentials with the new database.

3. **Restart your server**  
   CoreProtect will now automatically start logging to the new database.

4. **Verify logging**  
   Place and break a few blocks, then use `/co i` to confirm that data is being logged in the new database.

5. **Keep the old database temporarily**  
   Do not delete the old one yet if you wish to keep old logs for some time. Keep it until you are certain that you no longer need to roll back data from before the switch. We recommend keeping it for around 15-30 days then deleting it from the panel.

6. **Delete the old database when ready**  
   Once you confirm you no longer need rollback data from the previous database, safely delete the old database through the panel.

---

### Rolling Back from an old Database

If you need to perform a rollback using data from the old database (for example, to rollback a grief that happened before you switched to the new database):

1. **Stop your server.**

2. **Edit your CoreProtect configuration**  
   Open `/plugins/CoreProtect/config.yml` and temporarily change the database credentials back to the old database.

3. **Start your server** and perform the rollback you need using CoreProtect commands. You can see more information about CoreProtect commands on their [documentation](https://docs.coreprotect.net/commands/#parameters).  
   Example: `/co rollback u:<username> t:<time> r:<radius>`

4. Once the rollback is complete, stop the server again.  

5. Revert the `config.yml` back to the **new** database credentials.  

6. **Restart your server**



## Info

[Spigot Page](https://www.spigotmc.org/resources/coreprotect.8631/) 

[Hangar Page](https://hangar.papermc.io/CORE/CoreProtect)

[Modrinth Page](https://modrinth.com/plugin/coreprotect)

[Commands](https://docs.coreprotect.net/commands/)

[Permissions](https://docs.coreprotect.net/permissions/)

[Configuration](https://docs.coreprotect.net/config/)

[GitHub](https://github.com/PlayPro/CoreProtect/)
