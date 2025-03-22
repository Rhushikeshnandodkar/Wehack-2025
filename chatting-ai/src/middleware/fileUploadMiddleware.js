import multer from 'multer';
const upload = multer({ storage: multer.memoryStorage() }); // Store in memory
export { upload };