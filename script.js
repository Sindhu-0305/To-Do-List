const inputbox=document.getElementById("input-box");
const list=document.getElementById("list");

function addtask(){
     if(inputbox.value==''){
        alert("Add tasks!");

     }
    else{
        let li=document.createElement("li");//the element needed to be added is in the form of list hence the element created is "li"
        li.innerHTML=inputbox.value;//passing the value of the inputbox to the a=innerhtml of the li so that li in next step can be appened
        list.append(li);//add li to the list under which it has to be displayed
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.append(span);
    
    }
    inputbox.value="";//to clear the input box
    savedata();//to save contents after each adding of elements
}
list.addEventListener("click",function(s){
    if(s.target.tagName=="LI"){
        s.target.classList.toggle("checked");//checked points to image name, toggle means like on off
        savedata();//update content after each toggling of elements
    }
    else if(s.target.tagName=="SPAN"){
        s.target.parentElement.remove();
        savedata();//update content after removing elements
    }
},false);
function  savedata(){//to save the contents from the website
    localStorage.setItem("data",list.innerHTML);
}
function displaydata(){ //to display the saved contents
   list.innerHTML=localStorage.getItem("data");
}
displaydata();
