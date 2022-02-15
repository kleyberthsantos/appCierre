//constantes a usar:
    //const btnProcesar = $('#btnProcesar');
    //const btnGuardar = $('#btnGuardar');
    //const glosasSa = $('#glosasSa');
    //const retirosFallidos = $('#retirosFallidos');
    //const saldoAdmin = $('#saldoAdmin');
    //const saldoBanco = $('#saldoBanco');


//Array que se llenara con procesarCierre:
//let listArs = [];


    /* $('#btnProcesar').on('click', ()=>{

    
    const pGlosasSa = $('#glosasSa').value,
        pGlosasSe = $('#glosasSe').value,
        pRetirosFallidos = $('#retirosFallidos').value,
        pSaldoAdmin = $('#saldoAdmin').value,
        pSaldoBanco = d$('#saldoBanco').value,
        pSumaTotal = parseFloat(pGlosasSa) + parseFloat(pGlosasSe) + parseFloat(pRetirosFallidos) + parseFloat(pSaldoAdmin),
        pDiferenciaBruta = (pSaldoBanco - pSumaTotal).toFixed(2);

          console.log("El resumen del cierre ARS es:" 
          +"\nAbonos sin asociar: $ " + pGlosasSa
          + "\nAbonos retenidos: $ " + pGlosasSe
          + "\nComisiones pendientes: $ " + pRetirosFallidos
          + "\nSaldo en Admin: $ " + pSaldoAdmin
          + "\nSaldo en Banco: $ " + pSaldoBanco
          + "\nTotal diferencia bruta: $ " + pDiferenciaBruta);
        })

        console.log(processClosure);


    function getDateNewClose(){
    var storageClose = localStorage.getItem('savedLocal');
    if(storageClose == null){
        listArs = [];
    }else{
        listArs = JSON.parse(storageClose);
    }
    return listArs;
    } */


/* 
let listArs = [];

const cierre =  $('.cierre');
const datos = $('.datos');


$(()=>{
//función Procesar Cierre
function processClosure(){
    const pGlosasSa = document.querySelector('#glosasSa').value,
        pGlosasSe = document.querySelector('#glosasSe').value,
        pRetirosFallidos = document.querySelector('#retirosFallidos').value,
        pSaldoAdmin = document.querySelector('#saldoAdmin').value,
        pSaldoBanco = document.querySelector('#saldoBanco').value,
        pSumaTotal = parseFloat(pGlosasSa) + parseFloat(pGlosasSe) + parseFloat(pRetirosFallidos) + parseFloat(pSaldoAdmin),
        pDiferenciaBruta = (pSaldoBanco - pSumaTotal).toFixed(2);

          console.log("El resumen del cierre ARS es:" 
          +"\nAbonos sin asociar: $ " + pGlosasSa
          + "\nAbonos retenidos: $ " + pGlosasSe
          + "\nComisiones pendientes: $ " + pRetirosFallidos
          + "\nSaldo en Admin: $ " + pSaldoAdmin
          + "\nSaldo en Banco: $ " + pSaldoBanco
          + "\nTotal diferencia bruta: $ " + pDiferenciaBruta);

  }
  console.log(processClosure);


function getDateNewClose(){
    var storageClose = localStorage.getItem('savedLocal');
    if(storageClose == null){
        listArs = [];
    }else{
        listArs = JSON.parse(storageClose);
    }
    return listArs;
}



//boton Procesar
$('#btnProcesar').on('click', ()=>{
    const starClosure = processClosure();
    cierre.classList.add('.oculta');
    cierre.classList.remove('.visible');
    datos.classList.add('.oculta');
    datos.classList.remove('.visible');
    newHTMLCloseDetails(starClosure);
})


function newHTMLCloseDetails(getDateNewClose, calculos){
    let lista = datos.querySelector('ul');
    let items = [];
    for (const dato in getDateNewClose) {
        let li = ` <li>${dato}: ${pf[dato]}</li>`;
        items.push(li);

    }
    for (const dato in calculos) {
        let li = ` <li>${dato}: ${calculos[dato]}</li>`;
        items.push(li);

    }
    for (const item of items) {
        lista.insertAdjacentHTML('beforeend', item);
    }
}
}) */
