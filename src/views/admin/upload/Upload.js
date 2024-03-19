import React, { useState } from "react";
import { deleteFileFromS3 } from "utils/aws";
import { uploadFileToS3 } from "utils/aws";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileUrl, setFileUrl] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    try {
      if (!file) {
        alert("Please select a file.");
        return;
      }
      const fileUrl = await uploadFileToS3(file, (progress) => {
        setUploadProgress((progress.loaded / progress.total) * 100);
      });
      setFileUrl(fileUrl);
      alert("File uploaded successfully! URL: " + fileUrl);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert(error.message || "Error uploading file. Please try again.");
    }
  };
  const handleDelete = async () => {
    if (!fileUrl) {
      alert("No file uploaded to delete.");
      return;
    }

    const fileKey = fileUrl.substring(fileUrl.lastIndexOf("/") + 1);

    try {
      const files = await deleteFileFromS3(fileKey);
      console.log("files", files);
      setFile(null);
      setFileUrl("");
      alert("File deleted successfully!");
    } catch (error) {
      console.error("Error deleting file:", error);
      alert(error.message || "Error deleting file. Please try again.");
    }
  };

  return (
    <div>
      <h2>Upload File to AWS S3</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <button onClick={handleDelete}>Delete</button>

      {uploadProgress > 0 && (
        <p>Upload Progress: {uploadProgress.toFixed(2)}%</p>
      )}
      {fileUrl && <p>File URL: {fileUrl}</p>}
    </div>
  );
};

export default Upload;
