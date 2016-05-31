/**
 * Created by NikolayNK on 12.2.2016 г..
 */

function createParagraph(id, text) {
    var element = document.getElementById(id);
    var paragraph = document.createElement('p');
    paragraph.innerHTML = text;
    element.appendChild(paragraph);
}

createParagraph('wrapper', 'JS generated paragraph inside div!');