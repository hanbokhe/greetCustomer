var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  // your code here
  if (customerData[firstName] === undefined)
  {
      return "Welcome! Is this your first time?"
  }
  switch (customerData[firstName]['visits'])
  {
      case 1 : return "Welcome back, " + firstName + "! We're glad you liked us the first time!";
      break;
      default : return "Welcome back, " + firstName + "! So glad to see you again!";
      break;
  }
}
