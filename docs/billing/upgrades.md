---
id: upgrades
title: How to upgrade, downgrade or transfer your server
hide_table_of_contents: true
sidebar_label: How to upgrade, downgrade or transfer your server
description: This guide will show you how to upgrade, downgrade or transfer your server
keywords:
  - upgrade
  - downgrade
  - transfer
---

Hey Bloomers! In this guide we will be going over how upgrades, downgrades and transfers work.

## How to upgrade, downgrade or transfer your server to another Bloom datacenter location

:::note
If you want to downgrade to an Essentials plan or upgrade/downgrade/transfer your VPS please open a billing ticket [here](https://billing.bloom.host/submitticket.php).
:::

To request a plan upgrade, downgrade or a change of location go to the Products section of our billing panel [here](https://billing.bloom.host/clientarea.php?action=services), sign in with your Billing Account, click the three dots to the right side of the Product you want to upgrade, then select the Upgrade/Downgrade button.

![img](/discord/upgrade.png)

On the upgrade page you will be able to select to what location and plan you want to upgrade/downgrade to, here you can also switch between datacenter locations. Once you select the plan it will generate an invoice (if needed) which needs to be paid before the upgrade and transfer process begins.

## Transfers

If you see a **'Requires server transfer'** message below the plan you want to upgrade or downgrade to it means that the server needs to be transferred to another node before the upgrade or downgrade can be completed. This is because the server is currently on a node that doesn't have enough resources to support the plan you want to upgrade or downgrade to.

This warning message also appears when you want to switch between datacenter locations.

**Keep in mind that when a server is transferred to another node it will be offline while the transfer is being processed. Your server IP and database host will change.**

You will receive an email notification when the transfer is started and completed, the last notification will have the new IP, and the new database host can be obtained by going to the Database section of our game panel.
