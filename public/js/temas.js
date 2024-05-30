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

  const colorSelectors = document.getElementById("color-menu-text") ? {
    menuTColorSel: document.getElementById("color-menu-text"),
    menuBgColorSel: document.getElementById("color-menu-bg"),
    headerTColorSel: document.getElementById("color-header-text"),
    headerBgColorSel: document.getElementById("color-header-bg"),
    contentTColorSel: document.getElementById("color-content-text"),
    contentBgColorSel: document.getElementById("color-content-bg")
  } : null;

  var menuTColor, menuBgColor, headerTColor, headerBgColor, contentTColor, contentBgColor;

  var customTheme = null;
  var noItemsMessage = document.querySelector(".no-items-message");

  const svThemeBtn = document.getElementById("save-theme-btn");
  const themeName = document.getElementById("theme-name");
  const container = document.querySelector(".themes-container");
  const list = document.querySelector(".theme-list");
  var applyBtns, editBtns, deleteBtns;

  var saving = false;
  var editing = false;
  var editingTheme = null;
  var deleting = false;
  
  // Setting light or dark mode if colors have not been modified
  if (initialTheme === "dark") {
    if (checkbox != null){
      checkbox.checked = true;
    }
    setDarkTheme();
  }else if (initialTheme === "light") {
    setLightTheme();
  }else {
    setCustomTheme(0);
  }

  if(colorSelectors){
    changeColor();
    themeSwitch();
    setColorSelectors();
    saveTheme();
    showList();
  }
  

  /*** SWITCHING THROUGH DARK & LIGHT THEMES ***/
  function themeSwitch() {
    if(checkbox){
      // When light/dark mode switch clicked
      checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        setDarkTheme();
        localStorage.setItem("initialTheme", "dark");
      }else {
        setLightTheme();
        localStorage.setItem("initialTheme", "light");
      }
      // Updating color selectors values
      setColorSelectors();
    });
    }
  }

  function setTableColors(tableColor, tableBg, borderColor){
    table.style.setProperty('--bs-table-color', tableColor);
    table.style.setProperty('--bs-table-bg', tableBg);
    table.style.borderColor = borderColor;
  }
  
  /*** SETTING DARK THEME ***/
  function setDarkTheme(){
    setColors("#FFFFFF", "#2B3035", "#005a9c", "rgb(33,37,41)", "#FFFFFF", "rgb(33,37,41)");
    /* navbarBrand.style.color = "#FFFFFF";
    menuText.forEach((element) => element.style.color = "#FFFFFF");
    navbarToggler.style.color = "#FFFFFF";
    togglerIcon.style.color = "#FFFFFF";
    menuBg.style.backgroundColor = "#2B3035";
    if(headerText.style.color != "#005a9c"){
      headerText.style.color = "#005a9c";
    }
    headerBg.style.backgroundColor = "rgb(33,37,41)";
    document.body.style.backgroundColor = "rgb(33,37,41)";
    setTableColors("#FFFFFF", "rgb(33,37,41)", "rgb(73,80,87)");
    content.forEach((element) => element.style.color = "#FFFFFF"); */
  }

  /*** SETTING LIGHT THEME ***/
  function setLightTheme(){
    setColors("#000000", "#F8F9FA", "#005a9c", "#FFFFFF", "#000000", "#FFFFFF")
    /* navbarBrand.style.color = "#000000";
    menuText.forEach((element) => element.style.color = "#000000");
    navbarToggler.style.color = "#2B3035";
    togglerIcon.style.color = "#2B3035";
    menuBg.style.backgroundColor = "#F8F9FA";
    if(headerText.style.color != "#005a9c"){
      headerText.style.color = "#005a9c";
    }
    headerBg.style.backgroundColor = "#FFFFFF";
    document.body.style.backgroundColor = "#FFFFFF";
    setTableColors("#000000", "#FFFFFF", "#DEE2E6");
    content.forEach((element) => element.style.color = "#000000"); */
  }

  function setCustomThemeProp(property){
    if (customTheme != null) {
      let selector = property + "Sel";
      customTheme[property] = colorSelectors[selector].value;
    }else{
      if(colorSelectors){
        mTColor = colorSelectors.menuTColorSel.value;
        mBgColor = colorSelectors.menuBgColorSel.value;
        hTColor = colorSelectors.headerTColorSel.value;
        hBgColor = colorSelectors.headerBgColorSel.value;
        cTColor = colorSelectors.contentTColorSel.value;
        cBgColor = colorSelectors.contentBgColorSel.value;
        customTheme = createCustomTheme(undefined, undefined, mTColor, mBgColor, hTColor, hBgColor, cTColor, cBgColor);
      }
    }
    localStorage.setItem("customTheme", JSON.stringify(customTheme));
  }

  function createCustomTheme(id, name, mTColor, mBgColor, hTColor, hBgColor, cTColor, cBgColor){
    if(id === undefined){
      return {
        menuTColor: mTColor,
        menuBgColor: mBgColor,
        headerTColor: hTColor,
        headerBgColor: hBgColor,
        contentTColor: cTColor,
        contentBgColor: cBgColor
      }
    }else return{
      id: id,
      name: name,
      menuTColor: mTColor,
      menuBgColor: mBgColor,
      headerTColor: hTColor,
      headerBgColor: hBgColor,
      contentTColor: cTColor,
      contentBgColor: cBgColor
    }
  }

  function setCustomTheme(themeId){
    if(themeId != 0){
      let themes = getLocalStorage();
      let theme = themes.filter(theme => theme.id === themeId)[0];
      if(theme){
        let mTColor, mBgColor, hTColor, hBgColor, cTColor, cBgColor;
        mTColor = theme.menuTColor;
        mBgColor = theme.menuBgColor;
        hTColor = theme.headerTColor;
        hBgColor = theme.headerBgColor;
        cTColor = theme.contentTColor;
        cBgColor = theme.contentBgColor;
        setColors(mTColor, mBgColor, hTColor, hBgColor, cTColor, cBgColor);
        let customTheme = createCustomTheme(undefined, undefined, mTColor, mBgColor, hTColor, hBgColor, cTColor, cBgColor);
        localStorage.setItem("customTheme", JSON.stringify(customTheme));
        setColorSelectors();
      }
    }else{
      customTheme = JSON.parse(localStorage.getItem("customTheme"));

      if(customTheme){
        setColors
        (
          customTheme.menuTColor, 
          customTheme.menuBgColor, 
          customTheme.headerTColor,
          customTheme.headerBgColor,
          customTheme.contentTColor,
          customTheme.contentBgColor
        );
      }
    }
    localStorage.setItem("initialTheme", "customTheme");
  }

  function setColors(mTColor, mBgColor, hTColor, hBgColor, cTColor, cBgColor){
    var tableColor;
    var noItemsMessageColor;

    if(themeName){
      themeName.value = "";
    }
    if(!initialTheme === "dark"){
      tableColor = "#DEE2E6";
      noItemsMessageColor = "#EEEEEE";
    }else {
      tableColor = "rgb(73,80,87)";
      noItemsMessageColor = "#CCCCCC";
    }
    navbarBrand.style.color = mTColor
    menuText.forEach((element) => element.style.color = mTColor);
    navbarToggler.style.color = mTColor;
    togglerIcon.style.color = mTColor;
    menuBg.style.backgroundColor = mBgColor;
    headerText.style.color = hTColor;
    headerBg.style.backgroundColor = hBgColor;
    content.forEach((element) => element.style.color = cTColor);
    table.style.setProperty('--bs-table-color', cBgColor);
    document.body.style.backgroundColor = cBgColor;
    setTableColors(cTColor, cBgColor, tableColor);
    noItemsMessage.style.backgroundColor = noItemsMessageColor;
  }

  /*** SETTING THE VALUES FOR COLOR SELECTORS ***/
  function setColorSelectors(){
    setTimeout(() => {
      // Setting the value of the menu text´s color selector
      menuTColor = menuText[0].style.color;
      menuTColor = rgbToHex(menuTColor);
      colorSelectors.menuTColorSel.value = menuTColor;
      
      // Setting the value of the menu background´s color selector
      menuBgColor = window.getComputedStyle(menuBg).backgroundColor;
      menuBgColor = rgbToHex(menuBgColor);
      colorSelectors.menuBgColorSel.value = menuBgColor;

      // Setting the value of the headers text´s color selector
      headerTColor = window.getComputedStyle(headerText).color;
      headerTColor = rgbToHex(headerTColor);
      colorSelectors.headerTColorSel.value = headerTColor;

      // Setting the value of the headers background´s color selector
      headerBgColor = window.getComputedStyle(headerBg).backgroundColor;
      headerBgColor = rgbToHex(headerBgColor);
      colorSelectors.headerBgColorSel.value = headerBgColor;

      // Setting the value of the content text´s color selector
      contentTColor = window.getComputedStyle(contentElement).color;
      contentTColor = rgbToHex(contentTColor);
      colorSelectors.contentTColorSel.value = contentTColor;

      // Setting the value of the content background´s color selector
      contentBgColor = window.getComputedStyle(document.body).backgroundColor;
      contentBgColor = rgbToHex(contentBgColor);
      colorSelectors.contentBgColorSel.value = contentBgColor;
    }, 100)
  }

  /*** CHANGING THE COLOR OF SPECIFIC ELEMENTS ***/
  function changeColor(){
    // MENU TEXT
    colorSelectors.menuTColorSel.addEventListener("change", () => {
      menuTColor = colorSelectors.menuTColorSel.value
      menuText.forEach((element) => element.style.color = menuTColor);
      setCustomThemeProp("menuTColor");
      localStorage.setItem("initialTheme", "custom");
    });
    // MENU BACKGROUND
    colorSelectors.menuBgColorSel.addEventListener("change", () => {
      menuBgColor = colorSelectors.menuBgColorSel.value;
      menuBg.style.backgroundColor = menuBgColor;
      setCustomThemeProp("menuBgColor");
      localStorage.setItem("initialTheme", "custom");
    });
    // HEADERS TEXT
    colorSelectors.headerTColorSel.addEventListener("change", () => {
      headerTColor = colorSelectors.headerTColorSel.value;
      headerText.style.color = headerTColor;
      setCustomThemeProp("headerTColor");
      localStorage.setItem("initialTheme", "custom");
    });
    // HEADERS BACKGROUND
    colorSelectors.headerBgColorSel.addEventListener("change", () => {
      headerBgColor = colorSelectors.headerBgColorSel.value
      headerBg.style.backgroundColor = headerBgColor;
      setCustomThemeProp("headerBgColor");
      localStorage.setItem("initialTheme", "custom");
    });
    // CONTENT TEXT
    colorSelectors.contentTColorSel.addEventListener("change", () => {
      contentTColor = colorSelectors.contentTColorSel.value
      content.forEach((element) => element.style.color = contentTColor);
      table.style.setProperty('--bs-table-color', contentTColor);
      setCustomThemeProp("contentTColor");
      localStorage.setItem("initialTheme", "custom");
    });
    // CONTENT BACKGROUND 
    colorSelectors.contentBgColorSel.addEventListener("change", () => {
      contentBgColor = colorSelectors.contentBgColorSel.value;
      document.body.style.backgroundColor = contentBgColor;
      table.style.setProperty('--bs-table-bg', contentBgColor);
      setCustomThemeProp("contentBgColor");
      localStorage.setItem("initialTheme", "custom");
    });
  }

  /*** SAVING A SPECIFIC THEME ***/
  function saveTheme(){
    svThemeBtn.addEventListener("click", (e) =>{
      e.preventDefault();
      saving = true;
      // Creating a new theme
      const name = themeName.value;
      themeName.value  = "";
      const id = new Date().getTime().toString();
      var theme = createListItem(id, name, menuTColor, menuBgColor, headerTColor, headerBgColor, contentTColor, contentBgColor);
      if(name != "" && !editing){
        list.appendChild(theme);
        // Display alert
        window.alert("tema añadido");
        // Add to local storage
        addToLocalStorage(id, name, menuTColor, menuBgColor, headerTColor, headerBgColor, contentTColor, contentBgColor);
        showList();
        // Set back to default
        /* setBackToDefault(); */
      }else if(name && editing){
        let parent = editingTheme.parentElement;
        let mTColor, mBgColor, hTColor, hBgColor, cTColor, cBgColor;
        parent.replaceChild(theme, editingTheme);
        mTColor = menuTColor;
        mBgColor = menuBgColor;
        hTColor = headerTColor;
        hBgColor = headerBgColor;
        cTColor = contentTColor;
        cBgColor = contentBgColor;
        let customTheme = createCustomTheme(theme.dataset.id,
                                            theme.dataset.name,
                                            mTColor, 
                                            mBgColor, 
                                            hTColor,
                                            hBgColor, 
                                            cTColor, 
                                            cBgColor);
        replaceInLocalStorage(editingTheme.dataset.id, customTheme);
        localStorage.setItem("customTheme", JSON.stringify(customTheme));
        editing = false;
        window.alert("cambios guardados con éxito");
      }else{
        window.alert("please enter value", "danger");
      }
      saving = false;
    });
  }

  function createListItem(id, name, menuTColor, menuBgColor, headerTColor, headerBgColor, contentTColor, contentBgColor){
    const element = document.createElement("tr");
    //add class
    element.classList.add("theme-item");
    //add id and name
    const attrId = document.createAttribute("data-id");
    const attrName = document.createAttribute("data-name");
    attrId.value = id;
    attrName.value = name;
    element.setAttributeNode(attrId);
    element.setAttributeNode(attrName);
    //Creating element's HTML structure
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
        <button type="button" class="btn btn-primary btn-sm apply-btn">
          Aplicar  
        </button>
        <button type="button" class="btn btn-secondary btn-sm edit-btn">
          <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="btn btn-danger btn-sm delete-btn">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </td>
    `;
    return element;
  }
  
  function addToLocalStorage(id, name, menuTColor, menuBgColor, headerTColor, headerBgColor, contentTColor, contentBgColor){
    const theme = {id, name, menuTColor, menuBgColor, headerTColor, headerBgColor, contentTColor, contentBgColor};
    let themes = getLocalStorage();
    themes.push(theme);
    localStorage.setItem("themes", JSON.stringify(themes));
  }

  function getLocalStorage(){
    return localStorage.getItem("themes") 
    ? JSON.parse(localStorage.getItem("themes")) 
    : [];
  }

  function clearThemes(object){
    object.addEventListener("click", (e) =>{
      localStorage.removeItem("themes");
      showList();
    });
  }

  function replaceInLocalStorage(editingId, newTheme){
    // Obtén el array del localStorage
    var themes = getLocalStorage();
    console.log("themes: " + themes);

    // Encuentra el índice del objeto que quieres reemplazar
    var index = themes.findIndex(theme => theme.id === editingId);
    console.log("index: " + index);
    // Si el objeto existe en el array
    if (index !== -1) {
      // Reemplaza el objeto antiguo por el nuevo
      console.log(`replacing theme ${themes[index]} with ${newTheme}`);
      themes[index] = newTheme;
      
      // Guarda el array actualizado en el localStorage
      localStorage.setItem('themes', JSON.stringify(themes));
    }
  }

  function showList(){
    const clearThemesBtn = document.querySelector(".btn-clear-themes");
    let themes = JSON.parse(localStorage.getItem("themes"))

    if(themes && themes.length > 0){
      if(!saving && !deleting){
        console.log("lista contiene elementos");
        themes.forEach((theme) => {
          for (let property in theme) {
            if (theme.hasOwnProperty(property)) {
        
              // Saving the value of each property
              var id = theme.id;
              var name = theme.name;
              var menuTColor = theme.menuTColor;
              var menuBgColor = theme.menuBgColor;
              var headerTColor = theme.headerTColor;
              var headerBgColor = theme.headerBgColor;
              var contentTColor = theme.contentTColor;
              var contentBgColor = theme.contentBgColor;
            }
          }
          let item = createListItem(id, name, menuTColor, menuBgColor, headerTColor, headerBgColor, contentTColor, contentBgColor);
          list.appendChild(item);
        });
      }

      // Select buttons and add event listeners
      applyBtns = document.querySelectorAll(".apply-btn");
      editBtns = document.querySelectorAll(".edit-btn");
      deleteBtns = document.querySelectorAll(".delete-btn");

      applyBtns.forEach( (btn) => {
        btn.addEventListener("click", (e) => {
          let target = e.target;
          let theme = target.parentElement.parentElement.parentElement;
          localStorage.setItem("customTheme", theme);
          let id = theme.dataset.id;
          setCustomTheme(id);
        });
      });
      editBtns.forEach( (btn) => {
        btn.addEventListener("click", (e) => {
          editItem(e);
        });
      });
      deleteBtns.forEach( (btn) => {
        btn.addEventListener("click", (e) => {
          deleteItem(e);
        });
      });

      //Hide the message of "No items to show" and show the button for clearing and the themes container.
      noItemsMessage.classList.add("hide-container");
      clearThemesBtn.classList.remove("hide-container");
      clearThemes(clearThemesBtn);
      container.classList.remove("hide-container");
    }else{
      // Delete all child elements from list
      while (list.firstChild) {
        list.removeChild(list.firstChild);
      }

      console.log("lista vacia o inexistente");
      noItemsMessage.classList.remove("hide-container");
      clearThemesBtn.classList.add("hide-container");
      container.classList.add("hide-container");
    }
  }

  function editItem(e){
    editing = true;
    var theme
    let target  = e.target;

    if(target.classList.contains("fas")){
      theme = target.parentElement.parentElement.parentElement.parentElement;
    }else{
      theme = target.parentElement.parentElement.parentElement;
    }
    editingTheme = theme;
    let id = editingTheme.dataset.id;
    setCustomTheme(id);

    themeName.value = editingTheme.dataset.name
    themeName.focus();
    themeName.select();
  }

  function deleteItem(e){
    deleting = true;

    let element = e.target.parentElement.parentElement.parentElement;
    if(element.classList.contains("theme-item")){
      var id = element.dataset.id;
    }else{
      element = element.parentElement
      var id = element.dataset.id;
    }
    list.removeChild(element);

    /*****Code for deleting a single theme from the list but not from the localStorage*****/

    /*****Code for deleting a single theme from the localStorage and then showing the list*****/
    
    let themes = getLocalStorage();
    themes = themes.filter(theme => theme.id !== id);
    localStorage.setItem("themes", JSON.stringify(themes));
    
    if(themes.length == 0){
      showList();
    }
    deleting = false;
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

});
