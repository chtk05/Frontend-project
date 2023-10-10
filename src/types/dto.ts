export interface userDTO {
  id: number
  username: string
  name: string
  registeredAt: string
}

export interface PostDTO {
  id: number
  videoTitle: string
  videoUrl: string
  comment: string
  rating: number
  thumbnailUrl: string
  creatorName: string
  creatorUrl: string
  postedBy: userDTO
}

export interface ContentsDTO {
  data: PostDTO[]
}

export interface LoginDTO {
  username: string
  password: string
}

export interface CredentialDTO {
  accessToken: string
}
