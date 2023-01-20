import axios from 'axios';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

export const GameCreate = async (user, score) => {
  const requestBody = {
    user,
    score,
  };
  await axios.post(`${baseUrl}H6gIAZEhgAvZvlVHsQOX/scores`, requestBody);
};

export const getUsers = async () => {
  const res = await axios.get(`${baseUrl}H6gIAZEhgAvZvlVHsQOX/scores`);
  return res.data;
};