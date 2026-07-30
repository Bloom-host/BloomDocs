---
id: info
title: Frequent Issues & FAQ
slug: info
hide_table_of_contents: true
description: Find useful information, such as known issues, frequently asked questions, and more, for Palworld
keywords:
  - Palworld
  - FAQ
  - Known issues
  - Memory leak
  - RAM requirements
  - Server limits
---

## Known Issues / FAQ

1. **The server won't show up in the Community Server list**:
   - Palworld treats direct-connect and Community Servers as separate server types. Direct-connect servers are joined by IP address and port, while Community Servers must be configured for the in-game list. See the [official server-type guide](https://docs.palworldgame.com/getting-started/about-server/).
2. **The server is using a lot of memory**:
   - Palworld officially requires 16 GB of memory and recommends more than 32 GB for larger servers. An 8 GB server may start, but is more likely to crash from running out of memory.
   - Monitor memory usage and schedule restarts if your server needs them.
3. **Should I use direct connection or the Community Server list?**:
   - Use direct connection for a private server joined by IP address and port. Configure a Community Server when it needs to appear in the in-game server list.
4. **The config file gets deleted / reset on server restart**:
   - Fully stop the server before editing `PalWorldSettings.ini`, then start it again after saving your changes. See the [official configuration guide](https://docs.palworldgame.com/settings-and-operation/configuration/).

---

## Recommended Server Limits

The [official requirements](https://docs.palworldgame.com/getting-started/requirements/) specify 16 GB of memory and recommend more than 32 GB for larger servers. An 8 GB server may start, but has a higher risk of crashing due to insufficient memory.

Use SSD storage where possible; the official guide warns that low-performance storage may corrupt save data.

---

## Credits
- [parkervcp's Pterodactyl Eggs Repository](https://github.com/parkervcp/eggs/tree/master/game_eggs/steamcmd_servers/palworld)
