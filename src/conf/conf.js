const conf = {
    ProjectURL:   String(import.meta.env.VITE_APPWRITE_URL),
    ProjectId:    String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    DatabaseId:   String(import.meta.env.VITE_DATABASE_PROJECT_ID),
    CollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    BucketId:     String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}
export default conf