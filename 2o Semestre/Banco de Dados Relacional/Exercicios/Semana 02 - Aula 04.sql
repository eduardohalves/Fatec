DROP TABLE IF EXISTS funcionarios;
CREATE TABLE funcionarios (
id_funcionario SERIAL PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
cargo VARCHAR(50) NOT NULL,
salario DECIMAL (10,2)
);

INSERT INTO funcionarios (
nome, cargo, salario
) VALUES ('Lucas Andrade', 'Desenvolvedor', 5000.00), ('Paula Ferreira', 'Gerente', 9000.00), ('Marcos Lima', 'Designer', 4000.00)

UPDATE funcionarios
SET salario = 5500.00
WHERE nome = 'Lucas Andrade'

DELETE FROM funcionarios
WHERE nome = 'Marcos Lima'

select *from funcionarios