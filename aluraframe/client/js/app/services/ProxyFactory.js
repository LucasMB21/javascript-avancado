class ProxyFactory {

    static create(objeto, props, acao) {

        return new Proxy(new ListaNegociacoes(), {

            get(target, prop, receiver) {

                if(props.includes(prop) && _ehFuncao(target[prop])) { 

                    return function() {

                        console.log(`interceptando ${prop}`);
                        Reflect.apply(target[prop], target, arguments);
                        return acao(target);
                    }
                }  
                
                return Reflect.get(target, prop, receiver);
            },

            set(target, prop, value, receiver) {
                if(props.includes(prop)) {
                    //target(prop) = value;
                    acao(target);
                }

                acao(target);
                return Reflect.set(target, prop, value, receiver);
            }

        });

    }

    static _ehFuncao(func) {

        //return typeof(func) === (function);
        return typeof(func) == typeof(Function);
    }
}