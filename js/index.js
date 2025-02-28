const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headerImage = document.getElementById("cta-img");
headerImage.setAttribute('src',siteContent["cta"]["img-src"] )

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', "img/mid-page-accent.jpg")

let navLinks = document.getElementsByTagName('a');
navLinks[0].innerHTML = siteContent["nav"]["nav-item-1"];
navLinks[1].innerHTML = siteContent["nav"]["nav-item-2"];
navLinks[2].innerHTML = siteContent["nav"]["nav-item-3"];
navLinks[3].innerHTML = siteContent["nav"]["nav-item-4"];
navLinks[4].innerHTML = siteContent["nav"]["nav-item-5"];
navLinks[5].innerHTML = siteContent["nav"]["nav-item-6"];

let links = document.querySelectorAll('a');
for(let i=0; i<links.length; i++) {
links[i].style.color = "green";
};

let badTextColor = document.querySelectorAll('p');
for(let i=0; i<links.length; i++) {
  badTextColor[i].style.color = "orange";
  };

let headerText = document.getElementsByTagName('h1');
headerText[0].innerHTML = siteContent["cta"]["h1"];

let button = document.getElementsByTagName('button');
button[0].innerHTML = siteContent["cta"]["button"];

let h4 = document.getElementsByTagName('h4');
h4[0].innerHTML = siteContent["main-content"]["features-h4"];
h4[1].innerHTML = siteContent["main-content"]["about-h4"];
h4[2].innerHTML = siteContent["main-content"]["services-h4"];
h4[3].innerHTML = siteContent["main-content"]["product-h4"];
h4[4].innerHTML = siteContent["main-content"]["vision-h4"];
h4[5].innerHTML = siteContent["contact"]["contact-h4"];

let p = document.getElementsByTagName('p');
p[0].innerHTML = siteContent["main-content"]["features-content"];
p[1].innerHTML = siteContent["main-content"]["about-content"];
p[2].innerHTML = siteContent["main-content"]["services-content"];
p[3].innerHTML = siteContent["main-content"]["product-content"];
p[4].innerHTML = siteContent["main-content"]["vision-content"];
p[5].innerHTML = siteContent["contact"]["address"];
p[6].innerHTML = siteContent["contact"]["phone"];
p[7].innerHTML = siteContent["contact"]["email"];
p[8].innerHTML = siteContent["footer"]["copyright"];


let newAnchor = document.querySelector('nav');

let newLink = document.createElement('a');
newLink.textContent = 'New Link B';
newAnchor.appendChild(newLink);

let newLink2 = document.createElement('a');
newLink2.textContent = 'New Link A';
newAnchor.prepend(newLink2);

