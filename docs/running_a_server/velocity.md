---
id: velocity
title: Setting Up Velocity
slug: /velocity
hide_title: true
hide_table_of_contents: true
sidebar_label: Setting up a Velocity Server
description: How to setup a Velocity Proxy Server
keywords:
  - Minecraft
  - Proxy
  - Velocity
  - Proxy Server
  - Server
  - Modern Forwarding
  - Server Split
image: https://bloom.host/assets/images/logo.png
---
<div class="text--center">
<img src="https://bloom.host/assets/images/logo.png" alt="logo" height="50%" width="50%"/>
<h1>Setting Up Velocity</h1>
</div>

:::important

When running your servers behind a proxy like Velocity or Waterfall, it requires them to be set to offline-mode. Normally hosting companies will not provide support for offline mode servers, but in this case it is required for the proxy to function properly. It will act as the gateway to your servers and handle authentication for you.

:::

## Downloading Velocity

To get started with Velocity, you first need to download the latest version of Velocity from their [downloads page](https://velocitypowered.com/downloads). It is recommended that you go with the stable version that they provide to ensure the most stability when it is running.

![img](../../static/imgs/running_a_server/velocity/velocity-dl-page.PNG)

Once you have downloaded Velocity you may proceed to the next step in the setup process, creating a server split to run Velocity off of. Velocity is it's own server jar file and will require it's own server to run from.

## Creating a Velocity Server Split

:::note

It is recommended that you give Velocity at least 524 to 750 megabytes of RAM to operate off of, for servers with a lot of traffic it is probably better to allocate 1 gigabyte of RAM for Velocity to ensure a smooth experience for your users

:::

First you will need to head to your server split section via Duck Panel's sidebar, it should look like this:

![img](../../static/imgs/running_a_server/velocity/velocity-server-split-sidebar.PNG)

Next you need to select the type of server split you want to create, name your split, and allocate the amount of RAM and Storage you want your Velocity Server to have, it will look something like this:

![img](../../static/imgs/running_a_server/velocity/velocity-server-split-setup.PNG)

After you create your split for Velocity it will appear in that section with all it's details, just like your other server splits:

![img](../../static/imgs/running_a_server/velocity/velocity-server-details.PNG)




