export const ValidateEmail = input => {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.match(validRegex)) {
    return true;
  } else {
    return false;
  }
};


export const Data = [
  {
    position: 'Senior ML Developer',
    price: '15k-30k INR',
  },
  {
    position: 'App Developer',
    price: '45k-50k INR',
  },
  {
    position: 'Laravel Developer',
    price: '15k-30k INR',
  },
  {
    position: 'App Senior Developer',
    price: '45k-60k INR',
  },
  {
    position: 'Senior Web Developer',
    price: '65k-80k INR',
  },
];
export const graduationsList = [
  {
    name: 'Graduations',
  },
  {
    name: '12th',
  },
  {
    name: 'B.Tech',
  },
  {
    name: 'Post Graduations',
  },
  {
    name: '10th Pass',
  },
  {
    name: 'B.Tech (CSE)',
  },
];
