import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
  return (
    <Carousel fade style={{ borderRadius: '10px' }} interval={2500}>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src="https://static.independent.co.uk/2023/04/06/16/online%20clothes%20shop%20directory%20indybest.jpg"
          alt="First slide"
          style={{ height: '400px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Summer 2023</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fc01fb348-3a5b-11e7-a451-ead20c30db3d.jpg?crop=1485%2C835%2C2%2C122"
          alt="Second slide"
          style={{ height: '400px', objectFit: 'cover' }}
        />

        <Carousel.Caption>
          <h3>New Collection</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src="https://www.musee-mccord-stewart.ca/app/uploads/2021/07/mccord_expositions_parachute_carrousel-1_1200x800_en-1200x800.jpg"
          alt="Third slide"
          style={{ height: '400px', objectFit: 'cover' }}
        />

        <Carousel.Caption>
          <h3>New Arrival</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
