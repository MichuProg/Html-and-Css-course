const img = document.querySelector("img.menu-shortcut");
const header = document.querySelector("header");

img.addEventListener("click", () => {
    header.classList.toggle("open");
})

const collectAllActiveATag = () => {
    return document.querySelectorAll('a.active');
}

const removeActiveClassesFromTagA = () => {
    collectAllActiveATag().forEach(el => {
        el.classList.remove('active');
    });
}

const addClassActiveToTag = (element) => {
    element.classList.add('active');
}

const isATagSublink = (element) => {
    return (element.className === 'nav-link sub-link active');
}

const markParentSubLink = (element) => {
    if (isATagSublink(element)) {
        document.querySelector('a.drop-down').classList.add('active');
    }
}

const navLink = document.querySelectorAll("a.nav-link");
navLink.forEach(element => {
    element.addEventListener('click', () => {
        removeActiveClassesFromTagA();
        addClassActiveToTag(element);
        isATagSublink(element);
        markParentSubLink(element);
        // if(element.parentElement.parentElement.className == 'sub-nav'){
        //     document.querySelector('a.drop-down').classList.toggle('active');
        // }
        // else {
        //     element.classList.toggle('active');
        // }
    })
});


function checkValid(){
    const input = document.querySelector("#email").value;
    
        if (!input.trim() == '') {
            document.querySelector('#emailText').style.fontSize = '20px';
            document.querySelector('#emailText').style.transform = 'translateY(-27px)';
            document.querySelector('#label-icon').style.maxWidth = '18px';
        } 
    }

    