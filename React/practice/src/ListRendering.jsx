import React from 'react'

// function ListRendering() {
//     let arr=['eswar','rupesh','pavi','puneeth']
//    let abc=arr.map((name,index)=>{
//     return <h2 key={index}>{name}</h2>
//    })
//   return (
//     <div>
//       {arr.map((name,index)=>{
//        return <h2 key={index}>{name}</h2>
//       })}
//       {abc}
//     </div>
//   )
// }

// export default ListRendering

function ListRendering() {
    let persons=[
        {
            id:1,
            name:'eswar',
            age:20,
            skill:'react'
        }
    ]
    const personlist=persons.map(person=>{
       return <h2 key={person.id}>i am {person.name}. iam {person.age}year's old.i know {person.skill}</h2>
    })
  return (
    <div>
      {personlist}
    </div>
  )
}

export default ListRendering

