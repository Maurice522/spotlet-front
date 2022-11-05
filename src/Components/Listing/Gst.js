import { Clear } from '@mui/icons-material';
import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addLocation, selectLocationData, selectLocationId } from '../../redux/slices/locationSlice';
import { createTempLocation, deleteFiles, uploadGstDocs } from '../../services/api';

const Gst = ({showSection}) => {
    const [filesData, setFilesData] = useState([]);
    const [doc_no, setDoc_no] = useState("");
    const dispatch = useDispatch();
  const location_id = useSelector(selectLocationId);
  const location = useSelector(selectLocationData);

  useEffect(() => {
		location?.gst && setDoc_no(location.gst.doc_no);
    location?.gst && setFilesData(location.gst.docs);
	  }, [])
console.log(filesData);
  const handleChange = async(e) => {
    try {
        for (let i = 0; i <e.target.files.length; i++) {
            console.log(e.target.files[i]);
            const formData = new FormData();
            formData.append("pic", e.target.files[i]);
            const response = await uploadGstDocs(formData);
            setFilesData(prev => [...prev, {file : response.data.url, fileRef : response.data.fileRef}]);
        }
    } catch (error) {
        console.log(error);
    }
  };
    const handleClick = () => {
        document.getElementById("inputD").click();
    }
    const deleteImage = async(fileData, index) => {
      //console.log(fileRef);
      try {
        await deleteFiles({file : fileData.file, fileRef : fileData.fileRef});
        const newFilesData = filesData.filter((file, i) => i !== index);
        setFilesData(newFilesData);
      } catch (error) {
        toast.error(error.response.data);
      }
    }
    const handleSubmit = async(e) => {
      e.preventDefault();
      if(!doc_no.length || !filesData.length)
          return toast.error("Please fill all required fields");
      const files = filesData.map(fileData => fileData.file);
      const locData = {
        ...location,
        gst : {
          doc_no,
          docs : files
        },
      };
      dispatch(addLocation({...location, gst : {doc_no, docs : filesData}}));
      const form = {
        location_id,
        data: locData,
      };
      await createTempLocation(form);
      //console.log(locData);
      showSection("Bank Details");
    }
    return (
        <div className='lbox'>
            <div className='row1'>
                <div className='coll1'>
                    <h2>GST Number</h2>
                    <input className="lginput" onChange={(e) => setDoc_no(e.target.value)} value={doc_no} />
                </div>
            </div>
            <div className='row1'>
                    <div className='uploadImage'>
                        <div className='button1' onClick={handleClick}> <h2 style={{fontSize:"15px"}}>Upload GST Docs</h2>
                            <input type="file" multiple id="inputD" className='inputD' onChange={handleChange} accept=".xlsx,.xls,,.doc, .docx,.ppt, .pptx,.txt,.pdf" />
                        </div>
                    </div>
                </div>
                <div className="row1" id="photo-sec-s">
          {filesData?.map((fileData, index) => {
            return (
              <div className="pict">
                <Clear
                  sx={{
                    cursor: "pointer",
                    marginLeft: "407px",
                    marginTop: "5px",
                    position: "absolute",
                  }}
                  onClick={() => deleteImage(fileData, index)}
                />
                <embed src={fileData.file} width="440px" height="180px"/>{" "}
              </div>
            );
          })}
        </div>
        <p style={{ color: "red" }}>Add minimum 5 documents</p>
                <div className="row1">
          <div className="coll1">
            <button
              className="continue"
              onClick={handleSubmit}
            >
              Continue
            </button>
          </div>
        </div>

        </div>
    )
}

export default Gst