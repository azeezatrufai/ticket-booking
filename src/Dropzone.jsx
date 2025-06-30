import React, { useState,useEffect, useCallback } from 'react';
import {useDropzone} from 'react-dropzone'


export default function Dropzone({onFileSelect}) {
     const [preview, setPreview] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const image = acceptedFiles[0]; 
    if (!image) return;

       setPreview(URL.createObjectURL(image));   
       onFileSelect(image);
  }, [onFileSelect]);

   useEffect(() => {
    return () => preview && URL.revokeObjectURL(preview);
  }, [preview]);

  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    accept: {
        'image/*' : []
    },
    maxFiles: 1,
          
});

   return (
    <div {...getRootProps()} 
    className={
          `flex flex-col items-center justify-center w-60 h-60 rounded-[32px]
           border-4 bg-[rgba(14, 70, 79, 1)] border-[rgba(36, 160, 181, 0.5)] cursor-pointer
           ${isDragActive
             ? 'border-cyan-400 bg-cyan-900/30'
             : 'border-cyan-600 bg-cyan-900/20 hover:bg-cyan-900/30'}`
        }
      >
        <input {...getInputProps()} />
        {/*  If we have a preview, show it; else show icon + text */}
      {preview ? (
        <img
          src={preview}
          alt="preview"
          className="object-cover w-full h-full rounded-[32px]"
        />
      ) : (
        <>
        <img src="/icon.svg" alt="Upload icon" className="w-[26.67px] h-[18.67px] mb-3 "  />
        <p className="font-Roboto text-center text-[16px] text-[#FAFAFA]">
          Drag & drop or click to <br /> upload
        </p>
           </>
           )}
      </div>
      
  )
}
