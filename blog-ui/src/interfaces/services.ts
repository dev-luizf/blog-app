export interface Crendentials {
    username: string;
    password: string;
}

export interface LoginResponse {
    access_token: string;
}

export interface Post {
    id: number;
    title: string;
    content: string;
    published: boolean;
    createdAt: string;
    updatedAt: string;
    authorId: number;
    author: string;
}

export interface NewPost {
    title: string;
    content: string;
}
