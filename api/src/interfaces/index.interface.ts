export interface GetReposQuery {
    q?: string;
    sort?: string;
    order?: string;
    page?: number;
    per_page?: number;
}

export interface GetRepoQuery {
    orgName?: string;
    repoName?: string;
}