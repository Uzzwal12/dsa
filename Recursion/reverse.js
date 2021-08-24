function reverse(str){
  return str ? reverse(str.substr(1)) + str[0] : str;  
}

console.log(reverse("uzzwal"))