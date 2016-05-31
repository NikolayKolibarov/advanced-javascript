/**
 * Created by NikolayNK on 12.2.2016 г..
 */

var htmlGenerator = (function(){
    function createParagraph(id, text) {
        var element = document.getElementById(id);
        var paragraph = document.createElement('p');
        paragraph.innerHTML = text;
        element.appendChild(paragraph);
    }

    function createDiv(id, divClass) {
        var element = document.getElementById(id);
        var div = document.createElement('div');
        div.className = divClass;
        element.appendChild(div);
    }

    function createLink(id, text, url) {
        var element = document.getElementById(id);
        var link = document.createElement('a');
        link.innerHTML = text;
        link.href = url;
        element.appendChild(link);
    }

    return {
        createParagraph: createParagraph,
        createDiv: createDiv,
        createLink: createLink
    };

})();

htmlGenerator.createParagraph('wrapper', 'Soft Uni');
htmlGenerator.createDiv('wrapper', 'section');
htmlGenerator.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');