---
id: griefprevention
title: GriefPrevention
hide_title: true
hide_table_of_contents: false
sidebar_label: GriefPrevention
description: A simple and easy to use land claiming / protection plugin for your players.
keywords:
  - Spigot
  - Region Management
  - Land claiming
  - GriefPrevention
  - Pterodactyl Panel
  - Minecraft
  - Bloom.host
image: https://bloom.host/assets/images/logo.png
---

# GriefPrevention

## What does the plugin do?

GriefPrevention is a land claiming / region plugin that is simple and easy to use for your players. Claiming land using this plugin is simple, even for people unfamiliar to commands as claiming land requires two right-clicks from the claim tool (default golden shovel).

GriefPrevention can also prevent spam in multiple ways (fast message spam, join/leave spam, advertising, death spam, etc.)
Most features can be turned on or off through the config.

## Installation

To install this plugin, download the server jar from its [Spigot resource page](https://www.spigotmc.org/resources/griefprevention.1884/) and install it into the `plugins` folder.
For assistance on how to install plugins, please refer to the [plugin installation page](https://docs.bloom.host/bukkit-plugins).

## Usage

GriefPrevention will work out of the box for most users. By default, your players will be able to claim land up to a 'claim allowance' which will prevent new players from claiming very large amounts of land that they might not use (making others unable to use that area.). There are commands which can be used to give allowance (for example, as a voting reward) to players.

Claiming land is very simple. A player will need a golden shovel (changable in the config) and all they need to do is right click the two corners that they want to claim as long as it does not overlap other claims and they have enough claim allowance.

There are a few basic commands that players will need to know. These are:

* `/trust` - Used to allow another player to build in the claim the player is standing in. Useful if the player wants to grant building permissions to a friend.
* `/containertrust` - Similar to `/trust` however it will only allow the player access to blocks with inventories such as chests.
* `/accesstrust` - Similar to `/trust` however it will only allow the player access to iron doors (wooden doors and fence gates are not locked by default but this can be changed in the config) and buttons. 
* `/permissiontrust` - Allows a player to share their trust level with other people. For example if someone gave `/accesstrust` to another player and `/permissiontrust`, that player would only be able to give `/accesstrust` to other people.
* `/untrust` - Revokes a player's permission to access a claim given out using the trust commands above.
* `/abandonclaim` - Deletes a claim that the player owns.
* `/trustlist` - See a list of `/trust`ed players for that claim. See the trust commands above.
* `/claimslist` - See the current claim allowance and all of a player's claims that they own.

There is obviously more commands and features - please refer to the [GriefPrevention Wiki](https://github.com/TechFortress/GriefPrevention/wiki) for more infomation on how to use them.

## Info

[Spigot Resource Page](https://www.spigotmc.org/resources/griefprevention.1884/)

[Website](https://griefprevention.com/)

[Github](https://github.com/TechFortress/GriefPrevention)

[Support](https://discord.com/invite/3TXnkfa)


