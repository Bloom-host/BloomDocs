---
id: paper
title: Optimización de Servidores Paper
hide_title: true
hide_table_of_contents: false
sidebar_label: Optimización de Servidores Paper
description: Cómo optimizar tu servidor de Minecraft Paper. 
keywords:
  - paper
  - Lag
  - Server
  - Optimización
  - Optimizacion
  - BloomVPS
  - Pterodactyl Panel
  - Minecraft
  - Español
image: https://bloomvps.com/assets/images/logo.png
---
# Guía de Optimización de Paper 
## Escrito por saintjust, Traducido por Amgelo

  

Actualizado hasta la Versión 1.16.2  
  
  
Desde 1.13, los servidores de Minecraft han ido progresivamente más difíciles de mantener. Paper, una modificación de Spigot, ofrece muchas opciones que pueden mejorar el rendimiento. En esta guía, modificaremos algunos archivos principales, **Primero crea una copia de respaldo**. Ten en cuenta que esta guía solo se basa en sugerencias, y no deberían ser tomadas al pie de la letra, puesto que todo servidor es diferente.

  

## server.properties

### view-distance

**Por Defecto:** 10

**Recomendado:** 4-8

**Importancia:** Muy Alta

  

**Explicación:** Este es un gran ajuste puesto que cambia cuantos chunks alrededor de cada jugador deberían estar "activos" cuando hay alguien cerca. Esto no cambia que tan lejos puede ver un jugador. (Mira “no-tick-view-distance” de paper.yml para esa configuración.)
  
  

## bukkit.yml

### spawn-limits

**Por Defecto:** monsters:70, animals:10, water-animals:15, ambient:15

**Recomendado:** monsters:30, animals:8, water-animals:2, ambient:0

**Importancia:** Alta

  

**Explicación:** Las entidades son una causa grande de lag. Poner valores menores significan menos mobs apareciendo. No cambies esto a algo muy bajo o los jugadores notarán la poca presencia de mobs. Puedes experimentar e ir más alto/bajo si sientes que tu servidor lo necesita. Los Ambient mobs están en 0 porque los únicos mobs de ambiente (actualmente) son los murciélagos, los cuales pueden causar un poco de lag y son básicamente inútiles.

  

### chunk-gc.period-in-ticks

**Por Defecto:** 600

**Recomendado:** 400

**Importancia:** Media

  

**Explicación:** Esta opción va a descargar los chunks vacíos de forma más rápida, lo cual dará lugar a menos recursos consumidos por el servidor.

  
  
  

### ticks-per.monster-spawns

**Por Defecto:** 1

**Recomendado:** 4

**Importancia:** Media

  

**Explicación:** Esta opción incrementará cada tantos ticks el servidor intentará aparecer un mob hostil. Incrementar un poco el tiempo no va a impactar cuantos mobs aparecerán, y si notas pérdidas de TPS grandes debido a mobs, puedes subir esta opción un poco más.

  
  

## spigot.yml

### mob-spawn-range

**Por Defecto:** 8

**Recomendado:** 3-6

**Importancia:** Media

  

**Explicación:** Esta opción modifica que tan lejos del jugador van a intentar aparecer mobs. Si tu view-distance es más baja que 6, es recomendable poner esta opción 1 más bajo que la view-distance. Este valor nunca debería ser más alto que tu view-distance, o experimentarás comportamientos raros de mobs.

  

### entity-activation-range

**Por Defecto:** animals: 32, monsters: 32, raiders: 48, misc: 16, water: 16

**Recomendado:** animals: 16, monsters: 24, raiders: 16, misc: 8, water: 8

**Importancia:** Alta

  

**Explicación:** Las entidades que estén fuera del rango definido serán actualizadas menos seguido, lo cual tiene un gran impacto en el rendimiento del servidor. Evita poner esta opción muy bajo o puede que rompas algunas mecánicas, como invasiones (raids) y mobs agresivos.

  

### tick-inactive-villagers

**Por Defecto:** true

**Recomendado:** false

