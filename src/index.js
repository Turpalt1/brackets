module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 !== 0) return false;
  let res = 0;
  let arr = str.split(''); 
  while(arr.length !== 0 && res <= 100){
    res++;
    bracketsConfig.forEach(e => {
      for (let i = 0; i < arr.length; i++) {
        if(arr[i] === e[0] && arr[i + 1] === e[1]){
          arr.splice(i + 1,1);
          arr.splice(i, 1);
          break;
        }
      }
    })
  }
  return arr.length === 0;
}
