// An example using inheritance and polymorphism concepts

/**
* Father Class
**/
var Father = Class.extend({

    prototype: {

        /**
         * Instance property
        **/
        id: 100,

        /**
         * Instance method
        **/
        hello: function() {
            console.log('Father instance method (hello). My ID is ' + this.id); 
        },

        /**
         * Another instance method
        **/
        father_instance_method: function() {
            console.log("Father instance method.");
        }

    },

    /**
     * Class method
    **/
    hello: function() {
        console.log('Father class method (hello).'); 
    },

    /**
     * Another class method
    **/
    father_class_method: function() {
        console.log("father class method");
    }

});

Father.hello(); // call class method
var father = Father.create("Aka"); // instantiating class
father.hello(); // call instance method

/**
 * Extended Class from Father
**/
var Filho = Father.extend({

    prototype: {

        /**
         * Instance property overwriting
        **/
        id: 333,

        /**
         * Instance method overwriting
        **/
        hello: function() { 

            console.log('Filho instance method overwrite (hello).'); 

            // examples how to acessing super members

            console.log("Filho instance method -> Father class method.")
            Father.father_class_method(); // or
            Father.invoke_class_member("father_class_method"); // or
            Filho.super_class_member("father_class_method");

            console.log("Filho instance method -> Father instance method.")
            Father.invoke_member(this, "hello"); // or
            Filho.super(this, "hello");

        },

        /**
         * Another instance method
        **/
        filho_instance_method: function () {
            console.log("Filho instance member");
        }

    },

    /**
     * Class method overwriting
    **/
    hello: function(){
        console.log("Filho class method (hello)");
    },

});

Filho.hello();
var filho = Filho.create("Junior");
filho.hello();
console.log("\n");

/**
 * Extended Class (only prototype) from Filho
**/
var Neto = Filho.simple_extend({
    id: 123,
    hello: function() {

        console.log('Neto instance method. My ID is ' + this.id); 

        console.log("Neto instance method -> Father class method.")
        Father.invoke_class_member("father_class_method"); // or
        Filho.super_class_member("father_class_method");

        console.log("Neto instance method -> Father instance method")
        Father.invoke_member(this, "father_instance_method"); // or
        Filho.super(this, "father_instance_method");

        console.log("Neto instance method -> Filho instance method")
        Filho.invoke_member(this, "filho_instance_method");
        Neto.super(this, "filho_instance_method");

    }
});

Neto.hello();
var neto = Neto.create("Neto");
neto.hello();
console.log("\n");

console.log("Asserts:");
console.log(Filho.isPrototypeOf(filho)); // true
console.log(filho.instanceof(Filho)); // true
console.log(Father.isPrototypeOf(filho)); // true
console.log(filho.instanceof(Father)); // true
// console.log(father.instanceof(typeof(""))); // TypeError: cls.prototype is undefined
