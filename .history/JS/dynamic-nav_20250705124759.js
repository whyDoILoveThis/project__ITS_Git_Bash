const head = document.getElementsByTagName('head')[0];
const tabIcon = document.createElement("link");
tabIcon.href = "/img/git-bash-icon.png";
tabIcon.rel = "icon";
head.appendChild(tabIcon);

const articleWrap = document.querySelector(".article-wrap");

const copyright = document.createElement("p");
copyright.classList.add("copyright");

articleWrap.appendChild(copyright);

// Select the target element
const container = document.querySelector(".main-wrap");

// Create the main navigation element
const navigation = document.createElement("nav");
navigation.classList.add("nav");

function expandNav(){
    navigation.classList.toggle("nav-expanded")
}

const navToggler = document.createElement("img");
navToggler.src = "/img/icon-nav-toggler.png";
navToggler.classList.add("nav-toggler");
navToggler.addEventListener("click", expandNav);



// Create the logo-wrap div
const logoWrap = document.createElement("div");
logoWrap.classList.add("logo-wrap");

// Create the logo icon
const logoIcon = document.createElement("img");
const homeLink = document.createElement("a");
homeLink.href = "/index.html";
logoIcon.src = "/img/git-bash-icon.png";
logoIcon.alt = "";
logoIcon.classList.add("logo__icon");
homeLink.appendChild(logoIcon);


// Create the logo tag
const logoTag = document.createElement("p");
logoTag.classList.add("logo__tag");
logoTag.innerText = "ITS Git Bash";


const darkModeTogglerWrap = document.createElement("div");
darkModeTogglerWrap.classList.add("dark-mode-toggler-wrap");
const darkModeToggler = document.createElement("img");
darkModeTogglerWrap.appendChild(darkModeToggler);
darkModeToggler.src = "/img/icon-brightness-dim.png";
darkModeToggler.style.width = "25px";
darkModeToggler.classList.add(".dark-mode-toggler");

const article = document.querySelector('.article')


darkModeToggler.addEventListener("click", toggleBrightness);

const otherGuidesWrap = document.createElement("div");
otherGuidesWrap.classList.add("other-guides-wrap");

const otherGuides = document.createElement("h3");
otherGuides.innerText = "Other Guides";
otherGuides.classList.add('other-guides-heading');
otherGuides.style.textAlign = "center";
otherGuides.style.marginBottom = "0";
otherGuides.style.marginTop = "0.5rem";

const linkBash = document.createElement('a');
const imgBash = document.createElement("img");
linkBash.classList.add('guide-link');
imgBash.src = "/img/firebase-icon.png";
linkBash.href = "https://its-firebase.vercel.app";
linkBash.appendChild(imgBash);
otherGuidesWrap.appendChild(linkBash);
// another
const linkReact18 = document.createElement('a');
const imgReact18 = document.createElement("img");
linkReact18.classList.add('guide-link');
imgReact18.src = "/img/learn-react18-icon.png";
linkReact18.href = "https://learn-react18.vercel.app";
linkReact18.appendChild(imgReact18);
otherGuidesWrap.appendChild(linkReact18);




const infoBoxes = document.querySelectorAll('.btn--more-info-box');


// Check if 'bright' is stored in localStorage
const storedBright = localStorage.getItem('bright');

// Initialize 'bright' with the stored value (or default to false if not found)
let bright = storedBright === 'false';


function toggleBrightness() {
    bright = !bright;
    
    // Store the updated 'bright' value in localStorage
    localStorage.setItem('bright', bright);

 // Update UI and apply styles based on 'bright' state

    if(bright){
    fadeOutAndChange(darkModeToggler, "/img/icon-brightness-bright.png");
    document.body.style.backgroundColor = 'rgb(224, 224, 224)';
    article.style.backgroundColor = 'rgb(241, 241, 241)';
    article.style.color = '#202020';
    copyright.style.color = 'black';
    infoBoxes.forEach(infoBox => {
        infoBox.style.backgroundColor = '#eeeeee';
        infoBox.style.color = '#202020';
    });
    } else {
        fadeOutAndChange(darkModeToggler, "/img/icon-brightness-dim.png");
        document.body.style.backgroundColor = 'rgb(36, 31, 35)';
        article.style.backgroundColor = 'rgb(49, 49, 49)';
        article.style.color = 'rgba(255, 255, 255, 0.90)';
        copyright.style.color = 'white';
        infoBoxes.forEach(infoBox => {
            infoBox.style.backgroundColor = '#363232';
            infoBox.style.color = 'rgba(255, 255, 255, 0.90)';
        });
    }
}

function fadeOutAndChange(element, newImageSrc) {
    element.style.opacity = 0;
    setTimeout(() => {
        
        element.src = newImageSrc;
        element.style.opacity = 1;
    }, 200); // Adjust the time to match your CSS transition duration
}

