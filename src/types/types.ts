export interface IUserSchema {
  id?: string;
  username: string;
  email: string;
  fullName: string;
  emailVerified: boolean;
  isAdmin: boolean;
  watchHistory: Array<string>;
  avatar: string;
  coverImage: string;
  password: string;
  refreshToken: string;
}

export interface IVideoSchema {
  id?: string;
  videoFile: string;
  thumbnail: string;
  owner: string | undefined;
  title: string;
  description: string;
  duration: number;
  views: number;
  isPublished: boolean;
}
