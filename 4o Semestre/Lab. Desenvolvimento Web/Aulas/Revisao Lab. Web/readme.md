# Resposta para os exercicios proposto para revisão

10. B) Para transformar o objeto complexo da API em um array simples compatível com o FlatList.

11. if (imc >= 35.0 && imc <= 39.9) {
  return { classificacao: "Obesidade Grau II", cor: "red" }
}

12. Inicio da Requisição: setLoading(true)
Sucesso: setLoading(false)
Erro: setLoading(false)

13. C) A API entrará em um loop infinito de chamadas a cada atualização de estado.

14. "target": "ES2015" define que o código será compilado para JavaScript moderno. Se utilizar ES5, pode acontecer de perder suporte e recursos mais modernos, tornando-o antigo e menos eficiente.

15. B) Limita a exibição apenas aos 10 primeiros registros da lista.

16. B) Para fornecer uma chave única para cada item, auxiliando o React na performance de renderização.

17. Utiliza a propriedade onPress={minhaFuncao} quando o usuário clica sua função é executada.

18. Validação: if (!nota1 || !nota2) {
  setErro("Por gentileza, insira números válidos")
}
Exibição: <Text style={{ color: 'red' }}>{erro}</Text>

19. B) O Axios já converte automaticamente a resposta para JSON e possui uma sintaxe mais limpa para requisições complexas.

20. Ele transforma o input em controlado, onde sem isso o campo continuaria digitavel mas o react não controlaria o valor exibido.

21. É preferivel evita criar muitas telas, deixando o código mais simples e com melhor desempenho 
{calculado && media >= 6 && (
  <Text>Aprovado</Text>
)}

22. [] → executa apenas uma vez (montagem do componente). Se utilizar o [ticker] a API será requisitada toda vez que o ticker rodar.

23. Efeito visual centraliza tudo na tela, ocupando toda a tela com flex: 1. A diferença entre justifycontent e alignitems é por conta de que o justify é para eixo vertical e o align é para eixo horizontal.

24. Mostrar o erro ao usuário, além de melhorar o UX e evitar confusão.

25. B) Vincular o conteúdo visual do campo a uma variável de estado.

26. B) Usar Template Literals (crases) e a sintaxe ${variavel}.

27. Para evitar quebrar a lógica da aplicação.

28. B) Precisamos exibir uma lista longa de dados de forma performática.

29. D) Um array contendo apenas os 5 primeiros itens da resposta da API.

30. C) data

