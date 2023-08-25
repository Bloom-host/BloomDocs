---
id: updating
title: Actualizar o cambiar versión
sslug: /updating
hide_table_of_contents: true
sidebar_label: Actualizar o cambiar de versión
image: https://bloom.host/assets/images/logo.png
---

Hola Bloomers! 👋

En esta guía veremos cómo cambiar la versión de tu servidor o actualizar tu versión actual.

---

### Introducción
![logo](/imgs/running_a_server/updating/1.png)

Cambiar la versión de tu servidor en Bloom.host es muy rápido y fácil. Hemos integrado la API de muchos Minecraft jars
populares en nuestro panel, para que puedas actualizar o cambiar de versión en segundos sin tener que descargar algo en
tu computadora local.

### Precauciones
- Antes de actualizar asegúrate de [crear y probar un backup de tu servidor entero](../using_the_panel/backups.md).
  Una vez el mundo se haya cambiado de versión, es casi imposible regresarlo a como estaba antes.

### Actualizar o cambiar de versión por el panel

Para actualizar o cambiar la versión de tu servidor, dirígete a [Duck Panel](https://mc.bloom.host), selecciona tu servidor
y da click en la pestaña de **Settings** (Ajustes). Ahí encontrarás una caja que dice **Change Server Type** (Cambiar Tipo de Servidor).

Después de haber seleccionado el tipo de servidor, podrás ver las versiones de Minecraft y builds del software, así como
el tipo de servidor que quieres usar: Vanilla, Paper, Forge y otros. Después de esto, da click en **Change Server Type**
(Cambiar Tipo de Servidor) para cambiar el jar, version, o build en la que corre tu servidor. 
Asegúrate de darle a **Reinstall now** (Reinstalar ahora) si quieres que la actualización surta efecto.

![img](/imgs/running_a_server/updating/1.png)

:::warning
Ten en cuenta que puedes subir de versión de Minecraft, pero no puedes bajar de versión a no ser que borres tu mundo.
:::

Después de seguir los pasos de arriba, puedes revisar periódicamente la pestaña de **Settings**  (Ajustes) y eventualmente
verás un mensaje de **New build available! We recommend to update to the latest build.**
(Nueva build disponible! Recomendamos actualizar.) si hay una nueva actualización disponible para tu servidor.

### Actualizar manualmente
- [Asegúrate que tu servidor está respaldado en un backup completamente.](../using_the_panel/backups.md).
  También sería recomendable testear este backup en un split de prueba o localmente.
- Remueve tu jar actual por [SFTP](../using_the_panel/sftp.md) o el [Administrador de Archivos](../using_the_panel/file-manager-controls.md).
- Descarga la nueva versión de tu servidor que quieres subir.
- Sube el nuevo jar por por [SFTP](../using_the_panel/sftp.md) o el [Administrador de Archivos](../using_the_panel/file-manager-controls.md),
asegúrate de usar el mismo nombre que usabas antes o de cambiar el nombre del jar en los Ajustes.
