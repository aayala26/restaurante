import { useState } from 'react';
import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import Autocomplete from '@mui/material/Autocomplete';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

const Encuestas = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const enviarEncuestaWhatsapp = () => {
    console.log("alex");
  };
  const menus = [
    { title: 'Menú 1' },
    { title: 'Menú 2' },
    { title: 'Menú 3' }
  ];

  return (
    <MainCard title="Encuestas" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <SubCard title="Listado de Encuestas">
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between",width: "99%" }}>
                  <h2>Encuesta 1</h2>
                  <div>
                    <Button variant="contained" color="primary" style={{marginRight:"12px"}} onClick={() => enviarEncuestaWhatsapp()}>
                      Recuerar Datos
                    </Button>
                    <Button variant="contained" color="primary" startIcon={<SendIcon />} onClick={() => enviarEncuestaWhatsapp()}>
                      Enviar Encuesta por WhatsApp
                    </Button>
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Usuario</TableCell>
                        <TableCell>Voto</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Usuario 1</TableCell>
                        <TableCell>Receta A</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Usuario 2</TableCell>
                        <TableCell>Receta B</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Usuario 3</TableCell>
                        <TableCell>Receta A</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <p>Receta ganadora: Receta A</p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between",width: "99%" }}>
                  <h2>Encuesta 2</h2>

                  <div>
                    <Button variant="contained" color="primary" style={{marginRight:"12px"}} onClick={() => enviarEncuestaWhatsapp()}>
                      Recuerar Datos
                    </Button>
                    <Button variant="contained" color="primary" startIcon={<SendIcon />} onClick={() => enviarEncuestaWhatsapp()}>
                      Enviar Encuesta por WhatsApp
                    </Button>
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Usuario</TableCell>
                        <TableCell>Voto</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Usuario 1</TableCell>
                        <TableCell>Receta B</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Usuario 2</TableCell>
                        <TableCell>Receta A</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Usuario 3</TableCell>
                        <TableCell>Receta B</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <p>Receta ganadora: Receta B</p>
              </AccordionDetails>
            </Accordion>
          </SubCard>
        </Grid>
      </Grid>
      <Button startIcon={<AddIcon />} onClick={handleClickOpen}>
        Crear Encuesta
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogTitle>Crear Encuesta</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" id="name" label="Nombre de la Encuesta" type="text" fullWidth variant="standard" />
          <Autocomplete
            multiple
            options={menus}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => <TextField {...params} label="Menú" margin="normal" />}
          />
          <TextField label="" type="date" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Enviar y Guardar Encuesta</Button>
          <Button onClick={handleClose}>Guardar</Button>
        </DialogActions>
      </Dialog>
    </MainCard>
  );
};

export default Encuestas;
