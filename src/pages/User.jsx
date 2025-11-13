import UserCard from "./UserCard";


const User = () => {
    const name = ['Prakhar','Manvi','Hoan','Noma','Mpna','oinhg']
    const testingAlert = (name) => {
    }


    return(
        <div>
           
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repudiandae a doloremque, neque reiciendis voluptatem fugiat sint qui iusto ut impedit consequatur ipsum aut molestias dolor velit tempora architecto. Fugiat?</p>

            {name.map((item,key) => {
                 return(
                    <UserCard
                        testingAlert={testingAlert}
                        name={item}
                        text={"My name is manvi singh"}
                        btnTxt={"save"}
                    />
                 )
            })

            }

    
           <UserCard
            name="Prakhar"
           />

            <UserCard
            name="Mohit"
           />


            
        </div>
    )
}


export default User;