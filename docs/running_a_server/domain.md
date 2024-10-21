---
id: domain
title: Using A Domain
slug: /domain
hide_table_of_contents: true
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
---

Hello there Bloomers! 👋 

In this guide, we will go over on how to make your server go from lots of numbers (`148.251.209.38:25565`) to a fancy domain name such as `play.example.com`!

First, go to the [game panel](https://mc.bloom.host) and select your server. On the main page, above your console you will be able to find your IP. All bloom servers come with a dedicated IP, so you only need the IP and not any of the ports (`25565`). 

![Bloom.host Pointing A Domain](/running_a_server/domain/1.png)

In this guide we're going use CloudFlare to point our domain to the server. Simply register [here](https://dash.cloudflare.com/sign-up). After registration, they will guide you through the process of connecting your domain to CloudFlare.

Alternatively, some domain providers allow you to use their own systems for DNS. Though all sites look different, the task is the same for all of them. 

:::warning
Ensure that the server is grey cloud (not proxied by cloudflare). You can still use cloudflare, just make sure it has a grey cloud so it's <u>not proxied</u>.
:::

![img](/running_a_server/domain/2.png)

---

- For the name, it will be `mc`. This is the subdomain which we have assigned to it, so whatever name we put there will be put before the domain when we type it in. In this case, it's `mc.example.com`. If you put `play` instead of `mc`, it would be `play.example.com`. 
- You can use `@` in the **Name** field if you want your root domain to point to your Minecraft server. A root domain is a one like this: **example.com**
- We will then put into the IP we got from our server into the IPv4 address. Remember that you don't need to write your server port here.
- Lastly, double check that the cloud icon is set to 'DNS only'!

Click Save. This process will now take up to 48 hours to apply, but in most cases, it will be under a couple of minutes with Cloudflare!

---
# Pointing a domain to a server that doesn't use port 25565 (split servers or Essentials Plans servers)

If you have a split server or Essentials Plans server and it doesn't have a 25565 port, and you want to join to them directly you will need to use something similar to this: `play.example.com:25566`. We can get around this by using a **DNS SRV record** that points to the split server port.

:::note
SRV records are only supported on Java clients, Bedrock clients will be unable to resolve this record.

If you wish to have multiple servers with clean domains on a network, [it's recommended to setup a network proxy](../running_a_server/velocity.md).
:::

:::warning
For the following steps we assume you already have created an A record pointing to your server IP. If you haven't done so, please follow the steps above to create another A record before you create the SRV Record.
:::

![img](/running_a_server/domain/3.png)

To create a DNS SRV record you will head to your registrar or Cloudflare DNS configuration page. 
- Once you are there, you will click on add a new DNS record and you will select `SRV`.
- Then you will proceed to create an identical record to the one above. 
- You will need to replace the `Port` field with the port that your split server uses
- Remember to replace the `Target` field with the subdomain or domain that it's pointing to your server IP.
- The priority and Weight ports can be leaved at `0`. TTL needs to be in `Auto`.

That's all! Now you should be able to connect to your split server using `mc.example.com`, you no longer need to use the port.
