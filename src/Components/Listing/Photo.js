import React,{useState,useEffect} from 'react'

const Photo = () => {
    const [file, setFile] = useState();
    const handleChange=(e)=>{
        setFile( () => [URL.createObjectURL(e.target.files[0])]);
        console.log(file);
    }
    const handleClick=()=>{
        document.getElementById("inputD").click();
    }
  return (
    <div>
        <div className='lbox'>
            <div className='row1'>
                <div className='uploadImage'>
                    <div className='button1' onClick={handleClick}> <h2>Upload Image</h2>
                    <input type="file" id="inputD" className='inputD' onChange={handleChange} />
                    </div>
                </div>
            </div>
        </div>
        <img src={'blob:http://localhost:3000/70f34505-0b25-403e-9dc8-23fd4b1a190c'}/>
    </div>
  )
}

export default Photo