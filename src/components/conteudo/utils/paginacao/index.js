import React from 'react'
import ReactPaginate from 'react-paginate'
import './styles.css'

class Paginacao extends React.Component {
    constructor(props){
        super(props)

        /*Recupera a página atual do localStorage*/ 
        let paginaAtual = parseInt(localStorage.getItem("PaginaAberta"))

        this.state = {
            numeroPaginas: this.props.paginasDisponiveis,
            paginaAtual: paginaAtual
        }
    }

    mudarPagina = data => {
        /*Atualiza a página atual no localStorage*/
        let paginaSelecionada = data.selected + 1 /*Primeira página = 0*/
        localStorage.setItem("PaginaAberta", paginaSelecionada)

        /*Chama a função de atualização do componente pai*/
        this.props.funcaoParaAtualizarPagina()
    }

    render() {
        return (
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                pageCount={this.state.numeroPaginas}
                initialPage={this.state.paginaAtual - 1}
                activeClassName={'pagina-atual'}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={this.mudarPagina}
                containerClassName={'paginacao'}
            />
        )
    }
}

export default Paginacao