// Call toggleBrightness to initialize UI based on stored value
toggleBrightness();


// Append the logo icon and tag to the logo-wrap div
logoWrap.appendChild(navToggler);
logoWrap.appendChild(homeLink);
logoWrap.appendChild(logoTag);



// Create the links list
const linkList = document.createElement("ul");
linkList.classList.add("link__list");


const quickRefs = document.createElement("h3");
quickRefs.innerText = "Quick References";
quickRefs.classList.add('quick-ref-heading');
quickRefs.style.textAlign = "center";
quickRefs.style.marginBottom = "0";
quickRefs.style.marginTop = "3rem";
linkList.appendChild(quickRefs);
/****************LINKS****************** */
/****************LINKS****************** */
// Create a list item for the link
const linkItem1 = document.createElement("li");
linkItem1.classList.add("link");
// Create the link itself
const linkCreateNewRepo = document.createElement("a");
linkCreateNewRepo.href = "/html/create-and-link-new-repo.html";
linkCreateNewRepo.innerText = "🏗️Create & Link New Repository";
// Append the link to the list item
linkItem1.appendChild(linkCreateNewRepo);
// Append the list item to the links list
linkList.appendChild(linkItem1);

// Create a list item for the link
const linkItem2 = document.createElement("li");
linkItem2.classList.add("link");
const linkCloning = document.createElement("a");
linkCloning.href = "/html/cloning.html";
linkCloning.innerText = "👯‍♀️Cloning";
// Append the link to the list item
linkItem2.appendChild(linkCloning);
// Append the list item to the links list
linkList.appendChild(linkItem2);

const linkItem3v1 = document.createElement("li");
linkItem3v1.classList.add("link");
const linkEasyAmend = document.createElement("a");
linkEasyAmend.href = "/html/commit.html";
linkEasyAmend.innerText = "✅Commit";
linkItem3v1.appendChild(linkEasyAmend);
linkList.appendChild(linkItem3v1);

const linkItem3 = document.createElement("li");
linkItem3.classList.add("link");
const linkCommit = document.createElement("a");
linkCommit.href = "/html/commit.html";
linkCommit.innerText = "✅Commit";
linkItem3.appendChild(linkCommit);
linkList.appendChild(linkItem3);

const linkItem4 = document.createElement("li");
linkItem4.classList.add("link");
const linkPushPullAndFetch = document.createElement("a");
linkPushPullAndFetch.href = "/html/push-pull-and-fetch.html";
linkPushPullAndFetch.innerText = "🔃Push, Pull, and Fetch";
linkItem4.appendChild(linkPushPullAndFetch);
linkList.appendChild(linkItem4);

const linkItem7 = document.createElement("li");
linkItem7.classList.add("link");
const linkGitAlias = document.createElement("a");
linkGitAlias.href = "/html/git-alias.html";
linkGitAlias.innerText = "🧙‍♂️Git Alias";
linkItem7.appendChild(linkGitAlias);
linkList.appendChild(linkItem7);

const linkItem8 = document.createElement("li");
linkItem8.classList.add("link");
const linkBranches = document.createElement("a");
linkBranches.href = "/html/branches.html";
linkBranches.innerText = "🌿Branches";
linkItem8.appendChild(linkBranches);
linkList.appendChild(linkItem8);

const dangerZone = document.createElement("h3");
dangerZone.innerText = "⚠ DANGER ZONE ⚠";
dangerZone.style.textAlign = "center";
dangerZone.classList.add("red");
dangerZone.style.marginBottom = "0";
dangerZone.style.marginTop = "3rem";
linkList.appendChild(dangerZone);

const linkItem5 = document.createElement("li");
linkItem5.classList.add("link");
const linkAmend = document.createElement("a");
linkAmend.href = "/html/amend.html";
linkAmend.innerText = "🔙Amend";
linkItem5.appendChild(linkAmend);
linkList.appendChild(linkItem5);

const linkItem6 = document.createElement("li");
linkItem6.classList.add("link");
const linkForcePush = document.createElement("a");
linkForcePush.href = "/html/💥force-push.html";
linkForcePush.innerText = "💥Force Push";
linkItem6.appendChild(linkForcePush);
linkList.appendChild(linkItem6);





/****************LINKS****************** */
/****************LINKS****************** */


// Append the logo-wrap div and links list to the navigation
navigation.appendChild(logoWrap);
navigation.appendChild(darkModeTogglerWrap);
navigation.appendChild(otherGuides);
navigation.appendChild(otherGuidesWrap);
navigation.appendChild(linkList);

// Append the navigation to the container
container.appendChild(navigation);
