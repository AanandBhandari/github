class GithubService {

  async getRepos(query = {}) {
    return [
      'repo',
      'repo1',
    ]
  }

  async getRepoDetail(repo: string) {
    return {
      id:1,
      name: repo,
    }
  }
}

export default GithubService;
