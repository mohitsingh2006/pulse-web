const UserCard = ({name,testingAlert,text,btnTxt}) =>{
  
    return(
         <div className="card bg-dark text-white mb-4">
                <div className="card-header" onClick={() => testingAlert(name)}>
                     <span>{name}</span>
                     <p>{text}</p>
                </div>
                <div>
                    <button className="btn btn-primary">{btnTxt}</button>
                </div>
        </div> 
    )
}


export default UserCard;