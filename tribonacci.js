function tribonacci(signature,n){
  if (n <= 3) {
    return signature.slice(0, n);
  }
  
  let sequence = [...signature];
  for (let i = 0; i < n - 3; i++) {
    const newValue = sequence[i] + sequence[i + 1] + sequence[i + 2]
    sequence.push(newValue);
  }
  return sequence;
}