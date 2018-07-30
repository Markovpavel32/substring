import { getLength } from './strings';

export default function substr(myString, start = 0, length){
  if(length <  0){
    length = 1;
  }
if(length == undefined){
  return myString;
}

   if(start < 0){
    start = 0;
  }
  if(start + length > getLength(myString)){
    
    length = getLength(myString) - start;
  }
  var newString ='';
  for(let i = 0; i < length; i++){
    newString += myString[i + start];
  }
  return newString;
}

