---
id: reverse-proxy
title: Proxy Inverso
hide_title: true
hide_table_of_contents: false
sidebar_label: Proxy Inverso
description: Esta guía te ayudará a usar un proxy inverso para tu servidor de Minecraft.
keywords:
  - BloomVPS
  - Reverse Proxy
  - Minecraft Server
  - Pterodactyl Panel
  - Español
image: https://media.discordapp.net/attachments/738919680332529714/742239368919515207/ReverseProxy.png?width=1204&height=677
---
# Configurando un Proxy Inverso

1. Primero necesitarás añadir un registro CNAME, apúntalo hacia `revproxy.bloomvps.com`. 

:::caution
Asegúrate que no estés apuntando el proxy a Cloudflare (puedes desactivarlo dando click en la nube de Cloudflare hasta que se vuelva gris), pues puede romper algunas cosas. También necesitarás un dominio para este paso.  
:::
2. Una vez realizado eso, abre un ticket en [nuestro Discord](https://discord.com/invite/fTmAkmr). Provee tu subdominio (ejemplo: mapa.servidor.com), la ip de tu servidor y el puerto que quieras redirigir (ejemplo: 192.168.0.1:8123). Puedes encontrar ambos en el menú de BloomVPS. Una vez has terminado, nosotros nos encargaremos del resto.