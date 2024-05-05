import { Grid, TableContainer,Table,TableHead,TableRow,TableCell, IconButton, TableBody,TextField,Button } from '@mui/material';
// import MuiTypography from '@mui/material/Typography';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { useState } from 'react';

// ==============================|| TYPOGRAPHY ||============================== //

const Clientes = () => {
const [cliente,setCliente] = useState([]);

  const guardarCliente = () =>{
  console.log("Cliente",cliente);
  }

  return (
  <MainCard title="Clientes" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} sm={6}>
        <SubCard title="Listado de Clientes">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Apellido</TableCell>
                  <TableCell>Teléfono</TableCell>
                  <TableCell>Identificación</TableCell>
                  <TableCell>Correo</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Cliente 1</TableCell>
                  <TableCell>Apellido 1</TableCell>
                  <TableCell>123456789</TableCell>
                  <TableCell>ID-001</TableCell>
                  <TableCell>cliente1@example.com</TableCell>
                  <TableCell>
                    <IconButton>
                    <ModeEditIcon />
                    </IconButton>
                    <IconButton>
                     <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cliente 2</TableCell>
                  <TableCell>Apellido 2</TableCell>
                  <TableCell>987654321</TableCell>
                  <TableCell>ID-002</TableCell>
                  <TableCell>cliente2@example.com</TableCell>
                  <TableCell>
                    <IconButton>
                     <ModeEditIcon />
                    </IconButton>
                    <IconButton>
                     <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </SubCard>
      </Grid>
      <Grid item xs={12} sm={6}>
        <SubCard title="Formulario de Creación de Clientes">
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <TextField 
                label="Nombre" 
                variant="outlined" 
                value={cliente.nombre} 
                onChange={(e) => setCliente({...cliente, nombre: e.target.value})}
              />
            </Grid>
            <Grid item>
              <TextField 
                label="Apellido" 
                variant="outlined" 
                value={cliente.apellido} 
                onChange={(e) => setCliente({...cliente, apellido: e.target.value})}
              />
            </Grid>
            <Grid item>
              <TextField 
                label="Teléfono" 
                variant="outlined" 
                value={cliente.telefono} 
                onChange={(e) => setCliente({...cliente, telefono: e.target.value})}
              />
            </Grid>
            <Grid item>
              <TextField 
                label="Identificación" 
                variant="outlined" 
                value={cliente.identificacion} 
                onChange={(e) => setCliente({...cliente, identificacion: e.target.value})}
              />
            </Grid>
            <Grid item>
              <TextField 
                label="Correo" 
                variant="outlined" 
                value={cliente.correo} 
                onChange={(e) => setCliente({...cliente, correo: e.target.value})}
              />
            </Grid>
            <Grid item>
              <Button 
                variant="contained" 
                color="primary"
                onClick={guardarCliente}
              >
                Guardar
              </Button>
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
    </Grid>
  </MainCard>);

  };

export default Clientes;
