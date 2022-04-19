import axios from "axios";

const github = {
  getRepos: (q:string, sort:string, order:string, page:number, per_page:number) => axios.get(`/api/github/repos?q=${q}&sort=${sort}&order=${order}&page=${page}&per_page=${per_page}`),
  
  getRepoDetail: (org:string, repo:string) => axios.get(`/api/github/repo/${org}/${repo}`),
};

export default {
  ...github
};
