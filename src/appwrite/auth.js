import conf from '../conf/conf'
import {Account, ID, Client} from 'appwrite'

class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.ProjectURL)
            .setProject(conf.ProjectId);
        this.account = new Account(this.client);
    }

    async createAccount(email, name, password){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            return userAccount;
        }
        catch(err){
            throw err
        }

    }

    async login(email, password){
        try{
            return await this.account.createEmailSession(email, password)
        }
        catch(err){
            throw err
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get()
        }
        catch(err){
            throw err
        }
        return null;
    }

    async logout(){
        try{
            return await this.account.deleteSessions()
        }
        catch(err){
            throw err
        }
    }

    async deleteAccount(id){
        try{
        return await this.account.deleteIdentity(id)
        }
        catch(err){
            throw err
        }
    }
}

const authService = new AuthService()

export default authService;
