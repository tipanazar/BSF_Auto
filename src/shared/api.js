import axios from "axios";

const { REACT_APP_TELEGRAM_BOT_TOKEN, REACT_APP_CHAT_ID } = process.env;

export const sendDataApi = async (formData) => {
  const { data } = await axios.post(
    `https://api.telegram.org/bot${REACT_APP_TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${REACT_APP_CHAT_ID}&text=${formData}`,
    formData
  );
  return data;
};
