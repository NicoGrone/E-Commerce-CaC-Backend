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
    req.getConnection(async (err,conn) => {
        try {
            const producto = await new Promise((resolve, reject) => {
                conn.query(
                    'SELECT * FROM producto WHERE id = ?',
                    [id],
                    (err, fila) => {
                        if (err){
                            reject(err);
                        }
                        resolve(fila);
                    }
                );
            });

            const categorias = await new Promise((resolve, reject) => {
                conn.query(
                    'SELECT * FROM categorias JOIN categoriaproductos ON categorias.id= categoriaproductos.id_categoria WHERE categoriaproductos.id_producto= ?',
                    [id],
                    (err, filas) => {
                        if (err){
                            reject(err);
                        }
                        resolve(filas);
                    }
                );
            });

            res.send({
                producto,
                categorias,
            });
        } catch (err) {
            res.json(err);
        }
    });
}


module.exports = controller;