---
id: whitelisting
title: Setting Up A Whitelist
hide_table_of_contents: true
description: Learn how to set up and manage a whitelist on your Terraria server!
---

:::info HEADS UP
The game does not provide a whitelisting functionality by default, so we will have to use [TShock](overview.md), a
third party server software.

As an alternative for the vanilla server, you can use [server passwords](/games/terraria/password).

If you haven't already, make sure to install is using [the steps here](overview.md)!
:::

## Toggling Whitelist

In order to toggle the IP whitelist on your TShock server, head over to the 'File Manager' tab in the panel.

There, find and open the `tshock` folder:
![TShock folder opened in file manager](/games/terraria/tshock/whitelisting/folder.png)

Within, open the `config.json` file and search for the `EnableWhitelist` entry:
![TShock folder opened in file manager](/games/terraria/tshock/whitelisting/config.png)

In order to enable it, set it to `true`. Save the config once that's done!

Lastly, go back to the 'Console' tab of the panel and hit 'Restart' to apply the change.

Now if anyone tries to connect without being added to the whitelist, their account will be kicked:
![Kick message in game](/games/terraria/tshock/whitelisting/kicked.png)

---

## Adding & Removing Players

The whitelist is based on IP addresses. In order to add or remove players, open the `tshock` folder like before, and
find the `whitelist.txt` file.

To add a new entry, find the IP address you want to allow. You can see the IP address whenever someone attempts to
connect:
![Kick message showing the IP in the console](/games/terraria/tshock/whitelisting/console.png)

Then, add a new line to the aforementioned `whitelist.txt` with the following format: `whitelist <ip address here>`

As an example, to whitelist `1.1.1.1`, you would add: `whitelist 1.1.1.1`

![Whitelist config showing 2 entries](/games/terraria/tshock/whitelisting/file.png)

Once you are done modifying the list, make sure to restart the server to apply the change.
