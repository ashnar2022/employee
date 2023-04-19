//import db
const db=require('./db')

//get all employees
const allEmployees=()=>{
    return db.Employee.find().then(  //promise
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    employees:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:'Employee not found'
                }
            }
        }
    )
}


//add employees
const addEmployees=(id,empname,age,designation,salary)=>{
    return db.Employee.findOne({id}).then(  //promise
        (result)=>{
            if(result){
                return{
                    statusCode:401,
                    message:'Employee already exists'
                }
            }
            else{
                const newEmployee=new db.Employee({id,empname,age,designation,salary})
                newEmployee.save()
                return{
                    statusCode:200,
                    message:'Employee added successfully'
                }
            }
        }
    )
}



//delete employees
const delEmployees=(id)=>{
    return db.Employee.deleteOne({id}).then(  //promise
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    message:'Deleted Successfully'
                }
            }
            else{
                
                return{
                    statusCode:404,
                    message:'No data'
                }
            }
        }
    )
}


//get a prticular employee details
const getAnEmployee=(id)=>{
    return db.Employee.findOne({id}).then(  //promise
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                   employee:result
                }
            }
            else{
                
                return{
                    statusCode:404,
                    message:'No data'
                }
            }
        }
    )
}

//update employee
const updateEmployee=(id,empname,age,designation,salary)=>{
    return db.Employee.findOne({id}).then((result)=>{
        if(result){
            result.id=id;
            result.empname=empname;
            result.age=age;
            result.designation=designation;
            result.salary=salary;// to save data into database
            result.save();
            return{
                statusCode:200,
                message:'Data saved successfully'
            }

        }
        else{
            return{
                statusCode:404,
                message:'Employee not found'
            }
        }
    })

}

module.exports={
    allEmployees,
    addEmployees,
    delEmployees,
    getAnEmployee,
    updateEmployee
}