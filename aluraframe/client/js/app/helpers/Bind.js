class Bind {

    constructor(model, view, props) {

        let Proxy = ProxyFactory.create(model, props, (model) => 
            view.update(model));

        view.update(model);

        return Proxy;

    }
}