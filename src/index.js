const { Storage } = require("@google-cloud/storage");
const path = require("path");

const storage = new Storage();

const filePath = path.join(__dirname, "sample.json");
const bucketName = "anico-iaa-jupiter-stage";

async function uploadFile() {
  console.log(`about to upload ${filePath}`);
  await storage.bucket(bucketName).upload(filePath);

  console.log(`${filePath} uploaded to ${bucketName}`);
}

uploadFile().catch(error => {
  console.error(error, error.stack);
});

