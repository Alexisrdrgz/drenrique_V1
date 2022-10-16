import { Grid, Card, CardContent, CardAction } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Navbar from "../Navbar/Navbar";
import React, { useState } from "react";
import "../Form/Form.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Axios from 'axios'
const Form = () => {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [edad, setEdad] = useState("0");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("0");
  const [value, setValue] = useState("");
  const [casoclinico, setCasoclinico] = useState("");
  
  const addPaciente = () => {
    Axios.post('http://localhost:3500/create',{
      
    nombre:nombre,
    apellidos:apellidos,
    edad:edad,
    direccion:direccion,
    telefono:telefono,
    value:value,
    casoclinico:casoclinico
}).then(()=>{
  console.log("Exito")
})
  }

  return (
    <div>
      <Navbar />
      <header>
        <Box my={2}>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={12} xl={3}>
              <CardContent className="card-content">
                <TextField
                  placeholder="Nombre"
                  error={false}
                  type="text"
                  name="nombre"
                  margin="dense"
                  fullWidth
                  variant="outlined"
                  helperText="Campo obligatorio"
                  onChange={(event) => {
                    setNombre(event.target.value);
                  }}
                />
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={12} xl={3}>
              <CardContent>
                <TextField
                  className="TextField"
                  placeholder="Apellidos"
                  error={false}
                  type="text"
                  name="apellidos"
                  margin="dense"
                  fullWidth
                  variant="outlined"
                  helperText="Campo obligatorio"
                  onChange={(event) => {
                    setApellidos(event.target.value);
                  }}
                />
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={12} xl={2}>
              <CardContent>
                <TextField
                  className="TextField"
                  placeholder="Edad"
                  error={false}
                  type="number"
                  name="edad"
                  margin="dense"
                  fullWidth
                  variant="outlined"
                  helperText="Campo obligatorio"
                  onChange={(event) => {
                    setEdad(event.target.value);
                  }}
                />
              </CardContent>
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={12} xl={5}>
              <CardContent>
                <TextField
                  className="TextField"
                  error={false}
                  type="text"
                  placeholder="direccion"
                  multiline
                  maxRows={3}
                  name="direccion"
                  margin="dense"
                  fullWidth
                  variant="outlined"
                  helperText=""
                  onChange={(event) => {
                    setDireccion(event.target.value);
                  }}
                />
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={12} xl={2}>
              <CardContent>
                <TextField
                  className="TextField"
                  placeholder="Telefono"
                  error={false}
                  type="number"
                  name="telefono"
                  margin="dense"
                  fullWidth
                  variant="outlined"
                  helperText="Campo obligatorio"
                  onChange={(event) => {
                    setTelefono(event.target.value);
                  }}
                />
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <CardContent>
                <FormControl>
                  <FormLabel
                    id="demo-row-radio-buttons-group-label"
                    className="radio2"
                  >
                    Genero
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={value}
                    onChange={(event) => {
                      setValue(event.target.value);
                    }}
                    
                  >
                    <FormControlLabel
                      value="Mujer"
                      control={<Radio />}
                      label="Mujer"
                      defaultValue="top"
                      className="radio"
                    />
                    <FormControlLabel
                      value="Hombre"
                      control={<Radio />}
                      label="hombre"
                      defaultValue="top"
                      className="radio"
                    />
                  </RadioGroup>
                </FormControl>
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={12} xl={6}>
              <CardContent className="caso">
                <TextField
                  className="TextField"
                  placeholder="Caso Clinico"
                  error={false}
                  type="text"
                  multiline
                  maxRows={3}
                  name="direccion"
                  margin="dense"
                  fullWidth
                  variant="outlined"
                  helperText="Campo obligatorio"
                  onChange={(event) => {
                    setCasoclinico(event.target.value);
                  }}
                />
              </CardContent>
            </Grid>
          </Grid>
        </Box>
        <div className="boton">
          <Button variant="contained" size="large" onClick={addPaciente}>
            Registrar
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Form;