**Importancia:** Media

  

**Explicación:** Esta opción cambia si es que los aldeanos deberían ser considerados fuera del campo de activación de los demás mobs (la opción anterior a esta). Los aldeanos pueden consumir muchos recursos, sin embargo, puede que esta opción afecte las granjas de aldeanos.

  
  
  

### ticks-per.hopper-transfer

**Por Defecto:** 8

**Recomendado:** 32

**Importancia:** Baja

  

**Explicación:** Esta opción ralentizará que tan rápido las tolvas pueden transferir a solo una vez por segundo. No es esencial, pero puede reducir lag causado por tolvas.

  

### hopper-amount

**Por Defecto:** 1

**Recomendado:** 4

**Importancia:** Baja

  

**Explicación:** Esta opción cambia mucho de acuerdo al servidor, y reduce la cantidad de veces que una tolva necesita mover objetos. Esta opción afectará negativamente a los organizadores de objetos. 
> [!CAUTION]
> Si juegas en un servidor muy técnico y necesitas el servidor lo más vanilla posible, no cambies esta opción.
> 
  

### merge-radius

**Por Defecto:** item:2.5, exp:3.0

**Recomendado:** item:5.0, exp:6.0

**Importancia:** Media

  

**Explicación:** Cantidades grandes de items y experiencia en el suelo pueden causar problemas de rendimiento. Esta opción permitirá a más items reunirse en "pilas", reduciendo el lag.

  

### enable-zombie-pigmen-portal-spawns

**Por Defecto:** true

**Recomendado:** false

**Importancia:** Media

  

**Explicación:** Esta es otra opción que depende del servidor. Si buscas acercarte lo más posible a Minecraft vanilla, deja esta opción en true. Poner esta opción en false va a prevenir que los jugadores hagan granjas grandes de Zombie Pigman, los cuales pueden causar una gran cantidad de lag.

### max-entity-collisions

**Por Defecto:** 8

**Recomendado:** 4-6

**Importancia:** Alta

  

**Explicación:** Tener muchas entidades en una sola area puede causar lag extremo en el servidor. Esta opción cambiará la cantidad de colisiones que puede detectar un mob, así que no lo pongas muy bajo a no ser que tienes mucho lag causado por mobs.

## paper.yml

### max-auto-save-chunks-per-tick

**Por Defecto:**  24

**Recomendado:**  6-8

**Importancia:** Muy Alta

  

**Explicación:** El guardado de chunks es increíblemente ineficiente en las versiones modernas de Minecraft. Esta opción cambiará la velocidad de guardado. Ponerlo demasiado bajo puede resultar en chunks sin guardar; Si tienes muchos jugadores que están repartidos por todo tu mapa, deberías mantener esto en 8 para estar a salvo.

  

### optimize-explosions

**Por Defecto:**  false

**Recomendado:**  true

**Importancia:** Media

  

**Explicación:** Paper va a optimizar mucho las explosiones. Esto no tiene impacto en la jugabilidad, así que no hay razón para mantener esto desactivado.

  

### mob-spawner-tick-rate

**Por Defecto:**  1

**Recomendado:**  2-6

**Importancia:** Alta

  

**Explicación:** Esta opción define el retraso antes que un spawner activo intente aparecer más mobs. Estos pueden tener un impacto significativo en servidores; La mayoría de los servidores deberían estar bien con poner esta opción en 2 o 3, sin embargo, los servidores que dependan mucho en esta mecánica deberían dejarlo en 5 o 6 para el mejor rendimiento.

  

### container-update-tick-rate

**Por Defecto:**  1

**Recomendado:** 2-3

**Importancia:** Baja

  

**Explicación:** Esta opción define que tan rápido los inventarios son actualizados. No lo pongas sobre 3, o experimentarás glitches visuales.

  
  
  
  
  
  

### disable-chest-cat-detection

**Por Defecto:**  false

**Recomendado:** true

**Importancia:** Baja

  

