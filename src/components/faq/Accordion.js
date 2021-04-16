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
    textAlign: 'left',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightBold,
    color: '#1E2327 80%',
    fontFamily:'Montserrat'
  },
  content: {
    fontSize: theme.typography.pxToRem(18),
  },

}));

export default function SimpleAccordion() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography className={classes.heading}>Processos novos estarão inclusos no acompanhamento? Algum valor a mais?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content}>
          Ao contratar nossos serviços, nos comprometemos assessoria tributária de <strong>até 10 processos inclusos</strong>. Caso surjam novos processos,
          será cobrado um plus adicional por processo. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}> 
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Como faço para contratar o serviço e quais os métodos de pagamento?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content}>
          Preencha seus dados em nosso <a href='http://datajus.site/cadastro' style={{textDecoration: 'none'}}><strong>Cadastro</strong></a>, nossa equipe entrará em contato com você requerendo os documentos necessários para o prosseguimento de sua defesa bem como a melhor forma de pagamento. Os pagamentos são feitos através do <strong>Mercado Pago</strong>, portanto, aceitamos todas as formas de pagamento da plataforma.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Como faço para cancelar o serviço?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content}>
          Trabalhamos com contrato de prestação de serviços. Em caso de cancelamento, a única exigência é o pagamento de uma mensalidade adicional, uma vez que em caso de renúncia de mandato, nossos profissionais por lei, o representarão por mais 10 dias úteis, <strong>conforme Lei 13.105/2015</strong>.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
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
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>E se eu tiver mais de uma empresa?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content}>
          Lembrando que todas as empresas podem tentar um <a href='http://datajus.site/desconto' style={{textDecoration: 'none'}}><strong>Desconto de 30%</strong></a> até o dia 07/05. No caso de 2 empresas ou mais, será adicionado um desconto exponencial na mensalidade dos outros CNPJ's. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}> E se eu quiser aderir mas já possuo equipe jurídica ou consultor tributário?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content}>
          A <strong>Datajus</strong> não se opõem em trabalhar em parceria com outros profissionais, porém é necessário que o contratante verifique com seus antigos consultores as cláusulas contratuais vigentes a eles.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}> 
          Como faço para tirar uma dúvida sobre o processo ou serviço 
          sendo executado pela Datajus?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content}>
          A <strong>Datajus</strong> disponibiliza ferramentas e aplicativos para que seus clientes 
          consigam elucidar qualquer questionamento referente ao seus processos diretamente 
          com sua equipe jurídica. Em <strong>menos de 24 horas</strong> nossa equipe entrará em contato com a melhor 
          orientação atinente ao caso.
          </Typography>
        </AccordionDetails>
      </Accordion>

      
    </div>
  );
}