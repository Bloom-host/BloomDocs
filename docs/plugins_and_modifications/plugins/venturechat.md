---
id: venturechat
title: VentureChat
slug: /plugins/venturechat
hide_table_of_contents: true
sidebar_label: VentureChat
description: An easy to use and customisable plugin for your chat needs.
keywords:
  - VentureChat
  - Chat
  - Spigot
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
---

### What does the plugin do?

VentureChat is the #1 Bukkit chat resource on Spigot which is a do-it-all chat plugin, from chat-format to customisable channels, you can accomplish this all with VentureChat. Unlike competing plugins such as HeroChat Pro and EssentialsX, you can customise to your liking for free and with ease. It is notable that VentureChat is one of the few chat plugins to fully support HEX colours easily.

## Usage

:::important
This plugin requires Java 17 or higher to work. The instructions on how to change the Java version used by your server are [here](/java-version)
:::

To use this plugin, [download](https://www.spigotmc.org/resources/venturechat.771/) the jar file you will use for installation. This plugin can be used on Bungeecord servers by placing it into the relative plugins folder too.

Once you have downloaded the .jar file, upload it into your `plugins` folder then either start or restart the server. If you need assistance in installing plugins, check out [this guide](/installing-plugins).  

To begin, simply edit the `config.yml` channels below. Here is an example from the [VentureChat Wiki](https://www.spigotmc.org/wiki/venturechat-wiki/)

```
Build:
    color: dark_green
    chatcolor: white
    mutable: true
    filter: true
    autojoin: true
    default: true
    distance: 0
    cooldown: 0
    bungeecord: true
    alias: b
    permissions: None
    format: '&2 Build &7┃ {groupprefix}{nickname}&7 :'
```

### Defining the more complicated terms

Here are a list of key terms you have seen in the above configuration that can be important in the setup of your channels.

`alias` - This shortens the command to join and send messages in a channel(s). E.g. Instead of running `/build` in this example, you can do `/b <text>` instead.

`distance` - This is the radius in which people will see your message. E.g. If it is set to five, people only within five blocks from all directions of you will see a message you have sent.

`cooldown` - Defines how quickly you can send messages in seconds. E.g. If you set this option to 3, people can only send a message per 3 seconds.

`bungeecord` - This enables cross-server messages. Due to the complexities of this function, read the relevent wiki page [here](https://www.spigotmc.org/wiki/venturechat-wiki/).

`autojoin` - Defines whether or not this channel is the first channel you enter on join. It is recommended you only enable autojoin for one channel only to avoid conflicts.

## How to use VentureChat Broadcast and Messaging

Unfortunately with plugins such as [EssentialsX](https://www.spigotmc.org/resources/essentialsx.9089/), you may be unable to use `/msg` and `/broadcast` functions due to conflicting plugins. In order to fix said conflicts, make the following adjustements below.

Add to the bukkit `commands.yml` (found at `/`)

```yml
  msg:
  - vmessage $$1 $2-
  reply:
  - vreply $$1 $2-
  r:
  - vreply $$1 $2-
  message:
  - vmessage $$1 $2-
  tell:
  - vtell $$1 $2-
  broadcast:
  - vbroadcast $$1 $2-
```

If you have EssentialsX add to the plugin's `config.yml` (found at `/plugins/EssentialsX/`)

```yml
disabled-commands:
- nick
- broadcast
- essentials:broadcast
- ignore
- essentials:ignore
- msgtoggle
- essentials:msgtoggle
- unignore
- essentials:ignore
```

Once the above additions are added save the following files and run `/essentials reload` before restarting your server, or start your server. Now you should be able to use VentureChat's broadcast and messaging funcitons while overriding EssentialsX's default ones if you have EssentialsX also.

## Info

[VentureChat Spigot](https://www.spigotmc.org/resources/venturechat.771/)  

[GitHub](https://github.com/Aust1n46/VentureChat)

[Wiki](https://www.spigotmc.org/wiki/venturechat-wiki/)
