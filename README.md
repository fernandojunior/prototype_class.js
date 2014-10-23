# prototype_class.js

Prototype_class is a JavaScript library that provides oriented object programming features.
It is based on Object and Property Descriptors of ECMA5. The compressed file costs only 1.340 kb.

## Features

    - Inheritance
    - Super member (object/prototype and class) access
    - Polymorphism
    - Constructor/initializer
    - Class method (concept from python)

## Version

Switch the branch menu to get the current version.

## Use

Load the script prototype_class.js or prototype_class.min.js in your html file.

## Example

See an example bellow. There are others at "examples" folder.

```js

// the class
var Hello = PrototypeClass.extend({

    // instance members
    prototype :{

        msg: "hello world",

        show: function (custom){
            console.log(this.msg + " " + custom);
        }

    },

    // class method
    hi: function(){
        console.log("hi");
    }

});

var hello = Hello.create(); // create an instance
hello.show("Fulano"); // call instance method
Hello.hi(); // call class mehtod

```

## Keywords

oriented object programming, javascript, class, prototype, ecma5

## References

    - ECMA5
    - http://www.uxebu.com/blog/2011/02/23/object-based-inheritance-for-ecmascript-5/
    - https://gist.github.com/davidaurelio/838778
    - http://stackoverflow.com/questions/12118107/prototypal-inheritance-and-static-methods
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#Description
