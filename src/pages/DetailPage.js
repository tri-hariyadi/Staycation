import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailTitle';
import FeaturedImage from 'parts/FeaturedImage';
import PageDetailDescription from 'parts/PageDetailDescription'; 
import BookingForm from 'parts/BookingForm'; 
import Categories from 'parts/Categories';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';
import ItemDetails from 'json/itemDetails.json';

export default class DetailPage extends Component {
  componentDidMount() {
    document.title = "Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      {
        pageTitle: "Home",
        pageHref: ""
      },
      {
        pageTitle: "House Details",
        pageHref: ""
      }
    ]
    console.log(this.props)

    return (
      <>
        <div style={{position: 'fixed', right: 0, left: 0, zIndex: 10, backgroundColor: 'white'}}>
          <Header {...this.props} />
        </div>
        <div style={{height: 200}}></div>
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={ItemDetails}
        />
        <FeaturedImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailDescription data={ItemDetails} />
              </Fade>
            </div>
            
            <div className="col-5">
              <Fade bottom>
                <BookingForm itemDetails={ItemDetails} />
              </Fade>
            </div>
          </div>
        </section>

        <Categories data={ItemDetails.categories} />
        <Testimony data={ItemDetails.testimonial} />
        <Footer />
      </>
    )
  }
}
