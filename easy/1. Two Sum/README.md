# 0001 - Two Sum

## Descripción
Dado un array de enteros `nums` y un entero `target`, devuelve los **índices** de los dos números que sumen exactamente `target`.

Puedes asumir que siempre existe **una única solución** y que no puedes usar el mismo elemento dos veces.  
Puedes devolver la respuesta en cualquier orden.

## Intuición
La primera idea natural es usar **fuerza bruta**: recorrer el array con dos bucles anidados, probando todas las combinaciones posibles hasta encontrar dos números cuya suma sea igual a `target`.  
Sin embargo, este enfoque tiene complejidad **O(n²)**, lo que lo hace ineficiente para entradas grandes.  

La pregunta clave es:  
**¿Cómo lograrlo en O(n), es decir, con un solo recorrido?**

La respuesta es almacenar información de los elementos ya vistos para saber, en cada paso, si existe un número previo que forme la suma objetivo con el número actual.

## Approach
Para resolverlo de forma eficiente usamos un **HashMap** (tabla hash).  
La lógica es la siguiente:

1. Creamos un HashMap en el que la **clave** es el número y el **valor** es su índice.
2. Recorremos el array elemento por elemento:
   - Calculamos el número que necesitamos para llegar a `target`:  
     `need = target - nums[i]`
   - Revisamos si `need` ya existe en el HashMap.
     - Si existe, retornamos `[indice_de_need, i]`, que son los dos índices de la solución.
     - Si no existe, almacenamos el número actual y su índice en el HashMap para futuras comparaciones.
3. Como el problema garantiza que siempre existe una solución, el algoritmo siempre retornará antes de terminar el recorrido completo.

## Complejidad
- **Tiempo:** `O(n)` → Recorremos el array solo una vez y las operaciones en HashMap son O(1) promedio.
- **Espacio:** `O(n)` → En el peor caso, almacenamos todos los elementos en el HashMap.
