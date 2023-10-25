
let arrOfObj = [
  {
    id: 1001,
    imageUrl: 'https://hub.dummyapis.com/Image?text=CA&height=120&width=120',
    firstName: 'Cecil',
    lastName: 'Armstrong',
    email: 'Cecil.Armstrong@dummyapis.com',
    contactNumber: '4642298372',
    age: 75,
    dob: '25/02/1948',
    salary: 1,
    address: 'Address1'
  },
  {
    id: 1002,
    imageUrl: 'https://hub.dummyapis.com/Image?text=AH&height=120&width=120',
    firstName: 'Arnoldo',
    lastName: 'Howell',
    email: 'Arnoldo.Howell@dummyapis.com',
    contactNumber: '4024494167',
    age: 43,
    dob: '18/12/1980',
    salary: 2,
    address: 'Address2'
  },
  {
    id: 1003,
    imageUrl: 'https://hub.dummyapis.com/Image?text=FM&height=120&width=120',
    firstName: 'Frederik',
    lastName: 'Morissette',
    email: 'Frederik.Morissette@dummyapis.com',
    contactNumber: '4029891235',
    age: 83,
    dob: '27/06/1940',
    salary: 3,
    address: 'Address3'
  },
  {
    id: 1004,
    imageUrl: 'https://hub.dummyapis.com/Image?text=OB&height=120&width=120',
    firstName: 'Oscar',
    lastName: 'Breitenberg',
    email: 'Oscar.Breitenberg@dummyapis.com',
    contactNumber: '4652990202',
    age: 85,
    dob: '27/09/1938',
    salary: 4,
    address: 'Address4'
  },
  {
    id: 1005,
    imageUrl: 'https://hub.dummyapis.com/Image?text=BK&height=120&width=120',
    firstName: 'Billie',
    lastName: 'Kautzer',
    email: 'Billie.Kautzer@dummyapis.com',
    contactNumber: '4321090594',
    age: 64,
    dob: '02/02/1959',
    salary: 5,
    address: 'Address5'
  },
  {
    id: 1006,
    imageUrl: 'https://hub.dummyapis.com/Image?text=HK&height=120&width=120',
    firstName: 'Hollis',
    lastName: 'Kuvalis',
    email: 'Hollis.Kuvalis@dummyapis.com',
    contactNumber: '4365390378',
    age: 31,
    dob: '31/01/1992',
    salary: 6,
    address: 'Address6'
  },
  {
    id: 1007,
    imageUrl: 'https://hub.dummyapis.com/Image?text=BK&height=120&width=120',
    firstName: 'Bobbie',
    lastName: 'Kunze',
    email: 'Bobbie.Kunze@dummyapis.com',
    contactNumber: '4263291154',
    age: 59,
    dob: '27/11/1964',
    salary: 7,
    address: 'Address7'
  },
  {
    id: 1008,
    imageUrl: 'https://hub.dummyapis.com/Image?text=KB&height=120&width=120',
    firstName: 'Kristina',
    lastName: 'Breitenberg',
    email: 'Kristina.Breitenberg@dummyapis.com',
    contactNumber: '4265893006',
    age: 53,
    dob: '25/01/1970',
    salary: 8,
    address: 'Address8'
  },
  {
    id: 1009,
    imageUrl: 'https://hub.dummyapis.com/Image?text=CF&height=120&width=120',
    firstName: 'Cory',
    lastName: 'Feest',
    email: 'Cory.Feest@dummyapis.com',
    contactNumber: '4373392505',
    age: 50,
    dob: '03/05/1973',
    salary: 9,
    address: 'Address9'
  },
  {
    id: 1010,
    imageUrl: 'https://hub.dummyapis.com/Image?text=RG&height=120&width=120',
    firstName: 'Raheem',
    lastName: 'Gleichner',
    email: 'Raheem.Gleichner@dummyapis.com',
    contactNumber: '4132494000',
    age: 49,
    dob: '03/11/1974',
    salary: 10,
    address: 'Address10'
  }
]

let newArr = arrOfObj.sort( (a,b)=>{
   return (a.firstName) -( b.firstName)
} )

console.log( newArr  );

