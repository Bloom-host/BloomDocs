---
id: ghost
title: Creating a Ghost Split Server
hide_title: true
hide_table_of_contents: false
sidebar_label: Ghost Server
description: This guide will help you create a Ghost split server.
keywords:
  - Ghost
  - Ghost blog
  - Ghost CMS
  - Caddy Server
  - Bloom.host
---

<div class="text--center">
<img src="https://bloom.host/logo-white.svg" alt="logo" height="50%" width="50%"/>
<h1>Creating a Ghost Split Server</h1>
</div>

## What is Ghost blog?
Create your own platform on the web. Ghost is a powerful app for new-media creators to publish, share, and grow a business around their content. It comes with modern tools to build a website, publish content, send newsletters & offer paid subscriptions to members.

Don't settle for another basic profile that looks just like everyone else. Make it yours.

:::note
Ghost Blog uses the Caddy server split. For more information, check [Caddy server split](https://docs.bloom.host/extras/caddy-server/).
:::

## Creating the Ghost Server
1. Head over to `Server Split` tab in your Minecraft control panel.
1. Enter a name for your server and choose `NO SUPPORT SERVERS` under server category. Then choose `Ghost CMS` under server type. Set memory to 100MB and disk to 1500MB. You may need to increase your storage depending on your file upload and theme. After that, press `Split Server`.
1. After you press `Split Server` confirm you would like to split your server by pressing `Yes, split this server`. This will stop your main server and create a split Ghost server.

If you need help splitting a server, check [How to split servers](https://docs.bloom.host/split-server).


## Configuring the Ghost server

1. If you would like to use a domain for this server follow these [instructions](https://docs.bloom.host/ports-and-proxies/) to setup a reverse proxy.
1. Head over to the admin interface. You can find the url to your admin interace from console. This should look  similar to this `https://domain.com/ghost/`.