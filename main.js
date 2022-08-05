// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


let testPAequor = [];

// Shuffling dna Bases
const shuffle = (arr) => {
  temp = [];
  originalLength = arr.length;
  for (let i = 0; i < originalLength; i++) {
    temp.push(arr.splice(Math.floor(Math.random() * arr.length), 1));
  }
  return temp;
};

// Creating a Factory function
const pAequorFactory = (specimenNum, dna) => {
  return {
    _specimenNum: specimenNum,
    _dna: dna,
    // method do modify the dna Bases
    mutate() {
      let mutation = shuffle(this._dna);
      if (mutation === this._dna) {
        shuffle(mutation);
      } else {
        return (this._dna = mutation);
      }
    },
    compareDna(pAequorToCompare) {
      let otherDna = pAequorToCompare._dna;
      let primeDna = this._dna;
      let similar = [];
      for (let i = 0; i < primeDna.length; i++) {
        if (otherDna[i] == primeDna[i]) {
          similar.push(otherDna[i]);
        }
      }
      let commonpercentage = Math.floor(
        (similar.length / otherDna.length) * 100
      );
      return `Specimen #1 and Specimen #2 have ${commonpercentage}% DNA in common.`;
    },
    willLikelySurvive() {
      let cgbases = [];
      for (let i = 0; i < this._dna.length; i++) {
        if (this._dna[i] === "C" || this._dna[i] === "G") {
          cgbases.push(this._dna[i]);
        }
      }
      let percentage = cgbases.length / this._dna.length;
      if (percentage >= 0.6) {
        return true;
      } else {
        return false;
      }
    },
  };
};

//Creating a random name
const nameTestGenerator = () => {
  let i = Math.floor(Math.random() * 100000)
  return "TestPAequor" + i;
};
// Creating a single test 
const testCreator = () => {
  nameTestGenerator();
  let i = 0;
  let newBlob = pAequorFactory(nameTestGenerator(), mockUpStrand());
  i++;
  // making sure the tests are most likely to survive
  if (newBlob.willLikelySurvive() === true) {
    testPAequor.push(newBlob);
  }
};
// Multiplying by the requested number
const multipletestCreator = () => {
  while (testPAequor.length < 30) {
    testCreator();
  }
};

multipletestCreator();
console.log(testPAequor);

const protA = pAequorFactory(3, [
  "T",
  "C",
  "C",
  "G",
  "T",
  "T",
  "T",
  "C",
  "C",
  "T",
  "G",
  "A",
  "G",
  "C",
  "A",
]);
const protB = pAequorFactory(2, [
  "C",
  "C",
  "C",
  "C",
  "C",
  "C",
  "G",
  "G",
  "G",
  "T",
  "T",
  "A",
  "A",
  "T",
  "T",
]);





