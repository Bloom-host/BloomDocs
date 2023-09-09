---
id: server-importer
slug: /server-importer
title: Importador de Servidores
hide_table_of_contents: true
sidebar_label: Importador de Servidores
---

### Cómo funciona

Duck Panel tiene un importador de servidores conveniente. Este te permite importar fácilmente tu servidor desde otro host
hacia Bloom, ahorrándote tiempo y evitándote tener que descargar y subir los archivos desde tu computadora.

:::note
También puedes importar bases de datos de tu antiguo host! Sigue esta [guía](https://docs.bloom.host/es/databases#importing-mysql-databases)
para ver cómo hacerlo.
:::

---

### Credenciales S/FTP
Primero necesitarás las credenciales para poder conectarte al servidor S/FTP de tu servidor en el otro host. Necesitarás:
- Tipo de servidor (FTP, FTPS o SFTP)
- Host (IP) y Puerto
- Usuario
- Contraseña

:::note
Recomendamos que comprimas todos los archivos de tu servidor que quieras importar antes de iniciar.
Esto puede ayudar a hacer la importación más rápida.
:::

#### Cómo iniciar la importación

- Primero entra a nuestro [Duck Panel](https://mc.bloom.host)
- Selecciona el servidor al cual quieres importar los archivos.
- Click en **Server Importer** (Importador de Servidores) en el menú a la izquierda.
- Llena los datos con las credenciales apropiadas.
- Deja **Base Directory** (Directorio Base) en `/` si quieres importar todos los archivos. Si quieres importar solo una
carpeta o archivo en específico, pon la ubicación del archivo en ese recuadro.

Una vez la importación inicie, puedes entrar a la página de **Console** (Consola) para ver el progreso actual.

![console](/using_the_panel/server-importer/1.png)
