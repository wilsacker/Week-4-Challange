const mainEl = document.querySelector("main")

const buildElement = function(type, text, parent) {
    const tag = document.createElement(type)
    tag.textContent = text
    parent.appendChild(tag)
    return tag
}

const renderBlogList = function() {
    const blogs = readLocalStorage()
    if (!blogs) {
        handleEmpty()
        return
    }
    for (let blog of blogs) {
        const article = buildElement("article", null, mainEl)

        buildElement("h3", blog.title, article)
        buildElement("blogQuote", blog.content, article)
        buildElement("p", `Posted by: ${blog.userName}`, article)

        article.classList.add("card")
    }
}

const handleEmpty = function() {
    buildElement("h2", "No Blogs Yet", mainEl)
}

renderBlogList()