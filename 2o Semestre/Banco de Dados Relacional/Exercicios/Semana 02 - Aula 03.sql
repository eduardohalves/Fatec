DROP TABLE IF EXISTS funcionario;

CREATE TABLE funcionario (
id_func SERIAL PRIMARY KEY,
nome VARCHAR(100)NOT NULL,
cargo VARCHAR(50)NOT NULL,
salario NUMERIC(10,2)
);

INSERT INTO funcionario (
nome, cargo, salario
) VALUES ('LUCAS', 'Gerente', 3000.00), ('Matias', 'Zelador', 800.00), ('Eduardo', 'CEO', 5000.00)