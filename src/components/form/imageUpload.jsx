import React, { useState } from "react";
import { IoMdImages } from "react-icons/io";

const ImageUpload = ({ label, uplaodImage, setUploadImage }) => {
  const [imgSrc, setImgSrc] = useState(null);

  if (uplaodImage != null) {
    const file = uplaodImage[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target.result;
      setImgSrc(src);
    };
    reader.readAsDataURL(file);
  }
  return (
    <div>
      <div className="border border-dashed mt-5 p-10 rounded-md">
        {uplaodImage ? (
          <div className="justify-center flex">
            <img
              src={imgSrc}
              alt="Your bank slip"
              className="object-contain w-80 h-80"
            />
          </div>
        ) : (
          <div class="relative flex flex-col items-center">
            <input
              onChange={(e) => {
                if (e.target.files.length) {
                  setUploadImage(e.target.files);
                  console.log(uplaodImage);
                }
              }}
              required
              accept="image/*"
              type="file"
              class="bg-black w-full op absolute opacity-0"
            />
            <IoMdImages
              label="Choose file"
              labelPosition="before"
              size={35}></IoMdImages>

            <label
              for="file-upload"
              class="cursor-pointer bg-blue-500 py-2 px-4 rounded-lg hover:bg-blue-600">
              {label}
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
