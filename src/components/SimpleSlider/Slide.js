
const Slide = (props) => {

    return (
        <div className='slide' style={{borderColor: props.color, color:props.color}}>
            <img src={props.imgUrl} alt={props.text} />
            <h4>{props.title}</h4>
        </div>
    )
    
}

export default Slide;