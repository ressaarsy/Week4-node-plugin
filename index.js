import chalk from "chalk";
import cowsay from "cowsay";
import figlet from "figlet";
import gradient from "gradient-string";
import dayjs from "dayjs";

const nama = "Muh. Ressa Arsy Ma'rif";
const nim = "F1D022137";

console.log(chalk.bold.bgBlue.white("\n=== Data Mahasiswa ==="));
console.log(chalk.green("Nama : ") + chalk.yellow(nama));
console.log(chalk.green("NIM  : ") + chalk.yellow(nim));
console.log("\n");

console.log(
  cowsay.say({
    text: "Semoga Kuat!",
    e: "^^",
    T: "U ",
  })
);

figlet(nama, (err, data) => {
  if (err) {
    console.log("Figlet error...");
    console.error(err);
    return;
  }
  console.log(gradient.rainbow.multiline(data));
});

console.log(
  chalk.bold("\nSekarang: ") +
    gradient.pastel(dayjs().format("DD MMMM YYYY, HH:mm:ss")) + "\n"
);
