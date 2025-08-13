//21-1 Can you find out who will get the Strawberry?
 //max of 2
 function maxTwo(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
 }
 console.log(maxTwo(45,90));

 //max of three

 function maxofTree(a,b,c){
    if(a>b && a>c){
        return a;
    }
    else if(b>a && b>c){
        return b;
    }
    else{
        return c;
    }
 }
 console.log(maxofTree(7,89,2));


 // max of multiple number
 function maxNumber(arr){
    return Math.max(...arr);
 }
 console.log(maxNumber([7,90,34,21,2,12,56,89,555,34]))