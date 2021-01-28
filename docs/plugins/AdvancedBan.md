---
id: advancedban
title: AdvancedBan
hide_title: true
hide_table_of_contents: false
sidebar_label: AdvancedBan
description: A bans and punishment management system
keywords:
  - Spigot
  - Moderation tools
  - Punishment
  - kick
  - ban
  - Pterodactyl Panel
  - Minecraft
  - Bloom.host
image: https://bloom.host/assets/images/logo.png
---
# AdvancedBan

### What does the plugin do?

Allows your server staff to issue punishments to players who break your server's rules, and can be used as an free alternative to [LiteBans](https://docs.bloom.host/plugins/Litebans).

## Installation

Download the plugin off the [Spigot resource page](https://www.spigotmc.org/resources/advancedban.8695/) and install it in the `plugins` folder.
For assistance on how to install plugins, please refer to the [plugin installation page](https://docs.bloom.host/bukkit-plugins).

You will then need to decide if you are going to be using internal storage (HSQLDB) or external storage (MySQL).

If you decide to use MySQL for AdvancedBan, you can [learn how to setup a MySQL database here](https://docs.bloom.host/databases).

## Usage 
AdvancedBan has many commands to be able to moderate and punish rule-breakers, the most important commands are here:

Note: Command arguments in square brackets are required. Command arguments in left/right arrows are optional.

* `/ban <-s> [PLAYER] <REASON | @LAYOUT>` - permanently bans a player for the reason you specify
* `/tempban <-s> [PLAYER] [Xmo|Xd|Xh|Xm|Xs|#TIMELAYOUT] <REASON | @LAYOUT>` - Temporarily bans a player for the duration and reason you specify
* `/kick <-s> [PLAYER] <REASON | @LAYOUT>` - Kicks a player you specify
* `/mute <-s> [PLAYER] <REASON | @LAYOUT>` - permanently mutes a player for the reason you specify
* `/tempmute <-s> [PLAYER] [Xmo|Xd|Xh|Xm|Xs|#TIMELAYOUT] <REASON | @LAYOUT>` - Temporarily mutes a player for the duration and reason you specify
* `/warn <-s> [PLAYER] <REASON | @LAYOUT>` - Temporarily bans a player for the duration and reason you specify
* `/tempwarn  <-s> [PLAYER] [Xmo|Xd|Xh|Xm|Xs|#TIMELAYOUT] <REASON | @LAYOUT>` - Temporarily warns a player for the duration and reason you specify
* `/history [PLAYER] <PAGE>` - View moderation actions taken against a player 

You can add -s to most of the punishment commands to make their outputs silent - this makes it so that people won't see an announcement when someone gets punished.

There are more commands and features such as pre-prepared punishment layouts and the ability to set notes on players - see the [wiki](https://github.com/DevLeoko/AdvancedBan/wiki) for more information.

## Info

[Spigot Resource Page](https://www.spigotmc.org/resources/advancedban.8695/)

[Github](https://github.com/DevLeoko/AdvancedBan)