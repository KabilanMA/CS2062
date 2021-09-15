"use strict";

const selectBoxes = document.querySelectorAll(".select-box");
const optionsContainers = document.querySelectorAll(".options-container");
const selecteds = document.querySelectorAll(".selected");
const searchbars = document.querySelectorAll(".search-bar");

const filterList = (searchTerm, optionsList) => {
  searchTerm = searchTerm.toLowerCase();
  optionsList.forEach((option) => {
    let label =
      option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};

for (let i = 0; i < 3; i++) {
  selecteds[i].addEventListener("click", () => {
    optionsContainers[i].classList.toggle("active");
    searchbars[i].classList.toggle("active");
  });
}

const disOptions = document.querySelectorAll(".dis-option");
for (let i = 0; i < disOptions.length; i++) {
  disOptions[i].addEventListener("click", () => {
    // document.querySelector(".dis-selected").style.backgroundColor = "#00454a";
    document.querySelector(".dis-selected").style.border = "1px solid white";
    document.querySelector(".dis-selected").textContent =
      disOptions[i].textContent;
    optionsContainers[0].classList.toggle("active");
    searchbars[0].classList.toggle("active");

    const hosHideOptions = document.querySelectorAll(
      `.hos-option:not(.${disOptions[i].textContent.trim()})`
    );
    for (let j = 0; j < hosHideOptions.length; j++) {
      hosHideOptions[j].style.display = "none";
    }
  });
}

const facOptions = document.querySelectorAll(".fac-option");
for (let i = 0; i < facOptions.length; i++) {
  facOptions[i].addEventListener("click", () => {
    // document.querySelector(".fac-selected").style.backgroundColor = "#00454a";
    document.querySelector(".fac-selected").style.border = "1px solid white";

    document.querySelector(".fac-selected").textContent =
      facOptions[i].textContent;
    optionsContainers[1].classList.toggle("active");
    searchbars[1].classList.toggle("active");
  });
}

const hosOptions = document.querySelectorAll(".hos-option");
for (let i = 0; i < hosOptions.length; i++) {
  hosOptions[i].addEventListener("click", () => {
    optionsContainers[2].classList.toggle("active");
    searchbars[2].classList.toggle("active");
    // document.querySelector(".hos-selected").style.backgroundColor = "#00454a";
    document.querySelector(".hos-selected").style.border = "1px solid white";
    document.querySelector(".hos-selected").textContent =
      hosOptions[i].textContent;

    document.querySelector(".dis-selected").style.border = "1px solid white";
    document.querySelector(".dis-selected").textContent =
      hosOptions[i].classList[2];
  });
}

// adding search functionality
searchbars[2].addEventListener("keyup", function (e) {
  filterList(e.target.value, hosOptions);
});

searchbars[1].addEventListener("keyup", function (e) {
  filterList(e.target.value, facOptions);
});

searchbars[0].addEventListener("keyup", function (e) {
  filterList(e.target.value, disOptions);
});

// hospital objects
// const DistrictGeneralHospitalVavuniya = {
//   "X-Ray": true,
//   "MRI Scan": true,
//   "CT Scan": true,
//   "Laboratory Services": true,
//   "ECG Services": true,
//   "Eye Clinic": true,
// };
