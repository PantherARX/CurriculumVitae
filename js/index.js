function translate(lng, tagAttr){
    var translate = new Translate();
    translate.init(tagAttr, lng);
    translate.process();

}
$(document).ready(function(){
  //This is id of HTML element (English) with attribute lng-tag
    $("#enTr").click(function(){
    translate('en', 'lng-tag');
    });
  //This is id of HTML element (Spanish) with attribute lng-tag
    $("#esTr").click(function(){
    translate('es', 'lng-tag');
    });
});