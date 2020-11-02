import axios from "axios";

// little config creation for all responses callin g unsplash
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID -f-xWkmfLsII02rsfr_IJNSAswufGeXkp3oI5rCBLss",
  },
});
