// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

export const compareArguments = (arg1, arg2) => {
  if (typeof arg1 !== 'string' || 
      typeof arg2 !== 'string') throw Error('Los argumentos deben ser strings')
  if (!arg1 || !arg2 ) throw new Error('Deben pasar dos argumentos')
  return arg1.endsWith(arg2)
}