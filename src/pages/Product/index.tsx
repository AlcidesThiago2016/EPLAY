import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

import zelda from '../../assets/images/zelda.png'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Hogwarts Legacy é um RPG de ação ambientado no universo mágico de
          Harry Potter, desenvolvido pela Avalanche Software e publicado pela
          Warner Bros. Games. O jogo se passa no final do século XIX, antes dos
          eventos dos livros de J.K. Rowling, permitindo aos jogadores explorar
          Hogwarts como um estudante da escola de magia. Os jogadores criam seu
          próprio personagem, participam de aulas, aprendem feitiços, preparam
          poções e exploram um vasto mundo aberto que inclui áreas icônicas como
          a Floresta Proibida e Hogsmeade. O enredo envolve mistérios mágicos,
          criaturas fantásticas e uma conspiração que ameaça o mundo bruxo. Com
          um forte foco na personalização, no desenvolvimento de habilidades e
          na escolha de caminhos, Hogwarts Legacy oferece uma experiência
          imersiva para os fãs da franquia e novos jogadores, destacando-se por
          sua narrativa envolvente e atenção aos detalhes do universo mágico.
        </p>
      </Section>
      <Section title="Mais Detalhes" background="gray">
        <p>
          <b>Plataforma:</b> PlayStation 5 <br />
          <b>Desenvolvedor: </b> Avalanche Software <br />
          <b>Editora: </b> Portkey Games, subsidiária da Warner Bros.
          Interactive Entertainment <br />
          <b>Idiomas: </b> O jogo oferece suporte a diversos idiomas.
        </p>
      </Section>
      <Section title="Galeria" background="black">
        <ul>
          <li>
            <img src={zelda} alt="Imagem do Link" />
          </li>
        </ul>
      </Section>
    </>
  )
}

export default Product
