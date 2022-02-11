import Cliente from '../core/Cliente';
import { IconeEdicao, IconeLixo } from './iconex';

interface TabelaProps{
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Taabela(props: TabelaProps){

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho(){
        return(
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}
                
            </tr>

        )
        
    }

    function renderizarAcoes(cliente: Cliente,){
        return(
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                <button onClick ={() => props.clienteSelecionado?.(cliente)} className={`
                    flex justify-center items-center
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-pink-50
                    
                `}>
                    {IconeEdicao}
                </button>

                ) : false}
                {props.clienteExcluido ? (

                <button onClick ={() => props.clienteExcluido?.(cliente)} className={`
                    flex justify-center items-center
                    text-red-600 rounded-full p-2 m-1
                    hover:bg-pink-50
                `}>
                    {IconeLixo}
                </button>
                ) : false}
            </td>
        )
    }

    function renderizarDados(){
        return props.clientes?.map((cliente, i) => {
            return(
                <tr key={cliente.id}
                    className={`${i % 2 === 0 ? 'bg-pink-300' : 'bg-pink-100'}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    { exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    return(
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-200
                bg-gradient-to-r from-pink-500 to-pink-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}