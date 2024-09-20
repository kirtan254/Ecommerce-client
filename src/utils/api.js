import axios from "axios";
import login2 from "./context";
import logout2 from "./context";

const params = {
    headers: {
        Authorization: "Bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
    },
};

export const featchDataFromApi = async (URL) => {
    try {
        const { data } = await axios.get(process.env.REACT_APP_DEV_URL + URL, params);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const makePaymentRequest=axios.create({
    baseUrl:process.env.REACT_APP_DEV_URL,
    headers: {
        Authorization: "Bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
    }

})

const API_URL = process.env.REACT_APP_DEV_URL; // Replace with your Strapi URL

const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/local/register`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const login = async ({identifier, password}) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/local`, {
      identifier,
      password,
    });
    if (response.data.jwt) {
      localStorage.setItem('jwt', response.data.jwt);
      login2(); // Save the JWT in localStorage
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getProfile = async () => {
  const token = localStorage.getItem('jwt');
  if (!token) {
    throw new Error('No token found');
  }
  
  try {
    const response = await axios.get(`${API_URL}/api/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem('jwt'); 
  logout2();// Remove the JWT from localStorage
};

export { register, login, getProfile, logout };

