---
id: discordsrv
title: DiscordSRV
slug: /plugins/discordsrv
hide_table_of_contents: false
sidebar_label: DiscordSRV
description: Learn how to connect your Minecraft server to Discord with DiscordSRV.
keywords:
  - DiscordSRV
  - Discord
  - Chat
  - Console
  - Minecraft
  - Discord Bot
  - Paper
  - Spigot
  - Bloom.host
---

## Overview

[DiscordSRV](https://docs.discordsrv.com/) connects a Minecraft server to Discord. It can relay chat between both platforms, post server events, link player accounts, synchronize roles, and provide remote console access.

This guide covers the initial setup for a basic chat relay. For account linking, role synchronization, and other advanced features, refer to the [official DiscordSRV documentation](https://docs.discordsrv.com/).

:::note Official Setup Reference
We recommend keeping the [official DiscordSRV initial setup guide](https://docs.discordsrv.com/installation/initial-setup/) open while following this guide. It is maintained by the plugin developers and should be used as the primary reference if Discord's interface or DiscordSRV's setup process changes.
:::

**Related Pages:**

- [Installing Plugins](/installing-plugins)
- [File Manager Controls](/file-manager-controls)

---

## Install DiscordSRV

1. Download DiscordSRV from [Modrinth](https://modrinth.com/plugin/discordsrv) or the [Spigot resource page](https://www.spigotmc.org/resources/discordsrv.18494/).
2. Upload the downloaded `.jar` file to your server's `plugins` folder.
3. Restart the Minecraft server to generate the DiscordSRV configuration files.
4. In the File Manager, confirm that the `plugins/DiscordSRV` folder was created.

For more detailed installation instructions, see [Installing Plugins](/installing-plugins).

---

## Create and Configure the Discord Bot

### Create the Application

1. Open the [Discord Developer Portal](https://discord.com/developers/applications).
2. Click **New Application**, enter a name, and create the application.
3. Open the **Installation** page.
4. Disable **User Install** and set **Install Link** to **None**.
5. Open the **Bot** page.
6. Under **Privileged Gateway Intents**, enable:
   - **Server Members Intent**
   - **Message Content Intent**

### Add the Bot Token

1. On the application's **Bot** page, make sure **Public Bot** is disabled (unchecked) so other users cannot invite the bot to their Discord servers.
2. Click **Reset Token**. Discord requires you to reset the token before you can copy it.
3. Copy the newly generated token.
4. In the Bloom.host File Manager, open `plugins/DiscordSRV/config.yml`.
5. Paste the token into the `BotToken` setting:

```yaml
BotToken: "YOUR_BOT_TOKEN"
```

:::warning Keep Your Token Private
Your bot token works like a password. Never post it in Discord, screenshots, logs, or public configuration files. If it is exposed, reset it immediately in the Discord Developer Portal.
:::

### Invite the Bot

1. Open the application's **General Information** page and copy the **Application ID**.
2. Follow the [DiscordSRV bot authorization link](https://scarsz.me/authorize).
3. Paste the Application ID when prompted.
4. Select your Discord server and click **Authorize**.

You must have permission to manage the selected Discord server.

### Grant the Bot Permissions

1. Open your Discord server's **Server Settings** and select **Roles**.
2. Create a role for the DiscordSRV bot and assign it to the bot.
3. Grant the role either:
   - **Administrator**, which is the simplest option but gives the bot full access to the Discord server; or
   - The permissions required for a basic chat relay:
     - **View Channel**
     - **Send Messages**
4. Enable additional permissions only for features that need them. Common examples include:
   - **Embed Links** for embedded DiscordSRV messages.
   - **Add Reactions** and **Read Message History** for truncated-message notifications.
5. Make sure the role has the required permissions in the Discord channel you plan to link.

For tighter security, use the minimum permissions and grant additional permissions only when enabling DiscordSRV features that require them. See the [official DiscordSRV setup guide](https://docs.discordsrv.com/installation/initial-setup/) for the complete permissions list.

---

## Configure the Chat Relay

### Copy the Discord Channel ID

1. In Discord, open **User Settings**.
2. Select **Advanced** and enable **Developer Mode**.
3. Right-click the Discord channel you want to connect to Minecraft.
4. Select **Copy Channel ID**.

### Link the Channel

1. Open `plugins/DiscordSRV/config.yml`.
2. Find the `Channels` setting.
3. Replace the default channel ID with the ID you copied:

```yaml
Channels: {"global": "YOUR_CHANNEL_ID"}
```

The `global` value refers to the Minecraft chat channel, not the name of the Discord channel. If you use a supported chat-channel plugin, you can add more mappings later.

4. Save the file.
5. Restart the Minecraft server.

After the restart, the bot should appear online. Send a message in Minecraft and Discord to confirm that chat is relayed in both directions.

---

## Discord Console Channel

:::warning Feature Not Recommended
We recommend that you ignore this feature completely. It's an additional breach vector to watch out for, and it's hard to justify the additional risk in most cases.
:::

:::caution Restrict Console Access
If you decide to use this feature, anyone who can send messages in the console channel may be able to run Minecraft server commands. Use a private channel, restrict it to trusted administrators, and do not reuse your public chat-relay channel.
:::

DiscordSRV can forward the Minecraft console to a separate Discord channel. Copy that channel's ID and add it to `config.yml`:

```yaml
DiscordConsoleChannelId: "YOUR_CONSOLE_CHANNEL_ID"
```

Restart the Minecraft server after saving the change.

---

## Troubleshooting

If the bot does not come online or messages are not relayed:

1. Confirm that **Server Members Intent** and **Message Content Intent** are enabled.
2. Check that `BotToken` contains the current token and includes no extra spaces.
3. Confirm that the bot is a member of your Discord server.
4. Verify that the bot can view the linked channel, send messages, embed links, and read message history.
5. Confirm that the channel ID in `Channels` is correct.
6. Review the Minecraft server console for DiscordSRV errors.

See the official [DiscordSRV initial setup guide](https://docs.discordsrv.com/installation/initial-setup/) for its complete permissions list and advanced setup information.

## Additional Resources

- [DiscordSRV Documentation](https://docs.discordsrv.com/)
- [DiscordSRV GitHub Repository](https://github.com/DiscordSRV/DiscordSRV)
- [DiscordSRV on Modrinth](https://modrinth.com/plugin/discordsrv)
- [DiscordSRV on Spigot](https://www.spigotmc.org/resources/discordsrv.18494/)
