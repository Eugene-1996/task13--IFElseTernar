function saleHotdogs(n){
    return n<5 ? n*100 : n >= 5 && n<10 ? n*(100-5) : n*(100-10)
  }
  
    console.log(saleHotdogs(9))