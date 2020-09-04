---
id: motd
title: MOTD
hide_title: true
hide_table_of_contents: false
sidebar_label: Como cambiar tu MOTD
description: Como cambiar el MOTD que las personas ven en la lista del servidor. 
keywords:
  - Basico
  - MOTD
  - Spigot
  - Minecraft
  - BloomVPS
image: https://bloomvps.com/assets/images/logo.png
---
# Cómo cambiar tu MOTD

## Sin Plugins

Primero tienes que escribir tu MOTD, puedes usar [este sitio web](https://mctools.org/motd-creator) para hacerlo más fácil. Una vez has terminado, copia el código de `server.properties`, como el de abajo:

![server.properties](https://cdn.discordapp.com/attachments/716405933105872938/751221395622723715/unknown.png)

Abre el panel de tu servidor y entra al Explorador de Archivos, si necesitas una mano, puedes ir a  [esta guía!](https://docs.bloomvps.com/languages/spanish/basico/panel/gestion-archivos). Ahora entra al archivo `server.properties`, en la sección de motd y pega el texto que copiaste antes. Reinicia tu servidor y los cambios deberían aplicarse.

## Usando Serverlistplus
Serverlistplus es un plugin que cambia tu MOTD, también añadiendo características como MOTDs para determinados jugadores. Puedes descargarlo [aquí](https://www.spigotmc.org/resources/serverlistplus.241/). 

Ahora descarga y pon el plugin en tu carpeta de plugins `plugins` y Reinicia. Una vez has reiniciado, entra a la carpeta de Serverlistplus y abre el `config.yml`. Aquí vas a poder cambiar el MOTD al que desees. [Este sitio web](https://mctools.org/motd-creator) puede ayudarte a hacer uno como el de abajo:

![Ejemplo](https://cdn.discordapp.com/attachments/716405933105872938/751223535405629510/unknown.png)

## En Bungeecord
Cambiar tu MOTD en Bungeecord es un poco diferente; puedes seguir usando Serverlistplus, siguiendo los pasos de arriba, pero si no quieres usarlo, entra al `config.yml` de Bungeecord y en la sección de MOTD puedes cambiarlo.