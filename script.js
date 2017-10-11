$(document).ready(function() {

 
  let holder = [];

  var Shape = function(height, width) {
    this.height = height;
    this.width = width;
    this.index = counter; 
    
  }

  Shape.prototype.describe = function() {
    $(`.op-name`).append(this.name);
    $(`.op-width`).append(this.dispWidth);
    $(`.op-height`).append(this.dispHeight);
    $(`.op-radius`).append(this.dispRadius);
    $(`.op-area`).append(this.area);
    $(`.op-perimeter`).append(this.perimeter);
  }

  Shape.prototype.draw = function() {
    x = Math.floor(Math.random() * (600-this.x));
    y = Math.floor(Math.random() * (600-this.y));
    $(".display-area").append(`<div id=${this.index} class='shape ${this.name}' style='top:${y}px;left:${x}px;height:${this.height}px;width:${this.width}px;border-bottom-width:${this.borderHeight}px;border-right-width:${this.borderHeight}px;z-index:${this.index};'></div>`);
    $(`#${this.index}`).click(function() {
      $(`.op-name`).empty();
      $(`.op-width`).empty();
      $(`.op-height`).empty();
      $(`.op-radius`).empty();
      $(`.op-area`).empty();
      $(`.op-perimeter`).empty();
      
      holder[this.id].describe();
    });
    $(`#${this.index}`).dblclick(function() {
      this.remove();
    })  
    counter++
  }

  var Rectangle = function(height, width) {
    Shape.call(this, height, width);
    this.name = 'rectangle';
    this.dispHeight = height;
    this.dispWidth = width;
    this.x = width;
    this.y = height;
    this.area = height * width;
    this.perimeter = 2*height + 2*width;
  }

  Rectangle.prototype = Object.create(Shape.prototype);
  Rectangle.prototype.constructor = Rectangle;

  var Square = function(height) {
    Rectangle.call(this, height);
    this.width = height;
    this.dispHeight = height;
    this.dispWidth = height;
    this.x = width;
    this.y = height;
    this.name = 'square';
    this.area = height * height;
    this.perimeter = 4*height;
  }

  Square.prototype = Object.create(Rectangle.prototype);
  Square.prototype.constructor = Square;

  var Circle = function(radius) {
    Shape.call(this, radius);
    this.radius = radius;
    this.dispRadius = radius;
    this.height = 2*radius;
    this.width = 2*radius;
    this.x = 2*radius;
    this.y = 2*radius;
    this.name = 'circle';
    this.area = Math.round(radius*radius*Math.PI*100)/100;
    this.perimeter = Math.round(2*Math.PI*radius*100)/100;
  }

  Circle.prototype = Object.create(Shape.prototype);
  Circle.prototype.constructor = Circle;

  var Triangle = function(base) {
    Shape.call(this, base);
    this.name = 'isoceles right triangle';
    this.dispHeight = base;
    this.dispWidth = base;
    this.width = 0;
    this.height = 0;
    this.x = base;
    this.y = base;
    this.borderHeight = base;
    this.area = base*base/2;
    var perimeter = 2*base + Math.sqrt(Math.pow(base, 2)*2);
    this.perimeter = Math.round(perimeter*100)/100;
  }

  Triangle.prototype = Object.create(Shape.prototype);
  Triangle.prototype.constructor = Triangle;

  let counter = 0

  
  $(`#rectangle-form`).on('submit', function(e) {
    e.preventDefault();
    var height = $(`#rectangle-height`).val();
        width = $(`#rectangle-width`).val();
        newRec = new Rectangle(height, width);
        
    newRec.draw();
    holder.push(newRec);
  })
  
  $(`#square-form`).on('submit', function(e) {
    e.preventDefault();
    var height = $(`#square-height`).val();
        newSq = new Square(height);
        
    newSq.draw();
    holder.push(newSq);
  })

  $(`#circle-form`).on('submit', function(e) {
    e.preventDefault();
    var radius = $(`#circle-height`).val();
        newCir = new Circle(radius);
        
    newCir.draw();
    holder.push(newCir);
  })

  $(`#triangle-form`).on('submit', function(e) {
    e.preventDefault();
    var height = $(`#triangle-height`).val();
        newTri = new Triangle(height);
        
    newTri.draw();
    holder.push(newTri);
  })

})