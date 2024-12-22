const axios = require('axios');
const sharp = require('sharp');
const analyzeImage = require('../utils/analyzeImage');

const run = async (req, res) => {
    try {
        const { image, dict_of_vars } = req.body;
        //const base64Image = image.split(',')[1]; // Decoding the base64 image string

        // Convert base64 to Buffer
        //const imageBuffer = Buffer.from(base64Image, 'base64');
        //const processedImage = sharp(imageBuffer).toBuffer();
        //console.log(processedImage);

        // Call the image analysis function
        const responses = await analyzeImage(image, dict_of_vars);
        

        res.json({ message: "Image processed", data: responses, status: "success" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error processing image", error: error.message });
    }
};

module.exports = { run };
