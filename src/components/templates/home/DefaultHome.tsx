import Container from "../../atoms/Container"
import HomeCarousel from "./default-home/HomeCarousel"
import HomeBeauty from '../../../assets/icons/home_beauty.svg'
import HomeCook from '../../../assets/icons/home_cook.svg'
import HomeDigital from '../../../assets/icons/home_digital.svg'
import HomeEducation from '../../../assets/icons/home_education.svg'
import HomeMisc from '../../../assets/icons/home_misc.svg'
import { Link } from "react-router-dom"

const categories = [
  {
    element: HomeCook,
    name: "Home",
    path: "/home"
  },
  {
    element: HomeBeauty,
    name: "Beauty and Grooming",
    path: "/beauty"
  },
  {
    element: HomeDigital,
    name: "Technology and Electronics",
    path: "/techonology"
  },
  {
    element: HomeEducation,
    name: "Education",
    path: "/education"
  },
  {
    element: HomeMisc,
    name: "Other",
    path: "/other-services"
  },
]

const UserHome = () => {
  return (
    <div>
      <HomeCarousel />
      <Container>
        <section>
          <h1 style={{textAlign: "center", fontSize: "48px", marginBottom:"24px"}}>Our services</h1>
          <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", width: "100%"}}>
            {categories.map((category, idx) => <CategoryCard 
            key={idx} 
            element={category.element} 
            name={category.name}
            path={category.path}
            />)}
          </div>
        </section>
        
      </Container>
    </div>
  )
}

const CategoryCard = ({element, name, path}: any) => {
  return (
    <div style={{width: "45%", maxHeight: '300px', textAlign: "center", marginBottom: "48px", borderRadius: "16px", cursor: "pointer", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}} >
        <Link to={"/category" + path}>
        <img 
          src={element} 
          alt="" 
          style={{width: '100%', height: '100%' }}
        />
        <p>{name}</p>
       </Link>
      </div>
  );
}

export default UserHome
