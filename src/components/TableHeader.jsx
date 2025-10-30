const TableHeader = ({heading,shortDes,primaryBtnText,primaryBtnClick,secontryBtnText,secontryBtnClick}) => {
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
                <button className="btn btn-secondary shadow-none" onClick={secontryBtnClick}>{secontryBtnText}</button>
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
