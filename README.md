### ProductList.js component
the problem i'm having is i don't know how use filter th products that is render on the page 

at first all product is rendered but when a certain category is been clicked i want the related
product to be displayed so i don't know how to go about that 


(const ProductList = () => {
  const { loading, products, error } = useSelector(state => state.allProducts)
  const dispatch = useDispatch()
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch(err => {
          dispatch(failedProducts(err.message))
          console.log(err)
        })

      dispatch(setProducts(response.data))
    }
    getProducts()
  }, [dispatch])
)