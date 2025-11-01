import { Link } from "react-router-dom";

const TableHeader = ({
  heading,
  shortDes,
  primaryBtnText,
  primaryBtnClick,
  secontryBtnText,
  secontryBtnClick ,
  addClick,

}) => {
  return (
    <div className="table-header d-flex align-items-center justify-content-between">
      <div>
        <h4>{heading}</h4>
        {shortDes && 
            <p>{shortDes}</p>
        }
      </div>

      {(primaryBtnText || secontryBtnText) &&
        <div className="d-flex gap-2">
            {secontryBtnText &&
                <Link to={addClick} className="btn btn-secondary shadow-none" onClick={secontryBtnClick}>{secontryBtnText}</Link>
            }
            {primaryBtnText &&
               <button className="btn btn-primary shadow-none" onClick={primaryBtnClick}>{primaryBtnText}</button> 
            }
        </div>
      
      }
      
    </div>
  );
};
export default TableHeader;
