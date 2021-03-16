import axios from 'axios';

// https://api.hgbrasil.com/weather?key=354aa341&lat=-19.942701&lon=-43.4752353

export const key = "354aa341";

export default axios.create({
  baseURL: "https://api.hgbrasil.com",
});