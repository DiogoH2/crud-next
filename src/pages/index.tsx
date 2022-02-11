import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import useClientes from "../hooks/useCliente"


export default function Home() {


const { 
  cliente, 
  clientes, 
  clienteSelecionado, 
  clienteExcluido, 
  salvarCliente, 
  novoCliente,
  tabelaVisivel,
  exibirTabela} = useClientes()

  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300
    text-white
    `}>
      <Layout titulo="Cadstro Simples">
        {tabelaVisivel ? (

        <>
      <div className="flex justify-end">
        <Botao cor="pink" className="mb-4"
          onClick={novoCliente}
        >Novo Cliente</Botao>
      </div>
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
        </>
        ) : (

        <Formulario cliente={cliente} clienteMudou={salvarCliente} cancelado={exibirTabela}></Formulario>
        )}
      </Layout>
    </div>
  )
}
