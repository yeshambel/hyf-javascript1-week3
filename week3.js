const bookTitles = [
    "computer_programming",
    "full_stack_ developer",
    "node_js_web_development",
    "becoming",
    "the_secrate",
    "web_development",
    "a_smart_way_javascript",
    "javascript_for_beginner",
    "web_design_for_beginner",
    "agent_oreinted_programming"
];

const books = {
    computer_programming: {
        title: 'Computer programming',
        language: "English",
        author: 'Joseph coner'
    },
    full_stack_developer: {
        title: 'Full Stack developers',
        language: "English",
        author: 'Sharme Aneeta'
    },
    node_js_web_development: {
        title: 'Node js web development using HTML, CSS, AND Javascript.',
        language: "English",
        author: 'David Harron',
    },
    becoming: {
        title: 'Becoming',
        language: "English",
        author: 'Michelle Obama',
    },
    the_secrate: {
        title: 'The secrets',
        language: "English",
        author: 'Carmine Gallo',
    },
    web_development: {
        title: 'Web development using HTML, CSS and Javascript',
        language: "English",
        author: 'Jan ducket',
    },
    a_smart_way_javascript: {
        title: 'A smart ways of learning javascript',
        language: "English",
        author: 'Charles duhig',
    },
    javascript_for_beginner: {
        title: 'Javascript for begginer',
        language: "English",
        author: 'Stephen blum..',
    },
    web_design_for_beginner: {
        title: 'Web design for begginner using HTML, CSS and Javascript',
        language: "English",
        author: 'Jr.Jerry lee ford',
    },
    agent_oreinted_programming: {
        title: 'Programming for beginner for all languages',
        language: "English",
        author: 'Matthew M.mutbach',
    }
};
let bookCover = {
    "computer_programming": "images/programming.jpg",
    "full_stack_ developer": "images/full.jpg",
    "node_js_web_development": "images/node.jpg",
    "becoming": "images/becoming.jpg",
    "the_secrate": "images/secret.jpg",
    "web_development": "images/webdevelopment.jpg",
    "a_smart_way_javascript": "images/smart.jpg",
    "javascript_for_beginner": "images/javascript.jpg",
    "web_design_for_beginner": "images/web-design.jpg",
    "agent_oreinted_programming": "images/agent.jpg"
}
let value = Object.values(books);
let cover = Object.keys(bookCover);
console.log(cover);

function displayHello() {
    var msg;
    for (let i = 0; i < cover.length; i++) {
        msg = document.getElementById("message");
        msg.innerHTML += `<div class="grid-container">  
         <div class="grid-item"> <img src= ${Object.values(bookCover)[i]} alt='Cover Photos a  book'style='width:100%;'></div>
                  <div class="grid-item">  
                  <h4> ${value[i].title} </h4>
                  <h5>Language:${value[i].language}</h5>
                  <p>by ${value[i].author} </p> 
                  </div>
                  </div>`;
    }
}