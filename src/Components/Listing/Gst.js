import { Clear } from '@mui/icons-material';
import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addLocation, selectLocationData, selectLocationId } from '../../redux/slices/locationSlice';
import { createTempLocation, deleteFiles, uploadGstDocs } from '../../services/api';

const Gst = ({showSection}) => {
    const [files, setFiles] = useState([]);
    const [doc_no, setDoc_no] = useState("");
    const [refs, setRef] = useState([]);
    const dispatch = useDispatch();
  const location_id = useSelector(selectLocationId);
  const location = useSelector(selectLocationData);

  useEffect(() => {
		location?.gst && setDoc_no(location.gst.doc_no);
    location?.gst && setFiles(location.gst.docs);
	  }, [])

  const handleChange = async(e) => {
    try {
        for (let i = 0; i <e.target.files.length; i++) {
            console.log(e.target.files[i]);
            const formData = new FormData();
            formData.append("pic", e.target.files[i]);
            const response = await uploadGstDocs(formData);
            setFiles(prev => [...prev, response.data.url]);
            setRef(prev => [...prev, response.data.fileRef]);
        }
    } catch (error) {
        console.log(error);
    }
  };
    const handleClick = () => {
        document.getElementById("inputD").click();
    }
    const deleteImage = async(file, fileRef) => {
      //console.log(fileRef);
      try {
        await deleteFiles({file, fileRef : fileRef});
        const newFiles = files.filter(file => file !== file);
        const newRefs = refs.filter(ref => ref._location.path_ !== fileRef._location.path_)
        setRef(newRefs);
        setFiles(newFiles);
      } catch (error) {
        toast.error(error.response.data);
      }
    }
    const handleSubmit = async(e) => {
      e.preventDefault();
      if(!doc_no.length || !files.length)
          return toast.error("Please fill all required fields");
      const locData = {
        ...location,
        gst : {
          doc_no,
          docs : files
        },
      };
      dispatch(addLocation(locData));
      const form = {
        location_id,
        data: locData,
      };
      await createTempLocation(form);
      //console.log(locData);
      showSection("Term & Condition");
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
                        <div className='button1' onClick={handleClick}> <h2>Upload GST Docs</h2>
                            <input type="file" multiple id="inputD" className='inputD' onChange={handleChange} accept=".xlsx,.xls,,.doc, .docx,.ppt, .pptx,.txt,.pdf" />
                        </div>
                    </div>
                </div>
                <div className="row1" id="photo-sec-s">
          {files?.map((file, index) => {
            return (
              <div className="pict">
                <Clear
                  sx={{
                    cursor: "pointer",
                    marginLeft: "407px",
                    marginTop: "5px",
                    position: "absolute",
                  }}
                  onClick={() => deleteImage(file, refs[index])}
                />
                <embed src={file} width="440px" height="180px"/>{" "}
              </div>
            );
          })}
        </div>
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