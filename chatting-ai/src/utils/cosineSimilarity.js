import axios from "axios"

export const cosineSimilarity = async (content, messages) => {
    try {
        const payload = {
            content: content,
            questions: messages
        }

        console.log("Payload being sent to API:", payload);

        const response = await axios.post('http://localhost:8000/calculate_relevancy', payload,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log("Response: ", response.data);

        return response.data;
    } catch (error) {
        console.error('Error in cosine function:', error.message);
        throw error;
    }
}