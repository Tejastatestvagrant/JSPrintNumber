


 function print(){
  
    let n =parseInt(document.getElementById('input').value);
  for(let i=1;i<=n;i++)
  {
      let item =document.createElement('li');
      item.innerHTML=i;
     
     document.getElementById('number').appendChild(item);
     
  }
  }

