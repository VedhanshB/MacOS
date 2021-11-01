let dock = document.getElementsByClassName("dock")[0]
let apps = document.getElementsByClassName("apps")[0]
let google = document.getElementsByClassName("google")[0]
let brave = document.getElementsByClassName("brave")[0]
let vscode = document.getElementsByClassName("vscode")[0]

dock.addEventListener("click", ()=>{
    console.log("clicked");
    if (apps.style.bottom == "100px"){
        google.style.bottom = "-1800px"
        apps.style.bottom = "-1800px"
        brave.style.bottom = "-1800px"
        google.style.bottom = "-1800px"

    }else{

        apps.style.bottom = "100px"
        google.style.bottom = "575px"
        brave.style.bottom = "1200px"
        vscode.style.bottom = "1200px"

    }
})

google.addEventListener("click", ()=>{
    open("https://www.google.com/chrome/");
    google.style.bottom = "-1800px"
    apps.style.bottom = "-1800px"
    brave.style.bottom = "-1800px"
    vscode.style.bottom = "-1800px"
})

brave.addEventListener("click", ()=>{
    open("https://www.brave.com");
    google.style.bottom = "-1800px"
    apps.style.bottom = "-1800px"
    brave.style.bottom = "-1800px"
    vscode.style.bottom = "-1800px"
})

vscode.addEventListener("click", ()=>{
    open("https://code.visualstudio.com");
    google.style.bottom = "-1800px"
    apps.style.bottom = "-1800px"
    brave.style.bottom = "-1800px"
    vscode.style.bottom = "-1800px"
})