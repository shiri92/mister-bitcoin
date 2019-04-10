import axios from "axios";
import UtilService from "../services/UtilService.js";

export default {
  getRate,
  getMarketPrice,
  getConfirmedTransactions
};

const MARKET_KEY = "Market";
const TRANSACTIONS_KEY = "TRANSACTIONS_KEY";

async function getRate(coins) {
  let res = await axios.get(
    `https://blockchain.info/tobtc?currency=USD&value=${coins}`
  );
  return res.data;
}

function getMarketPrice() {
  if (UtilService.loadFromStorage(MARKET_KEY)) {
    return Promise.resolve(UtilService.loadFromStorage(MARKET_KEY));
  } else {
    const api = `https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`;
    return axios.get(api).then(stats => {
      UtilService.saveToStorage(MARKET_KEY, stats);
      return stats;
    });
  }
}

function getConfirmedTransactions() {
  if (UtilService.loadFromStorage(TRANSACTIONS_KEY)) {
    return Promise.resolve(UtilService.loadFromStorage(TRANSACTIONS_KEY));
  } else {
    const api = `https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true`;
    return axios.get(api).then(stats => {
      UtilService.saveToStorage(TRANSACTIONS_KEY, stats);
      return stats;
    });
  }
}
