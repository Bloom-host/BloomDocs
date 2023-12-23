---
id: papi
title: PlaceholderAPI
slug: /plugins/placeholderapi
hide_table_of_contents: true
sidebar_label: PlaceholderAPI
description: Information about PlaceholderAPI Bukkit plugin
---


## Introduction

PlaceholderAPI (sometimes referred to as PAPI) is a plugin library that allows servers to display information from many plugins using a common format. 

Placeholders for individual plugins is downloaded and installed via the eCloud in-game (`/papi ecloud download [expansion]`) or added by a plugin developer.

## Install

Download the plugin off the [Spigot resource page](https://www.spigotmc.org/resources/placeholderapi.6245/) and install into the plugins folder (See the [help page](/installing-plugins) for help on how to do this)

## Usage

### Installing expansions

:::important
Be sure to check with each plugin developer if the plugin supports PlaceholderAPI.
Support for each plugin might be downloaded through the eCloud or built-in to the plugin.
:::

You first need to determine whether the expansion (file holding the placeholders for your plugins) needs to be downloaded seperately through the [eCloud](https://api.extendedclip.com/home/). To do this, check the [PlaceholderAPI support list](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Plugins-using-PlaceholderAPI) and press CTRL-F (Cmd-F on macOS) and type the plugin name into the search window.

:::important
A ticked checkbox next to `Supports placeholders.` means that that plugin can use placeholders from PlaceholderAPI.

A ticked checkbox next to `Provides own placeholders.` means that that plugin provides its own placeholders to PAPI. Click the link to see information on what placeholders it provides and the download command needed to install it (if required - if no download command is provided and it says `NO DOWNLOAD COMMAND` then it does not need to be installed)
:::

#### eCloud install

If a plugin expansion has an eCloud download command, you can download the expansion using the command `/papi ecloud download [expansion_name]`. This downloads the expansion off the eCloud for your plugin. You may need to repeat this multiple times for each plugin you need PAPI expansions for (remembering to change the `[expansion_name]`).

After install, you must use the command `/papi reload` to reload the config and to make sure downloaded expansions are registered properly.

### Using placeholders in your plugins

Plugin placeholders are in the format `%expansion_placeholder%` where `expansion` is the name of the expansion and `placeholder` is the name of the specific placeholder.

In a plugin which supports PAPI, usually they can be added into the config file of a plugin.

Refer to the documentation of your plugins for information on how to use PAPI placeholders.

## Commands

The following is a list of common commands you may need to use when setting up PAPI or plugins which may use them.

- `/papi ecloud download <expansion>` - Downloads a expansion off the eCloud 
- `/papi ecloud list <all|<author>|installed>` - Shows a list of all or installed eCloud expansions, or to display expansions from a specific author  
- `/papi parse <player|me> <string>` - Parse a text string with placeholder strings in them. Supports formatting marks.
- `/papi reload` - Reloads PAPI config. Also used after installing eCloud plugins to ensure they are registered properly.
- `/papi list` - Shows a list of all installed expansions (including those through other plugins).



## Resources
[Spigot page](https://github.com/PlaceholderAPI/PlaceholderAPI)

[Hangar page](https://hangar.papermc.io/HelpChat/PlaceholderAPI)

[Support Discord](https://discord.gg/FtArYRQ)

[GitHub Repository](https://github.com/PlaceholderAPI/PlaceholderAPI)

[Placeholder list](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders)

[Plugin support list](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Plugins-using-PlaceholderAPI)

[eCloud info](https://api.extendedclip.com/home/)
