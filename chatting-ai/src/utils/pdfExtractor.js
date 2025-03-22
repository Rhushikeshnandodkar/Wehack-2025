import axios from "axios";

export const pdfExtractor = async (content) => {
    try {
        const payload = {
            text: content
        }

        console.log("Payload being sent to API:", payload);

        const response = await axios.post('http://localhost:8001/class_insights/', payload,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log("Response: ", response.data);

        return response.data;
    } catch (error) {
        console.error('Error in pdfExtractor function:', error.message);
        throw error;
    }
}

