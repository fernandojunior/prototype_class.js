/**
* prototype_class.js
* Simple JavaScript Oriented Object Programming Suporter.
* version 1.0
**/
var PrototypeClass = {

    /**
    * Define as propriedades e comportamentos do objeto
    **/
    prototype : {
        initialize: function (){
        },

        /**
        * Verifica se o objeto eh inctancia de uma clase
        **/
        instanceof: function(cls){       
            return cls.prototype.isPrototypeOf(this);
        },
    
        /**
        * Invoca um membro do objeto/prototipo pai
        * @param arguments(0) The member name
        * @param arguments(1...) The member arguments
        **/
        super: function(){            
            var arguments = [].splice.call(arguments,0);
            var memberName = arguments[0];
            var args = [];
            if (arguments.length > 1){
                args = arguments.slice(1, arguments.length);
            }
            return this.class.super(this, memberName, args);         
        }

    },

    /**
    * Constroi e inicializa o objeto
    **/
    create : function(){
        var instance = Object.create(this.prototype);
        instance.class = this;
        instance.initialize.apply(instance, arguments);
        return instance;
    },

    /**
    * Extende a classe com as propriedades no estilo descritivo
    * @param propertyDescriptors property Descriptors (dict) 
    **/
    dextend: function(propertyDescriptors){

        if (typeof propertyDescriptors.prototype !== "undefined"
                && typeof propertyDescriptors.prototype.value !== "undefined"){
            propertyDescriptors.prototype.value = Object.create(this.prototype, propertyDescriptors.prototype.value);
        }

        return Object.create(this, propertyDescriptors);

    },

    /**
    * Extende a prototype classe
    * @param property As novas propriedades
    **/
    extend: function(properties){            
        return this.dextend(this.descriptoralize(properties));
    },

    /**
     * Incova um membro do objeto/prototipo
    **/
    invoke_member: function(obj, memberName, args){
        var member = this.prototype[memberName];
        return member.apply(obj, args); // valor de retorno caso o membro seja "retornable"
    },

    /**
     * Invoca um membro da classe
    **/
    invoke_class_member: function(memberName, args){
        var member = this[memberName];
        return member.apply(args); // valor de retorno caso o membro seja "retornable"
    },

    /**
    * Invoca um membro do objeto/prototipo pai
    **/
    super: function(obj, memberName, args){
        var super_class = Object.getPrototypeOf(this);
        return super_class.invoke_member(obj, memberName, args); // valor de retorno caso o membro seja "retornable"
    },

    /**
    * Invoca um membro da classe pai
    **/
    super_class_member: function(memberName, args){
        var super_class = Object.getPrototypeOf(this);
        return super_class.invoke_class_member(memberName, args); // valor de retorno caso o membro seja "retornable"
    },

    /**
    * Verifica se o prototipo da classe corresponde ao prototipo do objeto
    **/
    isPrototypeOf: function(obj){
        return this.prototype.isPrototypeOf(obj);
    },

    /**
    * Converte as propriedades de uma classe para o estilo descritivo
    **/
    descriptoralize: function(class_properties){

        for(var key in class_properties.prototype){
            class_properties.prototype[key] = {
                value: class_properties.prototype[key],
                enumerable: true,
                configurable: true,
                writable: true
            }
        }

        for (var key in class_properties){                
            class_properties[key] = {
                value: class_properties[key],
                enumerable: true,
                configurable: true,
                writable: true
            }
        }

        return class_properties;

    }

};