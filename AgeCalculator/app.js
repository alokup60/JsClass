const ageVal = document.getElementById("ageVal");

const calculateAge = () => {
  const dob = new Date(document.getElementById("ageInp").value);
  //   let currDate = Date.now();
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();

  if (months < 0 || (months === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  ageVal.innerHTML = `Your age is ${+age} years old`;
  console.log(age);
};
