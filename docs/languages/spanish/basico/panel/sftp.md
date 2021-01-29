---
id: sftp
title: Cómo usar SFTP para transferir archivos
hide_title: true
hide_table_of_contents: false
sidebar_label: Cómo usar SFTP para transferir archivos
description: Esta guía te ayudará a usar SFTP (Filezilla) para transferir archivos
keywords:
  - Bloom.host
  - Importar Archivos
  - Exportar Archivos
  - Transferir Archivos
  - Archivos
  - SFTP
  - FTP
  - Bloom.host Archivos
  - Pterodactyl Panel
  - Español
image: https://bloom.host/assets/images/logo.png
---

# Cómo usar SFTP para transferir archivos

¡Hola Bloomers! 👋

En esta guía usaremos SFTP para importar y exportar archivos. El cliente SFTP que usaremos será WinSCP, el cual puedes descargar [aquí](https://winscp.net). ¡También puedes usar [Filezilla](https://filezilla-project.org/download.php?show_all=1) o [MobaXterm](https://mobaxterm.mobatek.net/)!

---

Para encontrar los datos de login, navega a la barra lateral y luego abre la sección de **Settings** (Ajustes).

![Bloom.host How to use SFTP](../../../../../static/img/how-to-use-sftp/how-to-use-sftp2.png)

---

Aquí podrás ver el nombre de host del servidor SFTP (rojo) y tu usuario SFTP (cian). 

*Con nuestro nuevo panel, si tienes WinSCP instalado, puedes conectarte con un click presionando `Launch SFTP` (verde)*

![Bloom.host How to use SFTP](../../../../../static/img/how-to-use-sftp/how-to-use-sftp3.png)

---

En caso que no estás usando WinSCP, ingresa tus datos de login en la parte de arriba a la izquierda. 
- **Host**: Esto puedes verlo en el panel; Pégalo sin el prefijo. Por ejemplo, `sftp://testnode.bloom.host:2022` sería `testnode.bloom.host`
- **Username** (Usuario): Tu usuario SFTP de la sección Settings.
- **Password** (Contraseña): Tu contraseña al panel de juego. <u>¡No tu contraseña de facturación!</u>
- **Port** (Puerto): Este es `2022` para todos. 

![Bloom.host How to use SFTP](../../../../../static/img/how-to-use-sftp/how-to-use-sftp4.png)

El lado izquierdo muestra los archivos en tu computadora (amarillo), y el de la derecha, los archivos en tu servidor (naranja). Abajo, en azul, información sobre transferencias de archivos recientes. 

Si deseas archivar o desarchivar archivos, revisa nuestra [guía](controles-basicos.md) sobre el panel.

---