import './Information.css'

function Information({input, setInput, showRepository}){

    return(
        <form>
            <input type='text' value={input} placeholder="Digite o nome do repositório"
            onChange={(event) => setInput(event.target.value)}/>
            <button type='button' onClick={() => showRepository()}>Pesquisar
            </button>
        </form>
    )
}

export default Information