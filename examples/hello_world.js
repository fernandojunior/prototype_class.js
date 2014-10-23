// An example how to use the lib.

/**
 * Hello World Class
**/
var HelloWorld = PrototypeClass.extend({

    /**
     * Dictionary to define instance properties and methods
    **/
    prototype :{

        /**
         * Instance constructor
        **/
        constructor: function (msg){
            console.log("Initializing..." + msg);
        },

        /**
         * An instance property named hello
        **/ 
        hello: "Hello"
    },

    /**
     * A class method named world
    **/
    world: function(){
        console.log("World");
    }

});

var hw = HelloWorld.create("msg"); // contructing and initializing an instance
console.log(hw.hello); // show instance property
HelloWorld.world(); // call class mehtod
