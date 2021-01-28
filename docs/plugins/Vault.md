---
id: vault
title: Vault
hide_title: true
hide_table_of_contents: false
sidebar_label: Vault
description: A common API for chat, permission and economy plugins.
keywords:
  - Economy
  - Chat formatting
  - Permissions
  - Spigot
  - Bukkit
  - Pterodactyl Panel
  - Minecraft
  - Bloom.host
image: https://bloom.host/assets/images/logo.png
---
# Vault

## What does this plugin do?

Vault provides a common API to give plugins access to chat, permission and economy systems easily and quickly. Instead of plugin developers needing to write support for each individual plugin providing these features, they will only need to write a Vault hook and they can support all plugins providing chat, permission and/or economy systems (provided that the plugin supports Vault).

## Installation Instructions
Download Vault from its [Spigot Resource page](https://www.spigotmc.org/resources/vault.34315/) or its [BukkitDev page](https://dev.bukkit.org/projects/vault) or directly from its [GitHub repo](https://github.com/MilkBowl/Vault/releases).

Next, install the plugin into the `plugins` folder in your server. Need help? Check out [this guide](https://docs.bloom.host/bukkit-plugins).

## Usage instructions

Vault works out of the box without configuration in most cases. Plugins that hook into Vault (e.g. [LuckPerms](https://docs.bloom.host/plugins/luckperms)) will automatically find Vault and connect to it and provides a hook for plugins to work with it.

Other plugins, such as [DiscordSRV](https://docs.bloom.host/plugins/discordsrv) can use the information provided by Vault (e.g. DiscordSRV can get the group names from your permissions plugin)

### Commands

Vault has two commands which server admins can use to manage the plugin. These are:

* `/vault-info` - Shows plugins which are installed that provides chat, permissions or economy systems.
* `/vault-convert` - Converts data between economy systems that are installed. Requires you to have at least *two* economy systems loaded.

## Info

[Spigot Resource page](https://www.spigotmc.org/resources/vault.34315/)

[BukkitDev page](https://dev.bukkit.org/projects/vault)

[GitHub repo](https://github.com/MilkBowl/Vault/releases).

[Vault API](https://github.com/MilkBowl/VaultAPI) - *If you are a plugin developer and want to add Vault support to your plugins*