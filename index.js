import inquirer from "inquirer";
import qr from "qr-image";
import fs from "node:fs";

const questions = [
  {
    type: "input",
    name: "url",
    message: "Please enter your url",
    default:
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1",
  },
];

inquirer.prompt(questions).then((answers) => {
  var qr_png = qr.image(answers.url);
  qr_png.pipe(fs.createWriteStream("myqr.png"));
  fs.writeFile("url.txt", answers.url, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});
