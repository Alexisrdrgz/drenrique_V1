const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors')

app.use(cors())
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "consultorio",
});

app.post("/create", (req, res) => {
  const nombre = req.body.nombre;
  const apellidos = req.body.apellidos;
  const edad = req.body.edad;
  const direccion = req.body.direccion;
  const telefono = req.body.telefono;
  const value = req.body.value;
  const casoclinico = req.body.casoclinico;

  db.query(
    "INSERT INTO pacientes(nombre,apellidos,edad,direccion,telefono,value,casoclinico) VALUES (?,?,?,?,?,?,?)",
    [nombre, apellidos, edad, direccion, telefono, value, casoclinico],(err,result) => {

        if(err){
            console.log(err)
        }else {
            res.send("Guardad Correctamente")
        }
    }
  );
});

app.listen(3500, () => {
  console.log("tu server funciona");
});
