# prototype_class.js

JavaScript library that provides oriented object programming features.
It is based on Object and Property Descriptors of ECMA5. The compressed file costs only 1.328 kb.

## Features

    - Constructor
    - Class members
    - Inheritance
    - Super member access
    - Polymorphism

## Version

Switch the branch menu to get the current version.

## Use

Load the script prototype_class.js or prototype_class.min.js in your html file.

```html
<script src="prototype_class.js"></script>
```

## Examples

See a hello world example below.

```js

// the class
var Hello = Class.extend({

    // instance members
    prototype: {

        constructor: function (msg) {
            this.msg = msg;
        },

        say: function () {
            console.log(this.msg);
        }

    },

    // class method
    world: function () {
        console.log("hi");
    }

});

Hello.world(); // call class mehtod
var hello = Hello.create("Hello World"); // create an instance
hello.say(); // call instance method

```

See an inheritance example below.

```js

// Person class. Extends whole Class members
var Person = Class.extend({

    prototype: {

        constructor: function (name) {
            this.name = name;
        },

        toString: function () {
            return "name: " + this.name;
        }

    } 

});

// Student class. Extends only Person prototype member
var Student = Person.simple_extend({

    courses: [],

    constructor: function () {
        Student.super(this, "constructor", arguments); // super constructor
    },

    addCourse: function (course) {
        this.courses.push(course);
    },

    // super method overriding
    toString: function () {
        return "name: " + this.name + "; courses: " + this.courses;
    }

})

var joe = Person.create("Joe");

var anita = Student.create("Anita");
anita.addCourse("Math");
anita.addCourse("Biology");

// show instances
console.log(joe.toString());
console.log(anita.toString());

```

There are others at "examples" folder.

## Keywords

oriented object programming, javascript, class, prototype, ecma5

## License

Released under The MIT License.

## References

    - ECMA5
    - http://www.uxebu.com/blog/2011/02/23/object-based-inheritance-for-ecmascript-5/
    - https://gist.github.com/davidaurelio/838778
    - http://stackoverflow.com/questions/12118107/prototypal-inheritance-and-static-methods
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#Description
