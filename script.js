addNewWeField = () => {
    console.log("adding new field");

    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter Here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.parentNode.insertBefore(newNode, weAddButtonOb);

}

 //implementing add button for edu. qualification  
addEqButton = () => {
      
    let EqNewNode = document.createElement('textarea');
    EqNewNode.classList.add("form-control");
    EqNewNode.classList.add("eqField");
    EqNewNode.classList.add("mt-2");
    EqNewNode.setAttribute("rows",2);
    EqNewNode.setAttribute("placeholder","Enter Here");

    let eqOb = document.getElementById("eq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    eqOb.parentNode.insertBefore(EqNewNode, aqAddButtonOb);  
}

//generate CV function
generateCV = () => {

    //fetching and setting name value 
    let nameField = document.getElementById("nameField").value;
    console.log(nameField);
    let nameT1 = document.getElementById("name2T");
    let nameT2 = document.getElementById("nameTemp");
    nameT1.innerHTML = nameField;
    nameT2.innerHTML = nameField;

    //fetching and setting contact
    let contctField = document.getElementById("phone").value;
    let contactT = document.getElementById("contactTemp");
    contactT.innerHTML = contctField;

     //fetching and setting email
     let emailField = document.getElementById("email").value;
     let emailT = document.getElementById("emailTemp");
     emailT.innerHTML = emailField;

    //fetching and setting address
    let addressField = document.getElementById("address").value;
    let addressT = document.getElementById("addressTemp");
    addressT.innerHTML = addressField;

     //fetching and setting git links
     let githubField = document.getElementById("githubField").value;
     let githubT = document.getElementById("git");
     githubT.innerHTML = githubField;

    //fetching and setting insta contact
    let instaField = document.getElementById("instaField").value;
    let instaT = document.getElementById("ins");
    instaT.innerHTML = instaField;

     //fetching and setting objective
     let objField = document.getElementById("objectiveField").value;
     let objT = document.getElementById("objectiveTemp");
     objT.innerHTML = objField;

    //fetching and setting work
    let workField = document.getElementsByClassName("wefield")
     
    let str = '';
    for(let i of workField) {
        str = str+`<li> ${i.value} </li>`;
    }
    let workT = document.getElementById("weTemp");
    workT.innerHTML = str;


     //fetching and setting edu
     let eduField = document.getElementsByClassName("eqField");
     let str1 = '';
     for(let e of eduField) {
        str1 = str1 + `<li>${e.value} </li>`;
     }
     let eduT = document.getElementById("aqTemp");
     eduT.innerHTML = str1;

     //setting image
     let img = document.getElementById("imagefield").files[0];
     let reader = new FileReader();
     reader.readAsDataURL(img);
     reader.onloadend = function () {
        let imgT = document.getElementById("imgTemp");
        imgT.src= reader.result;
     }
    


     document.getElementById("cv-form").style.display = "none";
     document.getElementById("cv-template").style.display = "block";


}

function printCV() {
    window.print();
}