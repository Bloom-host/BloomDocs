---
id: banannouncer
title: Ban Announcer
slug: /plugins/banannouncer
hide_table_of_contents: false
sidebar_label: Ban Announcer
description: A Spigot plugin to send punishments to a discord channel, of your choosing!
keywords:
  - Ban Announcer
  - Ban Plugin
  - Spigot
  - Moderation
  - Discord
  - Bloom.host
  - Minecraft
---

## What does the plugin do?
This plugin allows you to send a message (like the one below) to a channel in your discord through a discord bot, when somebody receives a punishment. (Muted, Warned, Banned, Unbanned, etc)

![Discord punishment notification sent by BanAnnouncer](https://i.imgur.com/QuK1heu.png)

:::important
You must have Spicord, a Discord account, and a **Compatible** moderation plugin such as [AdvancedBan](https://www.spigotmc.org/resources/advancedban.8695/)
:::

---

## Installation
Once you download Spicord, BanAnnouncer, and the moderation plugin of your choice, upload them to your server's `plugins` folder and restart your server. After you have restarted, head over to the Discord [Developer Portal](https://discord.com/developers/applications), create a new application, and give it a name. Next, you'll want to head to the `Bot` tab on the left-hand side and add a bot. Here you can customize your bot by giving it a name, changing its avatar, and adjusting other settings.

---

## Setting up your bot
After you've created your Discord bot, you can find your token in the `Bot` tab. You'll have to click `Reset Token` and enter your 2FA code if you have it enabled. You will then be able to copy the token.

:::warning
DO NOT SHARE YOUR BOT TOKEN.
:::

Once you copy your token, scroll down to the bottom of the page, under **Privileged Gateway Intents**, and enable all three settings.

![Discord bot settings with all privileged gateway intents enabled](https://i.imgur.com/GKh1zhU.png)

For the sake of this guide, we're going to use the Administrator permission to guarantee it works correctly. Ideally, you would want to set the **proper permissions** for the channel.


After you enable the options above, you can head over to the `OAuth2` tab and select `URL Generator`. Under `Scopes` select `bot`, and under `Bot Permissions` select `Administrator`. This will generate a URL at the bottom. Use this invite to add your bot to your guilds.

---

## Configuration

### Ban Announcer
Head over to BanAnnouncer's config `/plugins/banannouncer/config.yml`, and paste the Channel ID of the channel you want to use, in `channels-to-announce`.

:::note
If you don't know how to get the Channel ID, see [this](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID) guide.
:::

### Spicord
In your Spicord config `/plugins/Spicord/config.toml`, under the `[[bots]]` section, add your token where it says `"YOUR BOT TOKEN HERE"`. After you add your token, find the `addons` section, and add `"ban_announcer"` on the next line. **Make sure you put a comma after the last option already there**

![Spicord configuration with the bot token and BanAnnouncer addon](https://i.imgur.com/9itDSVi.png)

As long as you set everything up correctly, your next punishment should show up in discord!



---

## Links
[Bloom.host Discord](https://discord.gg/bloom)

[Ban Announcer - SpigotMC](https://spigotmc.org/resources/64976/)

[Spicord - SpigotMC](https://spigotmc.org/resources/64918)
