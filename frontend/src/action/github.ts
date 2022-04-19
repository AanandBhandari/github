import { AxiosResponse } from "axios";
import { GetRepoDetail, GetRepos } from "../interface/Axios.interface";
import Requests from "../utils/Requests";

export const getRepos = async (q="", sort="", order="", page=1, per_page=10) => {
  try {
    const { data }: AxiosResponse<GetRepos> = await Requests.getRepos(q, sort, order, page, per_page);
    return data.data;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

export const getRepoDetail = async (org:string, repo:string) => {
    try {
      const { data }: AxiosResponse<GetRepoDetail> = await Requests.getRepoDetail(org, repo);
      return data.data;
    } catch (error) {
      console.log({ error });
      return null;
    }
  };
