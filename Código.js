function doGet() {
    return HtmlService.createTemplateFromFile('carteraln').evaluate().setTitle('CARTERA');
}

function obtenerDatosHTML(nombre) {

    return HtmlService.createHtmlOutputFromFile(nombre).getContent();

}