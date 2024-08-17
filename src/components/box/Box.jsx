import React,{useState,useEffect} from'react'
import './box.css'
const Box = ({item,index,className}) =>{
const [currentIndex,setCurrentIndex] = useState(0);

const [fade,setFade] = useState(true);

useEffect(()=>{
    if(!Array.isArray(item.paragraph) || item.paragraph.length === 0) return;

    const intervalId = setInterval(()=>{
        setFade(false)
        setTimeout(()=>{
            setCurrentIndex((prevIndex)=>(prevIndex + 1) % item.paragraph.length);
            setFade(true)
        },500)
    },3000)

  

    return () =>
        clearInterval(intervalId);
},[item.paragraph])

const renderText = (text) =>{
    return text.split('. ').map((part,i)=>(
        <React.Fragment key={i}>
            {part}.
            <p/>
        </React.Fragment>
    ))
}







return(
    <div className = {item.id === 2 ? `payWise__services-container_box service box background${item.id + 1}`: `payWise__services-container_box  background${item.id + 1}`}>
        <div>
        <h3 className={index === 1? "service__center":''} >{item.header}</h3> 
        {Array.isArray(item.secondHeader)&&item.secondHeader.length > 0 &&
        <h4 className={`fade-text ${fade ? 'fade-in':'fade-out'}`}>{item.secondHeader[currentIndex]}</h4>
        }

    
     
         <p className={`fade-text text-width ${fade?'fade-in':'fade-out'}`}>
{
    Array.isArray(item.paragraph)?
    renderText(item.paragraph[currentIndex])
    :renderText(item.paragraph)
}
         </p>
   
 
        </div>
 <img src={item.img} alt={`image ${index + 1}`} className={className}/>
    </div>
)

}

export default Box
