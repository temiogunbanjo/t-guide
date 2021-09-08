import React from "react";

function Star(props){
  return(
    <svg height="20" width="19" class="star rating" data-rating={props.value}>
      <defs>
        <linearGradient id="grad1" x1="0%" y1="50%" x2="100%" y2="70%">
          <stop offset="47%" style={{ stopColor:"#ffd700", stopOpacity: 1 }} />
          <stop offset="48%" style={{ stopColor:"#d8d8d8", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style={{fillRule: "nonzero"}} />
    </svg>
  );
}

function Rating(props){
  const customStyles = props.styles ? { ...props.styles } : {};
  return (
    <div className="rows rating-container" style={customStyles}>
      { (() => {
        const array = [];
        const ratingCount = props.rating;
        let prevIndicator = null;
        let indicator = 0;
        let pushValue = null;

        for (let i = 0; i < 5; i++) {
          indicator = 0; // reset to default

          switch(true){
            case ratingCount === 0:
              break;

            case ratingCount > 0 && ratingCount < 1:
              indicator = 0.5;
              break;

            case (ratingCount - i) >= 1:
              indicator = 1;
              break;

            case (ratingCount - i) < 1 && (ratingCount - i) > 0:
              indicator = 0.5;
              break;

            default:
              break;
          }

          pushValue = (prevIndicator === null || prevIndicator > 0.5) ? indicator : 0;
          array.push(pushValue);
          prevIndicator = pushValue;
        }
        return array.map((val, index) => <Star key={`star-${index}`} value={val}/>);
      })() }
    </div>
  );
}

export default Rating;
