const multer = require("multer");
const path = require("path");

const UPLOADS_FOLDER = "./uploads/files/";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOADS_FOLDER);
  },
  filename: function (req, file, cb) {
    const fileExt = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExt, "")
        .toLowerCase()
        .split(" ")
        .join("-") +
      "-" +
      Date.now();
    cb(null, fileName + fileExt);
  },
});

const uploader = multer({
  storage,
  limits: {
    fileSize: 10000000,
  },
  fileFilter: (req, file, cb) => {
    const supportedImage = /pdf/;
    const fileExt = path.extname(file.originalname);

    if (supportedImage.test(fileExt)) {
      cb(null, true);
    } else {
      cb(new Error("Must be a png/jpg/jpeg/webp image"));
    }
  },
});

module.exports = uploader;
