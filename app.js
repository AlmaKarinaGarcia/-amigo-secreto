//Challengue Alma García 


// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar nombres a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim(); // Elimina espacios en blanco antes y después

    // Validar que el usuario ingresó un nombre
    if (!nombreAmigo) {
        alert("Debes ingresar un nombre");
        return;
    }

    // Evitar nombres duplicados en la lista
    if (amigos.includes(nombreAmigo)) {
        alert("Este amigo ya está en la lista.");
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);
    
    // Mostrar en consola la lista actualizada
    console.log("Lista de amigos actualizada:", amigos);

    // Limpiar el campo de entrada y volver a enfocar
    inputAmigo.value = "";
    inputAmigo.focus();

    // Actualizar la lista en pantalla
    renderizarAmigos();
}

// Función para mostrar la lista de amigos en el HTML
function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

    let fragmento = document.createDocumentFragment();

    amigos.forEach((nombre, index) => {
        let item = document.createElement("li");
        item.style.display = "flex";
        item.style.justifyContent = "space-between";
        item.style.alignItems = "center";
        item.style.padding = "5px";

        // Crear el texto con el número y el nombre
        let texto = document.createElement("span");
        texto.textContent = `${index + 1}. ${nombre}`;

        // Crear botón de eliminar
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.classList.add("eliminar-btn");
        botonEliminar.onclick = () => eliminarAmigo(index);

        // Agregar elementos al <li>
        item.appendChild(texto);
        item.appendChild(botonEliminar);

        // Agregar el <li> al fragmento
        fragmento.appendChild(item);
    });

    // Agregar el fragmento a la lista en el DOM
    listaAmigos.appendChild(fragmento);
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    console.log(`Eliminando: ${amigos[index]}`); // Mostrar en consola el amigo eliminado
    amigos.splice(index, 1); // Eliminar el amigo de la lista
    console.log("Lista de amigos después de eliminar:", amigos); // Mostrar la lista actualizada
    renderizarAmigos();
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    // ✅ Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    // ✅ Generar un índice aleatorio usando Math.random() y Math.floor()
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // ✅ Obtener el nombre sorteado a partir del índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio];

    // ✅ Mostrar en consola el nombre sorteado
    console.log(`🎉 El amigo sorteado es: ${amigoSorteado}`);

    // ✅ Mostrar el resultado en el HTML
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;

    // ✅ Vaciar la lista después del sorteo y actualizar la interfaz
    amigos = [];
    console.log("Lista de amigos después del sorteo:", amigos); // Mostrar la lista vacía
    renderizarAmigos();
}

// **Detectar tecla Enter en el input y ejecutar agregarAmigo() automáticamente**
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita que el formulario se envíe si estuviera dentro de un `<form>`
        agregarAmigo();
    }
});
