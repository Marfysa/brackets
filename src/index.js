module.exports = function check(str, bracketsConfig) {
  // your solution
  let arr = str.split('');
  let newArr = [];
  let start = ['(', '[', '{'];
  let end = [')', ']', '}'];
  let open;
  let close;

  for (let i = 0; i < arr.length; i++) {
    open = start.indexOf(arr[i]);
    if (open !== -1) {
      newArr.push(open);
      continue;
    }
    close = end.indexOf(arr[i]);
    if (close !== -1) {
      open = newArr.pop();
      if (open !== close) {
        return false;
      }
    }
  }
  console.log(newArr);
  if (newArr.length !== 0) {
    return false;
  }
  return true;
  
  /*let arr = str.split('');
  let newArr = [];
  let start = ['(', '[', '{', '|', '1','3','5', '7','8'];
  let end ={
    [')']: '(',
    [']']: '[',
    ['}']: '{',
    ['|']: '|',
    ['1']: '2',
    ['3']: '4',
    ['5']: '6',
    ['7']: '7',
    ['8']: '8',
  };
  
     for (let i = 0; i < arr.length; i++) {
       let currSumb = arr[i];
       
       if (start.includes(currSumb)) {
         newArr.push(currSumb);
       } else {
         if (newArr.length === 0) {
           return false;
         }
        }
        
        let topEl = newArr[newArr.length - 1];
        
         if (end[currSumb] === topEl) {
           newArr.pop();
         } else {
           return false;
         }
       }  return (newArr.length === 0 || newArr.length % 2 === 0) ? true : false;*/
  }
  
 
 
