import axios from "axios";
import UtilService from "../services/UtilService.js";

export default {
  getRate,
  getMarketPrice,
  getConfirmedTransactions
};

const MARKET_KEY = "Market";
const TRANSACTIONS_KEY = "TRANSACTIONS_KEY";
const BTC_KEY = 'BTC';

async function getRate(coins) {
  if (UtilService.loadFromStorage(BTC_KEY)) {
    return Promise.resolve(UtilService.loadFromStorage(BTC_KEY))
  } else {
    let res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`);
    UtilService.saveToStorage(BTC_KEY, res.data);
    return res.data;
  }
}

async function getMarketPrice() {
  if (UtilService.loadFromStorage(MARKET_KEY)) {
    return Promise.resolve(UtilService.loadFromStorage(MARKET_KEY));
  } else {
    const api = `https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`;
    let res = await axios.get(api)
    UtilService.saveToStorage(MARKET_KEY, res.data);
    return res.data;
  }
}

async function getConfirmedTransactions() {
  if (UtilService.loadFromStorage(TRANSACTIONS_KEY)) {
    return Promise.resolve(UtilService.loadFromStorage(TRANSACTIONS_KEY));
  } else {
    const api = `https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true`;
    let res = await axios.get(api)
    UtilService.saveToStorage(TRANSACTIONS_KEY, res.data);
    return res.data;
  }
}
