---
id: installing-plugin
title: Installing Plugins
slug: /installing-plugins
hide_title: true
hide_table_of_contents: false
sidebar_label: Instalando Plugins Spigot
image: https://bloom.host/assets/images/logo.png
---

<div class="text--center">
<img src="https://bloom.host/logo-white.svg" alt="logo" height="50%" width="50%"/>
<h1>Plugins Spigot</h1>
</div>

Hola Bloomers! 👋

En esta guía veremos cómo instalar plugins Spigot en tu servidor.

---

:::important
Esta guía es para servidores Bukkit/Spigot/Paper. Si estás buscando instrucciones para instalar servidores en un servidor
proxy BungeeCord/Waterfall o Velocity, por favor revisa [esta guía](proxy-plugins.md).
:::

### Lo Básico
#### Requisitos

Para correr plugins en tu servidor necesitas usar un fork de Bukkit. (Como Spigot, Paper, Purpur, etc.) 
Si deseas hacer modificaciones también en el cliente, revisa nuestra guía de [Forge](forge-mods.md) o [Fabric](fabric-mods.md)!

#### Qué son los plugins?

Los plugins pueden ser vistos como addons que hacen cambios a tu servidor de Minecraft. Estos cambios pueden ser pequeños
como añadir un comando simple o grandes como añadir un minijuego entero. 

---

:::warning
Asegúrate que confías en la fuente de tu plugin. Los plugins tienen acceso de alto nivel a tu servidor. No intentes
usar plugins de páginas de pirateo o similares. En la mayoría de los casos estos plugins pueden corromper otros plugins
instalados o tu mundo entero. 
:::

---

### Instalando Plugins

1. Encuentra un plugin que quieras instalar. Algunas fuentes confiables son [Spigot](https://spigotmc.org/resources) y [Bukkit](https://dev.bukkit.org).
2. Tienes dos opciones: Guardar el plugin en tu computadora y luego subirla al panel o copiar el link de descarga directo del plugin
   y usar la opción de **Download from URL** (Descargar desde URL) que puede ser encontrada en el **File Manager** (Administrador
   de Archivos). Si lo descargas en tu computadora puedes subirlo al servidor a través del [panel web](https://mc.bloom.host) o [SFTP](https://docs.bloom.host/how-to-use-sftp).
3. En la carpeta raíz de tu servidor, ubica la carpeta `/plugins`, si no está ahí la puedes crear. Aquí es donde pondrás los mods que quieras instalar!
4. Reinicia el servidor para que el plugin se aplique en el servidor.

Una vez que el servidor esté en línea, escribe `plugins` en tu consola. Si puedes ver el nombre de tu plugin recién instalado
en verde, está listo! Caso contrario revisa lo que puedes hacer más abajo.

---

### Qué hacer si un plugin no carga
    
En caso que no puedes instalar un plugin apropiadamente, asegúrate de seguir los pasos de abajo antes de pedir ayuda.

1. **Revisa si el plugin tiene alguna dependencia**: En algunos casos algunos plugins necesitan otros plugins para iniciar.
Estas dependencias deberían estar listadas en la página de donde sacaste el plugin. Simplemente descárgalas e instálalas como
cualquier otro plugin.
2. **Revisa opciones adicionales**: En algunos casos algunos plugins necesitan configuración adicional antes de poder iniciar correctamente.
3. **Revisa la versión del plugin**: Asegúrate de revisar que el plugin soporte oficialmente la versión de Minecraft que estés usando.
4. **Revisa tus logs**: También deberías revisar los logs de inicio puesto que esto puede darte una pista sobre qué cosa
está fallando y causando que un plugin en particular no pueda iniciar.
