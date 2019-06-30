let inputBox = document.getElementById('id1')
let list = document.getElementById('list')

let counter=0;

function dofunction() {
   
    if(inputBox.value=="")
  window.alert("no task to add");
    
    let numb = inputBox.value;
    let str = "";
    
    
     str+=`<li  onclick="this.style   ='text-decoration: line-through'" >${numb}</li>`;
    
    list.innerHTML +=str;
    
    inputBox.value=''
    
}

function deletelist(){
    let items=list.getElementsByTagName("li");
   let y=false;
    for (let i = 0; i <items.length ; i++) {
        const st=items[i].style.textDecoration;
        
        if( st =="line-through"){
            
            
            items[i].parentNode.removeChild(items[i])
            i=-1;
            y=true;
        }
        
    }
    if(y==false)
    window.alert("No task to remove")
}


