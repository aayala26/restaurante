import { Grid, TableContainer,Table,TableHead,TableRow,TableCell, IconButton, TableBody, Button,TextField, Autocomplete } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ==============================|| TYPOGRAPHY ||============================== //

const Menus = () => {
const listaDeIngredientes  = [];

return (
  <MainCard title="Menús y Recetas" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} sm={6}>
        <SubCard title="Listado de Menús">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre del Menú</TableCell>
                  <TableCell>Ingredientes</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Menú 1</TableCell>
                  <TableCell>Ingrediente 1, Ingrediente 2</TableCell>
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
                  <TableCell>Menú 2</TableCell>
                  <TableCell>Ingrediente 3, Ingrediente 4</TableCell>
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
        <SubCard title="Agregar Menú/Receta">
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <TextField
                label="Nombre del Menú"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item>
              <Autocomplete
                multiple
                options={listaDeIngredientes} // Asegúrate de definir o importar `listaDeIngredientes` con los valores disponibles
                getOptionLabel={(option) => option.nombre} // Asume que cada opción tiene una propiedad 'nombre'
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Ingredientes"
                    variant="outlined"
                    fullWidth
                    required
                  />
                )}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                Agregar Menú
              </Button>
            </Grid>
          </Grid>
        </SubCard>
        <SubCard title="Agregar Ingredientes">
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <TextField
                label="Nombre del Ingrediente"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                Crear Ingrediente
              </Button>
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
    </Grid>
  </MainCard>);
};

export default Menus;
