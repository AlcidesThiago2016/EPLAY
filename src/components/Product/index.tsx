import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222X250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ratione
      tempora, commodi eos magnam excepturi in porro culpa libero similique?
      Possimus eveniet quae eum magnam ipsum aliquam, magni delectus nulla?
    </Descricao>
  </Card>
)

export default Product
