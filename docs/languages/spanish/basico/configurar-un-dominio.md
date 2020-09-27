---
id: configurar-un-dominio
title: Configurar Un Dominio
hide_title: true
hide_table_of_contents: false
sidebar_label: Configurar Un Dominio
description: How do I find you when I cannot solve this problem
keywords:
  - Template
  - Bloom.host
  - Pterodactyl Panel
  - Minecraft
image: https://bloom.host/assets/images/logo.png
---
# Cómo configurar un dominio personalizado en tu servidor

## Paso 1
Entre al panel de su proveedor de dominio.

## Paso 2
Encuentra la configuración de DNS.

## Paso 3
Crear un nuevo registro A o ‘A record’

## Paso 4
Donde dice ‘host’, escriba @ si desea usar su dominio completo (ejemplo: mibloomservidor.com)

### Paso 4.1
Si desea usar un subdominio, donde dice ‘host’ escriba ‘mc’ o escribe el prefijo que quieras. Si escribe ‘mc’ el dominio que usará para conectarse a su servidor será ‘mc.mibloomservidor.com’ por ejemplo.  

## Paso 5
Como destino o ‘target’, ingrese la IP de su servidor sin el puerto o ‘port’.

## Paso 6
Como TTL ‘Time To Live’, seleccione automático si es posible o seleccione 30 minutos.

## Paso 7
Sus jugadores ahora pueden conectarse a su servidor con su dominio personalizado.
