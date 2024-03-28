import conf from '../conf/conf'
import {ID, Client, Databases, Storage} from 'appwrite'

export class Service{
    client = new Client();
    database;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.ProjectURL)
        .setProject(conf.ProjectId);
        database = new Databases(this.client);
        bucket = new Storage(this.Storage);
    }

    async createPost({title, slug, content, status, userId}){
          try{
            return await this.database.createDocument(
                conf.DatabaseId,
                conf.CollectionId,
                slug,
                {
                    title,
                    content,
                    status,
                    userId
                }
            )
          }
          catch(err){
            throw err
          }
    }

    async updatePost(slug, {title, content, status}){
        try{
        return await this.database.updateDocument(
            conf.DatabaseId,
            conf.CollectionId,
            slug,
            {
                title,
                content,
                status
            }
        )
        }
        catch(err){
            throw err
        }
    }

    async deletePost(slug){
        try{
            await this.database.deleteDocument(
                conf.DatabaseId,
                conf.CollectionId,
                slug
            )
            return true
        }
        catch(err){
            return false
        }
        
    }

    
}


const service = new Service()
export default service