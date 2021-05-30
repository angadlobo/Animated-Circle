import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './AnimatedLevelCard.scss';
import ProgressBar from './CircleAnimation';



const AnimatedLevelCard = (props) => {

  const datavalue={
    
      "data": {
         
          "id": 1,
          "title": "Animated Circle Component",
          "subTitle": "This is a hover animated ",
          "CardImageWidget": [
              {
                  "id": 23,
                  "title": "Title data 1",
                  "description": null,
                  "hoverDescription": "It is 50% ",
                  "levelText": "Beginner",
                  "levelPercentage": "50",
                  "levelColor": "#93C64A",
                  "learnMoreText": "Learn More",
                  "cover": {
                      
                      "url": "https://picsum.photos/id/211/200/300"
                     
                  }
              },
              {
                  "id": 24,
                  "title": "Title data 2",
                  "description": null,
                  "hoverDescription": "It is 75 %",
                  "levelText": "Intermediate",
                  "levelPercentage": "75",
                  "levelColor": "#4E4EFB",
                  "learnMoreText": "Learn More",
                  "cover": {
                      
                      "url": "https://picsum.photos/id/202/200/300"
                  }
              },
              {
                  "id": 25,
                  "title": "Title data 3",
                  "description": null,
                  "hoverDescription": "It is 100 %",
                  "levelText": "Advanced",
                  "levelPercentage": "100",
                  "levelColor": "#B90F01",
                  "learnMoreText": "Learn More",
                  "cover": {
                     
                      "url": "https://picsum.photos/id/209/200/300",
                    
                  }
              }
          ]
      }
  
}
  const [, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  const [flag, setflag] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const responsive = {
    tablet: {
      breakpoint: { max: 1200, min: 990 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 990, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    minmobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
 
  console.log(datavalue)

  return (
    <React.Fragment>
     
        <div className="animatedLevelCard-background">
          <div className="container-fluid">
            <div className="animatedLevelCard-flex-container">
              <h1 className="animatedLevelCard-title-h1">{datavalue.data?.title}</h1>
              <h5 className="animatedLevelCard-subtitle-h5">{datavalue.data?.subTitle}</h5>
            </div>
            <div className="container">
              <Row xl={3} md={3} xs={1} lg={3}>
                {datavalue.data?.CardImageWidget.map((items, i) => {
                  return (
                    <Col key={i}>
                      <div
                        className="animatedLevelCard-card"
                        onMouseEnter={() => setflag(true)}
                        onMouseLeave={() => setflag(false)}
                      >
                        <div
                          className="animatedLevelCard-img"
                          style={{ backgroundImage: 'url("'+items.cover.url+'")' }}
                        />
                        <div className="animatedLevelCard-overlay" />
                        <div className="animatedLevelCard-flex-card">
                            <div className="animatedLevelCard-circle">
                                {flag && <ProgressBar
                                  levelColor={items.levelColor}
                                  levelPercentage={items.levelPercentage}
                                  levelText={items.levelText}
                                />}
                            </div>
                          <h2 className="animatedLevelCard-h2">{items.title}</h2>

                          <hr
                            className="animatedLevel-hr-line"
                          />
                          <h4 className="animatedLevelCard-h4">{items.learnMoreText}</h4>
                          <h6 className="animatedLevelCard-h6">
                            {items.hoverDescription}
                          </h6>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </div>
        </div>
     
    
    </React.Fragment>
  );
};

export default AnimatedLevelCard;
