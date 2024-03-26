/*------------------------------------------------------------------------------------------------------*/

const resume = {
  names: "AKASH",
  mobilenumber: "7338714410",
  emailID: "akashp73387144@gmail.com",
  qualification: {
    sslc: "sree saraswathi matriculation school",
    hsc: " sethu bhaskara matriculation school",
    degree: " loyala institute of technology ",
    course: "guvi geeks",
  },
  skills: [
    "javascript",
    "html",
    "css",
    "reactjs",
    "mongoDB",
    "nodejs",
    "expressjs",
  ],
  language: ["tamil", "englis", "telugu"],
  location: "chennai tamilnadu india ",
};
/*----------------------------------------------------------------------------------------------------------*/
console.log(JSON.stringify(resume));
console.log(resume.names);
console.log(resume.emailID);
console.log(resume.mobilenumber);
console.log(resume.qualification.sslc);
console.log(resume.qualification.hsc);
console.log(resume.qualification.degree);
console.log(resume.qualification.course);
console.log(resume.location);

for (var i = 0; i < resume.skills.length; i++) {
  console.log(resume.skills[i]);
}
for (var i = 0; i < resume.language.length; i++) {
  console.log(resume.language[i]);
}

/*for in iteration */

for (var i in resume) {
  console.log(resume[i]);
}

/* for of iteration */

let data = Object.entries(resume);
console.log(data);
for (var [key, values] of data) {
  console.log(values);
}

/*For each iteration */

data = Object.entries(resume);
data.forEach(([key, val]) => console.log(val));

