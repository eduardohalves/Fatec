// Exercício 7 – O webservice da ViaCEP(http://viacep.com.br) é usado para consultar CEPs. A URL
//     https://viacep.com.br/ws/12243750/json retornará um JSON com o endereço do Parque Vicentina Aranha.
//     O pacote axios(https://www.npmjs.com/package/axios) é usado para processar requisições HTTP. Será necessário digitar o
//         comando a seguir no terminal para instalar o pacote axios no seu projeto:
//         Após instalar o pacote axios você pode testar o código a seguir.O método get retorna uma promise, por este motivo usamos
// o método then(da promise) para pegar o resultado da requisição HTTP.O objeto JSON retornado pelo axios será colocado
// na variável res.
// import axios from "axios";
// const cep = "12243750";
// const url = `https://viacep.com.br/ws/${cep}/json`;
// axios.get(url)
//     .then(res => console.log(res))
//     .catch(e => console.log(e.message));
// Observe que o objeto que está na variável res possui as propriedades: status, statusText, headers, config, request e
// data.Desestruturar a variável res para extrair do objeto JSON apenas a propriedade data.

import axios from "axios";
const cep = "12243750";
const url = `https://viacep.com.br/ws/${cep}/json`;
axios.get(url)
  .then(({ data }) => {
    console.log(data);
  })
  .catch(e => console.log(e.message));