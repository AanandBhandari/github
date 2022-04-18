import axios from 'axios'
import { GetReposQuery, GetRepoQuery} from '../interfaces/index.interface'
class GithubService {

  async getRepos(query = {}) {
    const {q, sort, order, page, per_page} = query as GetReposQuery
    let results = await axios.get(`https://api.github.com/search/repositories?q=${q}&sort=${sort}&order=${order}&page=${page}&per_page=${per_page}`)
    let repos = results.data?.items?.map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        owner: repo.owner.login,
        stars: repo.stargazers_count,
        forks: repo.forks,
        watchers: repo.watchers,
        updatedAt: repo.updated_at,
      })
    )
    return {
      total_count: results.data?.total_count,
      items: repos
    }
  }

  async getRepoDetail(query = {}) {
    const {orgName, repoName} = query as GetRepoQuery
    let result = await axios.get(`https://api.github.com/repos/${orgName}/${repoName}`)
    if (!result.data) {
      return null
    }
    return {
      id: result.data.id,
      name: result.data.name,
      description: result.data.description,
      url: result.data.html_url,
      owner: result.data.owner.login, 
      ownerUrl: result.data.owner.html_url,
      stars: result.data.stargazers_count,
      forks: result.data.forks,
      issues: result.data.open_issues,
      watchers: result.data.watchers,
      defaultBranch: result.data.default_branch,
      createdAt: result.data.created_at,
      updatedAt: result.data.updated_at,
    }
  }
}

export default GithubService;
