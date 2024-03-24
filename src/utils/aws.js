import AWS from "aws-sdk";
import { toast } from "react-hot-toast";

// Configure AWS SDK with your DigitalOcean Spaces credentials and endpoint
const spacesEndpoint = new AWS.Endpoint("nyc3.digitaloceanspaces.com");
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  accessKeyId: "DO00QWUMPHWUBAM9PRYE",
  secretAccessKey: "voFh7cMSqvPT1/jTbErkuHkPeTgSK3Ecp++TtJaDbDU",
});

// Specify the DigitalOcean Spaces bucket name
const bucketName = "trenova";

// Function to upload a file to DigitalOcean Spaces and return its location and size in KB
export const uploadFileToS3 = async (file, onProgress) => {
  const fileKey = file.name;

  const params = {
    Bucket: bucketName,
    Key: fileKey,
    Body: file,
  };

  try {
    const response = await s3
      .upload(params)
      .on("httpUploadProgress", (progress) => {
        if (onProgress) {
          onProgress(progress);
        }
      })
      .promise();

    return response.Location;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw new Error("Error uploading file. Please try again.");
  }
};

// Function to delete a file from DigitalOcean Spaces and return its location and size in KB
export const deleteFileFromS3 = async (fileKey) => {
  try {
    // Get the file size before deletion
    const fileSize = await getFileSizeFromS3(fileKey);

    const params = {
      Bucket: bucketName,
      Key: fileKey,
    };

    const deletedFile = await s3.deleteObject(params).promise();
    console.log("File deleted successfully:", deletedFile);

    // Get the file size in MB
    const fileSizeMB = getFileSizeMB(fileSize);

    return {
      location: `https://${bucketName}.${spacesEndpoint.hostname}/${fileKey}`,
      size: fileSizeMB,
    };
  } catch (error) {
    console.error("Error deleting file:", error);
    toast.error("File not found. Kindly update to delete.");
    throw new Error("Error deleting file. Please try again.");
  }
};

// Helper function to calculate file size in MB
const getFileSizeMB = (bytes) => {
  return bytes / (1024 * 1024); // Convert bytes to MB
};

// Function to get the file size from DigitalOcean Spaces
const getFileSizeFromS3 = async (fileKey) => {
  const params = {
    Bucket: bucketName,
    Key: fileKey,
  };

  try {
    const data = await s3.headObject(params).promise();
    return data.ContentLength; // Return file size in bytes
  } catch (error) {
    console.error("Error getting file size from DigitalOcean Spaces:", error);
    throw new Error(
      "Error getting file size from DigitalOcean Spaces. Please try again."
    );
  }
};
