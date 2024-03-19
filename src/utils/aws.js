import AWS from "aws-sdk";

// Configure AWS SDK with your credentials
AWS.config.update({
  accessKeyId: "AKIAUKBVNXSGLNPF2XUZ",
  secretAccessKey: "ULErqFCoYBmhR2wdeglRYjQk3yvecHdXuFBuDvRT",
  region: "us-east-1",
});

const s3 = new AWS.S3();

// Specify the bucket name and the file key (path)
const bucketName = "veeauction";

export const uploadFileToS3 = async (file, onProgress) => {
  const fileKey = file.name;

  const params = {
    Bucket: bucketName,
    Key: fileKey,
    Body: file,
    ACL: "public-read",
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

export const deleteFileFromS3 = async (fileKey) => {
  const params = {
    Bucket: bucketName,
    Key: fileKey,
  };

  try {
    await s3.deleteObject(params).promise();
    console.log("File deleted successfully:", fileKey);
  } catch (error) {
    console.error("Error deleting file:", error);
    throw new Error("Error deleting file. Please try again.");
  }
};
