---
id: ports-and-proxies
title: Creando un Proxy Inverso
slug: /ports-and-proxies
hide_table_of_contents: true
sidebar_label: Creando un Proxy Inverso
description: Esta guía te ayudará a crear un proxy inverso.
---

---
:::warning
Los proxies inversos solo pueden ser usados para conexiones web (como HTTPS). Si deseas unirte a tu servidor usando un
dominio, revisa [esta página](../running_a_server/domain.md)
:::
:::note
Para esta guía, debes tener acceso a un dominio y la habilidad de cambiar los ajustes de DNS de ese dominio.
Esta guía va a usar Cloudflare, pero la mayoría de proveedores deberían funcionar de forma similar.
:::

---

#### Proxy Inverso con dominios

1. Entra al panel de ajustes de DNS de tu dominio. En esta demo usaremos Cloudflare y **example.com** como dominio de ejemplo.

![portsandproxies](/using_the_panel/ports_and_proxies/1.png)

2. Ahora crearemos un registro CNAME (canonical name).
3. Diferentes proveedores de dominio pueden usar diferentes métodos para referirse a la raíz del dominio, pero en la mayoría
de los casos (como en este), pondremos un `@` dentro de la caja de **Name** (Nombre). 

4. Usa los mismos datos que en la imagen de arriba, pero reemplaza **Target** (Objetivo) con la dirección del proxy inverso
de acuerdo a tu ubicación:

* Para servidores de USA: `revproxy-us.bloom.host`
* Para servidores de Europa: `revproxy-eu.bloom.host`

---

#### Proxy Inverso con subdominios

1. Entra al panel de ajustes de DNS de tu dominio. En esta demo usaremos Cloudflare y **subdomain.example.com** como dominio de ejemplo.

![portsandproxies](/using_the_panel/ports_and_proxies/2.png)

2. En este caso, crea un nuevo registro CNAME, idéntico al de arriba.
3. Reemplaza la palabra **subdomain** con el dominio que quieras usar.
4. Reemplaza **Target** (Objetivo) con la dirección del proxy inverso de acuerdo a tu ubicación:

* Para servidores de USA: `revproxy-us.bloom.host`
* Para servidores de Europa: `revproxy-eu.bloom.host`

---
:::note
Los registros CNAME tardan un tiempo en propagarse, dependiendo de tu proveedor de internet y otros factores.

Para ver más información, revisa [esta página](https://dnschecker.org/#CNAME).
:::
:::warning
Si usas Cloudflare para DNS, asegúrate de establecer el **Proxy status** (Estado de Proxy) como **DNS only** (Solo DNS),
pues de lo contrario no funcionará.
:::

---

Una vez hayas creado el registro CNAME, entra al [panel](https://mc.bloom.host/) y en el menú de la izquierda, selecciona
**Ports & Proxies** (Puertos y Proxies).

![portsandproxies](/using_the_panel/ports_and_proxies/3.png)

Crea una nueva asignación con el botón de **Create Allocation** (Crear Asignación). Aparecerá una ventana pidiéndote
que escribas el puerto que quieres usar en tu nueva asignación, pon el puerto que quieras redirigir con el proxy inverso.

Después de crear una asignación y el registro CNAME, escribe el subdominio o dominio que quieras usar para el proxy inverso
en el recuadro de **Reverse Proxy Domain** (Dominio de Proxy Inverso).

---
