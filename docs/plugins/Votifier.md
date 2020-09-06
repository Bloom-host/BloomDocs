---
id: votifier
title: Votifier
hide_title: true
hide_table_of_contents: false
sidebar_label: Votifier
description: Votifier allows you to be put on voting sites, which increases your servers visibility. Superbvote allows you to give rewards for players to vote. 
keywords:
  - Votifier
  - Superbvote
  - Set up voting
  - Spigot
  - BloomVPS
  - Pterodactyl Panel
  - Minecraft
image: https://bloomvps.com/assets/images/logo.png
---
# **Votifier**

## Info

[Nuvotifier Spigot](https://www.spigotmc.org/resources/nuvotifier.13449/)

[Superbvote Spigot](https://www.spigotmc.org/resources/superbvote.11626/)

## What does the plugin do?
Votifier is a plugin that allows players to receive rewards when voting for your server on server list sites.

SuperbVote is a Vote Rewards plugin that you can customize to give rewards for voting on Voting sites.
## Usage
First, Download the Nuvotifier plugin and install it into your **`plugins`** folder, and install the Superbvote plugin  into the same place, Restart your server and enter the Nuvotifer**`config.yml`** in the config, take a note of your port number

Then go to the BloomVPS discord [join here!](discord.gg/bloom), and request that the port in your Nuvotifier Config be opened,


Then,
Enter your Superbvote **`config.yml`** and then add what rewards you want to give your players, also you can store the data in a MySQL database if you would like, if you don't know how [click here!](https://docs.bloomvps.com/databases)
```YAML
    mysql:
     host: 123.456.789.10
     username: u420_abbylikesducks
     password: topsecret
     database: s420_Votifier
     table: votes
     read-only: false
```

Finally, save both Configs and Restart your server.

