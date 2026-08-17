Máquina de Estados Finita (FSM)

A Máquina de Estados é uma ferramenta lógica que ajuda a mapear todos os comportamentos possíveis de uma aplicação, evitando estados inválidos (bugs).

Componentes de uma FSM:

Estados: Lista finita de situações (Ex: Desconectado, Conectando, Erro).

Entradas/Eventos: Ações que disparam mudanças (Ex: Clicar no botão "Ligar").

Transições: Regras que dizem para qual estado o sistema vai após um evento.

Exemplo Detalhado (Catraca):

Estado: Bloqueada. Se o evento for "Empurrar", o resultado é continuar Bloqueada (ação negada).

Estado: Bloqueada. Se o evento for "Inserir Moeda", a transição leva para o estado Desbloqueada.

Estado: Desbloqueada. Se o evento for "Empurrar", o sistema volta para Bloqueada (ciclo concluído).

Vantagens no Desenvolvimento:

Previsibilidade: Você sabe exatamente o que acontece em cada clique.

Manutenção: É mais fácil adicionar novas funções sem quebrar o que já existe, pois as regras de transição são rígidas e claras.

Interfaces: Ideal para controlar telas de carregamento, modais de confirmação e fluxos de compra.