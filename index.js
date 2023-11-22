function values(array) {
    
    const uniqueValues = {};
  
    array.forEach((value) => {
        uniqueValues[value] = true;
    });
  
    const newValues = Object.keys(uniqueValues).map(Number);
  
    return newValues;
  }
  
  const inputArray = [1, 2, 3, 1, 5, 4];
  const uniqueValues = values(inputArray);
  
  console.log(uniqueValues); 

////////////////////////////

function newFunction(list, value) {
    const index = list.indexOf(value);
  
    return index !== -1 && index % 2 !== 0;
  }
  
  
  const myList = ['str', 'str1', 'str2', 'str3', 'str4', 'str5'];

console.log(newFunction(myList, 'str3')); 

////////////////////

function secondFunction(list, value) {
    
    const index = list.indexOf(value);
    return index !== -1 && index >= 3;
  }
  
  const newList = ['str', 'str1', 'str2', 'str3', 'str4', 'str5'];
  
  console.log(secondFunction(newList, 'str3')); 


  ////////////////////////////////////


  function thirdFunction(list, objectToRemove) {
    return list.filter(obj => obj !== objectToRemove);
  }
  
  const inputList = [
    {
      name: 'Boris',
      age: 30
    },
    {
      name: 'Alex',
      age: 32
    },
    {
      name: 'Vasile',
      age: 31
    }
  ];
  
  const objectToRemove = {
    name: 'Vasile',
    age: 31
  };
  
  const outputList = thirdFunction(inputList, objectToRemove);
  
  console.log(outputList);

  ////////////////////////////////

  function drawSquare(size) {
    for (let i = 0; i < size; i++) {
      let row = '';
      for (let j = 0; j < size; j++) {
        row += '*';
      }
      console.log(row);
    }
  }
  
  drawSquare(3);

  ///////////////////////////////

  function fourFunction(array) {
    const sameNumbers = new Set(array);
    return sameNumbers.size === 1;
  }
  
  const newArray = [2, 2, 2, 2, 2];
  const output = fourFunction(newArray);
  
  console.log(output); 