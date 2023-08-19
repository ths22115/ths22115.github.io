function onLoad() {
    const width = window.innerWidth;
    var target_section;
    if (width < 1200) {
        target_section = "mobile_dev_warning";
    } else {
        target_section = "home_div"
    }

    const sections = document.querySelectorAll("div.sections");
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].id === target_section) {
            sections[i].style.display = "block";
        } else {
            sections[i].style.display = "none";
        }
    }
}

function sectionSwap(new_active) {
    let current_section = findCurrentActive();
    let new_section = document.getElementById(new_active);
    changeActive(new_section, current_section);
}

function findCurrentActive() {
    const sections = document.querySelectorAll("div.sections");
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].style.display !== "none") {
            return sections[i]
        }
    }
}

function changeActive(new_section, current_section){
    //set current active section invisible
    current_section.style.display = "none";
    //set new active section visible
   new_section.style.display = "block";

   //home and about section bug fixing
    if (new_section.id !== "home_div") {
        document.getElementById("about_button").style.display = "none";
        document.getElementById("home_button").style.display = "block";
    } else {
        document.getElementById("about_button").style.display = "block";
        document.getElementById("home_button").style.display = "none";
    }
}