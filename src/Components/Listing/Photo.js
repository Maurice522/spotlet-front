import React,{useState} from 'react'

const Photo = () => {
    const [file, setFile] = useState();
    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <div>
        <div className='lbox'>
            <div className='row1'>
                <div className='uploadImage'>
                    <div className='button1'> <h2>Upload Image</h2>
                    <input type="file" className='inputD' onChange={handleChange} />
                    </div>
                </div>
            </div>
        </div>
        <img src={file}/>
    </div>
  )
}

export default Photo