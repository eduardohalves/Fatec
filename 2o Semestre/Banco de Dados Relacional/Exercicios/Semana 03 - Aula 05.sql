DROP TABLE IF EXISTS Produtos;
CREATE TABLE Produtos (
id_produtos SERIAL PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
preco DECIMAL (10,2),
categoria VARCHAR(50)
)

INSERT INTO Produtos (
nome, preco, categoria
) VALUES ('Notebook', 4500.00, 'Eletrônicos'), ('Smartphone', 2500.00, 'Eletrônicos'), ('Cadeira Gamer',
850.00, 'Móveis'), ('Geladeira', 3200.00, 'Eletrodomésticos'), ('Fone de Ouvido', 200.00, 'Acessorios')

SELECT nome, categoria FROM produtos
WHERE categoria = 'Eletrônicos'

SELECT *from Produtos
ORDER BY preco DESC