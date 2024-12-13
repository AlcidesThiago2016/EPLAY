import ProductList from '../../components/ProductList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGameQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportsGames } = useGetSportsGameQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportsGames) {
    return (
      <>
        <ProductList games={actionGames} title="Ação" background="black" />
        <ProductList games={sportsGames} title="Esportes" background="gray" />
        <ProductList
          games={simulationGames}
          title="Simulação"
          background="black"
        />
        <ProductList games={fightGames} title="Luta" background="gray" />
        <ProductList games={rpgGames} title="RPG" background="black" />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
