/**
 * Created by NikolayNK on 19.2.2016 г..
 */

var models = models || {};

(function (scope) {
    function Container(title) {
        this.setTitle(title);
        this._sections = [];
    }

    Container.prototype.addToDom = function (id) {
        var selector = document.getElementById(id);
        var container = document.createElement('div');
        container.setAttribute("id", "container");
        var sectionContainer = document.createElement('div');
        sectionContainer.setAttribute("id", "sectionContainer");
        var containerTitle = document.createElement('h1');
        containerTitle.innerHTML = this.title;
        container.appendChild(containerTitle);
        container.appendChild(sectionContainer);
        var sectionInput = document.createElement('input');
        container.appendChild(sectionInput);
        var newSectionButt = document.createElement('button');
        newSectionButt.innerHTML = 'New Section';
        var that = this;
        newSectionButt.addEventListener('click', function(ev) {
            if(sectionInput.value !== '' && sectionInput.value !== 'Enter title') {
                var section = new scope.Section(sectionInput.value);
                that.addSection(section);
                section.addToDom(sectionContainer.id);
            } else {
                sectionInput.value = 'Enter title';
            }

        });
        container.appendChild(newSectionButt);
        selector.appendChild(container);

    };

    Container.prototype.setTitle = function (title) {
        if(title.length >= 30 || title === 'undefined' || title === '') {
            throw new Error('Invalid title.');
        }
        this.title = title;
    };

    Container.prototype.addSection = function (section) {
        this._sections.push(section);

    };

    Container.prototype.getSections = function() {
        return this._sections;
    };
    
    scope.Container = Container;

})(models);