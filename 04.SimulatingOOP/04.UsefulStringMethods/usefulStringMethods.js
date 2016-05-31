/**
 * Created by NikolayNK on 16.2.2016 г..
 */

if(!String.prototype.reverse) {
    String.prototype.reverse = function() {
        return this.split("").reverse().join("");
    };
}

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(substring) {
        if(substring.length > this.length) {
            return false;
        }

        for (var i = 0; i < this.length; i++) {
            if(this[i] != substring[i]) {

                return false;
            }
        }

        return true;
    };
}

if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(substring) {
        if(substring.length > this.length) {
            return false;
        }

        for (var i = this.length; i > 0; i--) {
            if(this[i] != substring[i]) {

                return false;
            }

            return true;
        }
    };
}

if(!String.prototype.left) {
    String.prototype.left = function(count) {
        var output = '';
        if(count > this.length) {
            count = this.length;
        }

        for (var i = 0; i < count; i++) {
            output += this[i];
        }

        return output;
    };
}

if(!String.prototype.right) {
    String.prototype.right = function(count) {
        var output = '';
        if(count > this.length) {
            count = this.length;
        }

        for (var i = this.length - 1; i >= this.length - count; i--) {
            output += this[i];
        }

        return output.reverse();
    };
}

if(!String.prototype.padLeft) {
    String.prototype.padLeft = function(count, character){
        var output = '';

        if (character === undefined) {
            character = " ";
        }

        for (var i = 0; i < count; i++) {
            output += character;
        }

        output += this;

        return output;
    };
}

if(!String.prototype.padRight) {
    String.prototype.padRight = function(count, character) {
        var output = '' + this;
        if(character === undefined) {
            character = ' ';
        }

        for (var i = 0; i < count; i++) {
            output += character;
        }

        return output;
    };
}

if(!String.prototype.repeat) {
    String.prototype.repeat  = function(count) {
        var output = '';
        for (var i = 0; i < count; i++) {
            output += this;
        }

        return output;
    };
}

