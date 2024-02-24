import axios from "axios";
  
class UseApi {

    async get(url) {
        try {
        const response = await axios.get(url);
        return response.data;
        } catch (error) {
        console.error(error);
        }
    }
    
    async post(url, data) {
        try {
        const response = await axios.post(url, data);
        return response.data;
        } catch (error) {
        console.error(error);
        }
    }
    
    async put(url, data) {
        try {
        const response = await axios.put(url, data);
        return response.data;
        } catch (error) {
        console.error(error);
        }
    }
    
    async delete(url) {
        try {
        const response = await axios.delete(url);
        return response.data;
        } catch (error) {
        console.error(error);
        }
    }

    async getWithToken(url, token) {
        try {
        const response = await axios.get(url, {
            headers: {
            Authorization: `Bearer ${token}`,
            },
    });
    return response.data;
    }
    catch (error) {
        console.error(error);
    }
    }
}
export default new UseApi();