---
id: pointing-a-domain
title: Using A Domain
hide_title: true
hide_table_of_contents: false
sidebar_label: Using A Domain
description: This guide will help you point your domain at the ip address of your minecraft server.
keywords:
  - Cloudflare
  - Domain
  - Minecraft Server
  - Pterodactyl Panel
  - Minecraft Domain
  - A Record
  - Bloom.host
image: 
---
# Using A Domain

Hello there Bloomers! 👋 

In this guide, we will go over on how to make your server go from lots of numbers (`148.251.209.38:25565`) to a fancy domain name such as `Bloom.HollowSeas.com`!

First, go to the [game panel](https://mc.bloom.host) and select your server. On the main page, above your console you will be able to find your IP. All bloom servers come with a dedicated IP, so you only need the IP and not any of the ports (`25565`). 

![Bloom.host Pointing A Domain](/static/img/pointing-a-domain/pointing-a-domain1.png)

In this guide we're going use CloudFlare to point our domain to the server. Simply register [here](https://dash.cloudflare.com/sign-up). After registration, they will guide you through the process of connecting your domain to CloudFlare.

Alternatively, some domain providers allow you to use their own systems for DNS. Though all sites look different, the task is the same for all of them. 

:::warning
Ensure that the server is grey cloud (not proxied by cloudflare). You can still use cloudflare, just make sure it has a grey cloud so it's <u>not proxied</u>.
:::

![Bloom.host Pointing A Domain](/static/img/pointing-a-domain/pointing-a-domain2.png)

---

- For the name, it will be `bloom`. This is the subdomain which we have assigned to it, so whatever name we put there will be put before the domain when we type it in. In this case, it's `bloom.hollowseas.com`. If you put `play` instead of `bloom`, it would be `play.hollowseas.com`. 
- We will then put into the IP we got from our server before into the IPv4 address. 
- Lastly, double check that the cloud icon is set to 'DNS only'!

Click Save. This process will now take up to 48 hours to apply, but in most cases, it will be under a couple of minutes with CloudFlare!
