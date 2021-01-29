---
id: conditionalcommands
title: Conditional Commands
hide_title: true
hide_table_of_contents: false
sidebar_label: Conditional Commands
description: A solution to add conditional commands to Minecraft, allowing more configurability with automated actions
keywords:
  - Conditional Commands
  - Advanced Anticheat
  - Anticheat
  - Spigot
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
image: https://bloom.host/assets/images/logo.png
---
# Conditional Commands

### Introduction to how all anticheat plugins work:
- Anticheat plugins have various "checks" that detect cheating (say if a player is going above a certain speed limit)
  - When these checks are triggered, the anticheat adds "VL" or violation level points to the offender
  - All anticheats are configurable to execute a certain command (notify, kicking, or banning a player) at a certain violation level
- However, sometimes a player may be lagging, and the kicking/banning command by itself does not account for this lag, resulting in false kicks/bans and complaints

### Why you should use conditional commands and what it does:
- Conditional commands are a command that has parameters like ping, tps, etc. tied to an actual executed command
- Let's say you wanted a player to be kicked for hacking when they reach a certail violation level (VL) in your anticheat configuration, conditional commands will let you kick that player ONLY if their ping is below a certain threshold
  - This means that you are able to exempt laggy players with high ping or when server TPS is low from getting false kicked/banned

### Usage
:::caution
Although the plugin page says the plugin was only tested up to 1.12, conditional commands works without issue on all server versions due to its simplicity. Versions such as 1.16.3 have been tested to work on numerous servers
:::

Install conditional commands by dragging it into your plugin folder, and restart your server.

Basic commands you can use are:
`/cc [player] unless [condition] do [command]`
`/cc [player] if [condition] do [command]`
`/cc help`

These are the conditions you can use:
- `ping` - The latency of the tested player.
- `tps` - Server TPS average over the last 2 seconds
- `time_online` - Player's online time in milliseconds
- `uptime` - Server uptime in ticks
- `player_count` - Number of players on the server
- `perm:<permission>` - returns 1.0 if the player has the permission, returns 0.0 otherwise. e.g. -perm:essentials.home-
- `aacvl:<check>` - AAC violation level of the given check (internal name). e.g. -aacvl:speed-
- `chance:<percentage>%` - Will be 1.0 percentage% of the time. e.g. -chance:34.5%-

:::important

You need to surround your "condition" (tps, ping, etc.) that you chose from the list above with dashes, so if you were to check for ping for example, "-ping-" would be what the syntax is

:::

Examples of conditional commands:
- /cc iLoveDucks unless -ping->200 do kick iLoveDucks
  - This command when executed, will kick the player 'iLoveDucks' unless their ping is above 200ms, meaning that laggy players will not get kicked should you use conditional commands

:::important
If you are configuring an anticheat, it's best practice to have a test server (even a local one if getting a hosted one isn't an option) to test your anti-cheat configuration before deploying 
:::

## Info

[Spigot Page](https://www.spigotmc.org/resources/conditionalcommands.14295/) 
