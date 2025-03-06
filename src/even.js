var x = prompt('Answer "yes" if the number is even, otherwise answer "no"');
if (isNaN(x)){
    alert("error!");
}
else if (x % 2 == 0){
    alert("Even");
} else {
    alert("Odd");
};
