---
id: litebans
title: LiteBans
slug: /multiplatform/litebans
hide_table_of_contents: false
sidebar_label: LiteBans
description: LiteBans is a premium plugin to manage and distribute punishments on your server or network.
keywords:
  - LiteBans
  - Punishment
  - Ban
  - mute
  - kick
  - Spigot
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
---

## What does the plugin do?

LiteBans is a premium plugin that allows you and your server staff to manage and distribute punishments to your players. It is a plugin that can be used on Spigot/Paper or BungeeCord/Waterfall/Velocity servers. 


## Usage
First, download the [LiteBans](https://www.spigotmc.org/resources/litebans.3715/) plugin and install it into your `plugins` folder.

### Usage on a BungeeCord/Velocity network

:::note
This section also applies to forks of BungeeCord such as Waterfall.
:::

You can also download LiteBans for a Bungee or Velocity network and it is installed in almost the same way as a Spigot install however the plugin is installed into the `plugins` folder of the proxy, not the backend servers.

:::important
If LiteBans is installed onto a BungeeCord/Waterfall proxy, bans, mutes and other punishments will need to be issued from the proxy’s console, not from the console of your backend servers.

In-game punishments can still be issued as normal.
:::

## Punishment storage
Next, you have to decide what type of storage you want for all your punishments, your options are H2, MySQL, MariaDB, and PostgreSQL. On Bloom you are going to want to use H2, or MySQL. H2 will store the information on your server, while MySQL will store it on a separate database. MySQL allows you to sync data accross a network if you are running one. Otherwise its your choice.

If you are using MySQL, you can see how to set up LiteBans with MySQL [HERE](/databases)

## Commands
LiteBans offers many commands to moderate your server, below will be a short list of the important ones.
```
/ban
/kick
/mute
/warn
/history
```
The ban command disallows the affected player from joining the server for the specified time.
The syntax for the ban command is /ban (-s) \{Player} [Time] [Reason]
If no time is specified, it will be permanent, if no reason is provided, it will default to whatever is listed in the config.

The Kick command kicks the player off of the server, they wont be prevented from joining again
The syntax for the kick command is /kick \{Player} [Reason]
If no reason is provided, it will default to whatever is listed in the config.

The ban command disallows the affected player from speaking in chat for the specified time.
The syntax for the ban command is /mute (-s) \{Player} [Time] [Reason]
If no time is specified, it will be permanent, if no reason is provided, it will default to whatever is listed in the config.

The warn command will send the targeted player a message in chat, and if enabled in the config, deal a punishment automatically on a certain number of warns.
The syntax for the warn command is /warn (-s) \{Player} [Reason]
A reason is required for a warn.

The history command displays the punishment history of a given player, this includes all kicks, mutes, warns, and bands the player has received.
The syntax for the history command is /history \{Player}

You may notice some of the commands have a (-s) in the syntax, if you put -s in that spot when executing the command it will silently execute the command. When done silently only players with a certain permission will see the punishment, otherwise everyone online will see it.

**LiteBans Web**

LiteBans web is a very powerful tool to sync your bans, mutes, warns and kicks right to a webpage for all to use. Most of the time people use this to show people that you will get punished for breaking the rules and enforce them more.

## How to install

Firstly you can choose between a theme, Here are a free one: [LiteBans Material UI](https://www.spigotmc.org/resources/litebans-material-ui.46648/) and there are many paid ones on MC-Market, Spigot ect..

Next you will need a web host, you can get a VPS or a webhost. It really doesnt matter. [Blooms VPS's](https://bloom.host/vps)

*Please note you must use MySQL for this to work. With Bloom you get a free MySQL Database. Change your LiteBans config to use MySQL as its database and fill in the information.*

Upload your files to the host and navigate to the file `/inc/settings.php` and fill in your MySQL or PGSQL information.

Once done, navigate to your website and done!



## Links

[Litebans Spigot](https://www.spigotmc.org/resources/litebans.3715/), Requires Account.

[Litebans Official Wiki](https://gitlab.com/ruany/LiteBans/-/wikis/home)

[Litebans Free Web](https://www.spigotmc.org/resources/litebans-material-ui.46648/)
