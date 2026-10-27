---
id: nethernet
title: NetherNet
slug: /nethernet
hide_table_of_contents: false
sidebar_label: NetherNet
description: Using NetherNet with supported GeyserMC and Bedrock Dedicated Server installs.
keywords:
  - Minecraft
  - Bedrock
  - NetherNet
  - GeyserMC
  - Geyser
  - Bedrock Dedicated Server
  - BDS
---
Starting with **Minecraft: Bedrock Edition 26.60**, Bedrock players no longer connect to servers over RakNet, the networking protocol Bedrock has used until now. 

Instead, every Bedrock server has to support **NetherNet**, the new connection method Mojang has been rolling out since version 26.40. 

This page covers how NetherNet works on supported Bedrock Dedicated Server and GeyserMC installs.

:::warning

- Up-to-date Bedrock clients can't join servers that haven't made the switch.
- Bedrock clients older than 26.40 don't support NetherNet, so players on older versions should update to the latest version of Minecraft.

:::

---

## Supported Server Types

NetherNet is supported on two of our Bedrock server types:

- [**Bedrock - Vanilla**](#bedrock-dedicated-server): Bedrock Dedicated Server, Mojang's official server software
- [**Bedrock - GeyserMC**](#geysermc): [GeyserMC](/multiplatform/geysermc), which lets Bedrock players join a Java Edition server

To switch your server to one of them:

1. Open your server in the [DuckPanel](https://mc.bloom.host) and go to the **Settings** tab of the server.
2. Under **Change Server Type**, set the **Server Category** to `Minecraft`.
3. Pick **Bedrock - Vanilla** or **Bedrock - GeyserMC** as the **Server Type**.
4. The files will automatically be downloaded. Note that file configurations are only applied before the first boot.

![Change Server Type in the Settings tab, with the Bedrock server types listed](/running_a_server/nethernet/1.png)

---

## Bedrock Dedicated Server

On BDS, signaling and gameplay use separate ports, which the panel creates for you:

- **Primary port** (`19132` in the example below): the signaling port, **TCP**-only
- **Gameplay ports** (`19133-19142` below): a range of **UDP** ports

Until BDS supports sharing one UDP port between several players (also known as multiplexing), each player slot needs its own UDP port. Because of this, the player limit is set with the **Max Players** setting in the **Startup** tab instead of in `server.properties` directly. 

![Ports & Connections tab showing the TCP signaling port and the UDP gameplay ports](/running_a_server/nethernet/2.png)

`server.properties` is automatically set up based on this. For example:

```properties
server-port=19132
server-udp-ports=203.0.113.25:19133-19142:19133-19142
```

- `server-port` is the TCP signaling port
- `server-udp-ports` are the gameplay port ranges, opened automatically

Max Players is currently temporarily limited to **50**. If this causes issues for your server, create a ticket in our [Discord server](https://bloom.host/discord).

![Max Players setting on the Startup tab](/running_a_server/nethernet/3.png)

---

## GeyserMC

You can either use GeyserMC as a plugin on your server or as a standalone server type.

The **Bedrock - GeyserMC** pre-install is for the standalone version which comes with NetherNet support automatically configured. 

GeyserMC supports multiplexing, so a single port such as 19132 with both TCP and UDP enabled is sufficient.

Here is the necessary section for the `config.yml` / `plugins/Geyser-xxxx/config.yml`:

```yaml title="config.yml"
bedrock:
  address: 0.0.0.0
  # The main port of the server. NetherNet uses this for TCP signalling only
  port: 19132
  # Bind to the same port just with UDP for gameplay traffic
  webrtc-port: 0
  transport: nethernet
  signaling:
    mode: builtin
    builtin:
      # The server's public IPv4 so the clients
      # know what to connect to
      advertise-addresses: ['<your-server-public-ip>']
```

Replace `<your-server-public-ip>` with your server's IP address, which the [Ports & Connections](/ports-and-connections) tab shows next to each port.

For general Geyser plugin setup, see our [GeyserMC guide](/multiplatform/geysermc).

---

## Connecting With a Domain

iOS requires signaling over HTTPS (TLS), so iOS players can't join a NetherNet server with only an IP address. 

Connecting through a domain with HTTPS also removes the "trust on first use" prompt for everyone else.

Our TLS proxy adds HTTPS in front of your server's signaling port. To use it, add a connection through the TLS proxy to the **TCP** signaling port in the **Ports & Connections** tab:

- **Bedrock - Vanilla**: the primary port (`19132` above)
- **GeyserMC**: Geyser's port, such as `19132`

### Using a Free Subdomain

1. Open the **Ports & Connections** tab and press **Add Connection** on the signaling port.
2. Pick **Players, in a game**, then **Through a TLS proxy** and **A free subdomain**.
3. Enter a name for your server, pick one of our domains and press **Create**. The DNS and the proxy are set up automatically.

![Free subdomain through the TLS proxy for the signaling port](/running_a_server/nethernet/4.png)

The subdomain is then listed under the port:

![Signaling port with a free subdomain through the TLS proxy](/running_a_server/nethernet/5.png)

Players can then join using the subdomain and that port, for example `yourserver.minecraft.best` with port `19132`.

### Using Your Own Domain

1. Open the **Ports & Connections** tab and press **Add Connection** on the signaling port.
2. Pick **Players, in a game**, then **Through a TLS proxy** and **A third party domain**.
3. At your domain's DNS provider, add the **CNAME** record the panel shows, which points your domain at our proxy. If you use Cloudflare, set it to **DNS only** (grey cloud). Cloudflare's proxy (orange cloud) only passes web ports on, so players could not join through it.
4. Type your domain into the box, and press **Add** once the record is found.

![Own domain through the TLS proxy, with the CNAME record to add](/running_a_server/nethernet/6.png)

Players can then join using your domain and the port, for example `play.yourserver.tld` with port `19132`.

For more details, see our [Ports & Connections guide](/ports-and-connections#players-through-the-tls-proxy).

---

## Technical Overview

For those curious about what happens under the hood:

- **Signaling**: Before joining, the client sends an HTTP request over **TCP** to the server's signaling endpoint, asking how to connect. You can check this in your browser as `http(s)://<ip or domain>:<port>/v1/join`  
The server replies with the details needed to set up the connection.  
The MOTD and player count shown in the server list are also fetched through signaling.
- **Gameplay**: The game connection itself runs over **WebRTC**, which uses **UDP**.
- **Ports**: The server needs a TCP port for signaling in addition to the UDP port(s) for gameplay. Depending on the server software, these share a port number or use separate ones.