import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    margin:'0 10%',
    width: '80%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightBold,
    color: '#1E2327 80%',
    fontFamily:'Montserrat'
  },
  content: {
    fontSize: theme.typography.pxToRem(20),
  },

}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Processos novos estarão inclusos no acompanhamento? Algum valor a mais?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content}>
          Cuidamos de todos os processos tributários da sua empresa. Os processos novos enquanto
          ação tributária, estarão inclusos no Plano Mensal. Ainda, o acompanhamento
          processual, com todos os produtos <strong>Datajus</strong>, fazem parte do Plano Mensal. Portanto, feito do início ao
          fim sem taxas extra.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Como faço para cancelar o serviço?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content}>
          Trabalhamos com um contrato de prestação de serviço que pode ser cancelado a qualquer
          momento, <strong>sem multa ou taxas</strong>  por quebra de contrato.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Como faço para acompanhar o meu processo?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content}>
          Designamos um advogado para receber todas as <strong>atualizações em tempo real</strong> e encaminhar
          para você em até 24 horas. Além disso, enviamos uma <strong>newsletter</strong> com todas as informações relevantes
          sobre o seu processo. Não há necessidade em se preocupar, a informação vai até você.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>E se eu tiver mais de uma empresa?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}> E se eu quiser aderir mas já possuo equipe jurídica ou consultor tributário?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}