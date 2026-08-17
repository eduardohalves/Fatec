import pandas as pd

# 1. Abrir a planilha
# Substitua 'seu_arquivo.xlsx' pelo caminho do seu arquivo
# O parâmetro r antes da string ajuda com caminhos do Windows
df = pd.read_excel('números.xlsx')

# Exibir as primeiras linhas para verificar
print("Dados da planilha:")
print(df.head())

# 2. Calcular o desvio padrão
# A) De uma coluna específica (ex: 'Idade')
desvio_padrao_coluna = df['X'].std()
print(f"\nDesvio padrão da coluna 'X': {desvio_padrao_coluna}")