CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL
);

CREATE TABLE contas (
    id SERIAL PRIMARY KEY,
    cliente_id INT REFERENCES clientes(id) ON DELETE CASCADE,
    saldo DECIMAL(15,2) NOT NULL DEFAULT 0
);

CREATE TABLE transacoes (
    id SERIAL PRIMARY KEY,
    conta_id INT REFERENCES contas(id) ON DELETE CASCADE,
    tipo VARCHAR(50) CHECK (tipo IN ('Depósito', 'Saque', 'Transferência')),
    valor DECIMAL(15,2) NOT NULL,
    data_transacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO clientes (nome, cpf) VALUES
('José Almeida', '123.456.789-00'),
('Fernanda Ribeiro', '987.654.321-00'),
('Lucas Santos', '456.789.123-00');

INSERT INTO contas (cliente_id, saldo) VALUES
(1, 5000.75), (2, 3200.00), (3, 10000.50);

INSERT INTO transacoes (conta_id, tipo, valor) VALUES
(1, 'Depósito', 2000.00), (1, 'Saque', 500.00),
(2, 'Depósito', 1500.00), (2, 'Saque', 700.00),
(3, 'Depósito', 3000.00), (3, 'Saque', 1200.00);

SELECT COUNT(*) AS total_clientes FROM clientes;

SELECT SUM(saldo) AS saldo_total FROM contas;

SELECT AVG(valor) AS media_saques FROM transacoes WHERE tipo = 'Saque';
