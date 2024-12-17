import Button from '../../components/Button'
import Card from '../../components/Card'
import { InpurGroup, Row } from './styles'

const Checkout = () => (
  <div className="container">
    <Card title="Dados de Cobrança">
      <>
        <Row>
          <InpurGroup>
            <label htmlFor="fullName">Nome Completo</label>
            <input id="fullName" type="text" />
          </InpurGroup>
          <InpurGroup>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </InpurGroup>
          <InpurGroup>
            <label htmlFor="cpf">CPF</label>
            <input id="cpf" type="text" />
          </InpurGroup>
        </Row>
        <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
        <Row>
          <InpurGroup>
            <label htmlFor="deliveryEmail">Email</label>
            <input type="email" id="deliveryEmail" />
          </InpurGroup>
          <InpurGroup>
            <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
            <input type="email" id="confirmDeliveryEmail" />
          </InpurGroup>
        </Row>
      </>
    </Card>
    <Card title="Pagamento">
      <div>
        <p>
          Ao optar por essa forma de pagamento, é importante lembrar que a
          confirmação pode levar até 3 dias úteis, devido aos prazos
          estabelecidos pelas instituições financeiras. Portanto, a liberação do
          código de ativação do jogo adquiridp ocorrerá somente após a aprovação
          do pagamento do boleto.
        </p>
      </div>
    </Card>
    <Button type="button" title="Clique aqui para finalizar a compra">
      Finalizar Compra
    </Button>
  </div>
)

export default Checkout
