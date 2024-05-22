// When document loads
document.addEventListener("DOMContentLoaded", function() {
  let initialTheme = localStorage.getItem("initialTheme");
  const checkbox = document.getElementById("darkMode-switch");
  const navbarBrand = document.querySelector(".navbar-brand");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const togglerIcon = document.querySelector(".navbar-toggler-icon");

  const menuText = document.querySelectorAll(".navbar-nav li a");
  const menuBg = document.querySelector(".menu");
  const headerText = document.querySelector(".header-text");
  const headerBg = document.querySelector(".header");
  const content = document.querySelectorAll(".content");
  const table = document.querySelector(".table");
  const contentElement = document.querySelector(".content");

  const menuTextColorSel = document.getElementById("color-menu-text");
  const menuBgColorSel = document.getElementById("color-menu-bg");
  const headerTextColorSel = document.getElementById("color-header-text");
  const headerBgColorSel = document.getElementById("color-header-bg");
  const contentTextColorSel = document.getElementById("color-content-text");
  const contentBgColorSel = document.getElementById("color-content-bg");

  var menuTColor, menuBgColor, headerTColor, headerBgColor, contentTColor, contentBgColor;

  const svThemeBtn = document.getElementById("save-theme-btn");
  const themeName = document.getElementById("theme-name");
  const container = document.querySelector(".themes-container");
  const list = document.querySelector(".theme-list");

  var saving = false;
  
  // Setting light or dark mode if colors have not been modified
  if (initialTheme === "dark") {
    if (checkbox != null){
      checkbox.checked = true;
    }
    darkTheme();
  }else if (initialTheme === "light") {
    lightTheme();
  }else {
    customTheme(initialTheme);
  }

  themeSwitch();
  setColorSelectors();
  changeColor();
  saveTheme();
  showList();

  /*** SWITCHING THROUGH DARK & LIGHT THEMES ***/
  function themeSwitch() {
    // When light/dark mode switch clicked
    checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        darkTheme();
        localStorage.setItem("initialTheme", "dark");
      }else {
        lightTheme();
        localStorage.setItem("initialTheme", "light");
      }

      // Updating color selectors values
      setColorSelectors();
    });
  }

  function setTableColors(tableColor, tableBg, borderColor){
    table.style.setProperty('--bs-table-color', tableColor);
    table.style.setProperty('--bs-table-bg', tableBg);
    table.style.borderColor = borderColor;
  }
  
  /*** SETTING DARK THEME ***/
  function darkTheme(){
    navbarBrand.style.color = "#FFFFFF";
    menuText.forEach((element) => element.style.color = "#FFFFFF");
    navbarToggler.style.color = "#FFFFFF";
    togglerIcon.style.color = "#FFFFFF";
    menuBg.style.backgroundColor = "#2B3035";
    headerBg.style.backgroundColor = "rgb(33,37,41)";
    document.body.style.backgroundColor = "rgb(33,37,41)";
    setTableColors("#FFFFFF", "rgb(33,37,41)", "rgb(73,80,87)");
    content.forEach((element) => element.style.color = "#FFFFFF");
  }

  /*** SETTING LIGHT THEME ***/
  function lightTheme(){
    navbarBrand.style.color = "#000000";
    menuText.forEach((element) => element.style.color = "#000000");
    navbarToggler.style.color = "#2B3035";
    togglerIcon.style.color = "#2B3035";
    menuBg.style.backgroundColor = "#F8F9FA";
    headerBg.style.backgroundColor = "#FFFFFF";
    document.body.style.backgroundColor = "#FFFFFF";
    setTableColors("#000000", "#FFFFFF", "#DEE2E6");
    content.forEach((element) => element.style.color = "#000000");
  }

  function customTheme(ThemeId){

  }

  /*** SETTING THE VALUES FOR COLOR SELECTORS ***/
  function setColorSelectors(){
    setTimeout(() => {
      // Setting the value of the menu text´s color selector
      menuTColor = menuText[0].style.color;
      menuTColor = rgbToHex(menuTColor);
      menuTextColorSel.value = menuTColor;
      
      // Setting the value of the menu background´s color selector
      menuBgColor = window.getComputedStyle(menuBg).backgroundColor;
      menuBgColor = rgbToHex(menuBgColor);
      menuBgColorSel.value = menuBgColor;

      // Setting the value of the headers text´s color selector
      headerTColor = window.getComputedStyle(headerText).color;
      headerTColor = rgbToHex(headerTColor);
      headerTextColorSel.value = headerTColor;

      // Setting the value of the headers background´s color selector
      headerBgColor = window.getComputedStyle(headerBg).backgroundColor;
      headerBgColor = rgbToHex(headerBgColor);
      headerBgColorSel.value = headerBgColor;

      // Setting the value of the content text´s color selector
      contentTColor = window.getComputedStyle(contentElement).color;
      contentTColor = rgbToHex(contentTColor);
      contentTextColorSel.value = contentTColor;

      // Setting the value of the content background´s color selector
      contentBgColor = window.getComputedStyle(document.body).backgroundColor;
      contentBgColor = rgbToHex(contentBgColor);
      contentBgColorSel.value = contentBgColor;
    }, 100)
  }

  /*** CHANGING THE COLOR OF SPECIFIC ELEMENTS ***/
  function changeColor(){
    // MENU TEXT
    menuTextColorSel.addEventListener("change", () => {
      menuTColor = menuTextColorSel.value
      menuText.forEach((element) => element.style.color = menuTColor);
    });
    // MENU BACKGROUND
    menuBgColorSel.addEventListener("change", () => {
      menuBgColor = menuBgColorSel.value;
      menuBg.style.backgroundColor = menuBgColor; 
    });
    // HEADERS TEXT
    headerTextColorSel.addEventListener("change", () => {
      headerTColor = headerTextColorSel.value;
      headerText.style.color = headerTColor;
    });
    // HEADERS BACKGROUND
    headerBgColorSel.addEventListener("change", () => {
      headerBgColor = headerBgColorSel.value
      headerBg.style.backgroundColor = headerBgColor;
    });
    // CONTENT TEXT
    contentTextColorSel.addEventListener("change", () => {
      contentTColor = contentTextColorSel.value
      content.forEach((element) => element.style.color = contentTColor);
      table.style.setProperty('--bs-table-color', contentTColor);
    });
    // CONTENT BACKGROUND 
    contentBgColorSel.addEventListener("change", () => {
      contentBgColor = contentBgColorSel.value;
      document.body.style.backgroundColor = contentBgColor;
      table.style.setProperty('--bs-table-bg', contentBgColor);
    });
  }

  /*** SAVING A SPECIFIC THEME ***/
  function saveTheme(){
    svThemeBtn.addEventListener("click", (e) =>{
      e.preventDefault();
      saving = true;
      // Creating a new theme
      const name = themeName.value;
      const id = new Date().getTime().toString();
      if(name !== ""/* && !editFlag */){
          createListItem(id, name, menuTColor, menuBgColor, headerTColor, headerBgColor, contentTColor, contentBgColor);
          // Display alert
          window.alert("tema añadido");
          // Show container
          /* container.classList.add("show-container"); */
          // Add to local storage
          addToLocalStorage(id, name, menuTColor, menuBgColor, headerTColor, headerBgColor, contentTColor, contentBgColor);
          showList();
          saving = false;
          // Set back to default
          /* setBackToDefault(); */
      }else if(value && editFlag){
          editElement.innerHTML = value;
          displayAlert("value changed", "success");
          //edit local storage
          editLocalStorage(editID, value);
          setBackToDefault();
      }else{
          displayAlert("please enter value", "danger");
      }
    });
  } 

  function showList(){
    let noItemsMessage = document.querySelector(".no-items-message");
    let clearThemesBtn = document.querySelector(".btn-clear-themes");
    let themes = JSON.parse(localStorage.getItem("themes"));
    
    if(themes && themes.length > 0){
      if(!saving){
        console.log("lista contiene elementos");
        themes.forEach(function(item) {
          for (let property in item) {
            if (item.hasOwnProperty(property)) {
        
              // Saving the value of each property
              var id = item.id;
              var name = item.name;
              var menuTColor = item.menuTColor;
              var menuBgColor = item.menuBgColor;
              var headerTColor = item.headerTColor;
              var headerBgColor = item.headerBgColor;
              var contentTColor = item.contentTColor;
              var contentBgColor = item.contentBgColor;
            }
          }
          createListItem(id, name, menuTColor, menuBgColor, headerTColor, headerBgColor, contentTColor, contentBgColor);
        });
      }
      noItemsMessage.classList.add("hide-container");
      clearThemesBtn.classList.remove("hide-container");
      container.classList.remove("hide-container");
    }else{
      console.log("lista vacia o inexistente");
      noItemsMessage.classList.remove("hide-container");
      clearThemesBtn.classList.add("hide-container");
      container.classList.add("hide-container");
    }
  }

  function createListItem(id, name, menuTColor, menuBgColor, headerTColor, headerBgColor, contentTColor, contentBgColor){
    const element = document.createElement("tr");
    //add class
    element.classList.add("theme-item");
    //add id
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `
    <td class="td-themes">
      <p class="title">${name}</p>
    </td>
    <td class="td-themes">
      <div class="theme-colors">
        <div class="theme-color" style="background-color: ${menuTColor}"></div>
        <div class="theme-color" style="background-color: ${menuBgColor}"></div>
        <div class="theme-color" style="background-color: ${headerTColor}"></div>
        <div class="theme-color" style="background-color: ${headerBgColor}"></div>
        <div class="theme-color" style="background-color: ${contentTColor}"></div>
        <div class="theme-color" style="background-color: ${contentBgColor}"></div>
      </div>
    </td>
    <td class="td-themes">
      <div class="btn-container">
        <button type="button" class="btn btn-secondary btn-sm edit-btn">
            <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="btn btn-danger btn-sm delete-btn">
            <i class="fas fa-trash"></i>
        </button>
      </div>
    </td>
    `;
    // Append child
    list.appendChild(element);
    // Select buttons and add event listeners
    const editBtn = element.querySelector(".edit-btn");
    const deleteBtn = element.querySelector(".delete-btn");
    /* editBtn.addEventListener("click", editItem());
    deleteBtn.addEventListener("click", deleteItem()); */
  }
  
  function addToLocalStorage(id, name, menuTColor, menuBgColor, headerTColor, headerBgColor, contentTColor, contentBgColor){
    const theme = {id, name, menuTColor, menuBgColor, headerTColor, headerBgColor, contentTColor, contentBgColor};
    let themes = getLocalStorage();
    themes.push(theme);
    localStorage.setItem("themes", JSON.stringify(themes));
  }
  
});

function getLocalStorage(){
  return localStorage.getItem("themes") 
  ? JSON.parse(localStorage.getItem("themes")) 
  : [];
}


/*CODE PROBABLY TO DELETE*/

/* function rgbaToRgb(rgba) {
  let rgb = rgba.replace("rgba", "rgb");
  if (rgb.match(/^rgb.*\..*$/)) {
    rgb = rgb.replace(/,\s*\d+\.\d+\)/, ')');
  }else{
    rgb = rgb.replace(/,\s*\d+\)/, ')');
  }
  
  return rgb;
} */

// Saving a new theme
/*** CONVERTING RGB COLOR TO HEXADECIMAL ***/
function rgbToHex(rgb) {
  var a = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  return "#" + 
          ("0" + parseInt(a[1],10).toString(16)).slice(-2) + 
          ("0" + parseInt(a[2],10).toString(16)).slice(-2) + 
          ("0" + parseInt(a[3],10).toString(16)).slice(-2);
}
