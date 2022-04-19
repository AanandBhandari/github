import {useState} from 'react'
import { getRepos } from '../../action/github'
import { Repos } from '../../interface/Github.interface'

const SearchRepos = () => {
    const [q, setQ] = useState('')
    const [repos, setRepos] = useState([])

    const handleChange = (e:any) => setQ(e.target.value)

    const searchRepos = async() => {
        let repos:any = await getRepos(q)
        setRepos(repos?.items)
    }
  return (
      <>
        <div className="columns is-mobile is-centered mt-6 mb-4">
            <div className="box">
        <div className="field has-addons">
            <div className="control">
                <input value={q} onChange={handleChange} className="input" type="text" placeholder="Find a repository"/>
            </div>
        <div className="control">
            <a onClick={searchRepos} className="button is-info">
            Search
            </a>
        </div>
        </div>
    </div>
    </div>
    <div className="is-mobile is-centered">
        {repos.map((repo:Repos) => (
           <div className="card mb-3" key={repo.id}>
           <header className="card-header">
             <p className="card-header-title">
                {repo.name}
             </p>
           </header>
           <div className="card-content">
             <div className="content">
               {repo.description}
               <br/>
               <a href="#">stars: {repo.stars}</a> <a href="#">forks: {repo.forks}</a> <a href="#">watchers: {repo.watchers}</a>
               <br/>
               <time>11:09 PM - 1 Jan 2016</time>
             </div>
           </div>
           <footer className="card-footer">
             <a href="#" className="card-footer-item">View</a>
           </footer>
         </div>
        ))}
    </div>
      </>
  )
}

export default SearchRepos