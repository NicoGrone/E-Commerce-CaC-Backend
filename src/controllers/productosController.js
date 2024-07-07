const controller = {};

function listarPorCategoria(categoria = 'destacado') {
    return `SELECT p.* FROM producto p
        JOIN categoriaproductos cp on cp.id_producto = p.id
        JOIN categorias c on c.id = cp.id_categoria
        WHERE c.nombre = '${categoria}';
    `
}

function listarTodos() {
    return `SELECT p.* FROM producto p;`
}


controller.destacados = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query(listarPorCategoria(), (err, productos) =>{
            if (err){
                res.json(err);
            }
            res.send(productos);
        });
    });
};

controller.productos = (req, res) => {
    const { categoria } = req.query;
    console.log(req.query);
    req.getConnection((err, conn) => {
        conn.query(listarPorCategoria(categoria), (err, productos) =>{
            if (err){
                res.json(err);
            }
            res.send(productos);
        });
    })
}

controller.todos = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query(listarTodos(), (err, productos) =>{
            if (err){
                res.json(err);
            }
            res.send(productos);
        });
    })
}

controller.producto = (req, res) => {
    const { id } = req.params;
    req.getConnection((err,conn) => {conn.query('SELECT * FROM producto WHERE id = ?', [id], (err, producto) =>{
        if (err){
            res.json(err);
        }
        res.send(producto);
        });
    })
}


module.exports = controller;