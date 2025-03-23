import axios from 'axios';

export const cosineSimilarity = async (content, messages) => {
    try {
        // Ensure payload is a valid JSON structure
        const payload = JSON.stringify({
            content: content,
            questions: messages
        });

        console.log("Payload being sent to API:", payload);

        const response = await axios.post(
            'http://127.0.0.1:8000/calculate_relevancy', 
            payload,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log("Response: ", response.data);

        return response.data;
    } catch (error) {
        console.error('Error in cosine function:', error.response?.data || error.message);
        throw error;
    }
};
