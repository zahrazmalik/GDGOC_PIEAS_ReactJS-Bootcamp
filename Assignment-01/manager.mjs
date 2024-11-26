import  {Books}  from "./book.mjs";

//console.log(Books);

const highRatedBooks = () => {
    const highRatedBooks = Books.filter((index) => index.rating > 4.5)
    const titles =highRatedBooks.map((index) => index.title);
    console.log("Books with rating higher than 4.5:", titles);
};

const bookDetail =()=>{
    for (let i=0; i<20;i++ )
    {
        let{title,author,rating,genre}=Books[i];
        console.log(`Title: ${title}, Author: ${author}, Rating: ${rating}, Genre: ${genre}`);
    }
   
    
}

const fictionBooks = () => {
    const book = Books.filter(book => book.genre.toLowerCase() === "fiction");
    const title =book.map(book => book.title);
    console.log("Fiction Books:", title);
};

const bookAuthors = () => {
    const authors = Books.map(book => book.author);
    console.log("Book Authors:", authors);
};


highRatedBooks();
bookDetail();
fictionBooks();
bookAuthors();