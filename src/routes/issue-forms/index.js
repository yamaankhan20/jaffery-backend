const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/IssuesController');
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join(__dirname, "../../public/uploads");
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });


router.post('/legal-assistance', UserController.legal_issues);
router.post('/virtual-clinic', UserController.virtual_clinic);
router.post('/professional-network', UserController.professional_network);
router.post('/business-network', upload.array("images", 7), UserController.business_network);

module.exports = router;
