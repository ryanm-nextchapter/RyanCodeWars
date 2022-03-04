function getSum( a,b )
{
  if (a === b ) {
    return a;
  }
  
  //   We could also use Math.min
  min = a > b ? b : a
  max = a > b ? a : b
  
  // Use formula 1+2+...+n = n(n+1)/2
  return (max * (max + 1) - (min - 1) * min ) / 2
}