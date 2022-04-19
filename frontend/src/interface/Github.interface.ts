export interface Repos {
  id: string,
  name: string,
  description: string,
  owner: string,
  stars: number,
  forks: number,
  watchers: number,
  updatedAt: string,
}

export interface RepoDetail {
  id: string,
  name: string,
  description: string,
  url: string,
  owner: string, 
  ownerUrl: string,
  stars: number,
  forks: number,
  issues: number,
  watchers: number,
  defaultBranch: string,
  createdAt: string,
  updatedAt: string,
}
