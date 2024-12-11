import { Imagem, Precos, Titulo } from './styles'

import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'
import { useEffect, useState } from 'react'
import { Game } from '../../pages/Home'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  return (
    <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game?.name} </Titulo>
          <Precos>
            De <span>{game?.prices.old}</span> <br />
            por apenas {game?.prices.current}
          </Precos>
        </div>
        <Button
          type="link"
          to="/produto"
          title="Clique e aproveite esta oferta."
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
