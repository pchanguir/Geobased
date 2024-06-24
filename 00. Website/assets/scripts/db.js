let content = document.querySelector('#results')
// content.style.backgroundColor = "green"

let websites = [] // Array que armazena todos os sites

function website(nome, link, descricao){
    this.nome = nome
    this.link = link
    this.descricao = descricao
    this.section
}// construtor para criar um objeto com as informacoes do site



let newsite = (nome, link, descricao) => {
    let site = new website(nome, link, descricao)
    websites.push(site)
}// cria um objeto com as informacoes de um site



let addNewSite = (nome, link, descricao) => {
    let sec = document.createElement('section')
    
    let title = document.createElement('h2')
    let nametxt = document.createTextNode(nome)
    title.appendChild(nametxt)

    let desc = document.createElement('p')
    let desctxt = document.createTextNode(descricao)
    desc.appendChild(desctxt)

    let adress = document.createElement('a')
    let atxt = document.createTextNode('Acesse aqui')
    adress.href = link
    adress.target = '_blank'
    adress.appendChild(atxt)

    sec.appendChild(title)
    sec.appendChild(desc)
    sec.appendChild(adress)
    content.appendChild(sec)

    return sec
}//insere os elementos HTML no site



newsite('Sci-hub','https://www.sci-hub.se','Com ele, você pode obter acesso a artigos científicos gratuitamente (serviço pirata)')
newsite('Sci-space','https://typeset.io','Inteligência artificial que acha e resume artigos com base na sua pesquisa. Também possui outros recursos adicionais')
newsite('Tectonique.net','https://www.tectonique.net/MeansCD/contribs/','Leituras com imagens e gifs explicativos sobre Geologia Estrutural')
newsite('NAGT Workshops','https://serc.carleton.edu/NAGTWorkshops/index.html','Materiais didáticos, itinerários e mais para o ensino das geociências')
newsite('Structure database','https://structuredatabase.wordpress.com','Banco de dados com diversas leituras sobre estruturas geológicas. Bom para o estudo da Geologia Estrutural')
newsite('Glossário de falhas geológicas','https://sci-hub.se/10.1016/j.jsg.2016.09.008','Glossário de falhas geológicas. As imagens encontram-se nas últimas páginas do PDF')
newsite('RRUFF','https://rruff.info','Banco de dados com diversos espectros Raman, difração de raio-x e composições químicas de amostras minerais')
newsite('Geologypics','https://geologypics.com','Fotos com altíssima qualidade de afloramentos, imagens de satélite e outras, retratando estruturas geológicas, geomorfológicas, ambientes deposicionais, rochas ígneas, metamórficas e sedimentares e até mesmo fósseis')
newsite('Marli Miller Photo','https://marlimillerphoto.com/images.html','É a versão mais antiga do Geologypics. Abriga diversas fotos interessantes, porém é recomendado acessar o outro site, mais moderno e atualizado')
newsite('Map of the Universe','https://mapoftheuniverse.net','Como o nome diz, esse site abriga "fotos" do universo observável em formato de pôsteres, bom para enfeitar sua casa')
newsite('Geosociety Programs', 'https://community.geosociety.org/sgt/resources/programs', 'Programas gratuitos para trabalhos de Geologia Estrutural. Recomendo baixar o Georient, programa de plotagem em estereograma')
newsite('Raman Deconvolution', 'https://github.com/MacDumi/RAMAN-Deconvolution', 'Software para deconvolução de espectros Raman no github. É necessária a instalação de python no computador')
newsite('Estágios Petrobrás', 'https://petrobras.com.br/quem-somos/estagios#oportunidades-abertas', 'Programa de vagas de estágio na Petrobrás, que abre periodicamente')
newsite('Estágios Vale', 'https://vale.com/pt/estagio', 'Programa de vagas de estágio na Vale, que abre periodicamente')
newsite('Estágios AngloAmerican', 'https://brasil.angloamerican.com/pt-pt/imprensa/noticias/2024/21-03-2024', 'Programa de vagas de estágio na Anglo American, que abre periodicamente')
newsite('Estágios CSN', 'https://www.csn.com.br/nossas-pessoas/trabalhe-conosco/', 'Programa de vagas de estágio na CSN, que abre periodicamente')
newsite('Dinosaur Pictures', 'https://dinosaurpictures.org/ancient-earth#240', 'Como se parecia a Terra no passado? Modelo com simulações da Terra há milhões de anos atrás. Apesar do nome, você não vai encontrar dinossauros aqui')
newsite('Libretexts', 'https://geo.libretexts.org/', 'Uma colaborativa multi-institucional para o desenvolvimento da próxima geração de textos open-access em um nível de educação superior para as geociências')
newsite('USP Geociências', 'https://didatico.igc.usp.br/', 'Site de geociências da USP. Possuem uma seção muito explicativa de rochas e minerais')
newsite('WebMineral', 'https://www.webmineral.com/', 'Banco de dados de mineralogia. Possui um design pouco desenvolvido, mas é muito útil')
newsite('Mindat.org', 'https://www.mindat.org/', 'Banco de dados de mineralogia, com um design amigável')
newsite('GemPy', 'https://www.gempy.org/', 'Modelamento geológico 3D open-source com Python. Design específico para modelos probabilísticos')
newsite('Minerant', 'https://www.minerant.org/software.html', 'Programa para catalogação de minerais. Já pensou em catalogar sua coleção em casa? Você pode fazer isso com o Minerant')
newsite('AMCSD', 'https://rruff.geo.arizona.edu/AMS/amcsd.php', 'Banco de dados de estruturas cristalinas dos minerais coletadas em todo o mundo')
newsite('Geologia em Foco', 'https://geologia-em-foco.blogspot.com/2011/03/dicas-para-elaboracao-de-caderneta-de.html', 'Blog sobre geologia. O link leva para um artigo sobre a elaboração de cadernetas para trabalho de campo')
newsite('SBGeo', 'http://www.sbgeo.org.br', 'Site da Sociedade Brasileira de Geologia')
newsite('FaultAnalysis Group', 'https://www.fault-analysis-group.ucd.ie', 'Grupo que reúne pesquisas relacionadas a eventos deformacionais')
newsite('Nikon Small World', 'https://www.nikonsmallworld.com', 'Fórum de imagens microscópicas. Há uma concentração maior de biologia, porém é possível encontrar fotos geológicas')
newsite('Alextrekeisen.it', 'https://www.alexstrekeisen.it/english/index.php', 'Blog de petrografia dedicado ao ensino. Original em italiano, porém o link está em inglês')
newsite('Journal of the Virtual Explorer', 'https://tectonique.net/MeansCD/', 'Ensino de geologia estrutural. Site antigo, design nada amigável')
newsite('Tekphys', 'https://www.tekphys.geo.uni-mainz.de', 'Grupo de "tectonophysics" da Universidade Johannes Gutenberg. A galeria está em Adobe Flash, inacessível para navegadores atuais a partir de 2022')
newsite('TBGeoCon', 'https://tbgeocon.com', 'Consultoria geológica com experiência em expedições polares')
newsite('50webs', 'http://structuralgeology.50webs.com', 'Banco de dados de estruturas deformacionais. Pesquisa por alfabeto. Em geral fotos com qualidade ruim')
newsite('Haakon Fossen', 'https://folk.uib.no/nglhe/', 'Site do Haakon Fossen. Preciso explicar? Obs.: A galeria de imagens está em Adobe Flash, ou seja, inacessível para a maioria. Porém eu incluí um outro link que leva para o álbum de fotos dele')
newsite('Haakon Fossen - Álbum', 'https://folk.uib.no/nglhe/PhotoAlbum/', 'Álbum de fotos de campo do próprio Haakon Fossen')
newsite('Accretionary WedgeRocks', 'https://accretionarywedgerocks.weebly.com', '"Tours" de rochas de cunha de acréscimo no Canadá e na África do Sul')
newsite('Lineation PDF', 'https://files.ethz.ch/structuralgeology/JPB/files/English/10lineation.pdf', 'PDF com aula sobre lineação')
newsite('OpenEducation Alberta', 'https://openeducationalberta.ca', 'Publicação de recursos educacionais gratuitos e acessíveis')
newsite('Geological Structures PDF', 'https://openeducationalberta.ca/introductorystructuralgeology/', 'Download do livro "Geological Structures: A Practical Introduction", que reúne centenas de imagens de estruturas deformacionais')
newsite('StructuralGeo', 'https://structuralgeo.wordpress.com', 'Blog de geologia estrutural com fotos, localidades, e outros')
newsite('UVM Tectonics', 'https://www.uvm.edu/~kklepeis/Homepage/Keith_Klepeis_Homepage.html', 'Projeto de pesquisa de geologia estrutural da UVM')
newsite('Tokyo Earthquakes', 'https://www.eri.u-tokyo.ac.jp/en/', 'Instituto de pesquisa de terremotos, da Universidade de Tokyo')
newsite('See.Leeds', 'https://www.see.leeds.ac.uk/structure/', 'Coleção de materiais de geologia estrutural com fotos e esquemas')
newsite('UNESP Petrologia', 'http://www1.rc.unesp.br/igce/petrologia/nardy/bdindice.html', 'Auxílio para o reconhecimento de minerais com o microscópio: Propriedades da mineralogia ótica')
newsite('Strabospot', 'https://strabospot.org', 'Programa/aplicativo para "coleta de dados geológicos em uma configuração de campo"')
// Chamando as funcoes que de fato dão nome, link e descricao aos websites

websites.sort(function(a, b) {
    var textA = a.nome.toUpperCase();
    var textB = b.nome.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});// Ordena a array websites em ordem alfabética


websites.forEach(element => {
    let sec = addNewSite(element.nome, element.link, element.descricao)
    element.section = sec
});// Para cada website da array, chama o addNewSite e atribui a section adicionada no html ao website


// websites[2].section.remove()


function searchWebsite() {
    // Declare variables
    var input, filter, container, section, title, i, txtValue;
    input = document.getElementById('search-input');
    filter = input.value.toUpperCase();
    container = content
    section = container.querySelectorAll('section');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < section.length; i++) {
      title = section[i].querySelector("h2");
      desc = section[i].querySelector("p")
      txtValue = title.textContent || title.innerText;
      descTxtValue = desc.textContent || desc.innerText
      if (txtValue.toUpperCase().indexOf(filter) > -1 || descTxtValue.toUpperCase().indexOf(filter) > -1) {
        section[i].style.display = "block";
      } else {
        section[i].style.display = "none";
      }
    }// loop que verifica se a minha pesquisa possui letras iguais ao título de alguma seção e exibe essa(s) seção(ões)
  }