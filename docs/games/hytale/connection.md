---
id: connection-issues
title: Connection issues
hide_table_of_contents: true
sidebar_label: Connection issues
description: This guide will help fix some issues with ping spikes or general lag with hytale.
keywords:
  - hytale ping
  - hytale ping spikes
---

## Overview
:::info
Before continuing with the troubleshoot guide, please restart your server to ensure it is not a server issue.
:::

Players may experience slow connections or issues loading into a Hytale server, even when their general internet connection appears stable. Common symptoms include the world not loading, delayed movement, or disconnects during login. These issues are often related to local network configuration or routing problems.

## Common Connection Problems

If a player can connect to the server but the world does not load properly, the issue may be related to the network interface or driver configuration. Hytale uses modern networking protocols (QUIC), and some network adapters or drivers may have compatibility issues.

If possible, have affected players:
> Try connecting using a different network (for example, a mobile hotspot)
>
> Switch between Wi-Fi and Ethernet connections    

If the issue improves, the original network interface or configuration is likely the cause.

## Official Hytale Support Guide

For steps to fix slow connections or worlds not loading, refer to the [official Hytale support article](https://support.hytale.com/hc/en-us/articles/45419578597403-Slow-Connection-World-Not-Loading-on-Server):

## Additional Troubleshooting Steps

>Use [Cloudflare WARP](https://one.one.one.one/) to see if it improves your connection.
>
>Ensure local firewalls are not blocking UDP traffic or your server port. Non-residential internet connections are known for blocking the neccesary ports and protocols for games like Hytale.
>
>Restart networking equipment (router/modem)
>
>Use a wired connection where possible.

## Diagnosing Network Issues with MTR

When players experience high latency, timeouts, or unstable connections, running an MTR (My Traceroute) test can help identify where the issue is occurring along the network path.

We have a guide on [How to run an MTR](/mtr), please use that to go further with this guide.

Once you have ran a MTR please create a ticket in our [discord](https://discord.gg/bloom) or [billing](https://billing.bloom.host/submitticket.php?step=2&deptid=3) for further assistance.