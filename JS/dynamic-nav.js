// Select the target element
const container = document.querySelector(".main-wrap");

// Create the main navigation element
const navigation = document.createElement("nav");
navigation.classList.add("nav");

// Create the logo-wrap div
const logoWrap = document.createElement("div");
logoWrap.classList.add("logo-wrap");

// Create the logo icon
const logoIcon = document.createElement("img");
logoIcon.src = "/img/git-bash-icon.png";
logoIcon.alt = "";
logoIcon.classList.add("logo__icon");

// Create the logo tag
const logoTag = document.createElement("p");
logoTag.classList.add("logo__tag");
logoTag.innerText = "ITS Git Bash";

// Append the logo icon and tag to the logo-wrap div
logoWrap.appendChild(logoIcon);
logoWrap.appendChild(logoTag);

// Create the links list
const linkList = document.createElement("ul");
linkList.classList.add("link__list");


/****************LINKS****************** */
/****************LINKS****************** */
// Create a list item for the link
const linkItem1 = document.createElement("li");
linkItem1.classList.add("link");
// Create the link itself
const linkCreateNewRepo = document.createElement("a");
linkCreateNewRepo.href = "/html/create-and-link-new-repo.html";
linkCreateNewRepo.innerText = "Create & Link New Repository";
// Append the link to the list item
linkItem1.appendChild(linkCreateNewRepo);
// Append the list item to the links list
linkList.appendChild(linkItem1);

// Create a list item for the link
const linkItem2 = document.createElement("li");
linkItem2.classList.add("link");
const linkCloning = document.createElement("a");
linkCloning.href = "/html/cloning.html";
linkCloning.innerText = "Cloning";
// Append the link to the list item
linkItem2.appendChild(linkCloning);
// Append the list item to the links list
linkList.appendChild(linkItem2);

/****************LINKS****************** */
/****************LINKS****************** */


// Append the logo-wrap div and links list to the navigation
navigation.appendChild(logoWrap);
navigation.appendChild(linkList);

// Append the navigation to the container
container.appendChild(navigation);
