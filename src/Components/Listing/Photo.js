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
            <div className='row1'>
                <div className='pict'></div>
                <div className='pict'></div>
            </div>
            <div className='row1'>
                <div className='pict'></div>
                <div className='pict'></div>
            </div>
        </div>
        
    </div>
  )
}

export default Photo