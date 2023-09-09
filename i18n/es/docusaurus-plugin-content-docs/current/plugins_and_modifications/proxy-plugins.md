---
id: install-proxy-plugin
title: Instalando Plugins de Proxy
slug: /installing-proxy-plugins
hide_table_of_contents: false
sidebar_label: Plugins de Proxy (BungeeCord/Velocity)
---

Hola Bloomers! 👋

En esta guía veremos cómo instalar plugins Bungeecord/Velocity en tu proxy.

---

:::important
Esta guía es para proxies BungeeCord/Velocity. Si estás buscando instrucciones para instalar servidores en un servidor
Bukkit/Spigot/Paper, por favor revisa [esta guía](installing-plugins.md).
:::

---

:::warning
Asegúrate que confías en la fuente de tu plugin. Los plugins tienen acceso de alto nivel a tu servidor. No intentes
usar plugins de páginas de pirateo o similares. En la mayoría de los casos estos plugins pueden corromper otros plugins
instalados o tu proxy entero.
:::

---

### Installing Plugins

1. Encuentra un plugin que quieras instalar. Algunas fuentes confiables son [Spigot](https://spigotmc.org/resources) y
[Velocity](https://forums.velocitypowered.com/c/plugins/5).
2. Tienes dos opciones: Guardar el plugin en tu computadora y luego subirla al panel o copiar el link de descarga directo del plugin
   y usar la opción de **Download from URL** (Descargar desde URL) que puede ser encontrada en el **File Manager** (Administrador
   de Archivos). Si lo descargas en tu computadora puedes subirlo al servidor a través del [panel web](https://mc.bloom.host) o [SFTP](https://docs.bloom.host/how-to-use-sftp).
3. En la carpeta raíz de tu servidor, ubica la carpeta `/plugins`, si no está ahí la puedes crear. Aquí es donde pondrás los mods que quieras instalar!
4. Reinicia el servidor para que el plugin se aplique en el servidor.

:::caution
Los plugins de Bungeecord y de Velocity no son compatibles entre sí, es decir, los plugins de BungeeCord no funcionan en
Velocity a no ser que el plugin tenga una versión para Velocity y viceversa.
:::

Una vez que el servidor está en línea, si usas Velocity escribe `velocity plugins` en tu consola. Si puedes ver el
nombre de tu plugin recién instalado, está listo! Caso contrario revisa lo que puedes hacer más abajo.


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
