import React from 'react'

function ErrorHandling({heroname}) {
    if(heroname==='joker'){
        throw new Error("its an error");
    }
  return (
    <div>
      {heroname}
    </div>
  )
}

export default ErrorHandling
