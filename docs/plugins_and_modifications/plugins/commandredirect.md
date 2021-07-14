---
id: commandredirect
title: Command Redirect
slug: /plugins/NitroCommandRedirect
hide_title: true
hide_table_of_contents: false
sidebar_label: Command Redirect
description: Create and redirect your own custom commands!
keywords:
  - redirect
  - commandredirect
  - Minecraft
  - Bloom.host
image: https://bloom.host/assets/images/logo.png
---

<div class="text--center">
<img src="https://bloom.host/logo-white.svg" alt="logo" height="50%" width="50%"/>
<h1>Command Redirect</h1>
</div>

## What does the plugin do?

Command Redirect lets you create a redirect command, so you could run `/nether`, and it will run `/warp nether`. 


## Installation

1. Download the plugin from the [official spigot page.](https://www.spigotmc.org/resources/81524/)
2. Upload the jar to your `/plugins` folder.
3. Restart the server. 

If you need help installing plugins, check [How to install plugins](https://docs.bloom.host/installing-plugins).

## Commands

- `cr add <redirect> <final-command>` - Creates/adds a redirect - `cr.add`
- `cr list` - Lists all redirects - `cr.list`
- `cr reload` - Reloads the config file. - `cr.reload`

## Configuration

- The main config file is located at`/plugins/NitroCommandRedirect/config.yml` 
- All messages can be edited in the config.


## Creating a redirect.

- Lets say I want to redirect the command `/nether` to `/warp nether`, the command would be `/cr add nether warp nether`

:::note These command redirects are meant for player commands, redirected commands will not work in console.
:::


## Additional Information

### Downloads
- [Spigot Page](https://www.spigotmc.org/resources/81524/)


### Need Help

Check the docs for details.  Asking nicely on Bloom's discord and/or other Minecraft related discord servers may also work.
