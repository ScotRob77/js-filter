  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(itm => itm.age < 20)
console.log(oldEnough)

const paul = people.filter(person => person.name === 'Paul')[0] // the [0] givs us the relevent item in the array
console.log(paul)

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

const has5YearsExp = skill => skill.yrsExperience >= 5
const hasSkills = student => student.skills.filter(has5YearsExp).length > 0
const candidates = students.filter(hasSkills);
console.log(candidates);
const candidateNames = candidates.map( candidate => candidate.name);
console.log(candidateNames)


// const candidates = students.filter( student => {
//     let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5)
//     return strongSkills.length > 0
// });
// console.log(candidates);

