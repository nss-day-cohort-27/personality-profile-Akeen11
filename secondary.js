function loadData(tag){
    let stringifiedObject = localStorage.getItem(tag)
    let parsedObject = JSON.parse(stringifiedObject)
    return parsedObject
}

let data = loadData("myProfile")

// const body = document.querySelector("body");
// const script = document.querySelector("script");

// function addContentWithClass(element, className, location){
//     let newElement = document.createElement(element);
//     newElement.setAttribute("class", className);
//     body.insertBefore(newElement, location);
// }

// addContentWithClass("div", "main-content", script);

const mainContent = document.querySelector(".main-content");

mainContent.innerHTML +=
    `<div class="wrapper">
        <h1>My Personality Profile</h1>
        <div class="main-container">
            <div>
                <h3>${myProfile.general[0].title}</h3>
                <ul>
                    <li>${myProfile.general[0].items[0]}</li>
                    <li>${myProfile.general[0].items[1]}</li>
                    <li>${myProfile.general[0].items[2]}</li>
                </ul>
            </div>
            <div>
                <h3>${myProfile.general[1].title}</h3>
                <ul>
                    <li>${myProfile.general[1].items[0]}</li>
                    <li>${myProfile.general[1].items[1]}</li>
                    <li>${myProfile.general[1].items[2]}</li>
                </ul>
            </div>
        </div>
    </div>`