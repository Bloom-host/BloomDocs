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
:::warning
Reverse proxies can only be used for web connections (eg. HTTPS). If you want to join your minecraft server using your domain, check [this page](pointing-a-domain.md)
:::
:::note
For this guide, you must have access to a domain and the ability to alter that domain's DNS settings. For this guide, we assume you have a domain with Cloudflare, but most registrars will work.
:::
:::note
In most cases, you should use a CNAME (Canonical Name) record to connect your subdomain to the reverse proxy. However, if you need to use a root domain, you will need to use an A record. Root domains are the base of a domain, like **example.com**, as opposed to a subdomain, **subdomain.example.com**
:::

---

#### This section is for subdomains, where you should use CNAME records:

First, you will want to head over to your domain's DNS settings panel. In this demo, we will be using Cloudflare, and as an example domain, we will use **subdomain.example.com**.

![CNAME record setup](../static/img/reverse-proxy/cname-record.png)

The DNS record usually used for a reverse proxy is a CNAME (canonical name). You will want to create an identical CNAME record as the one pictured above, but you will replace the 'Name' field with the subdomain of your choice.

---

#### This section is for root domains, where you should use A records:

Go to your domain's DNS settings. We will use Cloudflare for this demo and **example.com** as an example domain.

![A record setup](../static/img/reverse-proxy/a-record.png)

In this case, create a new A record, identical to the one above. Different DNS providers may use different methods to reference the root of a domain. In most cases, you should put an `@` inside the Name box

---
:::note
CNAME records can take some time to propagate, though this depends on your ISP and other factors.

For more information, check out [this page](https://dnschecker.org/#CNAME).
:::
:::warning
If you do use Cloudflare for DNS, make sure to set the 'Proxy status' as **DNS only** as it won't work if it's proxied.
:::

---


Once you've created your CNAME record, go to your [game panel](https://mc.bloom.host/) and on the left sidebar, select 'Ports & Proxies'.


![Bloom.host Ports & Allocations](../static/img/reverse-proxy/reverse-proxy2.png)

More than likely, you will have one allocation, but to create a reverse proxy, you will need to create a new allocation, to do so, just click 'Create Allocation'.

![Bloom.host Ports & Allocations](../static/img/reverse-proxy/proxy-ports-page.png)

Once your new allocation has been created, it will be assigned a random port, if you need a specific port, open a support ticket in the [Bloom.host Discord](https://discord.com/invite/bloom).

With this new allocation, you will want to input the domain or subdomain that you entered into your CNAME/A record, for this demo, we will input **subdomain.example.com**.

---
