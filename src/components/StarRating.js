import React,{useState} from 'react'

const StarRating = () => {
    const [rating, setRating]=useState(null)

    return (
        <>
        <div>
            
            {[...Array(5)].map((star,i)=>{
                const ratingValue=i+1
                const color=ratingValue <=rating ? '#ffc107' : '#e4e5e9'
                return(
                    <label key={i}>
                        <input type='radio' name='rating' value={ratingValue} onClick={()=> setRating(ratingValue)}/>
                        <i style={{color, margin:"2px"}}  className="fas fa-star star"></i>
                    </label>
                ) 
            })}
            
        </div>
        <p>Given rating:{rating}</p>
        </>
    )
}
// StarRating.defaultProps = {
//     color: '#f5f5f0',
//   }
export default StarRating
