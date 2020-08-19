---
id: 2fa
title: Autentificación de 2 Factores
hide_title: true
hide_table_of_contents: false
sidebar_label: Autentificación de 2 Factores
description: Esta guía te ayudará a asegurar tu cuenta a través de la Autentificación de 2 Factores
keywords:
  - BloomVPS
  - Pterodactyl Panel
  - 2FA Español
  - 2FA
  - 2FA Gameserver
image: ../static/img/2fa/2fa1.png
---
# 2-Factor Authentication
![BloomVPS 2FA](../static/img/2FA/2FA1.png)
Hola Bloomers! En esta guía, repasaremos como configurar 2FA en tu cuenta.

:::caution
Solo usa 2FA en dispositivos que confies. No es recomendado usar 2FA en un dispositivo comprometido o compartido.
:::

## 2FA en la Área de Facturación

Para configurar 2FA en la área de facturación, dirígete a la [Área de Facturación y Login](https://www.bloomvps.com/portal/clientarea.php)

Luego, dirígete a las [Opciones de Seguridad](https://www.bloomvps.com/portal/clientarea.php?action=security) que puedes encontrar aquí: 

![BloomVPS 2FA](../static/img/2FA/2FA2.png)

Puedes seguir las instrucciones en pantalla, pues necesitarás descargar Google Authenticator o DUO de la tienda de Android o iOS.

## 2FA en el Panel de Juego

Para configurar 2FA en el panel de juego, dirígete a [Seguridad de la Cuenta](https://mc.bloomvps.com/account/security) en el panel.

Click en **Enable 2-Factor Authentication** to show a QR code that you can scan. 

For this, download an app on your phone that is a 2FA app, such as [Authy](https://authy.com/).

Then, add a new account and scan the QR code. Once it is scanned, type the token that you have on the app into the Authentication Token box.

![BloomVPS 2FA](../static/img/2FA/2FA3.png)

You are set and fully protected! Rememeber to keep the device near you when you login so can authenticate yourself!