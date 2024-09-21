import './createpost.scss';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import apiRequest from './../../lib/apiRequest.js';
import 'react-quill/dist/quill.snow.css';
import UploadWidget from './../../components/UploadWidget/UploadWidget.jsx';
import Loader from '../../components/loader/loading.jsx';
import { toast } from 'react-toastify';
function CreatePost(){
  const categories = {
    categories:["Fashion","Food","Coding","Style","Travel","Culture","Entertainment","Technology"]
}
    const [desc,setDesc] = useState('');
    const [loading,setloading] = useState(false);
    const [value, setValue] = useState({
      title:'',
      coverImage:'https://images.pexels.com/photos/2457284/pexels-photo-2457284.jpeg',
      summary:'',
      categories:'Fashion'
    });
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setValue((prev) => ({
          ...prev,
          [name]: value
      }));
    }

    const handleSubmit = async e => {
      e.preventDefault();
      try {
      setloading(true);
      const post = await apiRequest.post('/post',{
        title:value.title,
        coverImage:value.coverImage,
        description:desc,
        summary:value.summary,
        catogries:value.categories})  
        toast.success('Create Successfully');
      } catch (error) {
        toast.error('Something went wrong');
      }finally{
        setloading(false);
      }
   
    }
return (<div className="createpost-container">
     {loading && <Loader/>}
    <div className="inner-container">
      <input type='text' placeholder='Title' value={value.title} onChange={handleChange} name='title' required/>
      <div className="cover-photo" style={{backgroundImage:`url(${value.coverImage})`}}>
       <UploadWidget uwConfig={{
    cloudName: "dwvvhxbgy",
    uploadPreset: "blogApp",
    multiple: false,
    maxImageFileSize: 2000000,
    folder: "profile",
  }} setCoverImage={setValue}/>
      </div>
      <div className="description">
      <ReactQuill theme="snow" value={desc} onChange={setDesc} name='description' placeholder='Description'/>
      </div>
      <input type='text' name='summary' placeholder='Summary' value={value.summary} onChange={handleChange}/>
      <div className="submit">
      <select name='categories' onClick={handleChange}>
        {categories.categories.map((item,index) => (<option value={item} key={index}>{item}</option>))}
      </select>
      <button onClick={handleSubmit}>Save</button>
      </div>
    </div>
</div>);
}

export default CreatePost;