import { RepoDetail, Repos } from "./Github.interface";
interface ServerData {
  status: string;
  message?: string;
}

export interface GetRepos extends ServerData {
  data: Repos[];
}

export interface GetRepoDetail extends ServerData {
  data: RepoDetail | null;
}

