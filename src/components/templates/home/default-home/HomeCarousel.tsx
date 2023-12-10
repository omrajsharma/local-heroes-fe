import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

const carouselImages = [
    'https://www.thelondonmummy.com/wp-content/uploads/2017/03/image2-1.jpg',
    'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201812/teacher_india.jpeg',
    'https://www.shutterstock.com/image-photo/indian-male-electrical-engineer-doing-260nw-448081306.jpg'
]

function HomeCarousel(props)
{
    return (
        <Carousel>
            {
                carouselImages.map( (img, i) => <Item key={i} imageUrl={img} /> )
            }
        </Carousel>
    )
}

function Item(props: any)
{
    return (
        <Paper>
            <div style={{maxHeight: "450px"}}>
                <img 
                    style={{width: '100%', height: '100%', objectFit: 'cover',}}
                    src={props.imageUrl}
                    alt="" 
                />
            </div>
        </Paper>
    )
}

export default HomeCarousel;