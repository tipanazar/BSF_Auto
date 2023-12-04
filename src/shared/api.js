import axios from "axios";

const {
  REACT_APP_TELEGRAM_BOT_TOKEN,
  REACT_APP_CHAT_ID_1,
  REACT_APP_CHAT_ID_2,
} = process.env;

export const sendDataApi = async (formData) => {
  const data = await Promise.all([
    axios.post(
      `https://api.telegram.org/bot${REACT_APP_TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${REACT_APP_CHAT_ID_1}&text=${formData}`,
      formData
    ),
    axios.post(
      `https://api.telegram.org/bot${REACT_APP_TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${REACT_APP_CHAT_ID_2}&text=${formData}`,
      formData
    ),
  ]);
  return data;
};
