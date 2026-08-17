Integração com Hardware e Lógica de Hooks

Foca em como o app sai da tela e interage com o mundo real (sensores e outros apps) e como gerenciar o fluxo de dados internamente.

Acesso a Recursos via Linking: O módulo Linking permite que o aplicativo dispare ações fora do seu próprio ambiente através de URIs (Uniform Resource Identifiers).

Protocolos Comuns: tel: para chamadas, mailto: para e-mails e whatsapp://send para mensagens diretas.

Hardware: O Expo fornece bibliotecas (SDKs) para acessar a Câmera (captura e leitura de QR Code), Galeria de Imagens e a Lista de Contatos do sistema.

Gerenciamento de Estado com Hooks:

useState: Cria variáveis que, quando alteradas, forçam o React a renderizar a tela novamente. Essencial para formulários e contadores.

useEffect: Lida com o ciclo de vida. É onde colocamos ações que devem acontecer "sozinhas", como carregar dados de uma API assim que a tela abre ou fechar uma conexão quando o usuário sai da tela.

Custom Hooks (Ganchos Personalizados): Permitem que você extraia a lógica complexa de um componente. Se você tem uma lógica de "Login", pode criar um useAuth e usá-lo em várias partes do app, mantendo o código limpo e seguindo o princípio DRY (Don't Repeat Yourself).