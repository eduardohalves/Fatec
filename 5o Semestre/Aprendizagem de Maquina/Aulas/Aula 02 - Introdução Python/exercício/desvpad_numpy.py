import numpy as np

X = [7, 8, 13, 4, 21]

# Desvio padrão amostral (ddof=1)
desvio_amo = np.std(X, ddof=1)
print(f"Desvio Padrão Amostral: {desvio_amo:.4f}")