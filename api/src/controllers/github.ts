import { Request, Response } from "express";
import { success } from "../utils/helper";
import GithubService from "../services/GithubService";

const Github = new GithubService();

export const getRepos = async (req: Request, res: Response) => {
  let repos = await Github.getRepos(req.query);
  return res.json(success(repos));
}

export const getRepoDetail = async (req: Request, res: Response) => {
  const { name } = req.params;
  let repos = await Github.getRepoDetail(name);
  return res.json(success(repos));
}