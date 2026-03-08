//seleting popupoverlay,pop,add button
var a=document.querySelector(".popupoverlay")
var b=document.querySelector(".pop")
var c=document.getElementById("but")
//adding event  listener
//when add btn click popup should display
 c.addEventListener("click",function(){
    a.style.display="block" 
    b.style.display="block" 
 })
 //to prevent default refresh
 var d=document.getElementById("cancel")
 d.addEventListener("click",function(){
    a.style.display="none" 
    b.style.display="none"
 })
 //selecting the head portion,pop ku inside la present ana add btn,name,author,comment
 var f=document.getElementById("name")
 var g=document.getElementById("author")
 var h=document.getElementById("comment")
 var u=document.getElementById("add")
 var p=document.querySelector(".big")
 //when the add click the new book should be added
 u.addEventListener("click",function(){
    var w=document.createElement("div")
    w.setAttribute("class","head")
    w.innerHTML=`<h1>${f.value}</h1>
    <h5>${g.value}</h5>
    <p>${h.value}</p>
    <button onclick='totaldel(event)' >Delete</button>`
    p.append(w)
    a.style.display="none" 
    b.style.display="none" 
    event.preventDefault()
    console.log(w)
 })
 //now if i click the delete btn in the book which i added it should be deleted
 function totaldel(event){
    event.target.parentElement.remove()
 }
 
 