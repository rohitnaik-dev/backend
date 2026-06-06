let library = [
  {title: "AB", author: "sham", isRead: false},
  {title: "CD", author: "shams", isRead: false},
  {title: "EF", author: "shama", isRead: false},
];

library.push({
  title:"Atomic habbits",
  author: "sham",
  isRead: false
})

console.log(library);

function markRead(name) {
   for(let lib of library){
    if(lib.title === name){
      lib.isRead = true;
    }
   }
}

markRead("Atomic habbits");
console.log(library);


function bookByTitle(title) {
  let book = library.find(b => b.title == title);

  if (book) {
    console.log("Yes");
    
  } else {
    console.log("No");
    
  }
}

bookByTitle("QZ");
