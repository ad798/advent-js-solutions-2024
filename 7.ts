function fixPackages(packages) {
    let stack = [];
    for (let char of packages) {
        if (char === ')') {
            // Revertimos los elementos dentro de los paréntesis
            let temp = [];
            while (stack[stack.length - 1] !== '(') {
                temp.push(stack.pop());
            }
            stack.pop();  // Quitamos el '('
            stack.push(...temp);  // Colocamos los elementos revertidos en la pila
        } else {
            stack.push(char);  // Simplemente apilamos el carácter
        }
    }
    return stack.join('');  // Unimos y devolvemos el resultado
}
