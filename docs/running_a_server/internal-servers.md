---
id: internal-servers
title: Make your servers internal
slug: /internal-servers
hide_table_of_contents: true
sidebar_label: Internal Servers
description: This doc just has some information on our internal servers
---
:::important

This doc just has some important information you may need if you are running internal servers for your Velocity/Bungee networks :)

If you would like to setup your bungee/velocity servers with internal servers you can follow our regular [Waterfall](/waterfall)/[Velocity](/velocity) guides.

Please note that Waterfall is now considered End of Life and it is currently being recommended to switch to [Velocity](/velocity) instead.

:::

Previously we used to have private IPs (172.18.0.1) that were shared by everyone on your node and were all accessible between one another.

Now we have fully internal servers that are only accessible via servers on the same split. They are accessible via your servers full serverid and port 25565.

To make your server internal you can click the "Make Internal" button on the Ports and Proxies tab. Keep in mind this will wipe all your public ports so keep them in mind, if you forget which ports you're using and accidentally wipe them you can see which ones were deleted in your audit log.

![img](/running_a_server/internal_servers/1.PNG)

The full serverid can be found under the Ports and Proxies tab when you make your server internal, but you can also find it by clicking your serverid in the console tab, or under the settings tab.

________

Connectivity between splits is fully accessible over your splits hostname. For example, in the past if you had voting fowarding setup, you would have to open a private port on each of your backend servers. Now once you have votifier setup (in plugin configs it still has to be bound to 0.0.0.0 like normal even though it's not accessible) you can just access it via your server's longid and the corresponding port.

Below is an example of a Velocity instance setup with internal backend servers

![img](/running_a_server/internal_servers/2.PNG)

________

You can also open public ports like normal even after you make your server internal. For example, below is a internal backend server but with a public 8123 port for Dynmap

![img](/running_a_server/internal_servers/3.PNG)
