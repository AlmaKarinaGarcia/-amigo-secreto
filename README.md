# 🎲 Sorteo de Amigo Secreto 

Este es un pequeño proyecto en **JavaScript** que permite agregar nombres de amigos a una lista y luego realizar un **sorteo aleatorio**.  
Los nombres se muestran en pantalla y también se almacenan en la consola del navegador.

## 🚀 Características

✅ **Agregar amigos** a la lista.  
✅ **Evitar duplicados** al agregar nombres.  
✅ **Eliminar amigos** individualmente de la lista.  
✅ **Sortear un amigo al azar** usando `Math.random()`.  
✅ **Borrar la lista** automáticamente después del sorteo.  
✅ **Detectar la tecla "Enter"** para agregar amigos sin hacer clic en el botón.  
✅ **Mostrar la lista en la consola** con cada acción.  

## 🛠️ Tecnologías Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**

---

## 📋 Instrucciones de Uso

1. **Abrir el archivo HTML** en tu navegador.
2. **Escribir el nombre de un amigo** en el campo de entrada.
3. **Presionar el botón "Agregar"** o la tecla "Enter".
4. **Repetir el proceso** para añadir más amigos.
5. **Presionar "Sortear"** para elegir un amigo al azar.
6. **La lista se limpiará automáticamente** después del sorteo.
7. **Abrir la consola del navegador (`F12` → "Consola")** para ver la lista actualizada en tiempo real.

---

## 🖥️ Código Principal

El código principal se encuentra en **`script.js`**, e incluye las siguientes funciones:

- `agregarAmigo()`: Agrega un amigo a la lista y lo muestra en la consola.
- `renderizarAmigos()`: Actualiza la interfaz con la lista actualizada.
- `eliminarAmigo(index)`: Elimina un amigo y lo registra en la consola.
- `sortearAmigo()`: Selecciona aleatoriamente un amigo, muestra el resultado y limpia la lista.
- `keydown eventListener`: Permite agregar amigos presionando la tecla "Enter".

---

## 🎨 Estilos CSS

Los estilos se encuentran en el archivo **`styles.css`** e incluyen:

- **Diseño flexible** para alinear los nombres y los botones de eliminación.
- **Botón de eliminar estilizado** con color rojo y efecto hover.
- **Bordes y espaciado** para mejorar la legibilidad de la lista.

---
