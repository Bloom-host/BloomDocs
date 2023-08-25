---
id: 2fa
title: Autentificación de 2 Factores
slug: /2fa
hide_table_of_contents: true
sidebar_label: Autentificación de 2 Factores
description: This guide will help you secure your account through 2-Factor Authentication
keywords:
  - BloomVPS
  - Bloom.host
  - Pterodactyl Panel
  - 2FA
  - 2FA Gameserver
---
 
Hola Bloomers! 👋

En esta guía repasaremos cómo configurar 2FA en tu cuenta.

---

:::caution
Only use 2FA on devices you trust. It's not recommended to setup 2FA on a shared or compromised device.
:::

## Billing Area 2FA

To setup 2FA in the billing area, head over to the [billing area and login](https://www.bloom.host/portal/clientarea.php)

Next, head over to [Security Settings](https://www.bloom.host/portal/clientarea.php?action=security) which you can find here: 

![img](/imgs/using_the_panel/2fa/1.png)

You can then follow the instruction on the screen. You will need to download Google Authenticator or DUO from the android or IOS app store.

---

## Game Panel 2FA

To setup 2FA in the game panel area, head over to [Account Security](https://mc.bloom.host/account/security) in the game panel area.

Hit **Enable 2-Factor Authentication** to show a QR code that you can scan. 

For this, download an app on your phone that is a 2FA app, such as [Authy](https://authy.com/).

Then, add a new account and scan the QR code. Once it is scanned, type the token that you have on the app into the Authentication Token box.

![img](/imgs/using_the_panel/2fa/2.png)

You are set and fully protected! Rememeber to keep the device near you when you login so can authenticate yourself!

---
