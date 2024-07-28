---
id: banning
title: Banning / Unbanning
hide_table_of_contents: true
description: Learn how you can ban or unban players on your Terraria server!
---

## Vanilla

By default, since Terraria stores player profiles locally, it's only possible to ban players based on their IP address.

### Banning

If a player is online, you can utilize the `ban <username>` command in the server console.

If they are offline but you know their IP address, you can add it as an entry into the `banlist.txt` file using
the [File Manager](/using_the_panel/file-manager-controls.md). We would recommend following the `ban` command's
formatting and adding a comment with the player's name above the entry.

As an example, here is how two entries would look:

```
// Mr.Griefer
1.1.1.1
// BadDuck07
2.2.2.2
```

Changes to the file are reflected instantly.

### Unbanning

In order to lift a ban, open the `banlist.txt` file using the [File Manager](/using_the_panel/file-manager-controls.md).

There, find the name or IP address of the player you wish to unban and remove the two lines related to them.

As an example, if we want to unban `BadDuck07`, we will remove these two lines:

```diff
// Mr.Griefer
1.1.1.1
-// BadDuck07
-2.2.2.2
```

Changes to the file are reflected instantly.

---

## TShock

When using [TShock](tshock/overview.md), it's possible to ban based on the server-side user profiles instead of the
IP address.

### Banning

To ban a player permanently, you can use the `/ban add <username> <reason>` command in-game or in the console without
the slash.

If you wish to permanently ban an IP address, you can use `/ban addip <ip>` instead.

To ban a player temporarily, you can do `/ban addtemp <name> <time> <reason>`.
As an example, you can do `/ban addtemp BadDuck07 1d "Being a bad duck!"` to ban this player for one day.

### Unbanning

In order to lift a ban, you can do `/ban del <username>` or `/ban delip <ip>` if they were IP banned.
