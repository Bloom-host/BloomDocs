---
id: essentialsx
title: EssentialsX
hide_title: true
hide_table_of_contents: false
sidebar_label: EssentialsX
description: Plugin offering essential commands to servers
keywords:
  - Essentials
  - EssentialsX
  - Spigot
  - economy
  - currency
  - Pterodactyl Panel
  - Minecraft
  - Bloom.host
image: https://bloom.host/assets/images/logo.png
---
# EssentialsX

:::important
This guide does not cover any of EssentialsX's modules, such as EssentialsXChat, EssentialsXAntiBuild or EssentialsXGeoIP. Please check the [EssentialsX wiki](https://essentialsx.net/wiki/Module-Breakdown.html) for information on these modules.

Please note that any EssentialsX modules requires the core EssentialsX plugin jar to function (covered in this guide)
:::

:::caution
This guide does not cover all of EssentialsX's features, please check the [EssentialsX wiki](https://essentialsx.net/wiki/Home.html) for more information on its features
:::

## What does this plugin do? 
This is a plugin that offers basic commands and features such as a mail system, request tp system,  economy systems (sign shops, command costs), player nicknames and moderation tools if you don't want to install plugins such as [LiteBans](https://docs.bloom.host/plugins/Litebans) or [AdvancedBan](https://docs.bloom.host/plugins/advancedban).

This plugin also hooks into [Vault](https://docs.bloom.host/plugins/vault) to provide an economy service that other economy plugins on your server can use. It can also get group names from your permission plugin. 

## Install

You can either download stable builds from its [Spigot Resource page](https://www.spigotmc.org/resources/essentialsx.9089/) or you can download dev, experimental builds directly from [its website.](https://essentialsx.net/downloads.html)

Next, place the EssentialsX jar file into the `plugins` folder in your server. If you need help with installing plugins, [click here for a guide.](https://docs.bloom.host/bukkit-plugins)

## Usage
There are a lot of features of EssentialsX, here are a few of the simple commands for your players

* `/msg` - private messages the player
* `/motd` - view the server motd, configurable in the config
* `/mail` - sends mail to players
* `/rules`, `/info` - displays server information, defined in `rules.txt` and `info.txt`
* `/bal` - shows the balance of a player
* `/pay` - allows a player to pay someone else using their balance
* `/baltop` - shows a list of players with the highest balances
* `/warp` - sends the player to a warp that you created using `/setwarp`
* `/kit` - Allows the player to get a pre-defined set of items that you make with `/createkit`. Also supports cooldowns and costs.

There are, of course more commands, refer to [the command reference](https://essinfo.xeya.me/commands.html) for a list of all commands.

### Essentials signs

EssentialsX also has a number of signs that you can use to allow your players to interact with, for example, buying/selling items or going to a warp by right-clicking a sign.

:::important
All EssentialsX signs are **disabled by default**. If you want to use a sign, you will need to enable it in the config. To do this:
1. Open the config file in the EssentialsX plugin folder (usually `/plugins/Essentials`)
2. Scroll down untill you see a section that looks like this:
```yaml
# Essentials Sign Control
# See http://wiki.ess3.net/wiki/Sign_Tutorial for instructions on how to use these.
# To enable signs, remove # symbol. To disable all signs, comment/remove each sign.
# Essentials colored sign support will be enabled when any sign types are enabled.
# Color is not an actual sign, it's for enabling using color codes on signs, when the correct permissions are given.

enabledSigns:
  #- color
  #- balance
  #- buy
  #- sell
  #- trade.

  #- free
  #- disposal
  #- warp
  #- kit
  #- mail
  #- enchant
  #- gamemode
  #- heal
  #- info
  #- spawnmob
  #- repair
  #- time
  #- weather
```
3. Remove the `#` symbol from each type of sign you want to use.
4. Save the configuration file and reload Essentials (`/essentials reload`). 
:::

There are various right-clickable signs that you can use (and can be enabled in the section above.)
For example, warp signs can take your player to a warp you defined with `/setwarp` and the mail sign can show the player's mail.

## Info

[EssentialsX website](https://essentialsx.net)

[EssentialsX wiki](https://essentialsx.net/wiki/Home.html)

[Spigot Resource Page](https://www.spigotmc.org/resources/essentialsx.9089/)

[EssentialsX command reference](https://essinfo.xeya.me/commands.html)

[EssentialsX permissions reference](https://essinfo.xeya.me/permissions.html)

[Support Discord](https://discord.com/invite/h8CnPSw)