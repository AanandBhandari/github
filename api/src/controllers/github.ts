import { Request, Response } from "express";
import { failure, success } from "../utils/helper";
import GithubService from "../services/GithubService";
import { GetReposQuery, GetRepoParams } from "../interfaces/index.interface";

const Github = new GithubService();

export const getRepos = async (req: Request, res: Response) => {
  let repos = await Github.getRepos(req.query as GetReposQuery);
  return res.json(success(repos));
}

export const getRepoDetail = async (req: Request, res: Response) => {
  let repo = await Github.getRepoDetail(req.params as GetRepoParams);
  if (!repo) {
    return res.json(failure("Repo not found"));
  }
  return res.json(success(repo));
}