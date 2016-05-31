/**
 * Created by NikolayNK on 15.2.2016 г..
 */

var shapeModule = (function () {
    var Shape = {
        init: function (color) {
            this._color = color;
            return this;
        },
        toString: function() {
            var output = this._color;
            return output;
        }
    };

    var Circle = Object.create(Shape);
    Circle.init = function(centerX, centerY, radius, color) {
        this._centerX = centerX;
        this._centerY = centerY;
        this._radius = radius;
        Shape.init.call(this, color);
    };

    Circle.toString = function () {
        var result = '';
        result += 'Center: O(' + this._centerX + ', ' + this._centerY + ')\n';
        result += 'Radius: ' + this._radius + '\n';
        result += Shape.toString.call(this) + '\n';

        return result;
    };

    var Rectangle = Object.create(Shape);
    Rectangle.init = function(topLeftCornerX, topLeftCornerY, width, height, color) {
        this._topLeftCornerX = topLeftCornerX;
        this._topLeftCornerY = topLeftCornerY;
        this._width = width;
        this._height = height;
        Shape.init.call(this, color);
    };

    Rectangle.toString = function() {
        var result = '';
        result += 'Top-left corner(' + this._topLeftCornerX + ', ' + this._topLeftCornerY + ')\n';
        result += 'Width: ' + this._width + '\n';
        result += 'Height: ' + this._height + '\n';
        result += Shape.toString.call(this) + '\n';

        return result;
    };

    var Triangle = Object.create(Shape);
    Triangle.init = function(aX, aY, bX, bY, cX, cY, color) {
        this._aX = aX;
        this._aY = aY;
        this._bX = bX;
        this._bY = bY;
        this._cX = cX;
        this._cY = cY;
        Shape.init.call(this, color);
    };

    Triangle.toString = function() {
        var result = '';
        result += 'A(' + this._aX + ', ' + this._aY + ')\n';
        result += 'B(' + this._bX + ', ' + this._bY + ')\n';
        result += 'C(' + this._cX + ', ' + this._cY + ')\n';
        result += Shape.toString.call(this) + '\n';

        return result;
    };

    var Line = Object.create(Shape);
    Line.init = function(aX, aY, bX, bY, color) {
        this._aX = aX;
        this._aY = aY;
        this._bX = bX;
        this._bY = bY;
        Shape.init.call(this, color);

    };

    Line.toString = function() {
        var result = '';
        result += 'A(' + this._aX + ', ' + this._aY + ')\n';
        result += 'B(' + this._bX + ', ' + this._bY + ')\n';
        result += Shape.toString.call(this) + '\n';

        return result;
    };

    var Segment = Object.create(Shape);
    Segment.init = function(aX, aY, bX, bY, color) {
        this._aX = aX;
        this._aY = aY;
        this._bX = bX;
        this._bY = bY;
        Shape.init.call(this, color);
    };

    Segment.toString = function() {
        var result = '';
        result += 'A(' + this._aX + ', ' + this._aY + ')\n';
        result += 'B(' + this._bX + ', ' + this._bY + ')\n';
        result += Shape.toString.call(this) + '\n';

        return result;
    };

    return {
        Circle: Circle,
        Rectangle: Rectangle,
        Triangle: Triangle,
        Line: Line,
        Segment: Segment
    };
})();

var circle = Object.create(shapeModule.Circle);
circle.init(5, 10, 15, '#FF000');
console.log(circle.toString());

var rectangle = Object.create(shapeModule.Rectangle);
rectangle.init(5, 5, 10, 20, '#FF000');
console.log(rectangle.toString());

var triangle = Object.create(shapeModule.Triangle);
triangle.init(10, 10, 15, 20, 40, 45, '#FF000');
console.log(triangle.toString());

var line = Object.create(shapeModule.Line);
line.init(5, 10, 30, 40, '#FF000');
console.log(line.toString());

var segment = Object.create(shapeModule.Segment);
segment.init(10, 20, 30, 40, '#FF000');
console.log(segment.toString());