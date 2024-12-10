function fixPackages(packages) {
    let stack = [];  // Pila para almacenar los caracteres
    for (let char of packages) {
        if (char === ')') {
            // Cuando encontramos un paréntesis de cierre, procesamos el contenido dentro
            let temp = '';
            // Desapilamos hasta encontrar el paréntesis abierto
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                temp += stack.pop();  // Formamos el contenido invertido
            }
            stack.pop();  // Eliminar el paréntesis abierto '('
            // Lo apilamos de nuevo
            for (let c of temp) {
                stack.push(c);
            }
        } else {
            // Si no es un paréntesis, simplemente apilamos el carácter
            stack.push(char);
        }
    }
    // Al final, unimos los caracteres de la pila para obtener el resultado
    return stack.join('');
}
