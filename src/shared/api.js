import axios from "axios";

const telegram_bot_token = "6459758252:AAHDu-GegzsU2084iQTC2cWfFC4QwA4UbLs";
const chat_id = "713610343";

export const sendDataApi = async (formData) => {
  console.log("formData: ", formData);
  const { data } = await axios.post(
    `https://api.telegram.org/bot${telegram_bot_token}/sendMessage?chat_id=${chat_id}&text=${formData}`,
    formData
  );
//   console.log("Data: ", data);
  return data;
};
