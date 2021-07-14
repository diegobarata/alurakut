import MainGrid from '../src/components/Maingrid'
import Box from '../src/components/Box'
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakurtCommuns'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';


  function ProfileSidebar(props) {
    return (
      <Box>
        <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
      </Box>
    )
  }
  export default function Home() {

    const githubUser = 'diegobarata';
    const pessoasFavoritas=[
      'diego3g',
      'filipedeschamps',
      'omariosouto',
      'juunegreiros',
      'maykbrito',
      'ygorcanalli'
      
    ]
  
    return (
      <>
      <AlurakutMenu/>
      <MainGrid>        <div className="profileArea" style={{gridArea:'profileArea'}}>
         <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{gridArea:'welcomeArea'}}>
          <Box>
            <h1>Bem vindo(a)</h1>

            <OrkutNostalgicIconSet/>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{gridArea:'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
            Pessoas da comunidades ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
        
      </MainGrid>
    </>
    )
  }
