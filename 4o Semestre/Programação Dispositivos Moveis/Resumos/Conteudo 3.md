Ecossistema React Native e Expo

O React Native permite a construção de interfaces mobile reais. Diferente de abordagens híbridas (como o WebView), ele traduz o código JavaScript em componentes nativos da plataforma, garantindo que o app tenha o "look and feel" de um aplicativo feito em Java ou Swift.

Arquitetura e Filosofia: A base é o React, focado em componentes reutilizáveis. A ideia principal é aprender a lógica uma vez e aplicá-la em qualquer lugar (Learn once, write anywhere), seja para Android ou iOS.

Diferenças Técnicas (Web vs Mobile):

React JS: Usa o DOM virtual e tags HTML (div, h1, p).

React Native: Não possui DOM. Usa componentes específicos como <View> (o container básico), <Text> (única forma de exibir texto) e <Image>.

O Papel do Expo: É uma camada de ferramentas em cima do React Native que remove a complexidade de lidar com o código nativo diretamente.

Expo Go: Permite o "Live Reloading" — você altera o código no VS Code e o resultado aparece instantaneamente no seu celular físico.

Metro Bundler: Atua como o servidor de desenvolvimento, compilando o JavaScript e gerenciando os pacotes necessários para o app rodar.