// hello world class
var HelloWorld = PrototypeClass.extend({

    prototype :{

        // object/prototype property
        hello: "Hello"
    },

    // class method
    world: function(){
        console.log("World");
    }

});

var hw = HelloWorld.create(); // contructing and initializing
console.log(hw.hello); // show object property
HelloWorld.world(); // call class mehtod