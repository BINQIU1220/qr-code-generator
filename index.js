import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";

inquirer
  .prompt([
    {
      name: "input",
      message: "Enter your message or URL please",
    },
  ])
  .then((answer) => {
    fs.writeFile("user-input", `${answer.input}`, (err) => {
      if (err) throw err;
      const qr_svg = qr.image(`${answer.input}`);
      qr_svg.pipe(fs.createWriteStream("qr-img.png"));
      console.log("User input saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error);
    } else {
      console.log(error);
    }
  });
