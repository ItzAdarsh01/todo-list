function adds()
{
document.getElementById("error").innerHTML=""
let name=document.getElementById("name").value
if(name=='')
{
document.getElementById("error").innerHTML="enter valid list"
}
else{
box=document.getElementById("box")
let li=document.createElement("li")
li.innerHTML=name
let rem=document.createElement("a")
rem.className="remove"
rem.textContent="X"
li.appendChild(rem)
let pos=box.firstElementChild
if(pos==null)
{
    box.appendChild(li)
}
else
{
    box.insertBefore(li,pos)
}
}
document.getElementById("name").value=""
}
let btn=document.querySelector("ul");
btn.addEventListener("click",function(e){
    box=document.getElementById("box")
    let li=e.target.parentNode
    box.removeChild(li)
})