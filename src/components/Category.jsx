export default function Category({imgsrc, name}){
    return (
        <div className='category'>
            <img src={imgsrc} alt={name} />
            <h2>{name}</h2>
        </div>
    )
}