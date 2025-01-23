function text1(){
    z=document.createElement(prompt("enter tag name"))
    z.innerText=prompt("enter txt to display")
    document.body.appendChild(z)
}
function newTag(event){
    let tagname=document.getElementsByName('tagname')[0].value
    let data=document.getElementsByName('data')[0].value
    let newele=document.createElement(tagname)
    newele.innerText=data
    document.body.appendChild(newele)
    event.preventDefault()

}