---
id: domain
title: Usando un Dominio
slug: /domain
hide_title: true
hide_table_of_contents: true
sidebar_label: Usando un Dominio
description: Esta guía te ayudará a apuntar tu dominio a la IP de tu servidor de Minecraft.
keywords:
  - Cloudflare
  - Domain
  - Minecraft Server
  - Pterodactyl Panel
  - Minecraft Domain
  - A Record
  - Bloom.host
image: https://bloom.host/assets/images/logo.png
---

<div class="text--center">
<img src="https://bloom.host/logo-white.svg" alt="logo" height="50%" width="50%"/>
<h1>Usando un Dominio</h1>
</div>

Hola Bloomers! 👋 

En esta guía repasaremos cómo usar un dominio como `mc.ejemplo.com` y no un número como `148.251.209.38:25565` para conectarte a tu servidor!

---

1. Dirígete a [Duck Panel](https://mc.bloom.host) y selecciona tu servidor.
2. En la página principal arriba de tu consola podrás encontrar tu IP. Todos los servidores de Bloom.host usan una IP
dedicada, así que solo necesitarás la IP pero no el puerto (`25565`). 

![Bloom.host Pointing A Domain](../../../../../static/imgs/running_a_server/domain/1.png)

3. En esta guía usaremos CloudFlare para apuntar nuestro dominio al servidor. Simplemente regístrate [aquí](https://dash.cloudflare.com/sign-up).
Después de registrarte, verás unos pasos para poder conectar tu dominio a CloudFlare.

Como otra alternativa, puedes usar el DNS proveído por tu propio proveedor del dominio. Aunque todos los sitios web se ven
diferentes, los pasos son los mismos para todos. 

<div class="text--center"><img src={require('../../../../../static/imgs/running_a_server/domain/2.png').default} alt="img"/></div>

---

- En **Name** (Nombre) pondremos el subdominio que quieres usar, por ejemplo si ponemos `bloom` entonces usarías `bloom.dominio.com` para conectarte.
- Puedes usar `@` en **Name** (Nombre) si quieres apuntar con la raíz del dominio, es decir, con el dominio en sí, por ejemplo `dominio.com`.
- En **IPv4 address** (Dirección IPv4) pondremos la IP numérica de nuestro servidor. Recuerda que se escribe sin el puerto.
- Por último, asegúrate que la nube en **Proxy status** (Estado de Proxy) esté en **gris** y diga **DNS only**!

Click en **Save** (Guardar). Estos cambios pueden demorar hasta 48 horas en aplicarse, pero normalmente solo deberían ser unos minutos.

---

# Apuntando un dominio a un Split Server

Los Split Servers no tienen el puerto 25565 y si quieres unirte a ellos tienes que poner el puerto al lado, por ejemplo
`mc.dominio.com:25566`. Puedes evitar esto usando un **Registro SRV** que apunte al puerto de tu split.

:::warning
En estos pasos asumimos que ya has creado un **Registro A** apuntando a la IP de tu servidor. Si no lo has hecho,
sigue los pasos de arriba para crear uno que esté apuntando a tu dominio.
:::

<div class="text--center"><img src={require('../../../../../static/imgs/running_a_server/domain/3.png').default} alt="img"/></div>

Para crear un **Registro SRV** debes de ingresar a la página de tu registrar o CloudFlare dependiendo de cuál uses. 
- Una vez ahí, da click en **Add record** (Añadir registro) y en **Type** (Tipo) selecciona **`SRV`**.
- Pon los mismos datos que pusiste en el registro A. 
- Llena la ventana de **Port** con el puerto que usa tu split.
- Llena la ventana de **Target** con el subdominio o dominio que está apuntando a la IP de tu servidor.
- Deja **Priority** y **Weight** con `0`. **TTL** en `Auto`.

Eso es todo! Ahora puedes conectarte con el subdominio que usaste (`survival.dominio.com` por ejemplo), ya no necesitas poner el puerto.
