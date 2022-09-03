import React,{useState} from 'react'

const Gst = () => {
    const [file, setFile] = useState();
    const handleChange = (e) => {
        setFile(() => [URL.createObjectURL(e.target.files[0])]);
        console.log(file);
    }
    const handleClick = () => {
        document.getElementById("inputD").click();
    }
    return (
        <div className='lbox'>
            <div className='row1'>
                <div className='coll1'>
                    <h2>GST Number</h2>
                    <input className="lginput" />
                </div>
            </div>
            <div className='row1'>
                    <div className='uploadImage'>
                        <div className='button1' onClick={handleClick}> <h2>Upload GST Docs</h2>
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
    )
}

export default Gst