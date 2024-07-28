---
id: discordsrv
title: DiscordSRV
slug: /plugins/discordsrv
hide_table_of_contents: true
sidebar_label: DiscordSRV
description: An open-source plugin that bridges Discord and Minecraft.
keywords:
  - Discord
  - Chat
  - Console
  - Minecraft
  - Discord Bot
  - Spigot
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
---

## What does the plugin do?

DiscordSRV gives players the ability to chat in-game with users in a Discord server as well as allowing users in a Discord server to chat with players in-game.

This plugin also has a remote console feature, allowing admins to be able to execute commands as well as see the server console straight from a Discord server.

## Usage

:::important
This guide does not cover all the features that DiscordSRV includes.
:::

First, go to the official [Discord Developer Portal](https://discord.com/developers/applications/) website and create a new application as well as create a new bot user under the same application.

Enable the **SERVER MEMBERS INTENT** and **MESSAGE CONTENT INTENT** options under "Privileged Gateway Intents" and copy the bot's token on the bot tab (by clicking the `Reset Token` button), as it is needed to make DiscordSRV work properly.

Install the [DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) plugin ([Alternative link](https://modrinth.com/mod/discordsrv)) and install it into your `plugins` folder (If you need help installing plugins, check out [this guide](/installing-plugins)). Start and stop the server and then open the configuration file for DiscordSRV.

Paste the bot's token that was taken from the Discord Developers website into the `BotToken` value and then invite your newly created Discord bot using the application ID on the website.

In the config option labeled `Channels`, paste the Discord channel ID that you want to be set for your chat under "global" (You can set up more channels and link more channels later).

:::important
If you want your server console to be accessable from Discord in a channel, add a console channel ID in the config as well.
:::

Finally, start your server! DiscordSRV has been installed and you will see your discord bot start reporting all chat logs from your Minecraft server into your Discord server and vice-versa!

## Links

[DiscordSRV Spigot Page](https://www.spigotmc.org/resources/discordsrv.18494/)

[DiscordSRV Modrinth Page](https://modrinth.com/mod/discordsrv)

[DiscordSRV GitHub Page](https://github.com/DiscordSRV/DiscordSRV)

[DiscordSRV Official Wiki](https://docs.discordsrv.com/)
