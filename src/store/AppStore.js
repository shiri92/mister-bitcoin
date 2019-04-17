import { decorate, observable, computed, action } from 'mobx';
import UserService from '../services/UserService.js';
import BitcoinService from "../services/BitcoinService.js";
import ContactService from '../services/ContactService.js';


class AppStore {
    loggedUser = {};
    contacts = [];
    contact = {};

    async signUp(user) {
        let currUser = await UserService.signUp(user);
        this.loggedUser = currUser;
    }

    async queryLoggedUser() {
        let loggedUser = await UserService.getUser();
        this.loggedUser = loggedUser;
    }

    async getRate(coins) {
        return await BitcoinService.getRate(coins)
    }

    async queryContacts(filterBy) {
        let contacts = await ContactService.getContacts(filterBy);
        this.contacts = contacts;
    }

    async queryEmptyContact() {
        let contact = await ContactService.getEmptyContact();
        this.contact = contact;
    }

    async queryContactById(contactId) {
        let contact = await ContactService.getContactById(contactId);
        this.contact = contact;
    }

    async saveContact(contact) {
        await ContactService.saveContact(contact);
    }

    async deleteContact(contactId) {
        let contacts = await ContactService.deleteContact(contactId);
        this.contacts = contacts;
    }

    get getLoggedUser() {
        return this.loggedUser;
    }
}

decorate(AppStore,
    {
        loggedUser: observable,
        contacts: observable,
        contact: observable,
        signUp: action,
        getRate: action,
        queryContacts: action,
        queryEmptyContact: action,
        queryContactById: action,
        saveContact: action,
        deleteContact: action,
        queryLoggedUser: action,
        getLoggedUser: computed
    })

const appStore = new AppStore();
export default appStore;