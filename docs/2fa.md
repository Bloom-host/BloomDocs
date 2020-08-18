---
id: 2fa
title: 2-Factor Authentication
hide_title: true
hide_table_of_contents: false
sidebar_label: 2-Factor Authentication
description: This guide will help you secure your account through 2-Factor Authentication
keywords:
  - BloomVPS
  - Pterodactyl Panel
  - 2FA
  - 2FA Gameserver
image: ../static/img/2fa/2fa1.png
---
# 2-Factor Authentication
![BloomVPS 2FA](../static/img/2FA/2FA1.png)
Hey there Bloomers! In this guide, we will go over how to setup 2FA on your account.

:::caution
Only use 2FA on devices you trust. It's not recommended to setup 2FA on a shared or compromised device.
:::

## Billing Area 2FA

To setup 2FA in the billing area, head over to the [billing area and login](https://www.bloomvps.com/portal/clientarea.php)

Next, head over to [Security Settings](https://www.bloomvps.com/portal/clientarea.php?action=security) which you can find here: 

![BloomVPS 2FA](../static/img/2FA/2FA2.png)

You can then follow the instruction on the screen, as you will need to download Google Authenticator or DUO from the android or IOS app store.

## Game Panel 2FA

To setup 2FA in the game panel area, head over to [Account Security](https://mc.bloomvps.com/account/security) in the game panel area.

Hit **Enable 2-Factor Authentication** to show a QR code that you can scan. 

For this, download an app on your phone that is a 2FA app, such as [Authy](https://authy.com/).

Then, add a new account and scan the QR code. Once it is scanned, type the token that you have on the app into the Authentication Token box.

![BloomVPS 2FA](../static/img/2FA/2FA3.png)

You are set and fully protected! Rememeber to keep the device near you when you login so can authenticate yourself!