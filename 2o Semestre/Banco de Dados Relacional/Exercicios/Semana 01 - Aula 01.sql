PRATICA I

CREATE TABLE focos_calor (
estado VARCHAR(50),
bioma VARCHAR (50),
data_ocorrencia DATE
)

INSERT INTO focos_calor (
estado, bioma, data_ocorrencia
) VALUES ('Amazonas', 'Amazônia', '2025-02-01'), ('Mato Grosso', 'Cerrado', '2025-02-03'), ('Para', 'Amazônia', '2025-02-05');


SELECT *FROM focos_calor

PRATICA II

CREATE TABLE cliente (
Nome_Cliente VARCHAR(100)NOT NULL,
cidade_Cliente VARCHAR(50),
Endereco_Cliente VARCHAR(50)
);

CREATE TABLE conta (
Numero_Conta DECIMAL,
Nome_Agencia VARCHAR(100),
Saldo DECIMAL(10,2)
);

CREATE TABLE emprestimo (
Numero_Emprestimo DECIMAL,
Nome_Agencia VARCHAR(100),
Valor DECIMAL(10,2)
);

CREATE TABLE agencia (
Nome_Agencia VARCHAR(100),
Cidade_Agencia VARCHAR(50),
Depositos DECIMAL(10,2)
)