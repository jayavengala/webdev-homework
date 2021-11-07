const getPrimes = () => {
  // Add your code here
  console.log("Prime numbers from 1 to 100 are:")
  count = 0;
  for(num = 2; num<=100; num++) {
    for(i = 1; i <= num; i++) {
      if(num%i == 0) {
        count++;
      }
    }
    if(count==2){
      console.log(num);
    }
    count = 0;
  }
};
   
getPrimes();
// 2
// 3
// 5
// 7
// 11
// 13
// 19
// 23
// 29
// 31
// 37
// 41
// 43
// ...
