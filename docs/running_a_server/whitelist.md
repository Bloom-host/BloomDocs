---
id: whitelist
title: Setting Up Whitelist
slug: /whitelist
hide_table_of_contents: false
sidebar_label: Setting up Whitelist
description: How to set up a Whitelist on Java or Bedrock
keywords:
  - Minecraft
  - Whitelist
  - Security
  - Secure
  - Server 
---
:::note
As of version 26.3 whitelist is ON by default, so you may skip to step 2 when using any of the methods on this page.
:::
## What Is Whitelisting?

Basically a Whitelist is a list of player's usernames that are permitted to join the server while Whitelist is on.

Whitelisting is a way to secure your Java/Bedrock server to ensure that only people that you want to connect to your server do.

:::caution
Whitelisting can stop unwanted guests from joining your server, however it does not stop them from pinging your server and getting information such as, Online Players and Player Count
:::

---

## Whitelisting On Java

To start off here's a list of all the sub-commands under the Whitelist command:
* `/whitelist add [player]` - Adds a player to the list
* `/whitelist list` - Shows you the current list of Whitelisted players
* `/whitelist off` - Turns off the Whitelist, which allows anyone to join
* `/whitelist on` - Turns on the Whitelist, which allows only Whitelisted players to join
* `/whitelist reload` - Reloads the cached list to match the list that is inside of `whitelist.json`
* `/whitelist remove [player]` - Removes a player from the list


### In Game
There are only 3 steps to turn on your Whitelist in game:
* Step 1: `/whitelist on` - Turns the Whitelist on.
* Step 2: `/whitelist add [player]` - Add someone to your Whitelist.
* Step 3: Repeat Step #2 for all of your friends.

And that's it! Whitelist is now on, and only the people on the list can join your server!

### Through the console (Java)

You can add a group of players without editing `whitelist.json` or looking up UUIDs. In the panel console, run each command separately, without a leading `/`. Replace the example names with the players' Java usernames:

```text
whitelist add PlayerOne
whitelist add PlayerTwo
whitelist list
```

Check the reply after each addition and confirm that `whitelist list` contains everyone you intended to add. These commands keep existing entries. Enable the whitelist with `whitelist on` if it is not already enabled.

For a longer roster, the optional [ServerBuddy whitelist command generator](https://serverbuddy.net/tools/minecraft-whitelist-command-generator) removes duplicate names and flags invalid username syntax. Review the roster, copy only the `whitelist add` lines, and remove their leading `/` before running them in the console. Name syntax checks do not confirm that an account exists; check the server's replies.

### Through The File
Adding someone to Whitelist through the file is a bit more complicated:
* Step 1: Run `whitelist on` in the console if the whitelist is not already enabled. In-game, use `/whitelist on`.
* Step 2: Open the `whitelist.json` file in your file editor, if you have never added someone before to the Whitelist it'll look like this:
```json
[]
```
Otherwise, it'll look something like this, we will use Notch as a placeholder:
```json
[
  {
    "uuid": "069a79f4-44e9-4726-a5be-fca90e38aaf5",
    "name": "Notch"
  }
]
```
* Step 3: To add someone to your file, you'll need their UUID. Go to a website like https://mcuuid.net/ and search their username. You will get a result similar to this:
![MCUUID lookup result showing a player's full UUID](/running_a_server/whitelisting/mcuuid-example.png)
From this page, we need one thing, the user's Full UUID. Once you have that copied, you can head back to the `whitelist.json` file and add them to the file using this format:
```json
[
  {
    "uuid": "Their Full UUID",
    "name": "Their Username"
  }
]
```
If you plan on adding multiple users it'll look something like this:
```json
[
  {
    "uuid": "069a79f4-44e9-4726-a5be-fca90e38aaf5",
    "name": "Notch"
  },
  {
    "uuid": "Their Full UUID",
    "name": "Their Username"
  }
]
```
:::note
Keep the existing entries when adding players to the array. Separate entries with a comma after `}`, but do not put a comma after the final entry. Replacing the whole file with a one-player example would remove the other entries.
:::
* Step 4: Save the file, then run `whitelist reload` in the console to load the changes.
* Step 5: Run `whitelist list` in the console and check that all the players you intended to add are there. When running these commands in-game, add the leading `/`.

---
## Whitelisting On Bedrock
:::important
The command for Whitelisting on Bedrock is `/allowlist` NOT `/whitelist`
:::

To start off here's a list of all the sub-commands under the Whitelist command:
* `/allowlist add [player]` - Adds a player to the list
* `/allowlist list` - Shows you the current list of Whitelisted players
* `/allowlist off` - Turns off the Whitelist, which allows anyone to join
* `/allowlist on` - Turns on the Whitelist, which allows only Whitelisted players to join
* `/allowlist reload` - Reloads the cached list to match the list that is inside of `allowlist.json`
* `/allowlist remove [player]` - Removes a player from the list

### In Game
There is only 3 steps to turn on your Whitelist in game:
* Step 1: `/allowlist on` - Turns the Whitelist on.
* Step 2: `/allowlist add [player]` - Add someone to your Whitelist.
* Step 3: Repeat Step #2 for all of your friends.

And that's it! Whitelist is now on, and only the people on the list can join your server!

### Through The File
Just like Java, adding someone to the Whitelist through the file is a bit more complicated:
* Step 1 `/allowlist on` - Just like in game this will enable Whitelist.
* Step 2: Open the `allowlist.json` file in your file editor, if you have never added someone to the Whitelist before it'll look like this:
```yaml
[]
```
Other wise it'll look something like this, we will use Notch as a placeholder:
```yaml
[
  {
    "ignoresPlayerLimit": false,
    "name": "Notch"
  }
]
```
* Step 3: Unlike java, to add someone all you need is their username
```yaml
[
  {
    "ignoresPlayerLimit": false,
    "name": "Their Username"
  }
]
```
If you plan on adding multiple users it'll look something like this:
```yaml
[
  {
    "ignoresPlayerLimit": false,
    "name": "Notch"
  },
  {
    "ignoresPlayerLimit": false,
    "name": "Their Username"
  }
]
```
:::note
Notice the `,` after the `}` from the first user, you would continue adding this after each player when adding a new player!
:::
* Step 4: The final step is to go into the console and type `/allowlist reload` this will make the saved file take effect!
* Step 5: Ensure that the list has been updated with `/allowlist list` and check to see that all the players you added are there!
