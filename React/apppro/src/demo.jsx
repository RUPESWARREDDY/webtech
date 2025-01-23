function Demo(){
    let arr=['eswar','venu','rupesh','loki','pavi','uma']
   let arr1=arr.map((a)=>{
   if(a.includes('u'))
   {
    return <li>{a}</li>
   }
   })
   
    return(
       <>
       <ul>
      {arr1}
        
        
       </ul>
       </>
    )
}
export default Demo