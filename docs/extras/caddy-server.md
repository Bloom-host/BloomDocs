---
id: caddy-server
title: Creating a Caddy Split Server
hide_title: true
hide_table_of_contents: false
sidebar_label: Caddy Server
description: This guide will help you create a Caddy split server.
keywords:
  - Caddy
  - Caddy Server
---

<div class="text--center">
<img src="https://bloom.host/logo-white.svg" alt="logo" height="50%" width="50%"/>
<h1>Creating a Caddy Split Server</h1>
</div>

Hello Ducklings!

This guide will create a Caddy split server on Bloom.host.

---

## Creating the split server.

<div class="text--center">
![caddyserver](../../static/imgs/extras/caddy_server/1.PNG)</div>

Head on over to "Server Splitter" tab in your Minecraft control panel.

<div class="text--center">
![caddyserver](../../static/imgs/extras/caddy_server/2.PNG)</div>

Now, enter a name for you server and choose "NO SUPPORT SERVERS" under "SERVER CATEGORY". Then choose "Caddy Server" under "SERVER TYPE". Set MEMORY to 100MB and DISK to how much storage your Caddy server needs. After that, press **SPLIT SERVER***.

<div class="text--center">
![caddyserver](../../static/imgs/extras/caddy_server/3.PNG)</div>

After you press **SPLIT SERVER** confirm you would like to split your server by pressing **YES, SPLIT THIS SERVER**. This will stop your main server and create a split Caddy server.

---

## Configuring the Caddy server.

To start, drop your html/php files into the "/public" direcotry of the caddy server. Then start the server.
If you would like to use a domain for this server follow these instrudctions to setup a reverse proxy. [Instructions](https://docs.bloom.host/ports-and-proxies/)
