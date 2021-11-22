// colors while and for loop

const colors = ['yellow', 'blue', 'red', 'orange'];

i = 0;
while (i <= (colors.length - 1)) {
    console.log('while-loop: '+ colors[i]);
    i++;  
};

for(i =0 ; i <=(colors.length-1); i++){
    console.log('for-loop: '+ colors[i]);
};


colors.forEach(element => console.log('forEach : '+ element));

// the while has 5 lines
// the for-loop has 3 lines;
// the forEach has 1 line
// the forEach is easier to read;


const  person =
    {
      name : 'Harry',
      age : 45,
      gender : 'male',
      carOwner : false,
      married : true,  
    };


for (const property in person) {
    console.log(`${property}: ${person[property]}`);
  }