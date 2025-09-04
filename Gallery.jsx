
/*import React from 'react'

const Gallery = ({data}) => {
  return (
    <div>
       <div className="row">
          {data.map((image) =>
               <div className="col-md-3">
                <img src={image.webformatURL} alt="pictures" height="200" width="250"/>   
           </div>
          )}
       </div>
    </div>
  )
}

export default Gallery*/




/*import React from 'react'

const Gallery = ({data}) => {
  return (
    <div>
       <div className="row">
          {data.map((image) =>
               <div key={image.idMeal} className="col-md-3">
                <img 
                  src={image.strMealThumb} 
                  alt={image.strMeal} 
                  height="200" 
                  width="250"
                  style={{margin: '10px', borderRadius: '5px'}}
                />   
           </div>
          )}
       </div>
    </div>
  )
}

export default Gallery*/


import React from 'react'

const Gallery = ({ data }) => {
  return (
    <div className="row">
      {data.map((recipe) =>
        <div key={recipe.id} className="col-md-3">
          {/* Spoonacular uses 'image' and 'title' */}
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            height="200" 
            width="250"
            style={{ margin: '10px', borderRadius: '5px' }}
          />
          <p><strong>{recipe.title}</strong></p>  
        </div>
      )}
    </div>
  )
}

export default Gallery