import math
n = [int(x) for x in input('digite os valores separados por virgula ').split(',')]
 
d= math.sqrt(sum([(x-(sum(n)/len(n)))**2 for x in n])/(len(n)-1))
print(f'\nSoma dos valores: {sum(n)}\n')
print(f'Quantidade de valores: {len(n)}\n')
print(f'Média: {(sum(n)/len(n)):.2f}\n')
print(f'Desvio padrão: {d:.2f}')