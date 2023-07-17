import { useNavigate } from 'react-router-dom';

export default function Category({id, imgsrc, name}){

    const navigate = useNavigate();

    const handleCategory = (categoryname) =>{
        navigate( `/category/${categoryname}`)
      }
    return (
        <div className='category' onClick={() =>handleCategory(id)}>
            <img src={imgsrc} alt={name} />
            <h2>{name}</h2>
        </div>
    )
}