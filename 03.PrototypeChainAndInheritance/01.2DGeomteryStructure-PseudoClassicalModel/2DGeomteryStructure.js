/**
 * Created by NikolayNK on 12.2.2016 г..
 */

if (!Object.create) {
    Object.create = function (proto) {
        function F() {
        }

        F.prototype = proto;
        return new F();
    };
}

if (!Object.prototype.extends) {
    Object.prototype.extends = function (parent) {
        this.prototype = Object.create(parent.prototype);
        this.prototype.constructor = this;
    }
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

var shapeModule = (function () {

    var Shape = (function () {
        function Shape(color) {
            this._color = color;
        }

        Shape.prototype.toString = function () {
            return 'Color: ' + this._color;
        };

        return Shape;
    })();

    var Circle = (function () {
        function Circle(centerX, centerY, radius, color) {
            this._centerX = centerX;
            this._centerY = centerY;
            setRadius(this, radius);
            Shape.call(this, color);
        }

        function setRadius(circle, radiusVal) {
            if(!isNumber(radiusVal) || radiusVal <= 0) {
                throw new Error('Radius must be a positive number.');
            }

            circle._radius = radiusVal;
        }

        Circle.extends(Shape);
        Circle.prototype.toString = function () {
            var result = '';
            result += 'Center: O(' + this._centerX + ', '
                + this._centerY + ')\n';
            result += 'Radius: ' + this._radius + '\n';
            result += Shape.prototype.toString.call(this) + '\n';

            return result;
        };

        return Circle;
    })();

    var Rectangle = (function () {
        function Rectangle(topLeftCornerX, topLeftCornerY, width, height, color) {
            this._topLeftCornerX = topLeftCornerX;
            this._topLeftCornerY = topLeftCornerY;
            setWidth(this, width);
            setHeight(this, height)
            Shape.call(this, color);
        }


        function setWidth(shape, width) {
            if(!isNumber(width) || width <= 0 ) {
                throw new Error('Width must be a postive number.');
            }

            shape._width = width;
        }

        function setHeight(shape, height) {
            if(!isNumber(height) || height <= 0 ) {
                throw new Error('Width must be a postive number.');
            }

            shape._width = height;
        }

        Rectangle.extends(Shape);

        Rectangle.prototype.toString = function () {
            var result = '';
            result += 'Top-left corner(' + this._topLeftCornerX + ', ' + this._topLeftCornerY + ')\n';
            result += 'Width: ' + this._width + '\n';
            result += 'Height: ' + this._height + '\n';
            result += Shape.prototype.toString.call(this) + '\n';

            return result;
        };

        return Rectangle;
    })();

    var Triangle = (function () {
        function Triangle(aX, aY, bX, bY, cX, cY, color) {
            this._aX = aX;
            this._aY = aY;
            this._bX = bX;
            this._bY = bY;
            this._cX = cX;
            this._cY = cY;
            Shape.call(this, color);
        }

        Triangle.extends(Shape);

        Triangle.prototype.toString = function () {
            var result = '';
            result += 'A(' + this._aX + ', ' + this._aY + ')\n';
            result += 'B(' + this._bX + ', ' + this._bY + ')\n';
            result += 'C(' + this._cX + ', ' + this._cY + ')\n';
            result += Shape.prototype.toString.call(this) + '\n';

            return result;
        };

        return Triangle;
    })();

    var Line = (function () {
        function Line(aX, aY, bX, bY, color) {
            this._aX = aX;
            this._aY = aY;
            this._bX = bX;
            this._bY = bY;
            Shape.call(this, color);
        }

        Line.extends(Shape);

        Line.prototype.toString = function () {
            var result = '';
            result += 'A(' + this._aX + ', ' + this._aY + ')\n';
            result += 'B(' + this._bX + ', ' + this._bY + ')\n';
            result += Shape.prototype.toString.call(this) + '\n';

            return result;
        };
        return Line;
    })();

    var Segment = (function () {
        function Segment(aX, aY, bX, bY, color) {
            this._aX = aX;
            this._aY = aY;
            this._bX = bX;
            this._bY = bY;
            Shape.call(this, color);
        }

        Segment.extends(Shape);

        Segment.prototype.toString = function() {
            var result = '';
            result += 'A(' + this._aX + ', ' + this._aY + ')\n';
            result += 'B(' + this._bX + ', ' + this._bY + ')\n';
            result += Shape.prototype.toString.call(this) + '\n';

            return result;
        };

        return Segment;
    })();

    return {
        Shape: Shape,
        Circle: Circle,
        Rectangle: Rectangle,
        Triangle: Triangle,
        Line: Line,
        Segment: Segment
    };
})();

var circle = new shapeModule.Circle(5, 5, 20, '#FF000');
console.log(circle.toString());

var rectangle = new shapeModule.Rectangle(10, 10, 15, 20, '#FF000');
console.log(rectangle.toString());

var triangle = new shapeModule.Triangle(5, 10, 10, 15, 20, 25, '#FF000');
console.log(triangle.toString());

var line = new shapeModule.Line(2, 5, 3, 6, '#FF000');
console.log(line.toString());

var segment = new shapeModule.Segment(15, 22, 34, 5, '#FF000');
console.log(segment.toString());

console.log(circle.constructor.name);