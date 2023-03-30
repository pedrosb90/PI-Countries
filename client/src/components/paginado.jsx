// component
// const [pageNr, setPageNr] = useState(0)

// useEffect(() => {
//   // haces el request a /countries
//   // trigger the request => offset: pageNr * 10
//   // dispatch =>
//   await axios.get('http://localhost:4000/countries', { params: { offset: 0 } });
// }, [pageNr])

// <button onClick={() => setPageNr(page + 1)}>Next Page</button>

// Requests:
// Thunder client => probas ruta offset: 10, offset: 20

// Route backend

// router.get('/countries', async (req, res, next) => {

//     const { offset } = req.query

//     // 1era vez
//     // offset: 0
//     // limit: 10

//     // 2do vez
//     // offset: 10
//     // limit: 10

//     // 3era vez
//     // offset: 20
//     // limit: 10

//     res.send(controller.getCountries(offset))

//   })

//   // testQueries.js

//   // controller - backend
//   const getCountries = async (offset) => {

//     const countries = await Country.findAll({
//       offset,
//       limit: 10,
//       include: Activity
//     })

//     console.log(countries)

//     return countries;
//   }

//   // node testQueries.js
//    getCountries(10);
