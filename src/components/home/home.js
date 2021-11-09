// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando o component Experience
import Experience from '../experience/experience'
// Importando o avatar da empresa 1
import company_avatar from '../../images/company.png';

const Home = () => (
  <Row>
    <Col m={12} s={12}>
        <h5 className="subtitle">Sobre nós</h5>
        <Card>
          <div>
            <p><b>História</b></p>
            <p>Por muitos anos temos proporcionado ensino de qualidade para muitos alunos, auxiliando-os em suas formações profissionais e acadêmicas para que entrem no mercado de trabalho com o maior preparo possível através de professores com grande competência na área.</p>
            <br/>
            <p><b>Visão</b></p>
            <p>Ser uma instituição educacional reconhecida pela excelência nos serviços prestados, pelos seus elevados padrões éticos e pela qualidade pessoal e profissional de seus egressos.</p>
            </div>
        </Card>
        <h5 className="subtitle"></h5>
   
        {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
        <Experience title="Professores e nota do MEC"
                    company=""
                    description="Em nossa instituição temos os melhores professores, em sua maioria, com mestrado e doutorado, resultando em uma nota 5 no MEC, comprovando a eficiência de nosso sistema de ensino."
                    avatar={company_avatar}
        />
    </Col>
  </Row>
);

export default Home;