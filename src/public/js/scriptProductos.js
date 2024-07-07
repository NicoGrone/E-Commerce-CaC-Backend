document.addEventListener('DOMContentLoaded', async function () {

    function crearListItemDeProducto(producto) {
        const productoElement = document.createElement ('li');

        const array = new Uint8Array (producto.image.data);
        const blob = new Blob ([array], { type: "image/jpeg" });
        const blobUrl = URL.createObjectURL(blob);

        productoElement.innerHTML = `<h4>${producto.nombre}</h4>
                <img src="${blobUrl}" alt="${producto.nombre}">
                <p>Precio: ${producto.precio}</p>
                <p class="descrip">Descripcion: ${producto.descripcion}</p>
                <button class="add-to-cart" data-name="${producto.nombre}"
                    data-price="${producto.precio}">Agregar 🛒</button>`;

        return productoElement;
    }

    await fetch('http://localhost:3000/api/productos?categoria=combos') 
        .then(response => response.json())
        .then(data => {    
            const columnas = document.querySelector (".columnas#combos > ul")
            console.log("Producto ", data)
            data.forEach(producto => {
                const productoElement = crearListItemDeProducto(producto);
                columnas.appendChild(productoElement)
            });

        })
        .catch(error => {
            console.error('Error:', error)
        })
    

    await fetch('http://localhost:3000/api/productos?categoria=mouse') 
        .then(response => response.json())
        .then(data => {    
            const columnas = document.querySelector (".columnas#mouse > ul")
            console.log("Producto ", data)
            data.forEach(producto => {
                const productoElement = crearListItemDeProducto(producto);
                columnas.appendChild(productoElement)
            });

        })
        .catch(error => {
            console.error('Error:', error)
        });

    await fetch('http://localhost:3000/api/productos?categoria=teclado') 
    .then(response => response.json())
    .then(data => {    
        const columnas = document.querySelector (".columnas#teclado > ul")
        console.log("Producto ", data)
        data.forEach(producto => {
            const productoElement = crearListItemDeProducto(producto);
            columnas.appendChild(productoElement)
        });

    })
    .catch(error => {
        console.error('Error:', error)
    });

    await fetch('http://localhost:3000/api/productos?categoria=auriculares') 
        .then(response => response.json())
        .then(data => {    
            const columnas = document.querySelector (".columnas#auriculares > ul")
            console.log("Producto ", data)
            data.forEach(producto => {
                const productoElement = crearListItemDeProducto(producto);
                columnas.appendChild(productoElement)
            });

        })
        .catch(error => {
            console.error('Error:', error)
        });

    await fetch('http://localhost:3000/api/productos?categoria=monitor') 
    .then(response => response.json())
    .then(data => {    
        const columnas = document.querySelector (".columnas#monitor > ul")
        console.log("Producto ", data)
        data.forEach(producto => {
            const productoElement = crearListItemDeProducto(producto);
            columnas.appendChild(productoElement)
        });

    })
    .catch(error => {
        console.error('Error:', error)
    });
});


    