/**
 * Created by NikolayNK on 19.2.2016 г..
 */

var models = models || {};

(function (scope) {
    var id  = 0;
    function Section(title) {
        this.setTitle(title);
        this._items = [];
        this._id = ++id;
    }

    Section.prototype.addToDom = function (id) {
        var selector = document.getElementById(id);
        var section = document.createElement('section');
        var itemUl = document.createElement('ul');
        itemUl.setAttribute("id", "items" + this._id);
        var sectionTitle = document.createElement('h3');
        sectionTitle.innerHTML = this.title;
        itemUl.appendChild(sectionTitle);
        section.appendChild(itemUl);
        var input = document.createElement('input');
        var addItemButt = document.createElement('button');
        addItemButt.innerHTML = '+';
        var that = this;
        addItemButt.addEventListener('click', function (ev) {
            if(input.value !== '' && input.value !== 'Enter content') {
                var item = new scope.Item(input.value);
                that.AddItem(item);
                item.addToDom(itemUl.id);
            } else {
                input.value = 'Enter content';
            }
        });

        var addItemDiv = document.createElement('div');
        addItemDiv.appendChild(input);
        addItemDiv.appendChild(addItemButt);
        addItemDiv.setAttribute("class", "addItemDiv");
        selector.appendChild(section);
        selector.appendChild(addItemDiv);
    };

    Section.prototype.setTitle = function (title) {
        if(title.length >= 30 || title === 'undefined' || title === '') {
            throw new Error('Invalid title.');
        }
        this.title = title;
    };

    Section.prototype.AddItem = function (item) {
        this._items.push(item);
    };

    Section.prototype.getItems = function () {
        return this._items;
    };

    scope.Section = Section;

})(models);