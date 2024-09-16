import React from 'react'

const page = ({params}:{
    params: {
        slug:string[];
    }
}) => {

    if(params.slug?.length===2){
        return <p>viewing docs for the feature {params.slug[0]} and the concept {params.slug[1]}</p>;
    }
    else if(params.slug?.length===1){
        return <p>viewing docs for the feature {params.slug[0]}</p>;
    }
    
  return (
    <div>
      <h1>Docs home page</h1>
    </div>
  )
}

export default page
