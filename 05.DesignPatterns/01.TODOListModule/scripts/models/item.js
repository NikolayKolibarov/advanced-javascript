/**
 * Created by NikolayNK on 19.2.2016 г..
 */

var models = models || {};

(function (scope) {
    function Item(content) {
        this.setContent(content);
        this._status = false;
    }

    Item.prototype.addToDom = function (id) {
        var selector = document.getElementById(id);
        var liItem = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");
        var content = document.createElement('p');
        content.innerHTML = this.content;
        var that = this;
        checkbox.addEventListener('click', function(ev) {
            content.style.backgroundColor = '#90EE90';
            that.changeStatus();
            if(checkbox.checked !== true) {
                content.style.backgroundColor = '#FFFFFF';
            }
        });
        liItem.appendChild(checkbox);
        liItem.appendChild(content);
        selector.appendChild(liItem);

    };

    Item.prototype.setContent = function (content) {
        if(content === '' || content === 'undefined') {
            throw new Error('Invalid content');
        }
        this.content = content;
    };

    Item.prototype.changeStatus = function () {
        this._status = !this._status;
    };

    scope.Item = Item;

})(models);