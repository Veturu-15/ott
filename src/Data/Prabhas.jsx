const prabhasMovies = [
    {
      title: "Eeswar",
      year: 2002,
      director: "J. V. Ramana",
      image: "https://m.media-amazon.com/images/M/MV5BYzk5NGMzZWQtZGYyZS00ZWVmLWJkZjUtZjc4NjI4ZGZlZDg2XkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Raghavendra",
      year: 2003,
      director: "K. Raghavendra Rao",
      image: "https://m.media-amazon.com/images/M/MV5BMzQ3NGU4YzEtYTM2My00MzVhLWEwMDktNzQwZDZlNDIxOWJkXkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Adavi Ramudu",
      year: 2004,
      director: "K. Raghavendra Rao",
      image: "https://m.media-amazon.com/images/M/MV5BOGNlYjFlZDEtODQ3Mi00ZjE0LWFiMWYtNWJjMGNlMTVlZTJjXkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Varsham",
      year: 2004,
      director: "S. S. Rajamouli",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS49dh07m7ZFARh5LKdRr1IwUcedMyGGD874w&s"
    },
    {
      title: "Chakram",
      year: 2005,
      director: "S. V. Krishna Reddy",
      image: "https://m.media-amazon.com/images/M/MV5BYWY2NDA0YzMtOGQ0MS00MjdjLTlkYzItNjVmZmM4NjU4YzU4XkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Chatrapathi",
      year: 2005,
      director: "S. S. Rajamouli",
      image: "https://m.media-amazon.com/images/M/MV5BYzZiNjc5OGQtMjViOS00YWE3LTg4NzItYjg1NDA3MjEzOTk2XkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Pournami",
      year: 2006,
      director: "Prabhas",
      image: "https://m.media-amazon.com/images/M/MV5BNzM1ZDM5YjAtOTRmMC00ZjdmLTgwZGYtNmEzOTc1NjE5MzM1XkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Yogi",
      year: 2007,
      director: "V.V. Vinayak",
      image: "https://m.media-amazon.com/images/M/MV5BMjhlYWI3NTYtNjcwNC00YjE3LWIyNWQtZmY1YmY1YmM1OTQxXkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Munna",
      year: 2007,
      director: "Vamsi Paidipally",
      image: "https://m.media-amazon.com/images/M/MV5BMTNhOTg1OGUtZjdkOC00MGRlLWI5MTctNDZiNzVhMmFlYzBlXkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Billa",
      year: 2009,
      director: "Meher Ramesh",
      image: "https://m.media-amazon.com/images/M/MV5BMTY5MTIwMDg0N15BMl5BanBnXkFtZTgwNjA3OTcwMzE@._V1_.jpg"
    },
    {
      title: "Darling",
      year: 2010,
      director: "A. Karunakaran",
      image: "https://m.media-amazon.com/images/M/MV5BZWMxNjE4MjMtOGIxMS00YTliLWI5YzgtYjQ2NzNhMDIzYjRiXkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Mr. Perfect",
      year: 2011,
      director: "Dasaradh",
      image: "https://m.media-amazon.com/images/M/MV5BMmM0ZjU2N2MtY2VhNy00MDUxLWJjMGMtMDkxNzg2Y2I2ODYxXkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Mirchi",
      year: 2013,
      director: "V. B. Rajendra Prasad",
      image: "https://m.media-amazon.com/images/M/MV5BZWI2ZmNiNzQtY2YzNC00ZTc4LTg1ZGItMzVhMGMxMTI0ZjBlXkEyXkFqcGc@._V1_QL75_UX480_.jpg"
    },
    {
      title: "Baahubali: The Beginning",
      year: 2015,
      director: "S. S. Rajamouli",
      image: "https://m.media-amazon.com/images/M/MV5BM2YxZThhZmEtYzM0Yi00OWYxLWI4NGYtM2Y2ZDNmOGE0ZWQzXkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Baahubali 2: The Conclusion",
      year: 2017,
      director: "S. S. Rajamouli",
      image: "https://m.media-amazon.com/images/M/MV5BNTRhYTlhZTgtYmMyYy00NWI4LTk4MzItOWM2YjBmYTg2OTI2XkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Saaho",
      year: 2019,
      director: "Sujeeth",
      image: "https://m.media-amazon.com/images/M/MV5BODllODJhNzYtNTE0OC00ZTdmLWE3NWQtNGNkM2JjMWZhM2MwXkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Radhe Shyam",
      year: 2022,
      director: "Radha Krishna Kumar",
      image: "https://m.media-amazon.com/images/M/MV5BMjE2ZjVjMjctYmRhNS00MTlkLTgyM2ItZjlkMjU2ZmI0N2ZkXkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Adipurush",
      year: 2023,
      director: "Om Raut",
      image: "https://m.media-amazon.com/images/M/MV5BMjA2ODRkMGUtNzUxNC00MmM5LTk3YjQtNTkxNTFlNzFiMjNiXkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Salaar",
      year: 2023,
      director: "Prashanth Neel",
      image: "https://m.media-amazon.com/images/M/MV5BNTU0ZjYxOWItOWViMC00YWVlLWJlMGUtZjc1YWU0NTlhY2ZhXkEyXkFqcGc@._V1_.jpg"
    },
  ];
  