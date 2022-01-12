---
id: file-manager-controls
slug: /file-manager-controls
title: Administrador de Archivos
hide_title: true
hide_table_of_contents: true
sidebar_label: Administrador de Archivos
image: https://bloom.host/assets/images/logo.png
---

<div class="text--center">
<img src="https://bloom.host/logo-white.svg" alt="logo" height="50%" width="50%"/>
<h1>Administrador de Archivos</h1>
</div>

### SFTP

Si prefieres usar SFTP para manejar tus archivos, revisa nuestra [guía sobre SFTP](sftp.md).

---

### Resumen de Controles
Por defecto puedes ver la carpeta principal/raíz de tu servidor. Puedes adr click en otras carpetas para ver sus
contenidos. En la parte superior izquierda puedes ver tu ubicación actual.

<div class="text--center"><img src={require('../../../../../static/imgs/using_the_panel/file_manager_controls/1.png').default} alt="console"/></div>

#### Sin archivos seleccionados puedes:
- Descargar archivos directamente desde un link (si el link da directamente a un archivo)
- Crear nuevos archivos o carpetas
- Subir archivos directamente desde tu computadora
- Seleccionar todos los archivos con la caja en la esquina superior izquierda.

También puedes seleccionar archivos individuales dándole click a la caja a la izquierda del archivo.

---

#### Con archivos seleccionados puedes:
- Copiar o mover lo seleccionado a otras carpetas o incluso mover a <u>otros servidores split</u>! Simplemente selecciona
el nombre del servidor al cual mover y la ubicación a donde mover. Puedes ingresar `../` para subir una carpeta y 
`/<carpeta>` para entrar a una. Aquí también puedes especificar si quieres sobreescribir archivos o carpetas con el mismo nombre.
- Comprimir archivos/carpetas en un solo archivo. El archivo se llamará `archive-<año>-<mes>-<día>.tar.gz`
- Borrar archivos. Por defecto, esto enviará archivos a la Papelera de Reciclaje por 24 horas o hasta que sean borrados manualmente.

---

#### También puedes dar click en `...` al lado de un archivo y saldrán opciones adicionales. Aquí puedes:
- Renombrar un archivo/carpeta
- Duplicar archivos
- Descargar desde la web