**Explicación:** Esta opción hace que los cofres ya no detecten si un gato está sentado encima para poder abrirse. Esta mecánica es básicamente inútil y causa lag, así que es mejor activar esta opción.

  
  

### max-entity-collisions

**Por Defecto:** 8

**Recomendado:** 4-6

**Importancia:** Alta

  

**Explicación:** Tener muchas entidades en una sola area puede causar lag extremo en el servidor. Esta opción cambiará la cantidad de colisiones que puede detectar un mob, así que no lo pongas muy bajo a no ser que tienes mucho lag causado por mobs.

  

### grass-spread-tick-rate

**Por Defecto:** 1

**Recomendado:** 4

**Importancia:** Media

  
**Explicación:** Esta opción cambia el tiempo antes que el césped intenta expandirse a un bloque de tierra. Esta opción no tiene casi ningún efecto en la jugabilidad, sin embargo, los servidores de Skyblock deberían mantener esta opción por defecto.

  

### despawn-ranges

**Por Defecto:** soft: 32, hard: 128

**Recomendado:** soft: 28, hard: 96

**Importancia:** Alta

  
**Explicación:** Esta opción eliminará mobs extra y permitirá a más aparecer cerca de jugadores. Deberías experimentar con esta opción y ver que funciona mejor para tu view-distance.

  

### non-player-arrow-despawn-rate

**Por Defecto:** -1

**Recomendado:** 1

**Importancia:** Baja

  

**Explicación:** No puedes recoger las flechas que no sean de jugadores, así que no hay razón que sigan en el mundo.

  
  
  

### creative-arrow-despawn-rate

**Por Defecto:** -1

**Recomendado:** 1

**Importancia:** Baja

  

**Explicación:** No puedes recoger las flechas disparadas en modo creativo, así que no hay razón que sigan en el mundo.

  

### prevent-moving-into-unloaded-chunks

**Por Defecto:** false

**Recomendado:** true

**Importancia:** Muy Alta

  

**Explicación:** Esta opción es crítica, si un jugador intenta entrar en un chunk sin cargar, el servidor experimentará muchas cantidades de lag, así que esta opción simplemente los teletransportará fuera de este chunk.

  
  

### use-faster-eigencraft-redstone

**Por Defecto:** false

**Recomendado:** true

**Importancia:** Muy Alta

  

**Explicación:** Esta opción optimizará la redstone sin romper las mecánicas vanilla. Reduce de forma significante el lag, así que no hay razón para dejarlo desactivado.

  

### per-player-mob-spawns

**Por Defecto:** false

**Recomendado:** true

**Importancia:** Muy Alta

  

**Explicación:** Esta opción es crítica para los servidores y simula mucho el comportamiento en mundos Un Jugador. Adicionalmente, esta opción eventualmente distribuye las apariciones de mobs, de forma que un solo jugador no los obtiene todos.

  
  
  
  
  
  
  
  

### no-tick-view-distance

**Por Defecto:**

**Recomendado:** 6-12

**Importancia:** Muy Alta

  

**Explicación:** Esta opción es crítica, y permitirá a los jugadores ver más lejos que la view-distance definida en server.properties. Cosas como las entidades no estarán cargadas en esta opción, y dará la ilusión de una distancia de renderizado más larga.

  
  
  

### anti-xray-enabled

**Por Defecto:** false

**Recomendado:** true

**Importancia:** Baja

  

**Explicación:** Esta opción va a parar de forma efectiva los X-rayers en el servidor, con un pequeño costo de rendimiento. Engine 1 es el menos pesado, pero poco efectivo, así que Engine 2 es lo más recomendado para servidores survival.

  
  

## Plugins Recomendados para Mejorar Rendimiento:

  

[Simple Anti-Mob Lag](https://www.spigotmc.org/resources/simple-anti-mob-lag-1-9-1-16.67484/) - Reduce mucho el lag causado por mobs sin cambios en la jugabilidad.

  

[Spark](https://www.spigotmc.org/resources/spark.57242/) - Diagnostica el rendimiento de tu servidor, y da reportes sobre la salud actual de tu servidor.
