import math

X = [7, 8, 13, 4, 21]

n = len(X)
media = 0
for xi in X:
	media += xi
media = media / n

dp = 0
for xi in X:
	dp += (xi - media)**2
dp = math.sqrt(dp / (n-1))

print(X)
print(f"Média = {media}")
print(f"Desvio padrão = {dp}")


