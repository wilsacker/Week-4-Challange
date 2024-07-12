const toggle = document.querySelector("#toggle")

const changeMode = function() {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
    console.log("Hello")
};

const readLocalStorage = function() {
    const stringData = localStorage.getItem("blogs")
    const data = JSON.parse(stringData)
    return data || [];
}

toggle.addEventListener("click", changeMode);
