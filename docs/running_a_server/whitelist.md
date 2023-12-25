---
id: whitelist
title: Setting Up Whitelist
slug: /whitelist
hide_table_of_contents: true
sidebar_label: Setting up Whitelist
description: How to setup Whitelist on Java/Bedrock
keywords:
  - Minecraft
  - Whitelist
  - Security
  - Secure
  - Server 
---
## What Is Whitelisting?

Basically a Whitelist is a list of player's usernames that are permitted to join the server while whitelist is on.

Whitelisting is a way to secure your Java/Bedrock server to ensure that only people that you want to connect to your server do.

:::caution
Whitelisting can stop unwanted guests from joining your server, however it does not stop them from pinging your server and getting information such as, Online Players and Player Count
:::

---

## Whitelisting On Java

To start off here's a list of all the sub-commands under the whitelist command:
* `/whitelist add [player]` - Adds a player to the list
* `/whitelist list` - Shows you the current list of whitelisted players
* `/whitelist off` - Turns off the whitelist, which allows anyone to join
* `/whitelist on` - Turns on the whitelist, which allows only whitelisted players to join
* `/whitelist reload` - Reloads the cached list to match the list that is inside of `whitelist.json`
* `/whitelist remove [player]` - Removes a player from the list


### In Game
There is only 3 steps to turn on your whitelist in game:
* Step 1: `/whitelist on` - Turns the whitelist on.
* Step 2: `/whitelist add [player]` - Add someone to your whitelist.
* Step 3: Repeat Step #2 for all of your friends.

And that's it! Whitelist is now on, and only the people on the list can join your server!

### Through The File
Adding someone to whitelist through the file is a bit more complicated:
* Step 1 `/whitelist on` - Just like in game this will enable whitelist.
* Step 2: Open the `whitelist.json` file in your file editor, if you have never added someone before to the whitelist it'll look like this:
```yaml
[]
```
Otherwise, it'll look something like this, we will use Notch as a placeholder:
```yaml
[
  {
    "uuid": "069a79f4-44e9-4726-a5be-fca90e38aaf5",
    "name": "Notch"
  }
]
```
* Step 3: Add someone to your file, to do this you'll need their UUID, an easy way to get this is to goto a website like https://mcuuid.net/ and search their username you will get a result similar to this:
![](/running_a_server/whitelisting/mcuuid-example.png)
From this page, we need one thing, the user's Full UUID. Once you have that copied, you can head back to the `whitelist.json` file and add them to the file using this format:
```yaml
[
  {
    "uuid": "Their Full UUID",
    "name": "Their Username"
  }
]
```
If you plan on adding multiple users it'll look something like this:
```yaml
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
Notice the `,` after the `}` from the first user, you would continue adding this after each player when adding a new player!
:::
* Step 4: The final step is to go into the console and type `/whitelist reload` this will make the saved file take effect!
* Step 5: Ensure that the list has been updated with `/whitelist list` and check to see that all the players you added are there!

---
## Whitelisting On Bedrock
:::important
The command for whitelisting on bedrock is `/allowlist` NOT `/whitelist`
:::

To start off heres a list of all the sub commands under the whitelist command:
* `/allowlist add [player]` - Adds a player to the list
* `/allowlist list` - Shows you the current list of whitelisted players
* `/allowlist off` - Turns off the whitelist, which allows anyone to join
* `/allowlist on` - Turns on the whitelist, which allows only whitelisted players to join
* `/allowlist reload` - Reloads the cached list to match the list that is inside of `allowlist.json`
* `/allowlist remove [player]` - Removes a player from the list

### In Game
There is only 3 steps to turn on your whitelist in game:
* Step 1: `/allowlist on` - Turns the whitelist on.
* Step 2: `/allowlist add [player]` - Add someone to your whitelist.
* Step 3: Repeat Step #2 for all of your friends.

And that's it! Whitelist is now on, and only the people on the list can join your server!

### Through The File
Just like Java, adding someone to the whitelist through the file is a bit more complicated:
* Step 1 `/allowlist on` - Just like in game this will enable whitelist.
* Step 2: Open the `allowlist.json` file in your file editor, if you have never added someone to the whitelist before it'll look like this:
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
