class UI {
  constructor() {
    this.profile = document.querySelector('#profile');
  }

  showRepos(repos) {
    let output = '';

    repos.forEach(repo => {
      output += `
      <div class="row repo-row">
        <div class="col-md-4"><a href="${repo.html_url}" target="_blank">${repo.name}</a></div>
        <div class="col-md-8 stat-col">
          <span class="badge badge-primary">Stargazers Count: ${repo.stargazers_count}</span>
          <span class="badge badge-secondary">Forks Count: ${repo.forks_count}</span>
          <span class="badge badge-info">Watchers Count: ${repo.watchers_count}</span>
          <span class="badge badge-warning">Open Issues Count: ${repo.open_issues_count}</span>
        </div>
      </div>
      `;
    })
    document.querySelector('#repos').innerHTML = output;
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body profile-card mt-3">
    <div class="row">
      <div class="col-md-3">
        <!-- img and view profile button -->
        <img src="${user.avatar_url}" class="img-fluid rounded mb-2">
        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block" id="view-profile-btn">View ${user.login}'s Profile</a>
      </div>
      <div class="col-md-9">
        <!-- badges and user information -->
        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
        <span class="badge badge-info">Followers: ${user.followers}</span>
        <span class="badge badge-warning">Following: ${user.following}</span>
        <ul class="list-group mt-3">
          <li class="list-group-item">Company: ${user.company}</li>
          <li class="list-group-item">Website: ${user.blog}</li>
          <li class="list-group-item">Location: ${user.location}</li>
          <li class="list-group-item">Member Since: ${user.created_at}</li>
        </ul>
      </div>
    </div>
  </div>
  <h2>${user.login}'s Latest Repos</h2>
  <div class="row">
    <div class="col-md-4 text-danger">Repo Name</div>
    <div class="col-md-8 text-danger">Repo Stats</div>
  </div>
  <div class="card card-body repos-card" id="repos"></div>
    `;
  }


  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const searchContainer = document.querySelector('.search-container');
    const searchCard = document.querySelector('.search-card');

    searchContainer.insertBefore(div, searchCard);

    setTimeout(() => {
      this.clearAlert();
    }, 3000)
  }

  clearAlert() {
    const alert = document.querySelector('.alert');

    if(alert) {
      alert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }
}