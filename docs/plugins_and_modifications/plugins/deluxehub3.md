---
id: deluxehub3
title: DeluxeHub 3
slug: /plugins/DeluxeHub
hide_title: true
hide_table_of_contents: false
sidebar_label: DeluxeHub 3
description: DeluxeHub 3 Docs
keywords:
  - DeluxeHub
  - dhub
  - Minecraft
  - Bloom.host
image: https://bloom.host/assets/images/logo.png
---

<div class="text--center">
<img src="https://bloom.host/logo-white.svg" alt="logo" height="50%" width="50%"/>
<h1>Citizens 2</h1>
</div>

## What does the plugin do?

DeluxeHub 3 is a hub plugin that lets you give players Hotbar items, as well as menu GUIs and administration commands. 


## Installation

1. Download the plugin from the [official spigot page.](https://www.spigotmc.org/resources/49425/)
2. Upload the jar to your `/plugins` folder.
3. Restart the server. 

If you need help installing plugins, check [How to install plugins](https://docs.bloom.host/installing-plugins).

## Commands

- `/gamemode` - Lets you change gamemodes
- `/gmc, /gms, /gmsp, /gma` - Gamemode alias
- `/lockchat` - Lock's the chat
- `/vanish` - Make your self invisable to others
- `/lobby` - Teleports you to the lobby
- `/setlobby` - Lets the Lobby spawn point
- `/clearchat` - Clears the chat
- `/deluxehub reload` - Reloads the plugin
- And custom commands you can create in `/plugins/DeluxeHub/commands.yml`


## Configuration

- The main config file is located at`/plugins/DeluxeHub/config.yml` 
- The menu config file(s) is located at `/plugins/DeluxeHub/menus/serverselector.yml`
- To set the spawn point of the server, do `/setlobby` at the location you want to players to spawn.
- Let’s say you have a Lobby world and then a survival world and want to disable DeluxeHub in the survival world(s). To disable DelxeHub in certain worlds simply list the world(s) in `disabled-worlds` in `config.yml`.
- All other settings like world events or MOTD or announcements can be edited in the config.


## Menus

- The template for menus is located at `/plugins/DeluxeHub/menus/serverselector.yml` 
- The command to open the menu is `/dhub open (filename)` so for “serverselector.yml” it would be `/dhub open serverselector` 
- PlaceholderAPI placeholders can be used in each items “lore”.

:::note It is very important for each menu’s “slots” option to be a valid Minecraft gui slot count. For example, if one of the menus had “slots” set to 1000, you would get an error when loading that menu.
:::


## Additional Information

### Downloads
- [Spigot Page](https://www.spigotmc.org/resources/49425/)

### Documentation
- [Docs](https://wiki.lewisdev.fun/free-resources/deluxehub)

### Need Help

Check the docs for details.  Asking nicely on Bloom's discord and/or other Minecraft related discord servers may also work.
