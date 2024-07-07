const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM comprador', (err, comprador) =>{
            if (err){
                res.json(err);
            }
            res.send(comprador);
        });
    });
};


controller.save= (req,res) => {
    const data= req.body;

    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO comprador set ?', [data], (err, comprador) =>{
            res.redirect('/');
        })
    })
};

controller.edit= (req,res) => {
    const { id } = req.params;
    req.getConnection ((err, conn) =>{
        conn.query('SELECT * FROM comprador WHERE id = ?', [id], (err, comprador) =>{
            res.send(comprador);
        });
    }) ;
};

controller.update = (req,res) => {
    const { id } = req.params;
    const newComprador = req.body;

    req.getConnection((err ,conn ) => {
        conn.query('UPDATE comprador set ? WHERE id = ?', [newComprador, id], (err, rows) => {
            res.send(rows);
        });
    })
};

controller.delete= (req,res) => {
    const { id } = req.params;

    req.getConnection((err ,conn ) => {
        conn.query('DELETE FROM comprador WHERE id = ?', [id], (err, rows) => {
            res.send(rows);
        });
    })
};

module.exports = controller;