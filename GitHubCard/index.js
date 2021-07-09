import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
function cleanInput(response) {
  let args = {
    imageUrl: response.data.avatar_url,
    userName: response.data.name,
    userUserName: response.data.login,
    userLocation: response.data.location,
    userProfileUrl: response.data.html_url,
    userFollowers: response.data.followers,
    userFollowing: response.data.following,
    userBio: response.data.bio,
  };
  return args;
}

let resp = axios.get('https://api.github.com/users/sb7297').then(response => {
  console.log(response.data);
  let cards = document.querySelector(".cards");
  cards.appendChild(cardMaker(cleanInput(response)));
});
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["kaegi", "ankidroid", "FooSoft", "SerenityOS", "yishn"];
followersArray.forEach(username => {
  let resp = axios.get(`https://api.github.com/users/${username}`).then(response => {
    let cards = document.querySelector(".cards");
    cards.appendChild(cardMaker(cleanInput(response)));
  });
});

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardMaker(args) {
  let card = document.createElement("div");
  card.classList.add("card");
  let img = document.createElement("img");
  img.src = args.imageUrl;
  let cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  card.appendChild(img);
  card.appendChild(cardInfo);

  let h3 = document.createElement("h3");
  h3.classList.add("name");
  h3.textContent = args.userName;

  let p1 = document.createElement("p");
  p1.classList.add("username");
  p1.textContent = args.userUserName;

  let p2 = document.createElement("p");
  p2.textContent = `Location: ${args.userLocation}`;

  let p3 = document.createElement("p");
  p3.textContent = "Profile:\n";
  let a = document.createElement("a");
  a.href = args.userProfileUrl;
  a.textContent = args.userProfileUrl;
  p3.appendChild(a);

  let p4 = document.createElement("p");
  p4.textContent = `Followers: ${args.userFollowers}`;

  let p5 = document.createElement("p");
  p5.textContent = `Following: ${args.userFollowing}`;

  let p6 = document.createElement("p");
  p6.textContent = `Bio: ${args.userBio}`;

  cardInfo.appendChild(h3);
  cardInfo.appendChild(p1);
  cardInfo.appendChild(p2);
  cardInfo.appendChild(p3);
  cardInfo.appendChild(p4);
  cardInfo.appendChild(p5);
  cardInfo.appendChild(p6);

  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
