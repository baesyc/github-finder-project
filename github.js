class GitHub{
  constructor(){
    this.client_id = '8ed7ca3f30ed4eb9ef5c';
    this.client_secret = '501ec25be8d5d98a43b27284dec926a7689f5794';
    this.repo_count = 5;
    this.sort = "created: asc";
  }

  async getProfile(username) {
    const profileRes = await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoRes = await fetch(`https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&count=${this.repo_count}&sort=${this.sort}`);

    const repos = await repoRes.json();
    const profile = await profileRes.json();

    return {
      profile,
      repos
    }
  }
}