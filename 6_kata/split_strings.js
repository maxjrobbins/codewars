function solution(str){
    let arr = []
    if(str.length % 2 != 0 ){
       str = str + "_"
     }
    for(i = 0; i <str.length; i +=2){
      arr.push(str.slice(i,i+2))
    }
    return arr
  }