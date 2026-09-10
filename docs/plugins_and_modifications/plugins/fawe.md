---
id: fawe
title: FastAsyncWorldEdit
slug: /plugins/fawe
hide_table_of_contents: false
sidebar_label: FastAsyncWorldEdit
description: An alternative to WorldEdit designed to improve performance when editing large areas.
keywords:
  - FAWE
  - FastAsyncWorldEdit
  - Fast Async World Edit
  - WorldEdit
  - Performance
  - Building
  - Spigot
  - Paper
  - Pterodactyl Panel
  - Minecraft
---

## Overview

FastAsyncWorldEdit, usually called FAWE, is a fork of [WorldEdit](/multiplatform/worldedit) designed to improve editing speed and memory usage. You can use it to select areas, change blocks, create shapes, and work with schematics using the familiar WorldEdit commands.

Pasting huge schematics or editing large selections with WorldEdit can put a lot of load on your server. FAWE handles much of the editing work asynchronously, moving that processing away from the main server thread to reduce its impact on gameplay.

This makes FAWE useful for building servers and other servers where large edits are common. Keep in mind that large operations still use server resources, so the size of your edits and your server's available memory still matter.

:::important
FAWE replaces WorldEdit. You should not install both plugins together.

FAWE and AsyncWorldEdit are different projects. You do not need AsyncWorldEdit to use FAWE.
:::

## Setup

Download the latest [FAWE version](https://modrinth.com/plugin/fastasyncworldedit/versions) compatible with your Minecraft version and server platform. This guide covers installation on Bukkit, Spigot, Paper, and compatible forks.

1. If you already have WorldEdit or AsyncWorldEdit installed, remove their `.jar` files from the `plugins` folder.
2. Drop the FAWE `.jar` file into your server's `plugins` folder.
3. Start the server. FAWE will load and generate its configuration files.

If you need help installing plugins, check [How to install plugins](/installing-plugins). You can also consult the [FAWE installation guide](https://intellectualsites.gitbook.io/fastasyncworldedit/getting-started/installation).

---

## Commands

FAWE uses the same basic editing commands as WorldEdit. If you're new to making selections, filling areas, or creating shapes, start with the commands in our [WorldEdit guide](/multiplatform/worldedit#commands).

For example, you can use `//wand` to select two opposite corners of an area, then run `//set stone` to fill it with stone.

### //cancel

If you need to stop your current operations, run `//cancel`.

### //undo and //redo

You can run `//undo` to undo an edit recorded in your history, or `//redo` to apply it again.

### Command help

Run `//help` in-game to browse the available commands. You can also check the [FAWE command reference](https://intellectualsites.gitbook.io/fastasyncworldedit/features/main-commands-and-permissions) for commands and their required permissions.

---

## Configuration

FAWE works with its default settings, so you don't need to change the configuration to start using it.

If you want to adjust its behavior, you'll find the main configuration file at `plugins/FastAsyncWorldEdit/config.yml`.

Two sections you may want to look at are:

- **limits**: Controls editing limits for different groups of players, including how many blocks they can change.
- **queue**: Controls how editing work is processed, affecting editing speed and memory usage.

We recommend starting with the defaults and reading the comments before changing these settings. For more information, check out the [FAWE configuration guide](https://intellectualsites.gitbook.io/fastasyncworldedit/customization/configuration).

After making changes, save the file and restart your server.

### Permissions and protected regions

FAWE can work with protection plugins, such as [WorldGuard](/plugins/worldguard), to restrict where players can edit.

If you want to give players access to FAWE, check the [permissions guide](https://intellectualsites.gitbook.io/fastasyncworldedit/customization/permissions) for the editing commands, limit groups, and region permissions they need.

Keep in mind that the `fawe.bypass` permission bypasses editing restrictions and limits.

---

## Info

[Modrinth](https://modrinth.com/plugin/fastasyncworldedit)

[GitHub](https://github.com/IntellectualSites/FastAsyncWorldEdit)

[FAWE Wiki](https://intellectualsites.gitbook.io/fastasyncworldedit)

[Support Discord](https://discord.gg/intellectualsites)

[WorldEdit guide](/multiplatform/worldedit)