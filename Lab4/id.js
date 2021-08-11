function Patient(fName, lName, age, temp) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.temp = temp;
    this.covidResult = Math.floor(Math.random() * 2) === 0 ? "Negative" : "Positive";
    this.toString = function() {
        const theDate = new Date();
        const year = theDate.getFullYear();
        const month = theDate.getMonth() + 1;
        const day = theDate.getDate();
        const hours = theDate.getHours();
        const minutes = theDate.getMinutes();
        const seconds = theDate.getSeconds();
        const adminsionDate = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
        const testResult = `Patient: ${this.fName + this.lName}\nAge: ${this.age}\nAdminsion date: ${adminsionDate}\nTemperature: ${this.temp}\nCOVID-19 test result: ${this.covidResult}`
        console.log(testResult)
        return testResult;

    }
}

const phongPatient = new Patient('Phong', 'Do', 25, 38);
const kamilPatient = new Patient('Kamil', 'Ka', 37, 37.2);
const xonaPatient = new Patient('Xona', 'Louis', 50, 37.5);

phongPatient.toString();
kamilPatient.toString();
xonaPatient.toString();
