// Using  Inheritance and polymorphism concepts
var Father = PrototypeClass.extend({

    prototype: {

        // initializer
        initialize: function (msg){
            console.log("Init Father object. MSG: " + msg);
        },

        // property
        id: 100,

        // method
        hello: function() {
            console.log('Hello I am from object method of Father. My ID is ' + this.id); 
        },

    },

    // class method
    hello: function() {
        console.log('Hello I am from class method of Father.'); 
    },

});

// Extended Class
var Filho = Father.extend({

    prototype: {

        // property overwrite
        id: 333,

        // method overwrite
        hello: function() { 
            console.log('hello I am from object method of class Filho'); 

            // accessing super class member
            Father.invoke_class_member("hello"); // or
            Filho.super_class_member("hello");
            
            // accessing super prototype member
            Father.invoke_member(this, "hello"); // or
            Filho.super(this, "hello");
            this.super("hello"); // not stable function
            
        },
    },

    // class method overwrite
    hello: function(){
        console.log("class method filho");
    },

});

Father.hello();
var father = Father.create("Aka");
father.hello();

Filho.hello();
var filho = Filho.create("Junior");
filho.hello();    

console.log(Filho.isPrototypeOf(filho)); // true
console.log(filho.instanceof(Filho)); // true
console.log(Father.isPrototypeOf(filho)); // true
console.log(filho.instanceof(Father)); // true
console.log(father.instanceof(typeof(""))); // false