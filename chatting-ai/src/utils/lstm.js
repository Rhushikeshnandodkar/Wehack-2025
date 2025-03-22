import axios from "axios"

export const lstm = async (messages) => {
    try {
        const payload = {
            question: messages
        }

        console.log("Payload being sent to API:", payload);

        const response = await axios.post(' http://localhost:8000/predict_spam/', payload,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log("Response: ", response.data);

        return response.data;
    } catch (error) {
        console.error('Error in lstm function:', error.message);
        throw error;
    }
}