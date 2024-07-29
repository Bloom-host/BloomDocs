---
id: admin
title: Admin Privileges
hide_table_of_contents: true
description: Learn how you can earn admin privileges on your TShock server!
---

:::caution HEADS UP!
Special commands and permissions are not part of the vanilla server software, so in order for this to work, you must
install [TShock](overview.md).
:::

Once the server loads, you should see a few lines about the `/setup` command:
![Panel console showing the setup command](/games/terraria/tshock/admin/console.png)

In-game, open the chat by pressing enter. 

First, we will enter the setup command which give us temporary admin privileges: `/setup <code>` (as we saw in the console)

Then, we can create a new owner user with our desired username and secure password: `/user add <username> <password> owner`

Lastly, we can log in using our freshly created credentials with the following command: `/login <username> <password>`
![In-game chat showing the output of the executed commands](/games/terraria/tshock/admin/chat.png)

Once you are done, please make sure to restart the server as soon as possible. This will delete the `setup-code.txt`
automatically once it detects an admin account, ensuring that nobody else can gain temporary access:
![Panel console showing that the code is now invalid](/games/terraria/tshock/admin/deleted.png)

That's it! You can now access any commands or actions that require admin privilege.
