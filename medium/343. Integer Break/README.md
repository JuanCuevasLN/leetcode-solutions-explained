# 0343 - Integer Break

## Descripción
Dado un número entero `n`, divídelo en la suma de `k` números enteros positivos (donde `k >= 2`) y devuelve el **máximo producto** posible de esos enteros.

## Intuición
La primera idea es usar **backtracking** para probar todas las posibles divisiones y quedarnos con el producto máximo.  
Por ejemplo, para `n = 10` existen 42 formas distintas de dividirlo, para `n = 20` ya son 627, y para `n = 30` son 5604.  
Esto escala de forma **exponencial**, por lo que probar todas las combinaciones no es una opción viable.

La clave está en notar que **no necesitamos probar todas las divisiones** y que de hecho solo piden el producto mas no la representación del producto.  
Si analizamos el problema de forma detallada:
- El producto de un número mayor siempre será al menos tan grande como el de uno menor.
- Entonces, para calcular `n`, podríamos aprovechar los resultados de subproblemas (`n - 2`, `n - 3`, etc.) y luego agregarle al producto la diferencia.

Al experimentar vemos dos patrones:
1. Los **múltiplos de 3** son casos especiales: la mejor división es en tantos `3` como sea posible.  
   Ejemplo:  
   - `6 = 3 + 3 → 9`  es mejor que `2 + 4 → 8`.
2. Para el resto de los casos, conviene multiplicar por 2 y usar el mejor resultado previo (`dp[i - 2]`) porque si usamos `dp[i - 1]` nos quedaría una diferencia de 1 que daría el mismo número.  
   Pero debemos decidir si usar el producto guardado en `dp[i - 2]` o simplemente el número restante (`i - 2`), eligiendo el mayor de ambos.

## Approach
1. Inicializamos un array `dp` con valores base para `0`, `1` y `2`.
2. Iteramos desde `3` hasta `n`:
   - Si `i` es múltiplo de `3` (y distinto de 3), calculamos directamente `Math.pow(3, i / 3)`.
   - En caso contrario, tomamos el mayor entre `dp[i - 2]` y `(i - 2)`, y lo multiplicamos por `2`.
3. Al final, devolvemos `dp[n]`, que corresponde al producto máximo para `n`.

## Complejidad
- **Tiempo:** `O(n)` → recorremos el array una sola vez.  
- **Espacio:** `O(n)` → almacenamos todos los productos parciales en el array.
