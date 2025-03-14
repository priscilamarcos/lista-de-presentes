
$(document).ready(function () {

    try {
        populate();

        let dados = carregaJsonFile();

        /*Build a gift list*/
        var listaHTML = dados.map(item => `
            <div class="col-md-4 m-b-20" draggable="false">
                <div class="card-sub">
                    <img class="card-img-top img-fluid" src="${item.imgFile}" alt="Card image cap">
                    <div class="card-block">
                        <h4 class="card-title">${item.titulo}</h4>
                        <p class="card-text">${item.descricao}</p>
                        <div class="col text-center">
                            <p>R$${item.valor}</p>
                            <!-- Button trigger modal -->
                            <div class="d-grid gap-2">
                                
                                <button type="button" class="btn btn-secondary btn-lg btn-block" data-bs-toggle="modal"
                                    data-bs-target="#modal${item.id}" onclick="gerarQRCode('qrcode-${item.id}', '${item.qrCode}')">Presentear</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          `).join('');
        document.getElementById("listaProdutos").insertAdjacentHTML("afterend", listaHTML);

        /*Build a modal List*/
        listaHTML = dados.map(item => `
            <div class="modal fade" id="modal${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered ">
                    <div class="modal-content ">
                        <div class="modal-header">

                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center">
                            <h4>Copie ou escaneie o QR CODE</h4>
                            <p>Ao copiar o código, abra o seu aplicativo cadastrado no PIX e realize o seu pagamento de forma
                                rápida</p>
                            <div id="qrcode-${item.id}" class="d-flex justify-content-center"></div>
                        </div>
                        <div class="modal-footer">

                            <div class="d-grid gap-2 col-10 mx-auto">
                                <button class="btn btn-primary btn-lg" type="button" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" onclick="copiarParaClipboard('${item.qrCode}')">COPIAR
                                    CÓDIGO</button>
                                <button class="btn btn-light" data-bs-dismiss="modal" type="button">FECHAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered ">
                <div class="modal-content">
                <div class="modal-header text-center">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                    <h4>Código copiado</h4>
                    <p>
                    <p>Abra o aplicativo cadastrado no PIX e realize o seu pagamento.</p>
                </div>
                <div class="modal-footer">
                <div class="d-grid gap-2 col-10 mx-auto">
                    <button class="btn btn-primary btn-lg" data-bs-dismiss="modal" type="button">OK</button>
                </div>
                </div>
                </div>
            </div>
            </div>

          `).join('');
        document.getElementById("listaModal").insertAdjacentHTML("afterend", listaHTML);

    } catch (err) {
        console.error('Falha ao gerar QR Code: ', err);
    }

});

function gerarQRCode(qrcodeID, qrCodeTxt) {
    try {
        //clean div
        document.getElementById(qrcodeID).innerHTML = "";

        let qrcode = new QRCode(document.getElementById(qrcodeID), {
            text: qrCodeTxt, // Conteúdo do QR code
            width: 174, // Largura do QR code
            height: 174, // Altura do QR code
            colorDark: "#000", // Cor dos quadrados pretos
            colorLight: "#fff", // Cor dos quadrados brancos
            correctLevel: QRCode.CorrectLevel.H // Nível de correção de erros

        });

    } catch (err) {
        console.error('Falha ao gerar QR Code: ', err);
    }
}

async function copiarParaClipboard(qrCodeTxt) {
    try {
        await navigator.clipboard.writeText(qrCodeTxt);
        console.log('Texto copiado para a área de transferência!');
    } catch (err) {
        console.error('Falha ao copiar texto: ', err);
    }
}


async function populate() {


    fetch('dados-transf.json')
  .then(response => response.text())
  .then(text => {
    const array = JSON.parse(superHeroesText);
    console.log(array);
  })


  }


function carregaJsonFile() {

    let dados = [{
        id:"1",
        imgFile: "./assets/img/lista-idosa.jpeg",
        titulo: "Titulo 1",
        descricao: "Ao usar innerHTML, esteja ciente dos riscos de segurança se o conteúdo HTML.",
        valor: "10,01",
        qrCode: "http://wwwrrrgggbbb.com",
        ativo: "true"
    },
    {
        id:"2",
        imgFile: "./assets/img/lista-idoso.jpeg",
        titulo: "Titulo 2",
        descricao: "Ao usar innerHTML, esteja ciente dos riscos de segurança se o conteúdo HTML.",
        valor: "20,02",
        qrCode: "http://endlesshorse.com",
        ativo: "true"
    },
    {
        id:"3",
        imgFile: "./assets/img/lista-idosa.jpeg",
        titulo: "Titulo 3",
        descricao: "Ao usar innerHTML, esteja ciente dos riscos de segurança se o conteúdo HTML.",
        valor: "30,03",
        qrCode: "https://cat-bounce.com/",
        ativo: "true"
    },
    {
        id:"4",
        imgFile: "./assets/img/lista-idoso.jpeg",
        titulo: "Titulo 4",
        descricao: "Ao usar innerHTML, esteja ciente dos riscos de segurança se o conteúdo HTML.",
        valor: "40,04",
        qrCode: "https://pointerpointer.com/",
        ativo: "true"
    },
    {
        id:"5",
        imgFile: "./assets/img/lista-idosa.jpeg",
        titulo: "Titulo 5",
        descricao: "Ao usar innerHTML, esteja ciente dos riscos de segurança se o conteúdo HTML.",
        valor: "50,05",
        qrCode: "https://www.pixelthoughts.co/",
        ativo: "true"
    },
    {
        id:"6",
        imgFile: "./assets/img/lista-idoso.jpeg",
        titulo: "Titulo 6",
        descricao: "Ao usar innerHTML, esteja ciente dos riscos de segurança se o conteúdo HTML.",
        valor: "60,06",
        qrCode: "https://www.koalastothemax.com/",
        ativo: "true"
    }
    ];
    return dados;
}