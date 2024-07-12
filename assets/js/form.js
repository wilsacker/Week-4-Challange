const formEl = document.querySelector("form")

const handleFormSubmit = function(event) {
    event.preventDefault()

    const userNameEl = document.querySelector("#username").value.trim();
    const titleEl = document.querySelector("#title").value.trim();
    const contentEl = document.querySelector("#content").value.trim();

    if (!userNameEl || !titleEl || !contentEl) {
        const errorEL = document.querySelector("#error")
        errorEL.textContent = "Fill All Values"
        setTimeout(function () {
            errorEL.textContent = ""
        }, 4000)
        return
    }

    const formData = {
        userName: userNameEl,
        title: titleEl,
        content: contentEl,
    }

    console.log(formData.userName)
    console.log(formData.title)
    console.log(formData.content)

    storeLocalStorage(formData)

    pageRedirect()
}

const pageRedirect = function() {
    location.href = "./blog.html"
}

const storeLocalStorage = function(data) {
    const blog = readLocalStorage();
    blog.push(data)
    const stringData = JSON.stringify(blog)
    localStorage.setItem("blogs", stringData)
}

formEl.addEventListener("submit", handleFormSubmit)