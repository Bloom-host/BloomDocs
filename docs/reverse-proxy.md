---
id: reverse-proxy
title: Reverse Proxy
hide_title: true
hide_table_of_contents: false
sidebar_label: Reverse Proxy
description: This guide will help you set up a reverse proxy for your minecraft server.
keywords:
  - BloomVPS
  - Reverse Proxy
  - Minecraft Server
  - Pterodactyl Panel
image: https://media.discordapp.net/attachments/738919680332529714/742239368919515207/ReverseProxy.png?width=1204&height=677
---
# Setting up a reverse proxy

1. You’ll first need to add a cname record, and point it at `revproxy.bloomvps.com`. 
2. Once you’ve done that, open a support ticket on our discord. Provide your hostname + domain name (ex: map.example.com), and the ip & port you want to proxy (ex: 192.168.0.1:8123). You can find your ip + port by opening the configuration dropdown menu, and selecting “Allocation Settings”. After you’ve provided the information, we will handle the rest.  
