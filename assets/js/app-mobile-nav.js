const body = document.querySelector("body");
const appSidebar = document.querySelector(".app-mobile-nav-group");
const appScrim = document.querySelector(".app-mobile-scrim");
const appTopbarNavicon = document.querySelector("#appMobileNavToggle");
const appSidebarContainer = document.querySelector(
  ".app-mobile-nav-group-inner"
);
const appGuideNavicon = document.querySelector(".app-mobile-close-btn");
const appGuideHeader = document.querySelector(".app-guide-header");

//navicon
appTopbarNavicon.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (appSidebar.hasAttribute("opened")) {
    appSidebar.removeAttribute("opened", "");
    appSidebarContainer.removeAttribute("opened", "");
  } else if (!appSidebar.hasAttribute("opened")) {
    appSidebarContainer.removeAttribute("no-transition", "");
    appSidebar.setAttribute("opened", "");
    appSidebarContainer.setAttribute("opened", "");
    body.style.overflow = "hidden";
    body.style.position = "relative";
    appGuideNavicon.focus();
    appScrim.setAttribute("visible", "");
  }
}

//guide navicon
appGuideNavicon.addEventListener("click", closeGuideMenu);

function closeGuideMenu() {
  appSidebar.removeAttribute("opened", "");
  appSidebarContainer.removeAttribute("opened", "");
  appScrim.removeAttribute("visible", "");
  body.style.removeProperty("overflow");
  body.style.removeProperty("position");
}

//backdrop
appScrim.addEventListener("click", closeScrim);

function closeScrim() {
  appSidebar.removeAttribute("opened", "");
  appSidebarContainer.removeAttribute("opened", "");
  appScrim.removeAttribute("visible", "");
  body.style.removeProperty("overflow");
  body.style.removeProperty("position");
}

//screen resizing
let mqls = [
  window.matchMedia("(min-width: 0)"),
  window.matchMedia("(min-width: 48rem)"),
  window.matchMedia("(min-width: 63.25rem)"),
  window.matchMedia("(min-width: 80rem)"),
];

function mediaqueryresponse() {
  if (mqls[0].matches) {
    appSidebar.removeAttribute("opened", "");
    appSidebarContainer.removeAttribute("opened", "");
    appSidebarContainer.setAttribute("no-transition", "");
  }
  if (mqls[1].matches) {
    appSidebar.removeAttribute("opened", "");
    appSidebarContainer.removeAttribute("opened", "");
    appScrim.removeAttribute("visible", "");
    body.style.removeProperty("overflow");
    body.style.removeProperty("position");
  }
  if (mqls[2].matches) {
  }
  if (mqls[3].matches) {
    appSidebar.removeAttribute("opened", "");
    appSidebarContainer.removeAttribute("opened", "");

    appScrim.removeAttribute("visible", "");
    body.style.removeProperty("overflow");
    body.style.removeProperty("position");
  }
}

for (var i = 0; i < mqls.length; i++) {
  mediaqueryresponse(); // call listener function explicitly at run time
  //mqls[i].addListener(mediaqueryresponse); // attach listener function to listen in on state changes
  mqls[i].addEventListener("change", mediaqueryresponse, false);
}

//close guide menu on escape
(function () {
  window.onkeyup = function (e) {
    if (e.keyCode == 27) {
      closeGuideMenu();
    }
  };
})();
