function createCharacterDiv() {
    var div = createDiv("pokemon");
    appendToParent(div, [
    ]);
    return div;
}

function createDiv(className, id) {
    var div = $("<div>");
    div.addClass(className);
    div.attr("id", id);
    return div;
}

function createP(className, html) {
    var p = $("<p>");
    p.addClass(className);
    p.html(html);
    return p;
}

function createImg(className, src) {
    var img = $("<img>");
    img.attr("src", src);
    img.addClass(className);
    return img;
}

function createLabel(forName, html) {
    var lbl = $("<label>");
    lbl.html(html);
    lbl.attr("for", forName);
    return lbl;
}

function createInput(type, name, value) {
    var input = $("<input>");
    input.attr("type", type);
    input.attr("name", name);
    input.attr("value", value);
    return input;
}

function createRadioButton(id, labelText) {
    var radioDiv = createDiv("radio", id);
    getImage(id, radioDiv);
    var input = createInput("radio", "optradio", id);
    var label = createLabel("optradio", labelText);

    radioDiv.append(input)
            .append(label);

    return radioDiv;
}

function setElementId(element, id) {
    $(element).attr("id", id);
}

function setElementName(element, name) {
    $(element).attr("name", name);
}

function setElementValue(element, value) {
    $(element).attr("value", value);
}

function setElementClass(element, className) {
    $(element).attr("class", className);
}

function appendToParent(parent, elements)
{
   for(var i = 0; i < elements.length; i++) {
       $(parent).append(elements[i]);
   }
}

function addTrueFalse() {
    $("#answerArea").append(createRadioButton("true", "True"));
    $("#answerArea").append(createRadioButton("false", "False"));
}

function allowSubmit() {
    $("input[type='radio']").change(function(){
        enableSubmit();
    });
}

function disableSubmit() {
    $("input[type='submit']").prop("disabled", true);
}

function enableSubmit() {
    if(gameStarted)
        $("input[type='submit']").prop("disabled", false);
}

function formatImgSrc(id){
    return "assets/img/pokemon/" + id + ".png";
}

function DisplayValues() {

}
    
