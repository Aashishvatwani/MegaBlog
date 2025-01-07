import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Set the Appwrite endpoint
            .setProject(conf.appwriteProjectId); // Set the Appwrite project ID

        this.account = new Account(this.client);
    }

    // Method to create a new user account
    async createAccount({ email, password, name }) {
        try {
          // Generate valid userId
            const userAccount = await this.account.create(
                ID.unique(), // Unique user ID with valid format
                email,
                password,
                name // Name is passed as part of the user creation
            );

            // Automatically log in the user upon successful account creation
            if (userAccount) {
                try {
                    const session = await this.login({ email, password });
                    return session; // Return session if login is successful
                } catch (loginError) {
                    console.error("AuthService :: createAccount :: loginError", loginError);
                    return userAccount; // Return user account if login fails
                }
            }

            throw new Error("Account creation failed.");
        } catch (error) {
            console.error("AuthService :: createAccount :: error", error);
            if (error.response) {
                console.error(
                    "Appwrite Error Details:",
                    error.response.message,
                    error.response.code
                );
            }
            throw error;
        }
    }

    // Method to log in a user
    async login({ email, password }) {
        try {
            const session = await this.account.createEmailPasswordSession(
                email,
                password
            ); // Updated to use createEmailSession
            return session;
        } catch (error) {
            console.error("AuthService :: login :: error", error);
            if (error.response) {
                console.error(
                    "Appwrite Error Details:",
                    error.response.message,
                    error.response.code
                );
            }
            throw error;
        }
    }

    // Method to get the currently logged-in user
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error("AuthService :: getCurrentUser :: error", error);
            return null;
        }
    }

    // Method to log out the current user
    async logout() {
        try {
            await this.account.deleteSession("current");
            return true;
        } catch (error) {
            console.error("AuthService :: logout :: error", error);
            return false;
        }
    }
}

const authService = new AuthService();
export default authService;
