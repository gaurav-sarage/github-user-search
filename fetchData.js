// Fetch the default data

fetchDefault();

async function fetchDefault() {
    const res = await fetch("https://api.github.com/users/octocat");
    const defaultData = await res.json();

    fillData(defaultData);
}

// Get user input

document.querySelector("#search").addEventListener("submit", (e) => {
    e.preventDefault();
    const userInput = document.querySelector("#username").value;
    const alert = document.querySelector(".alert");

    if (userInput) {
        fetchData();
        async function fetchData() {
            const res = await fetch("https://api.github.com/users/" + userInput);
            if (res.status === 200) {
                const data = await res.json();
                document.querySelector(".user-data").remove();
                fillData(data);
                alert.classList.add("hidden");
            } else {
                // no result
                alert.classList.remove("hidden");
            }
        }
    }
});

// Fill data

function fillData(data) {
    const articleSection = document.querySelector("#user");
    const articleTemplate = document.querySelector("#user-template");
    const user = document.importNode(articleTemplate.content, true);

    const userName = user.querySelector(".user--name");
    const userAvatar = user.querySelector(".user--avatar");
    const userLogin = user.querySelector(".user--login");
    const userJoined = user.querySelector(".user--joined");
    const userBio = user.querySelector(".user--bio");
    const userRepos = user.querySelector(".user--repos");
    const userFollowers = user.querySelector(".user--followers");
    const userFollowing = user.querySelector(".user--following");
    const userLocation = user.querySelector(".user--location");
    const userBlog = user.querySelector(".user--blog");
    const userTwitter = user.querySelector(".user--twitter-username");
    const userCompany = user.querySelector(".user--company");

    if (data.name === null) {
        userName.innerText = data.login;
    } else {
        userName.innerText = data.name;
    }

    userLogin.innerText = "@" + data.login;
    userAvatar.setAttribute("src", data.avatar_url);

    const date = new Date(data.created_at);
    const month = date.toLocaleString("default", { month: "short" });
    userJoined.innerText = "Joined " + date.getDate() + " " + month + " " + date.getFullYear();

    if (data.bio === null) {
        userBio.innerText = "This profile has no bio";
    } else {
        userBio.innerText = data.bio;
    }

    userRepos.innerText = data.public_repos;
    userFollowers.innerText = data.followers;
    userFollowing.innerText = data.following;

    if (data.location === null) {
        userLocation.innerText = "Not Available";
        userLocation.parentElement.classList.add("opacity-50");
    } else {
        userLocation.innerText = data.location;
    }

    if (data.blog === "") {
        userBlog.innerText = "Not Available";
        userBlog.parentElement.classList.add("opacity-50");
        userBlog.classList.remove("hover:underline");
    } else {
        userBlog.innerText = data.blog;
        userBlog.setAttribute("href", data.blog);
    }

    if (data.twitter_username === null) {
        userTwitter.innerText = "Not Available";
        userTwitter.parentElement.classList.add("opacity-50");
        userTwitter.classList.remove("hover:underline");
    } else {
        userTwitter.innerText = "@" + data.twitter_username;
        userTwitter.setAttribute("href", "https://twitter.com/" + data.twitter_username);
    }

    if (data.company === null) {
        userCompany.innerText = "Not Available";
        userCompany.parentElement.classList.add("opacity-50");
        userCompany.classList.remove("hover:underline");
    } else {
        userCompany.innerText = data.company;
        let text = data.company;
        text = text.replace("@", "");
        userCompany.setAttribute("href", "https://github.com/" + text);
    }

    articleSection.appendChild(user);
}