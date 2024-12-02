// According to your js10 session, write a code that shows why we shouldn't use var?

// چون متغیری که با var 
// تعریف میکنیم در همه جا قابل دسترسی است فقط اگر در 
// function scope باشه در خارج از ان قابل دسترسی نیست


for (var item = 0; item < 4; item++) {
      console.log(item);
 }
    console.log("item is:", item)



function check(element) {
  if (element>8){
      var item = `it is ${element}`;
        return item;
  }
      
}
check()
    
    console.log(item);

    