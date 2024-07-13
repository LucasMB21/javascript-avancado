class NegociacaoService {

    obterNegociacoesDaSemana() {

        return new Promise((resolve, reject) => {

         let xhr = new XMLHttpRequest();

         xhr.open('GET', 'negociacoes/semana');

         xhr.onreadystatechange = () => {

             if (xhr.readyState == 4) {

                 if (xhr.status == 200) {

                     resolve(JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                 } else {
                    console.log(xhr.responseText);
                    reject('Não foi possível obter as negociações da semana');
                 }
            }
        };
        
        xhr.send();

        });
    }
      

    obterNegociacoesDaSemanaAnterior(cb) {

        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/anterior');

        xhr.onreadystatechange = () => {

            if (xhr.readyState == 4) {

                if (xhr.status == 200) {

                    cb(null, JSON.parse(xhr.responseText)
                    .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                } else {
                    console.log(xhr.responseText);
                    cb('Não foi possível obter as negociações da semana anterior', null);
                }
            }
        };

        xhr.send();
    }

    obterNegociacoesDaSemanaRetrasada(cb) {

        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/retrasada');

        xhr.onreadystatechange = () => {

            if (xhr.readyState == 4) {

                if (xhr.status == 200) {

                    cb(null, JSON.parse(xhr.responseText)
                    .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                } else {
                    console.log(xhr.responseText);
                    cb('Não foi possível obter as negociações da semana retrasada', null);
                }
            }
        };

        xhr.send();
    }
}