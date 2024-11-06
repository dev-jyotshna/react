import conf from "../conf/conf";
import { Databases } from 'appwrite';

export class Services{
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async createPost({title, slug, featuredImahe, status, userId}){
        
    }
}

const service = new Services()
export default service;