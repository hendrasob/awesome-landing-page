// For Switching tabs for Feature section
const tabs = document.querySelectorAll(".tab");
const features = document.querySelectorAll(".features-content");

// To add and remove Border
const switchTabs = (e) => {
  e.preventDefault();
  clearBorder();
  clearContent();
  e.target.classList.add("show-tab");

  switchTabContent();
};

// To switch contents of tab
const switchTabContent = () => {
  tabs.forEach((tab, index) => {
    tab.classList.contains("show-tab")
      ? features[index].classList.add("show-content")
      : null;
  });
};

// For clear content
const clearContent = () => {
  features.forEach((feature) => {
    feature.classList.contains("show-content")
      ? feature.classList.remove("show-content")
      : null;
  });
};

// For removing border
const clearBorder = () => {
  tabs.forEach((tab) => {
    tab.classList.contains("show-tab")
      ? tab.classList.remove("show-tab")
      : null;
  });
};

// Looping through tabs
tabs.forEach((tab) => {
  tab.addEventListener("click", switchTabs);
});

// For Mobile Hamburger Toggle
document.querySelector(".menu-btn").addEventListener("click", () => {
  const selectUl = document.querySelector(".nav-links");

  selectUl.classList.toggle("show");
});
