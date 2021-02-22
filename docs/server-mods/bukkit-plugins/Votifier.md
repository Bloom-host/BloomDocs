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
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
image: https://bloom.host/assets/images/logo.png
---
# **Votifier**

## What does the plugin do?

Votifier is a plugin that allows players to receive rewards when voting for your server on server list sites.  

SuperbVote is a vote rewards plugin that you can customize to give rewards for voting on Voting sites.  

## Usage
First, download the [NuVotifier](https://www.spigotmc.org/resources/nuvotifier.13449/) plugin and install it into your `plugins` folder. Install the [SuperbVote](https://www.spigotmc.org/resources/superbvote.11626/) plugin into the same place. Restart your server and enter the NuVotifer `config.yml` in its folder. Take a note of your port number.  

Next, go to the Bloom.host discord [here](https://discord.gg/bloom) and open a port on the game panel. (for instuctions on how to do this refer to [this](https://docs.bloom.host/panel/open-ports)) 

Enter your SuperbVote `config.yml` and add what rewards you want to give your players. You can also store the data in a MySQL database if you would like. If you don't know how, [click here](https://docs.bloom.host/plugins) or ask in the discord.  
```YAML
    mysql:
     host: 123.456.789.10
     username: u420_abbylikesducks
     password: topsecret
     database: s420_Votifier
     table: votes
     read-only: false
```

Finally, save both configs and restart your server.  

## Info

[Nuvotifier Spigot](https://www.spigotmc.org/resources/nuvotifier.13449/)  

[Superbvote Spigot](https://www.spigotmc.org/resources/superbvote.11626/)
