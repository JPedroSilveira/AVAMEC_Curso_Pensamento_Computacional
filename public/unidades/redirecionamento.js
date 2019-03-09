function salvarDadosLocalStorage(){
    /*Quebra a URL em um vetor.*/ 
    let urlCompletaArray = window.location.href.split("/")
    /*Por padrão a página é a última informação na URL.*/ 
    let pagina = urlCompletaArray[urlCompletaArray.length - 1]
    /*Por padrão o número da página é dado após o underline.*/
    let numeroPagina = pagina.split('.')[0].split('_')[1]
    /*Por padrão o nome da unidade é o diretório onde estão as páginas html.*/
    let unidade = urlCompletaArray[urlCompletaArray.length - 2]

    let primeiraVez = localStorage.getItem("PaginaAberta") === undefined

    localStorage.setItem("PaginaAberta", numeroPagina)
    localStorage.setItem("UnidadeAberta", unidade)
    localStorage.setItem("PrimeiraVez", primeiraVez)
}

salvarDadosLocalStorage()
window.location = "../../index.html"

