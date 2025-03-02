---
id: virtfusion-subuser
title: Virtfusion Subusers
hide_table_of_contents: true
sidebar_label: Virtfusion Subusers
description: This guide will explain the process of adding someone as a subuser of your VPS in Virtfusion. 
keywords:
  - Subuser
  - VPS
  - Virtual Private Server
  - Virtfusion
---

This guide will explain how to add someone as a subuser in our [VPS Panel](https://virt.bloom.host).

## Subuser Side

:::important
Don't forget to change your password after the first log in!
:::

First you'll need to create an account in our [Billing Panel]( https://billing.bloom.host/).

Once you have an account you can open a [Billing Ticket](https://billing.bloom.host/supporttickets.php) with the subject "Virtfusion Subuser Account", make sure to mention your friend's billing email in the ticket.

After we reply to your ticket with the credentials you'll be able to log in to the [VPS Panel](https://virt.bloom.host). From there you'll want to click your User icon in the top right corner and select "Account".

From there you'll want to click your User icon in the top right corner and select "Account". Go to the "Sharing" tab, and create a token via "Generate Token". Write it down, and send it over to your friend.

![img](/VPS/virtfusion-subuser/1.png)

## Owner Side

With your friend's token in the clipboard, you can now access your VPS's dashboard and select the "Sharing" tab.

After pasting your friend's token in the "Shared Access" section, click "Grant Access". 

![img](/VPS/virtfusion-subuser/2.png)

Your friend can now access your server from their own account. 

You can also revoke access from the same tab later on, if needed. 

