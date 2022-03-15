import React, { useState } from "react";

import { useUpload } from "@hooks/upload";

const FileInput = ({
  onChange,
  file,
  name = "file",
  styles = {},
  className,
}: any) => {
  const { doUpload } = useUpload();

  const [fileName, setFileName] = useState("");
  const [isUpload, setUpload] = useState(false);

  const handleFileChange = async (e: any) => {
    setFileName(e.target.files[0].name);
    setUpload(true);

    try {
      const url = await doUpload(e.target.files[0]);
      setUpload(false);
      onChange(url.replaceAll(" ", "_"), name);
    } catch (e) {
      setUpload(false);
      alert("File upload error!");
    }
  };

  return (
    <div className="relative" style={styles}>
      <div className={`input-file input df ai-center ${className}`}>
        <div className="text-ellipsis">{fileName || file}</div>
      </div>
      <input type="file" className="input" onChange={handleFileChange} />

      {isUpload && (
        <div
          className="spinner-border spinner-border-sm spinner"
          role="status"
          style={{ position: "absolute", top: "15px", right: "10px" }}
        >
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default FileInput;
