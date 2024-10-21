---
id: votifier
title: NuVotifier
slug: /plugins/votifier
hide_table_of_contents: true
sidebar_label: NuVotifier
description: NuVotifier allows you to be put on voting sites, which increases your servers visibility.
keywords:
  - NuVotifier
  - Votifier
  - Set up voting
  - Spigot
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
---
## What does the plugin do?
NuVotifier is a plugin that allows players to receive rewards when voting for your server on server list sites, There is an extensive amount of plugins that listen to Votifier, and give rewards when a player votes.

## Do I need to use the plugin in the example?
No, You can use any plugin that is advertised as hooking into NuVotifier.

## NuVotifier hasn't been updated since 2021, does it still work?
Yes, NuVotifier is like Vault where it's version independent.
## Pre-requisites
- [NuVotifier](https://www.spigotmc.org/resources/nuvotifier.13449/)
- Any plugin that hooks into NuVotifier, [VotingPlugin](https://www.spigotmc.org/resources/votingplugin.15358/) is what will be used for the tutorial.
- Ability to browse or view server files, a few guides linked below:
  - [Connect using your favorite program on your computer](https://docs.bloom.host/sftp/)
  - [Manage and edit your files through the DuckPanel](https://docs.bloom.host/file-manager-controls)

### Single Server Configuration
This page continues with the implication you have downloaded the resources above or a vote plugin to hook into NuVotifier of your choosing, and put it in your `plugins` folder.

#### NuVotifier Requirements
Please check your `config.yml`, you'll notice there is a list of configuration options! you only need to remember one config option.

- `port` option which by default is `8192`

After you have found your port, you need to head to DuckPanel and open Ports & Proxies. It should look something like below.

![console](/plugins_and_modifications/plugins/votifier/1.png)

You'll already have a batch of allocations most likely, simply need to hit `Open Port` and type in `8192` then hit `open port`

![console](/plugins_and_modifications/plugins/votifier/2.png)

The next step is to restart your server, so the port can be opened.

#### VotingPlugin Requirements
- [NuVotifier](https://www.spigotmc.org/resources/nuvotifier.13449/)

Once you have successfully installed the plugin, If you do not want to configure MySQL for user storage. You have completed the tutorial!
You can move on to the next step and that is to read the [VotingPlugin's wiki](https://github.com/BenCodez/VotingPlugin/wiki) or the wiki of the resource you chose.

##### Configuring SQL for VotingPlugin
If you didn't do it already, Please read this guide on how to create and find logins for your databases, [click here](/databases)

VotingPlugin has the option to configure what type of `data storage` you would like to use
- SQLITE (flat file storage, works out of the box)
- MYSQL (works with Bloom's database which is based on MariaDB, however needs extra configuration)
  - A guide on how to create and find logins for your databases, [click here](/databases)

**Requirements:**
- Username, Password. They can be found in the `Database` tab!
  - Username would look something like `u5930_4949emdj`
  - Password can be found by clicking the `eye` icon to the right. Click the box labeled `Password` in the field when it pops up.
- Database Name which can be found in the `Database` tab to the left.
  - The database name can be anything you want.
- Database Host can be found in the `Database` tab between the `username` and the `database` name.

```yml
###########################################
# User storage
###########################################
# Valid Options:
# - SQLITE
# - MYSQL
DataStorage: MYSQL

# Information for mysql
# See the end of the config for cache options
MySQL:
Host: 'node_name.bloom.host' # -> Grab the database host address you got from the database section above.
# Default port is 3306
Port: 3306
Database: 'your_database_name' # -> Grab the name of the database you got from the database section above.
Username: 'your_username' # -> Grab the username you got from the database section above.
Password: 'your_password' # -> Grab the password you got from the database section above.
# Max number of connections
MaxConnections: 1 # -> Do not touch this
# Table name prefix, for use with multiple servers
# Don't use with PLUGINMESSAGING bungee setup
Prefix: '' # -> Do not touch this unless multiple servers.
#UseSSL: true  -> Do not touch this
#PublicKeyRetrieval: false  -> Do not touch this
#MaxLifeTime: -1  -> Do not touch this
#Additional info on connection string
#Line: '' -> Do not touch this
# Bloom uses MariaDB, so it should be enabled since it's there.
# If you notice any issues, please contact VotingPlugin!
UseMariaDB: true
```

Next, save both configurations and restart your server, I always recommend that you restart your server!
