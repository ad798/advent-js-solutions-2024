function removeSnow(s: string): string {
  let result = s; 
  let i = 0;
  
  // Continuar hasta que no haya más pares consecutivos
  // Se evalua la condicion en cada ciclo
  while (i < result.length - 1) {
    if (result[i] === result[i + 1]) {
      // Si se encuentran dos caracteres consecutivos iguales, eliminar ambos
      result = result.slice(0, i) + result.slice(i + 2);
      // Volver a empezar
      i = 0;
    } else {
      // Si no hay repetición, continuar al siguiente carácter
      i++;
    }
  }
  
  return result;
}
