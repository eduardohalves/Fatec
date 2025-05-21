-- CREATE TABLE cursos (
--     id_curso SERIAL PRIMARY KEY,
--     nome_curso VARCHAR(50) NOT NULL
-- );

-- CREATE TABLE alunos (
--     id_aluno SERIAL PRIMARY KEY,
--     nome VARCHAR(100) NOT NULL,
--     id_curso INT REFERENCES cursos(id_curso) 
-- );

-- INSERT INTO cursos (
-- nome_curso
-- ) VALUES ('Engenharia'), ('Computação');

-- INSERT INTO alunos (
-- nome, id_curso
-- )  VALUES ('Carlos Almeida', 1), ('Fernanda Costa', 2); 

-- SELECT alunos.nome, cursos.nome_curso 
-- FROM alunos
-- INNER JOIN cursos ON alunos.id_curso = cursos.id_curso;

-- INSERT INTO alunos (
-- nome
-- )  VALUES ('Roberto Henrique')

Exercicio 01

SELECT alunos.nome, cursos.nome_curso 
FROM alunos
LEFT JOIN cursos ON alunos.id_curso = cursos.id_curso;

CREATE VIEW vw_alunos_cursos AS
SELECT alunos.nome AS nome_aluno,cursos.nome_curso
FROM alunos
INNER JOIN cursos ON alunos.id_curso = cursos.id_curso;


-- CREATE TABLE clientes (
--     id_cliente SERIAL PRIMARY KEY,
--     nome VARCHAR(100) NOT NULL,
--     cpf VARCHAR(11) UNIQUE NOT NULL,
--     endereco TEXT,
--     telefone VARCHAR(15)
-- );

-- INSERT INTO clientes (nome, cpf, endereco, telefone) VALUES
-- ('João Silva', '12345678900', 'Rua A, 123', '11999990000'),
-- ('Maria Oliveira', '98765432100', 'Rua B, 456', '11988887777');

-- CREATE TABLE contas (
--     id_conta SERIAL PRIMARY KEY,
--     numero_conta VARCHAR(10) UNIQUE NOT NULL,
--     saldo DECIMAL(10,2) DEFAULT 0 CHECK (saldo >= 0),
--     id_cliente INT REFERENCES clientes(id_cliente) ON DELETE CASCADE
-- );

-- INSERT INTO contas (numero_conta, saldo, id_cliente) VALUES
-- ('000123', 1500.00, 1),
-- ('000456', 2300.00, 2);

-- CREATE TABLE transacoes (
--     id_transacao SERIAL PRIMARY KEY,
--     id_conta INT REFERENCES contas(id_conta) ON DELETE CASCADE,
--     tipo VARCHAR(15) CHECK (tipo IN ('Depósito', 'Saque', 'Transferência')),
--     valor DECIMAL(10,2) NOT NULL CHECK (valor > 0),
--     data_transacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     destino_transferencia INT REFERENCES contas(id_conta) ON DELETE CASCADE
-- );

-- INSERT INTO transacoes (id_conta, tipo, valor) VALUES
-- (1, 'Depósito', 500.00),
-- (2, 'Saque', 200.00);

-- INSERT INTO transacoes (id_conta, tipo, valor, destino_transferencia) VALUES
-- (1, 'Transferência', 300.00, 2);

-- SELECT * FROM clientes;

-- SELECT contas.numero_conta, clientes.nome, contas.saldo
-- FROM contas
-- INNER JOIN clientes ON contas.id_cliente = clientes.id_cliente;

-- SELECT 
--     transacoes.tipo, 
--     transacoes.valor, 
--     transacoes.data_transacao,
--     contas.numero_conta AS origem,
--     c2.numero_conta AS destino
-- FROM transacoes
-- INNER JOIN contas ON transacoes.id_conta = contas.id_conta
-- LEFT JOIN contas c2 ON transacoes.destino_transferencia = c2.id_conta;

-- UPDATE contas
-- SET saldo = saldo + 500.00
-- WHERE id_conta = 1;
-- INSERT INTO clientes (
-- nome, cpf, endereco, telefone
-- ) VALUES ('Flavia Dos Santos Silva', '09876543210', 'Rua do Lago, 388', '1240028922')

-- INSERT INTO contas (
-- numero_conta, saldo, id_cliente
-- ) VALUES ('000446', 2300.00, 3);

-- INSERT INTO transacoes (id_conta, tipo, valor, destino_transferencia) VALUES
-- (2, 'Transferência', 100.00, 3);


Exercicio 02

CREATE VIEW vw_transferencias AS
SELECT t.tipo, t.valor, t.data_transacao,c_origem.numero_conta AS conta_origem, cli_origem.nome AS cliente_origem,
c_destino.numero_conta AS conta_destino,
cli_destino.nome AS cliente_destino
FROM transacoes t
INNER JOIN contas c_origem ON t.id_conta = c_origem.id_conta
INNER JOIN clientes cli_origem ON c_origem.id_cliente = cli_origem.id_cliente
INNER JOIN contas c_destino ON t.destino_transferencia = c_destino.id_conta
INNER JOIN clientes cli_destino ON c_destino.id_cliente = cli_destino.id_cliente
WHERE t.tipo = 'Transferência'
ORDER BY t.data_transacao DESC;