
// Hello big world class, using property descriptor style.
HelloBigWorld = PrototypeClass.dextend({

    prototype :{
        value: {

            // object/prototype initializer
            initialize: {
                value : function(){ console.log("Hello "); }
            },

            big: {
                value: "Big"
            }

        }
    },

    // class method
    world: {
        value: function(){
            console.log("World");
        },
        enumerable: false,
        configurable: true,
        writable: true
    }

});

hbw = HelloBigWorld.create();
console.log(hbw.big);
HelloBigWorld.world();