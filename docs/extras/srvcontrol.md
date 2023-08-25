---
id: srvcontrol
title: SRVControl
hide_table_of_contents: true
sidebar_label: SRVControl
description: This guide will help you connect the discord bot SRVControl to your pterodactyl servers so you are able to control your servers through discord.
keywords:
  - Mobile App
  - Pterodactyl Panel
  - SRVControl
  - Bloom.host
---

Hey Bloomers! In this guide we will be going over how to connect SRVControl (Discord Bot) to your Minecraft servers hosted on Pterodactyl. This discord bot uses the Pterodactyl API to allow you to control your servers through discord.

We can start by heading over to their [website](https://srvcontrol.xyz/) and inviting the bot to your discord server. Then once the bot is invited, go back to their website and click on "Dashboard" in the top right. Once you are at the dashboard, click manage on the server you invited the bot to and set the **Panel URL** to https://mc.bloom.host. You can change the other settings if you please, but this is all that is required to get the bot to work.

After we have done this, we now want to create the API Key that SRVControl can use to access your servers. To do this, simply head over to the [panel](https://mc.bloom.host/) and once you are logged in, click **Account API** on the left.

![img](/extras/srvcontrol/1.png)

Then click **Create New** and give it a relevant description so that you will remember what this API key is for. Do not put anything in allowed IPs as SRVControl does not state the IP address used for their bot. Once you are done, click **create**. Now there will be a list of API keys, in your case there will only be one so just click the key icon to reveal the long key and copy it. 

![img](/extras/srvcontrol/2.png)

:::caution
Please keep this key secure as anyone with this API key can utilize it to do anything to the servers that you are on your account. 
:::

SRVControl is a reputable discord bot so I would trust them. However the choice to do this is always up to you.

After inviting it to your server with the proper permissions, go to your discord server and type ```<preifx>register``` (default prefix is ```.```) in one of the channels. This will initiate the API key registration. The bot will DM you asking for your API key. Be aware you only have 60 seconds to send it, so just paste it and press enter. This will complete the API registration and you should receieve a **"Success"** message if you followed this documentation correctly.

Now, back in your discord server you can type ```<prefix>help``` (default prefix is ```.```) to show you all the commands you can do which interacts with your server.

You are now done! You are able to control your servers via the SRVControl discord bot in your discord server.
