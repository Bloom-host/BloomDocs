---
id: connecting
title: Connecting To A Server
hide_table_of_contents: true
description: Learn how to connect to your Rust server!
---

### Method #1 - Steam Server List

Open Steam and click the 'View' tab in the top left corner. There, select 'Game Servers'.
![Steam dropdown](/games/rust/connecting/dropdown.png)

Next, press the '+' button at the bottom.

Open your server in the [DuckPanel](https://mc.bloom.host/) and ensure you are on the 'Ports & Proxies' tab.

Find the entry that says 'Query Port' and copy the IP and port into the Steam server list.

As an example, if your server IP is `127.0.0.1` and the port is `28017`, enter: `127.0.0.1:28017`.
![Steam add server screen](/games/rust/connecting/steam.png)

Press 'OK' and let it query the server information. You can now connect by selecting the server and then 'Connect'.
![Steam list showing server](/games/rust/connecting/steam-list.png)

Once you have added the server as a favourite, you can also access it in-game under the 'Favourited' category:
![Favourited server list showing in-game](/games/rust/connecting/favourites.png)

---

### Method #3 - Public Server List

If your server is publicly visible, you can connect with the public server list.
Simply enter the name of your server (you can see this information under the 'Startup' tab), and wait a few minutes for
the game to populate the server list.

:::caution HEADS UP!
If your server is using Oxide for plugins, it will only appear in the 'Modded' category.

Additionally, make sure not to filter out empty servers if you are connecting for the first time.
:::

![Public server list with the name filter](/games/rust/connecting/public.png)

---

### Method #4 - Through The Console

Lastly, if your server is hidden and query is disabled, you can still connect through the in-game console.

To do this, open your server's 'Console' tab in the [DuckPanel](https://mc.bloom.host/) and copy the 'IP Address' field.

Next, in the main menu of Rust, press the `F1` key to open the console.

Enter the `client.connect <ip address>:<port>` command. As an example: `client.connect 127.0.0.1:25565`
![Console showing connect command](/games/rust/connecting/console.png)

Press enter to execute the command.

---

In either case, once you start connecting to the server, this screen should appear:
![In-game connecting screen](/games/rust/connecting/connecting.png)

Depending on the speed of your CPU, memory and drives, it may take a few minutes to load all assets and connect!
