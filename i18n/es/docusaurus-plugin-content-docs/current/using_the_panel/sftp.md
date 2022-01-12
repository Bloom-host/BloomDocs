---
id: sftp
title: Usando SFTP
slug: /sftp
hide_title: true
hide_table_of_contents: false
sidebar_label: Usando SFTP
description: Esta guía te ayudará a usar SFTP (MobaXTerm/WinSCP/FileZilla) para transferir archivos.
keywords:
  - Bloom.host
  - Import Files
  - Export Files
  - Transfer Files
  - SFTP
  - File Access
  - Bloom.host file access
  - Pterodactyl Panel
---

<div class="text--center">
<img src="https://bloom.host/logo-white.svg" alt="logo" height="50%" width="50%"/>
<h1>Usando SFTP</h1>
</div>

### Qué es SFTP?

**S**SH **F**ile **T**ransfer **P**rotocol es uno de los métodos más populares para transferir archivos de forma segura
a servidores remotos.

:::important
Recomendamos comprimir los archivos que quieres subir al servidor, pues subir archivos individualmente puede tomar mucho
tiempo. Una vez que el archivo .zip ya esté subido, puedes entrar al **File Manager** (Administrador de Archivos), click
en los tres puntos `...` al lado del .zip y click en `Extract` (Extraer).  
:::

### Más Acciones

Si deseas comprimir, descomprimir o borrar archivos en masa, [revisa nuestra guía](../using_the_panel/file-manager-controls.md)
de administración de archivos a través del panel web.


### Usando SFTP

:::info
Hay muchos Clientes SFTP que puedes usar, siendo los más populares [WinSCP](https://winscp.net/), [MobaXTerm](https://mobaxterm.mobatek.net/)
o [FileZilla](https://filezilla-project.org/). 
:::

1. Para encontrar detalles de login, entra a **Settings** (Ajustes) en la barra lateral del panel.
 
![sftp](../../../../../static/imgs/using_the_panel/sftp/1.png)

![sftp](../../../../../static/imgs/using_the_panel/sftp/2.png)

2. Aquí podrás ver datos de SFTP de tu servidor como la IP a usar, puerto y usuario. Tu contraseña de SFTP es la misma
que usas para iniciar sesión en el panel.

> *Si tienes WinSCP instalado como Cliente SFTP, puedes iniciar sesión directamente con **`Launch SFTP`** (Iniciar SFTP).*


---

### Usando WinSCP

1. Descarga [WinSCP](https://winscp.net/eng/download.php) en tu computadora. Esto debería ser simple gracias a su instalador.

2. Entra al [Duck Panel](https://mc.bloom.host/) y da click en **Launch SFTP** (Iniciar SFTP) bajo **Settings** (Ajustes)
en la barra lateral de la izquierda. Simplemente ingresa la contraseña de tu panel y todo está listo!
 

![sftp](../../../../../static/imgs/using_the_panel/sftp/3.png)

WinSCP es bastante similar al Explorador de Windows. En la parte verde de la izquierda puedes ver tus archivos, y en la
parte azul de la derecha puedes ver los archivos de tu servidor. Aquí puedes arrastrar, renombrar y borrar archivos como quieras. 

---

### Usando MobaXTerm

1. Descarga [MobaXTerm](https://mobaxterm.mobatek.net/download.html). Tienen una versión gratis y otra profesional de paga.

2. Una vez esté listo, inicia la aplicación. Da click derecho en la parte izquierda de la aplicación y click en **New Session**
   (Sesión Nueva)
3. Selecciona **SFTP** en el medio.

![sftp](../../../../../static/imgs/using_the_panel/sftp/4.png)

4. Ingresa la IP, puerto y usuario SFTP que obtuviste en los pasos de arriba y da click en **Ok**.

5. Ingresa la contraseña que usas para el panel web.

![sftp](../../../../../static/imgs/using_the_panel/sftp/5.png)

6. En la parte verde de la izquierda, puedes ver tus archivos locales, mientras que en la parte azul de la derecha puedes
ver tus archivos en el servidor. Aquí puedes arrastrar, renombrar y borrar archivos como quieras.

---
