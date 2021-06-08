---
id: votifier
title: Votifier
slug: /plugins/votifier
hide_title: true
hide_table_of_contents: false
sidebar_label: Votifier
description: Votifier allows you to be put on voting sites, which increases your servers visibility. Superbvote allows you to give rewards for players to vote.
keywords:
  - Votifier
  - Superbvote
  - Set up voting
  - Spigot
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
image: https://bloom.host/assets/images/logo.png
---
# **Votifier**

## What does the plugin do?

Votifier is a plugin that allows players to receive rewards when voting for your server on server list sites.  

SuperbVote is a vote rewards plugin that you can customize to give rewards for voting on Voting sites.

##Usage - Single Server Setup

First, download the [NuVotifier](https://www.spigotmc.org/resources/nuvotifier.13449/) plugin and install it into your `plugins` folder.
Secondly, download and install [SuperbVote](https://www.spigotmc.org/resources/superbvote.11626/) plugin into the same place.
Restart your server and enter the NuVotifier `config.yml` in its folder. Take a look at your port and remember this.

Next you should head on over to your Minecraft Panel @ [click here](https://mc.bloom.host/), Click on the server you put NuVotifier on and click `Ports & Proxies`, find the button with `Create Allocation` on it. Click that and type in the port that is in your `config.yml`

Open up your SuperbVote `config.yml` and add any rewards you want to give your players. You can also store any of the data in a MySQL database if you would like to.
If you don't know how to do this, [click here](https://docs.bloom.host/databases) or ask in the discord.

```YAML
    mysql:
      host: 123.456.789.10
      username: u420_abbylikesducks
      password: topsecret
      database: s420_Votifier
      table: votes
      streaks-table: streaks
      read-only: false
```

Next, save both configurations and restart your server.

## Info

[Nuvotifier Spigot](https://www.spigotmc.org/resources/nuvotifier.13449/)  

[Superbvote Spigot](https://www.spigotmc.org/resources/superbvote.11626/)
