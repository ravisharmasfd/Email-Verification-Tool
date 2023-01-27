import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname,'./public'));
    },
    filename: (req, file, cb) => {
      const d = new Date()
      const filename = (Math.random(100000000)*100000000).toString()+file.originalname;
      cb(null, filename);
    },
  });
  
  const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'text/csv') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const upload = multer({ storage: storage, fileFilter: fileFilter });
  export default upload;
