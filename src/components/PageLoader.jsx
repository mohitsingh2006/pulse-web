import React from "react";

const PageLoader = ({width=60,height=60}) => {
  return (
    <div className="page-loader text-center">
        <div>
            <svg width={width} height={height} viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" fill="none" stroke="#dc2626" stroke-width="3" stroke-linecap="round" stroke-dasharray="60 120"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite"></animateTransform></circle></svg>     
        </div>
        <h6>
            Loading...            
        </h6>
        
    </div>
  );
};

export default PageLoader;
