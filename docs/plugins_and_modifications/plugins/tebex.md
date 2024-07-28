---
id: tebex
title: Tebex (BuyCraft)
slug: /plugins/tebex
hide_table_of_contents: true
sidebar_label: Tebex (BuyCraft)
description: An easy to use Tebex Store integration plugin.
keywords:
  - Spigot
  - Tebex
  - BuyCraft
  - Donation Store
  - Pterodactyl Panel
  - Minecraft
  - Bloom.host
---

## What does the plugin do?

Tebex (BuyCraft) is a plugin that links your Tebex Donation Store to your Minecraft Server. You can use this plugin to automate the giving of permissions, groups, items, etc to players on the store for purchase via this integration.

## Installation
 
In order to install Tebex (BuyCraft), you need to download the .jar file from the official [Tebex Download page](https://server.tebex.io/plugins/124/download). You will need to log in to access this download page.

Once you have done this, please upload the .jar file into your `/plugins` folder. For further assistance on how to install plugins, please refer to this [guide](/installing-plugins).

## Usage

In order to integrate your Tebex Store with your Minecraft server, you need your Tebex secret key. To obtain the secret key, head over to the Tebex [website](https://server.tebex.io/settings/servers/1083138) and log in to your dashboard. 

Once you have logged in, proceed to the sidebar on the left of your page and click on the Integrations dropdown, then Servers. Create a server on the top right if you haven’t already and click Edit. Here you will see your Secret Key.

:::warning

Do not share your Secret Key with **anyone**!

:::

See below for an example on where to find your Secret Key. 

Once you have obtained your Secret Key, run the following command in your server’s console, being sure to replace `key` with your Secret Key.

```
tebex secret key
```

With that, you have integrated your Tebex Store with your Minecraft Server! If the command fails, be sure to check you have entered your Secret key correctly.

## Info

[Tebex Download Page](https://server.tebex.io/plugins/124/download)

[Website](https://tebex.io/)

[Support](https://www.tebex.io/contact/support)
