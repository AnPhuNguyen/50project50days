const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value

    if(user) {
        getUser(user)

        search.value = ''
    }
})

async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)
        console.log(data)
        createUserCard(data)
        getRepos(username)
    } catch(err) {
        if(err.response.status == 404) {
            createErrorCard('No profile with this username')
        }
    }
}

function createUserCard(user) {
    const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h1>${user.login}</h1>
      <h2>${(user.name)?user.name:'< this user did not set their name >'}</h2>
      <p>${(user.bio)?user.bio:'< this user write nothing in their bio >'}</p>
      <ul>
        <li> ${user.followers} <strong>Followers</strong></li>
        <li> ${user.following} <strong>Following</strong></li>
        <li> ${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
    `
    main.innerHTML = cardHTML
    
}



async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')

        addReposToCard(data)
    } catch(err) {
        createErrorCard('Problem fetching repos')
        console.log(err)
    }
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos')

    repos.slice(0, 5).forEach(repo => {
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = '_blank'
        repoEl.innerText = repo.name

        reposEl.appendChild(repoEl)
    })
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `

    main.innerHTML = cardHTML
}


/**example json
 * {
    "login": "obra",
    "id": 45416,
    "node_id": "MDQ6VXNlcjQ1NDE2",
    "avatar_url": "https://avatars.githubusercontent.com/u/45416?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/obra",
    "html_url": "https://github.com/obra",
    "followers_url": "https://api.github.com/users/obra/followers",
    "following_url": "https://api.github.com/users/obra/following{/other_user}",
    "gists_url": "https://api.github.com/users/obra/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/obra/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/obra/subscriptions",
    "organizations_url": "https://api.github.com/users/obra/orgs",
    "repos_url": "https://api.github.com/users/obra/repos",
    "events_url": "https://api.github.com/users/obra/events{/privacy}",
    "received_events_url": "https://api.github.com/users/obra/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Jesse Vincent",
    "company": "@keyboardio ",
    "blog": "http://fsck.com",
    "location": "Berkeley, CA 94703",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 170,
    "public_gists": 12,
    "followers": 552,
    "following": 85,
    "created_at": "2009-01-09T20:24:15Z",
    "updated_at": "2025-09-10T18:30:26Z"
}
 */