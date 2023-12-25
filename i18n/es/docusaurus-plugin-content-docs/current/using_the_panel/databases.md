---
id: databases
title: Bases de Datos
slug: /databases
hide_table_of_contents: true
sidebar_label: Bases de Datos MySQL
---

### Resumen
Las Bases de Datos pueden ser usadas por ciertos plugins para tener un método más eficiente y organizado de almacenar
grandes cantidades de información, o coordinar información a través de distintos servidores.
Algunos plugins comunes que usan estas bases son Dynmap, CoreProtect y LuckPerms.

---

### Creando Bases de Datos
 
1. Desde [Duck Panel](https://mc.bloom.host/) da click en la pestaña de **Databases** (Bases de Datos) en la barra de navegación.

2. Click en **New Database** (Nueva Base de Datos) para iniciar el proceso.

3. En la primera caja, asigna un nombre a la base de datos. En la segunda, especifica qué IPs deberían poder conectarse
a la base de datos. Recomendamos dejarlo como está por defecto (`%`), lo que permite que todas las IPs puedan conectarse.

![img](/using_the_panel/databases/1.png)

---

### Administrando Bases de Datos

Una vez que creaste la base de datos, aparecerá en la lista de bases de datos. Desde aquí puedes ver detalles básicos, 
detalles avanzados, importar a la base de datos, exportar desde la base de datos o borrar la base de datos.

![img](/using_the_panel/databases/2.png)

---
### Importando Bases de Datos

Para importar una base de datos primero debes crear una vacía. Una vez esté creada, puedes dar click en el botón de
**Import** (Importar) el cual que abrirá una ventana. Llena los recuadros con los datos de tu base de datos a importar.
Toma en cuenta que las importaciones de bases de datos están limitadas a **5GB**.

![img](/using_the_panel/databases/4.png)

![img](/using_the_panel/databases/3.png)

---

### Ejemplos de cómo configurar una base de datos en diferentes plugins
#### ➤ Luckperms:
```YAML
storage-method: MySQL

# The following block defines the settings for remote database storage methods.
#
# - You don't need to touch any of the settings here if you're using a local storage method!
# - The connection detail options are shared between all remote storage types.
data:

  # Define the address and port for the database.
  # - The standard DB engine port is used by default
  #   (MySQL: 3306, PostgreSQL: 5432, MongoDB: 27017)
  # - Specify as "host:port" if differs
  address: prophet6.bloom.host:3306

  # The name of the database to store LuckPerms data in.
  # - This must be created already. Don't worry about this setting if you're using MongoDB.
  database: s178_test

  # Credentials for the database.
  username: u178_uIxN5UjEZy
  password: '@CSyH7IV8r4TUnaA3A7lu^2T'
```
#### ➤ LiteBans
```YAML
sql:
  # H2, MySQL, MariaDB, and PostgreSQL are supported database drivers.
  driver: MySQL

  ## MySQL/PostgreSQL settings ##
  # If using H2, the database will be stored in the LiteBans plugin folder,
  # and most of these settings won't apply.

  # Database server address.
  address: prophet6.bloom.host:3306

  # Database name, username and password.
  database: 's178_test'
  username: 'u178_uIxN5UjEZy'
  password: '@CSyH7IV8r4TUnaA3A7lu^2T'
```
#### ➤ CoreProtect
```YAML
use-mysql: true
table-prefix: co_
mysql-host: prophet6.bloom.host
mysql-port: 3306
mysql-database: s178_test
mysql-username: u178_uIxN5UjEZy
mysql-password: @CSyH7IV8r4TUnaA3A7lu^2T
```
#### ➤ Plan
```YAML
Database:
    Type: MySQL
    MySQL:
        Host: prophet6.bloom.host
        Port: 3306
        User: u178_uIxN5UjEZy
        Password: @CSyH7IV8r4TUnaA3A7lu^2T
        Database: s178_test
        # Launch options to append after mysql driver address
        Launch_options: "?rewriteBatchedStatements=true&useSSL=false&serverTimezone=UTC"
```
#### ➤ AdvancedBan
```YAML
# If set to false all bans will be saved locally in a HSQLDB-Database
UseMySQL: true

MySQL:
  IP: prophet6.bloom.host
  DB-Name: s178_test
  Username: u178_uIxN5UjEZy
  Password: @CSyH7IV8r4TUnaA3A7lu^2T
  Port: 3306
  Properties: 'verifyServerCertificate=false&useSSL=false&useUnicode=true&characterEncoding=utf8'
```
