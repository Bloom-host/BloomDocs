---
id: reverse-proxy
title: Creating a Reverse Proxy
hide_title: true
hide_table_of_contents: false
sidebar_label: Creating a Reverse Proxy
description: This guide will help you to create a reverse proxy.
keywords:
  - Bloom.host
  - Pterodactyl Panel
  - Reverse Proxy
image: https://bloom.host/assets/images/logo.png
---
# Creating a Reverse Proxy

Hey there Bloomers! 👋

In this guide, we will go over how to create a reverse proxy for your Minecraft server!

---

:::note
For this guide, you must have access to a domain and the ability to alter that domain's DNS settings. For this guide, we assume you have a domain with Cloudflare, but most registrars will work.
:::

First, you will want to head over to your domain's DNS settings panel, in this demo, we will be using Cloudflare, and for the domain we will be using **subdomain.server.com**.

![Bloom.host Ports & Allocations](../static/img/reverse-proxy/reverse-proxy1.png)

The DNS record required for a reverse proxy is a CNAME (canonical name). You will want to create an identical CNAME record as the one pictured above, but you will replace the 'Name' field with the subdomain of your choice.

:::note
CNAME records can take some time to propagate, though this depends on you ISP and other factors.
:::

:::warning
If you do use Cloudflare for DNS, make sure to set the 'Proxy status' as **DNS only** as it won't work if it's proxied.
:::

Once you've created your CNAME record, go to your [game panel](https://mc.bloom.host/) and on the left sidebar, select 'Ports & Proxies'.


![Bloom.host Ports & Allocations](../static/img/reverse-proxy/reverse-proxy2.png)

More than likely, you will have one allocation, but to create a reverse proxy, you will need to create a new allocation, to do so, just click 'Create Allocation'.

![Bloom.host Ports & Allocations](../static/img/reverse-proxy/reverse-proxy3.png)

Once your new allocation has been created, it will be assigned a random port, if you need a specific port, open a support ticket in the [Bloom.host Discord](https://discord.com/invite/bloom).

With this new allocation, you will want to input the domain along with the subdomain that you entered into your CNAME record, for this demo, we will input **subdomain.server.com**.

---