---
id: admin
title: Admin Privileges
hide_table_of_contents: true
description: Learn how you can manage admin privileges on your Rust server!
---

### Adding Admin Privileges

In order to access certain administrator-only features and commands, you will need to mark the account as an admin or
moderator.

First, we must find out the Steam ID of the account. The easiest way is to click your profile in Steam and select the '
Account details' option.
![Steam open details dropdown](/games/rust/admin/open-details.png)

Here, copy the number from 'Steam ID':
![Steam showing profile details](/games/rust/admin/view-details.png)

Alternatively, you can use a website such as this to determine your Steam ID: https://steamid.io/

Once that's done, head over to the 'Console' tab of your server in the [DuckPanel](https://mc.bloom.host)

There are two levels of privileges, and each has a different command to use:

1. `ownerid <id>`: Full privileges; can make other players administrators as wel
2. `moderatorid <id>`: Full privileges; can't make other players administrators

In the text box below the console, enter your desired command.

As an example, to make the account with Steam ID `76561198827590261` a full privileged admin, we would
enter: `ownerid 76561198827590261`
![DuckPanel console showing ownerid command](/games/rust/admin/console.png)

And that's it! The player can now access commands through the `F1` in-game console and more!
![Flying in-game with noclip](/games/rust/admin/flying.png)

---

### Removing Admin Privileges

If you wish to remove the admin privileges of an account, simply enter one of the following commands in the console as
before:

- `removeowner <id>`: in case they had full admin permissions
- `removemoderator <id>`: in case they only had moderator permissions 
