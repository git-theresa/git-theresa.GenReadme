const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');
const datafire = require('datafire');
// const primeng = require('primeng');

function inquireQuestions () {
    inquirer
  .prompt([
    {
      type: "input",
      message: "GitHub username",
      name: "username"
    },
    {
      type: "password",
      message: "GitHub Password",
      name: "password"
    },
    {
      type: "input",
      message: "Project Title",
      name: "project name"
    },
    {
        type: "input",
        message: "Contributors",
        name: "contributors"
      },
      {
        type: "input",
        message: "Description of Project",
        name: "description"
      },
      {
        type: "checkbox",
        message: "Technology Stack Used",
        choices: [
            "HTML",
            "CSS",
            "JavaScript",
            "jQuery",
            "Node.js",
            "Express", 
            "React.js",
            "React", 
            "GIT", 
             "GitHub",
            "MongoDB", 
            "MySQL", 
            "Firebase", 
            "Handlebars", 
            "Bootstrap", 
            "Media Queries",
             "APIs", 
             "Microsoft Suite",
              "Heroku",
               "Command- Line"
       ],
        name: "technology"
      },
      {
        type: "list",
        message: "What license do you want to use?",
        choices: [
            "MIT", 
        "BSD", 
        "ISC", 
        "Apache", 
        "GPL"
<<<<<<< HEAD
    ],
        name: "license"
      }
=======
    ]

      },
>>>>>>> eb9e6f1f59b3d7569d89ea2843af2220261b59f8
    

  ])
  .then(function(res) {
    // console.log(response);
    const usersInfo =
` # Project
${res.project}
// ## Live Link


## Description
${res.description}

## Technology Stack
${res.technology}
## Contributors
${res.contributors}
## Contributors
${res.contributors}
## Contact
* #### Name:  ()
${res.name}
* #### Email: []()
${res.email}
* #### LinkedIn: "https:www.linkedin.com/in/
## License
${res.license}
`
      fs.writeFile("README.md", usersInfo, function(err) {
        
       if (err) {
         return console.log(err);
       }

       console.log("Success!");
      });
 });
  //end function
}

// function githubAPICall () {

//     const queryUrl = `https://api.github.com/zen`;
//     // ${username}/repos?per_page=100
//     axios
//       .get(queryUrl)
//       .then(function(res) {
//         console.log(res.data);
        


//       }).catch(function(err){

//         console.log(err);

<<<<<<< HEAD
//       });

//     //end function
// }



// githubAPICall();


=======
    //end function
}

axios
.get(queryUrl)
.then(function()) {

` # Project
${res.project}
// ## Live Link


## Description
${res.description}

## Technology Stack
${res.technology}
## Contributors
${res.contributors}
## Contributors
${res.contributors}
## Contact
* #### Name:  ()
${res.name}
* #### Email: []()
${res.email}
* #### LinkedIn: "https:www.linkedin.com/in/
## License
${res.license}
`


}


// githubAPICall();

//         fs.writeFile("repos.txt", JSON.stringify(repos), + '/n', function(err) {
    
//           if (err) {
//             return console.log(err);
//           }
        
//           console.log("Success!");
        
//         });
//             fs.writeFile('log.txt', JSON.stringify(response), function(err) {
//         if (err) {
//             console.log('error');
//         }
//         else{
//             console.log('success');
//         }
//     })  
    
>>>>>>> eb9e6f1f59b3d7569d89ea2843af2220261b59f8
inquireQuestions();



<<<<<<< HEAD
  
=======
  //end function

// githubAPICall()
// fs.writeFile("repos.txt", JSON.stringify(repos), + '/n', function(err) {

//   if (err) {
//     return console.log(err);
//   }

//   console.log("Success!");

// });
// fs.writeFile('log.txt', JSON.stringify(response), function(err) {
//     if (err) {
//         console.log('error');
//     }
//     else{
//         console.log('success');
//     }
// })   
>>>>>>> eb9e6f1f59b3d7569d89ea2843af2220261b59f8
