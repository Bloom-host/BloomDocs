---
id: split-server
title: Dividiendo servidores
slug: /split-server
hide_title: true
hide_table_of_contents: true
sidebar_label: Dividiendo servidores
description: Esta guía te muestra cómo dividir tu servidor de Minecraft.
keywords:
  - server
  - splitting server
  - Pterodactyl Panel
  - Minecraft
  - Bloom.host
image: https://bloom.host/assets/images/logo.png
---

Bloom.host te permite dividir el servidor que tienes comprado, por ejemplo para crear una network de diferentes modalidades
o poder iniciar un bot de Discord junto con tu servidor de Minecraft. Dentro de Bloom, estas divisiones son llamadas **"Splits"**.

:::important
Dividir tu servidor usará recursos (Almacenamiento y RAM) de tu servidor.
Es importante asegurarse que vas a dejar suficientes recursos para que tu servidor funcione correctamente!
:::

## Dividiendo tu Servidor

1. Entra a [Duck Panel](https://mc.bloom.host/), selecciona tu servidor y entra a **Server Split** (División de Servidor)
en la barra lateral.

![split](/imgs/using_the_panel/split_server/1.png)

2. En la caja de la derecha (con borde rojo), puedes seleccionar el tipo de servidor y los recursos que quieres
darle a tu nuevo split. Si quieres hacer un servidor para una nueva modalidad en una network, selecciona `Minecraft - Paper`
como **Server Type** (Tipo de Servidor) e ingresa la cantidad de RAM y almacenamiento que quieres que ese servidor tenga.

![split](/imgs/using_the_panel/split_server/2.png)

3. Da click en **Split server** (Dividir Servidor) y verás una ventana para confirmar si quieres crear el split.

:::caution
Tu servidor principal será reiniciado cuando lo dividas puesto que los recursos serán tomados de ese servidor y dedicados
para tu nuevo servidor.
:::

4. Da click en **Confirm** (Confirmar) y tu servidor será dividido. Felicidades! Has dividido tu servidor con éxito.

Puedes interactuar y manejar este nuevo servidor de la misma forma que tu servidor principal. Cuando inicias sesión en
el panel, verás tu nuevo servidor en la lista de servidores que puedes administrar.

![split](/imgs/using_the_panel/split_server/3.png)

:::important
La lista de servidores los ordena por orden alfabético. Si quieres ordenarlos manualmente, puedes usar números al inicio
del nombre de cada servidor, por ejemplo `1. Proxy` `2. Lobby`. Puedes renombrar servidores en el menú de **Settings** (Ajustes)
de cada servidor.
:::

## Opciones de Splits

Puedes cambiar tu servidor principal, borrar un split, editar puertos, tipo, RAM y Almacenamiento de cada servidor en la
sección de **Server Split** (División de Servidor). Toma en cuenta que también puedes abrir nuevos puertos en la sección de
**Ports & Proxies** (Puertos y Proxies).

![console](/imgs/using_the_panel/split_server/4.png)
