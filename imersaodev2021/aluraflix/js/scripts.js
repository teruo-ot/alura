var listaFilmes = [
    "https://wp.ufpel.edu.br/empauta/files/2018/01/OReidoShowcartaz.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/poster_002_ffcbf145.png",
    "https://www.ucicinemas.com.br/Content/Upload/Filmes/Posters/9372/filme_9372.jpg",
    "https://br.web.img2.acsta.net/c_310_420/pictures/21/07/07/14/52/0171190.jpg",
    "https://br.web.img3.acsta.net/c_310_420/pictures/14/10/31/20/39/476171.jpg"
]

for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + " />")
}