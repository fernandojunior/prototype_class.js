/**
 * prototype_class.js is a JavaScript library that provides oriented object
 * programming features. It is based on Object and Property Descriptors of ECMA5.
 * @author Fernando Felix do Nacimento Junior
**/
var PrototypeClass = {

    /**
    * Dictionary to define instance members (properties or methods)
    **/
    prototype : {

        /**
         * Initializes an instance
        **/
        initialize: function () {
        },

        /**
         * Verifies if current instance is a type of class
         * @param cls The class that instance will be verified
        **/
        instanceof: function (cls) {
            return cls.prototype.isPrototypeOf(this);
        },

        /**
         * Invokes an instance member from father class context
         * @param arguments(0) The member name
         * @param arguments(1...) The member arguments
         * @deprecated not stable
        **/
        super: function () {
            var arguments = [].splice.call(arguments, 0);
            var memberName = arguments[0];
            var args = [];
            if (arguments.length > 1) {
                args = arguments.slice(1, arguments.length);
            }
            return this.class.super(this, memberName, args);
        }

    },

    /**
     * Constructs and initializes an instance of this class
     * @param arguments The arguments needed to initialize the instance
    **/
    create: function () {
        var instance = Object.create(this.prototype);
        instance.class = this;
        instance.initialize.apply(instance, arguments);
        return instance;
    },

    /**
     * Extends this class with members dictionary in descriptive style way
     * @param properties The members of the extended class
    **/
    dextend: function (properties) {

        if (typeof properties.prototype !== "undefined"
                && typeof properties.prototype.value !== "undefined") {
            properties.prototype.value = Object.create(this.prototype, properties.prototype.value);
        }

        return Object.create(this, properties);

    },

    /**
     * Extends this class with members dictionary
     * @param properties The members of the extended class
    **/
    extend: function () {
        var properties = arguments[0];
        return this.dextend(this.descriptoralize(properties));
    },

    /**
     * Extends only instance members (prototype) of the class
     * @param properties The instance members of the extended class
    **/
    extend_prototype: function (properties) {
        return this.extend({
            prototype: properties
        });
    },

    /**
     * Invokes a instance member (property or method)
     * @param obj The instance
     * @param memberName The member name
     * @param args The arguments needed to call a method
    **/
    invoke_member: function (obj, memberName, args) {
        var member = this.prototype[memberName];
        return member.apply(obj, args); // valor de retorno caso o membro seja "retornable"
    },

    /**
     * Invokes a class member (property or method)
     * @param memberName The member name
     * @param args The arguments needed to call a method
    **/
    invoke_class_member: function (memberName, args) {
        var member = this[memberName];
        return member.apply(args); // valor de retorno caso o membro seja "retornable"
    },

    /**
     * Invokes a instance member (property or method) from father class context
     * @param obj The instance
     * @param memberName The member name
     * @param args The arguments needed to call a method
    **/
    super: function (obj, memberName, args) {
        var super_class = Object.getPrototypeOf(this);
        return super_class.invoke_member(obj, memberName, args); // valor de retorno caso o membro seja "retornable"
    },

    /**
     * Invokes a class member (property or method) from father class context
     * @param memberName The member name
     * @param args The arguments needed to call a method
    **/
    super_class_member: function (memberName, args) {
        var super_class = Object.getPrototypeOf(this);
        return super_class.invoke_class_member(memberName, args); // valor de retorno caso o membro seja "retornable"
    },

    /**
     * Verifies if the type of an instance is this class
     * @param obj The instance to be verified
    **/
    isPrototypeOf: function (obj) {
        return this.prototype.isPrototypeOf(obj);
    },

    /**
     * Converts a members dictionary to another with descriptive style
     * @param properties The members to be converted
    **/
    descriptoralize: function (properties) {

        for (var key in properties.prototype) {
            properties.prototype[key] = {
                value: properties.prototype[key],
                enumerable: true,
                configurable: true,
                writable: true
            }
        }

        for (var key in properties){                
            properties[key] = {
                value: properties[key],
                enumerable: true,
                configurable: true,
                writable: true
            }
        }

        return properties;

    }

};
