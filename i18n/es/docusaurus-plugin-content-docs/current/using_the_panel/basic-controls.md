---
id: basic-controls
slug: /basic-controls
title: Controles Básicos
hide_title: true
hide_table_of_contents: true
sidebar_label: Controles Básicos
image: https://bloom.host/assets/images/logo.png
---

<div class="text--center">
![logo](https://bloom.host/logo-white.svg)
<h1>Controles Básicos del Panel</h1>
</div>

### Accediendo al Panel

Puedes acceder al panel de control de tu servidor [aquí](https://mc.bloom.host/).
Si tienes múltiples servidores, puedes escoger cuál quieres modificar desde la página principal del panel.
O simplemente escoge el server a modificar desde la caja desplegable en la parte de arriba del panel.

![console](/imgs/using_the_panel/basic_controls/1.png)


---

### Información en Vivo
![console](/imgs/using_the_panel/basic_controls/2.png)

- Morado - La IP y puerto de tu servidor.
- Azul - La ID del servidor que es necesaria al abrir un ticket de soporte.
- Verde - La cantidad de RAM que tu servidor está usando. No te alarmes si esto está al máximo, pues la mayoría de nuestros
servidores usan las flags optimizadas de Aikar.
- Naranja - La cantidad de CPU que tu servidor está usando. El máximo es el equivalente al 100% multiplicado por la cantidad
de cores lógicos que tu plan tiene.
- Rojo - La cantidad de almacenamiento que tu servidor está usando. Si alcanzas el máximo de almacenamiento no podrás
iniciar tu servidor hasta que haya espacio libre.

---

### Consola del Servidor y Control del Servidor
Aquí puedes enviar cualquier comando y ver la consola de tu servidor. Al usar un comando recuerda quitar el `/`. Si 
deseas usar un `/`, considera usar [este plugin](https://www.spigotmc.org/resources/81157)!

Estos botones permiten iniciar **(Start)**, apagar **(Stop)** y reiniciar **(Restart)** tu servidor. No es recomendable
matar el proceso del servidor **(Kill)** puesto que los plugins y mundos puede que no se guarden, así como puede que se
corrompan. Solo úsalo si tu servidor deja de responder.

![console](/imgs/using_the_panel/basic_controls/3.png)

---

### Gráficos
Por último, puedes ver el uso de RAM, CPU y conexión en vivo en gráficos!
Como se mencionó arriba, con Aikar flags va a parecer como si siempre estás usando la mayoría de tu RAM cuando no es el caso en realidad. 

![graphs](/imgs/using_the_panel/basic_controls/4.png)
