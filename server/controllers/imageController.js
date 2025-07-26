import userModel from "../models/userModel.js"
import FormData from "form-data"
import axios from "axios"

export const generateImage = async (req, res) => {
    try {
        const { prompt } = req.body;
        const userId = req.userId;

        if (!prompt || !userId) {
            return res.status(400).json({ success: false, message: 'Missing Details' });
        }

        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        if (user.creditBalance <= 0) {
        return res.status(200).json({
            success: false,
            message: 'No Credit Balance',
            creditBalance: 0
        });
}


        const formData = new FormData();
        formData.append('prompt', prompt);

        const { data } = await axios.post(
            'https://clipdrop-api.co/text-to-image/v1',
            formData,
            {
                headers: {
                    ...formData.getHeaders(),
                    'x-api-key': process.env.CLIPDROP_API
                },
                responseType: 'arraybuffer'
            }
        );

        const base64Image = Buffer.from(data, 'binary').toString('base64');
        const resultImage = `data:image/png;base64,${base64Image}`;

        // Deduct 1 credit
        user.creditBalance -= 1;
        await user.save();

        res.json({
            success: true,
            message: "Image Generated",
            creditBalance: user.creditBalance,
            resultImage
        });
    } catch (error) {
        console.error("Image Generation Error:", error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};
