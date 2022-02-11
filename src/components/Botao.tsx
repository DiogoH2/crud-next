interface BotaoProps{
   cor?: 'green' | 'blue' | 'gray' | 'pink' | 'purple'
   className?: string
   children: any
   onClick?: () => void
}

export default function Botao(props){
    const cor = props.cor ??   'gray'
    return(
        <button onClick={props.onClick}className={`
            bg-gradient-to-r from-${cor}-400 to-${cor}-600
            text-white rounded-xl px-4 py-2
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}