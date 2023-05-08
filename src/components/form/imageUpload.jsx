import React, { useState } from "react";
import { IoMdImages } from "react-icons/io";

const ImageUpload = ({ label = "", uploadImage, setUploadImage, existingImg }) => {
  console.log('uploadImage: ', uploadImage);
  // console.log('existingImg: ', existingImg);
  const [imgSrc, setImgSrc] = useState(null);

  if (uploadImage != null) {
    const file = uploadImage[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target.result;
      setImgSrc(src);
    };
    reader.readAsDataURL(file);
  } 
  return (
    <div>
      <div className="border border-dashed mt-5 p-28  rounded-md">
        {uploadImage ? (
          <div className="justify-center flex flex-wrap">
             <label
              for="file-upload"
              className="border-1 py-2 px-4 rounded-lg hover:bg-blue-600 cursor-pointer">
              {label == "" ? null : `${label}`}
            </label>
              <input
                    onChange={(e) => {
                      if (e.target.files.length) {
                        setUploadImage(e.target.files);
                      }
                    } }
                    id="file-upload"
                    required
                    accept="image/*"
                    type="file"
                    className="opacity-0 cursor-pointer"/>
              <img
                src={imgSrc}
                alt="Your image"
                className="object-contain w-80 h-80" />
            </div>
        ) : (
          <div class="relative flex flex-col items-center">
            {existingImg && !uploadImage && (
              <img
              src={existingImg}
              alt="Your image"
              className="object-contain w-80 h-80"
            />
            )}
            <IoMdImages
              label="Choose file"
              labelPosition="after"
              size={35}></IoMdImages>

            <label
              for="file-upload"
              className="py-2 px-4 rounded-lg hover:bg-blue-600 cursor-pointer">
              {label == "" ? null : `${label}`}
            </label>
            <input
              onChange={(e) => {
                if (e.target.files.length) {
                  setUploadImage(e.target.files);
                }
              }}
              required
              accept="image/*"
              type="file"
              id="file-upload"
              className="form-input w-full py-2 cursor-pointer opacity-0 absolute"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
