/** 
* TODO Add description of the solution
**/
function calculateChinesZodiac(arg) {
  let mapper;
  let year = [
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
  ];
  let animal = [
    'Dragon',
    'Snake',
    'Horse',
    'Sheep',
    'Monkey',
    'Rooster',
    'Dog',
    'Pig',
    'Rat',
    'Ox',
    'Tiger',
    'Hare',
  ];
  if (arg !== 2000 && arg !== 2011) {
    for (let index = 0; index < year.length; index++) {
      if ((year[index] - arg) % 12 === 0) {
        mapper = animal[index];
      }
    }
  } else {
    for (let index = 0; index < year.length; index++) {
      if (year[index] === arg) {
        mapper = animal[index];
      }
    }
  }
  console.log(mapper);
}

calculateChinesZodiac(2013);
