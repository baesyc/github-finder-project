//initiate classes
const github = new GitHub;
const ui = new UI;

//assign variable
const $user = document.querySelector('#search-user');


//add an event listener to key up event in $user
$user.addEventListener('keyup', e => {
  const $username = e.target.value;

  //validate whether search bar is empty or not
  if($username === '') {
    ui.clearProfile();
  }else {
    github.getProfile($username)
      .then(data => {
        //validate whether username exists in database
        if(data.profile.message === 'Not Found') {
          ui.showAlert('User does not exist', 'error');
        }else {
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  }
})