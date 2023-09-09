---
id: ark
title: ARK Survival Evolved
hide_table_of_contents: true
sidebar_label: ARK Survival Evolved
description: This guide will help you configure the ARK - Survival Evolved server.
keywords:
  - Ark
  - Survival Evolved
  - Ark Survival Evolved
---

Hello there Bloomers! 👋 

In this guide, we will go over on how to create an ARK Survival Evolved server.

:::important
ARK - Survival Evolved is currently an unsupported server, this means that Bloom doesn't officially provide support for in-game issues and some panel and server features may not work.
:::

### How to change your main server to ARK Survival Evolved

First, go to the [game panel](https://mc.bloom.host) and select your server, then click on the **server split** button. Here you will be able to change your existing server to ARK Survival Evolved by clicking the three dots to the right of the server name, selecting **Change Server Type** then under Server Category select **No Supports Servers** and in **Server Type** dropdown select **ARK Survival Evolved**. Remember to click the **Reinstall** button to reinstall the server, this process will start downloading ARK Survival Server to your Bloom server, keep in mind that this process will take a while because it has to download around 20GB of games files.

### How to create an split ARK Survival Evolved server

If you want to create an split server for ARK Survival Evolved, you can do so by following the same steps as above, but instead of changing the server type of an existing server just fill in the form **Split Server** form on the right, this will create a new server and install ARK Survival Evolved on it.

:::important
ARK Survival Evolved requires about **4GB to run with no players on the default map**. Although it is recommended to run the server with 6GB by the ARK creators, if you decide to run one of the DLC maps you will need increase the RAM, maps as Genesis 2 require over 13GB to start.

**Keep in mind that ARK Survival Evolved is a big game, and it will take a while to download all the files (server install)**, it's recommended you assign at least **30GB of storage** to the server, since the base server files will take around 20GB of space, DLC maps will require more storage space.

Check https://ark.gamepedia.com/Dedicated_Server_Setup#Hardware for more information.
:::

![img](/other-servers/ARK/1.jpeg)

### Opening the required ports on your server

ARK Survival Evolved needs the following ports to function
- Game (Primary server port) - **7777**
- Raw UDP - **7778**
- Query (Port used to connect to the server in-game) - **27015**
- External RCON (optional) - **27020** - For some people opening this port causes issues and doesn't allow them to connect to the server (If you get an Unable to query server info for invite. try closing/deleting port 27020 and see if it works)

To open this ports just go to the [game panel](https://mc.bloom.host) and select your server, then click on the **Ports & Proxies** button. Here you will be able to open the ports you need by clicking the **Open Port** button on the lower right of the page. Keep in mind that the option `THE PORT WILL BE PUBLICLY ACCESSIBLE. DISABLE THIS OPTION TO CREATE AN INTERNAL PORT.` needs to be checked/enabled for the server to work.

:::important
Keep in mind that port **7777** needs to be the primary server port.

**The External RCON port 27020 is optional**, is only needed if you plan to use the **Remote Console** feature in the game.

The ARK Survival Evolved server requires a local RCON connection, **you will see RCON connection refused messages until the server has successfully started and connects to the RCON, which can take anywhere from 10 to 20 minutes**, this is normal behavior.
:::

Your Ports and Proxies section should look like this - assuming you want RCON port 27020 opened, you can leave it blank if you don't want to use it. Note that port 7777 needs to be the primary port. 

![img](/other-servers/ARK/2.png)

:::note
For some people opening the external RCON port 27020 causes issues and doesn't allow them to connect to the server (If you get an Unable to query server info for invite. try closing/deleting port 27020 and see if it works)
:::

### ARK Survival Evolved server settings

You will find server settings in the **Startup** tab of the panel. Here you will be able to change the query and rcon port of the server, as well as the server name, password, admin password and server map. You will also be able to enable auto updating.

![img](/other-servers/ARK/3.png)

:::important

To enable crossplay you will need to add the `--crossplay flag option in the **Startup** tab under the **Additional Arguments** field located at the end of the startup page. Do note that the crossplay feature sometimes bugs out and doesn't work.
:::

![img](/other-servers/ARK/4.png)

### Connecting through STEAM

1. Open the STEAM client and click the **View** on the top bar, then select "Servers".
2. Click the **Favorites** tab then click the **Add Server** button.
3. Type your server IP address and port, this would be something like `66.55.44.33:27015` (`your server ip:27015`). Keep in mind that your primary server port will be 7777, but **you connect using the query port which is 27015**.
4. Click the "Add this address to favorites" button, then you can select the server and click on the "Connect" button.

### Connecting through EPIC GAMES

1. Open EPIC GAMES and start ARK Survival Evolved.
2. Once you get to the menu click on **HOST/LOCAL** then click on **Play Single Player**.
3. Once the Play Single Player option loads click the **TAB key** on your keyboard to open the game console, then type the following command `open serverip:7777` (For example: open `66.55.44.33:7777`). This will connect you to your ARK server. On EPIC GAMES you connect to the server using port 7777, but on Steam you connect using the query port 27015.

### Connecting through the multiplayer tab on ARK Survival Evolved

Keep in mind that it will take a while for your server to appear on the unnoficial tab of the ARK server list, it can take a few hours up to a day. If it hasn't appeared on the unnoficial list yet, try to connect using the two options above.

1. Open ARK and click on **Join ARK**
2. Click on the **Unnoficial Servers** tab and search for your server then join.
