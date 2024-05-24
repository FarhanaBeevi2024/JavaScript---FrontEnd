class Landing{
    //property
    database={
        Milan:{username:'Milan',password:'milan123'},
        Manu:{username:'Manu',password:'manu123'},
        Mini:{username:'Mini',password:'mini123'}
    }
    //to store data to local storage
    saveData(){
        if(this.database){
            localStorage.setItem("database",JSON.stringify(this.database) )
        }
    }

    //to get data from local storage
    getData(){
        this.database = JSON.parse(localStorage.getItem("database"))
        // console.log(this.database);
    }

    //method to register user
    register(){
        this.getData()
        let user = reguser.value
        let pswd= regpswd.value
        // console.log(user,pswd);
        if(user=="" || pswd==""){
            alert('please fill the form completely')
        }
        else{
           if(user in this.database){
            alert('Account already exist')
           }
           else{
            this.database[user] = {username:user,password:pswd}
            alert('User added successfully')
            this.saveData()
            //navigate to login page
            window.location = 'login.html'
           }
        }
        
    }
   //method to login an user
   login(){
    let user1 = loguser.value
    let pswd1 = logpswd.value
    console.log(user1,pswd1);

    this.getData()
    if(user1=="" || pswd1==""){
        alert('please fill the form completely')
    }
    else{
        if(user1 in this.database){
            if(this.database[user1].password==pswd1){
                alert('Login Successful')
                localStorage.setItem("user",user1)
                //navigate to home
                window.location='home.html'
            
            }else{
                alert('Invalid username or password')
            }
        }
        else{
            alert("Account does'nt exist")
        }
     }
   }
}
//create object
const obj = new Landing()
// obj.saveData()
obj.getData()