# Começamos importando a função "math" para cáculco de raiz quadrada

import math

# Depois definimos exemplos quaisquer para realizar o exercicio

numeros = [10, 20, 30, 40, 50] # [] são listas e n = 5

media = sum(numeros) / len(numeros) # sum é para somar, enquanto len é quantos elementos existem, no caso 5

# A formula do exemplo diz que é preciso pegar cada número, subtrair a média e elevar ao quadrado
# Ficando algo parecido com:
# 10 - 30 = -20 → (-20)² = 400
# 20 - 30 = -10 → (-10)² = 100
# 30 - 30 =  0  → 0²     = 0
#40 - 30 = 10  → 10²    = 100
# 50 - 30 = 20  → 20²    = 400

# Transcrevendo pro código, fica:

soma = 0

for numero in numeros:
    soma += (numero - media) ** 2 # O ** é equivalente à numeros elevados, no caso ao quadrado

# Por fim, a formula diz para dividir por n - 1, ou seja 1000 / 5 - 1 ficando:

variancia = soma / (len(numeros) - 1)

# Por fim, finalizando com a formula que resulta no desvio, sendo:

desvio = math.sqrt(variancia) ## sqrt é square root, significando raiz quadrada, por isso o math.sqrt

print(variancia)