/*Get Elemnet By Id*/
const wrapper = document.getElementById("wrapper");
console.log(wrapper)


/*Get Elemnet By Class Name*/
const bookTitles = document.getElementsByClassName("name");
console.log(bookTitles)

console.log(Array.isArray(bookTitles))
console.log(Array.isArray(Array.from(bookTitles)))

const arrayResult = Array.from(bookTitles)
arrayResult.forEach(element =>{
    console.log(element.textContent)
})
console.log(arrayResult)


/*Get Elemnet By Tags Name*/
const lis = document.getElementsByTagName("li");
console.log(lis)


/*Get Elemnet By Query Selector*/
const pageBanner = document.querySelector("#page-banner");
console.log(pageBanner)
const bookToRead = document.querySelector(".title");
console.log(bookToRead)


/*Get Elemnet By Query Selector All*/
const books = document.querySelectorAll(".title");
console.log(books)

books.forEach(element =>{
    console.log(element.textContent)
})
console.log(arrayResult)


/*Get Elemnet By Query Selector And Selector All in a Scope*/
const pageBanners = document.querySelector("#page-banner");
console.log(pageBanners.parentNode)

const pageBannerz = document.querySelector("#page-banner");
console.log(pageBannerz.childElementCount)

const bookTitle = document.querySelectorAll(".name");
console.log(bookTitle.nextSibling)
bookTitle.forEach(element =>{
    console.log(element.textContent)
    element.textContent += " God is Good"
})


/*Get Elemnet By Query Selector All To Add Child Using Parent Id*/
const booklist = document.querySelector("#book-list ul")
console.log(booklist)   

booklist.addEventListener('click', (event)=>{
    console.log(event)
})


/*Get Elemnet By Query Selector All To Delete Child Using Parent Id*/
const booklists = document.querySelector("#book-list ul")
console.log(booklists)   

booklists.addEventListener('click', (event)=>{
    const deleteButton = event.target.className
    if(deleteButton == "delete"){
        const litag = event.target.parentNode;
        booklists.removeChild(litag)
    }
})



const bookList = document.querySelector("#book-ul")
const addButton = document.querySelector("#add-book, button")
const bookInput = document.querySelector("#book-input")

addButton.addEventListener('click', (event)=>{
    const bookName = bookInput.value.trim();
    if(bookName != ""){

        const li = document.createElement("li");
        const nameSpan = document.createElement("span");
            // nameSpan.className = "name";
            // nameSpan.textContent = "bookName";

            nameSpan.className =  bookInput.value.trim();
            nameSpan.textContent =  bookInput.value.trim();
            

        const deleteSpan = document.createElement("span");
            deleteSpan.className = "delete";
            deleteSpan.textContent = "delete";

        li.appendChild(nameSpan)
        li.appendChild(deleteSpan);
        bookList.appendChild(li)
    }
})














// const booklistadd = document.querySelector("#add-book button")
// booklistadd.addEventListener('click', (event)=>{
//     const addButton = event.target.className
//     if(addButton == "add"){
//         const litag = event.target.nextSibling;
//         //const btntag = event.parentNode;
//         booklistadd.append(litag)
//     }
// })




