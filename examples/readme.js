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

var joe = Person.create("Joe");
console.log(joe.toString());

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

var anita = Student.create("Anita");
anita.addCourse("Math");
anita.addCourse("Biology");
console.log(anita.toString());
