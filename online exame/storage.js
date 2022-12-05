
var email = document.getElementById("email");
var password = document.getElementById("password");
var email_student = document.getElementById("email_student");
var password_student = document.getElementById("password_student");
var person =document.getElementById('person');
var student_data = localStorage.getItem('student_data');
var local_data = localStorage.getItem('email_students');
var storage_person_type=localStorage.getItem('person_type');
var data_from_Instructor=[];
var data_student=[];
console.log(data_from_Instructor);
var person_type;
function choose_role(){
     person_type=person.value;
     console.log(person_type);
    localStorage.setItem('person_type',person_type);
}
function setStudent()
   { 
    
   
    //  console.log(json.parse(local_data));
    
    if(student_data == null){
        if(person_type == 'Student'){

            data_student.push(password_student.value);
            data_student.push(email_student.value);
            data_student.push(person_type);
             localStorage.setItem("student_data",JSON.stringify(data_student));
        }
    }else{
        data_student=JSON.parse(student_data);
       
            if(data_student.indexOf(email_student.value) == -1){
               
                data_student.push(password_student.value);
                data_student.push(email_student.value);
                data_student.push(person_type);
                localStorage.setItem("student_data",JSON.stringify(data_student));
              
                alert("Data Saved Suucessfully");
            }else{
                
                alert('this email is already exist enter another one');
               
            }
        
    }
    
   
   

        // data_from_Instructor.indexOf()
    
}

function setData()
   { 
    
    // localStorage.clear();
    
    //  console.log(json.parse(local_data));
    
    if(local_data == null){
        if(person_type == 'Instructor'){
        data_from_Instructor.push(password_student.value);
         data_from_Instructor.push(email_student.value);
         data_from_Instructor.push(person_type);
         localStorage.setItem("email_students",JSON.stringify(data_from_Instructor));
        }
    }else{
        data_from_Instructor=JSON.parse(local_data);
       
            if(data_from_Instructor.indexOf(email_student.value) == -1){
               
                data_from_Instructor.push(password_student.value);
                data_from_Instructor.push(email_student.value);
                data_from_Instructor.push(person_type);
                localStorage.setItem("email_students",JSON.stringify(data_from_Instructor));
              
                alert("Data Saved Suucessfully");
            }else{
                
                alert('this email is already exist enter another one');
               
            }
        
    }
    
   
   

        // data_from_Instructor.indexOf()
    
}

function Login(){
    if(person_type == 'Student'){
        student_login();
    }else{
        login();
    }
}
function Signup(){
    if(person_type == 'Student'){
        setStudent();
    }else{
        setData();
    }
}
var students = [];

students.push(localStorage.getItem('email_students'));
console.log(students);
var form=document.getElementById('form');

var email_login = document.getElementById('email_login');
var pass_login = document.getElementById('pass_login');
var email_student_login = document.getElementById('email_student_login');
var pass_student_login = document.getElementById('pass_student_login');
var studentName;

// form.setAttribute('style','display:none;');
          
    function submit_name()
    {
        form.setAttribute('method','get');
        form.setAttribute('action','questions.html');
    }
    
function student_login(){
    // console.log(data_from_Instructor);
    var student_details = [];
    if(data_student == null){
        alert('please signup');
    }else{
          student_details =JSON.parse(student_data);
        // console.log(JSON.parse(local_data));
        for(let i=0;i<student_details.length;i++){
            var j=i-1;
            console.log(student_details.length);
            if(i != 0){
                j=i-1;
            }
            if(email_student_login.value == student_details[i] && pass_student_login.value == student_details[j]){
                // alert('you can login');
                studentName=email_student_login.value;
                // form.setAttribute('style','display:block;');
                
                submit_name();
                
                open('questions.html?name='+email_student_login.value,'self');
            }
           else {
            //     console.log(student_details[i]);
            //     console.log(email_student_login.value,pass_student_login.value);
            //     console.log(i,j);
            //     console.log(student_details[j]);
                
            //     // break;
            //     //open('login.html');
            let alerts=document.getElementById('alert');
            // form.setAttribute('style','display:none;');
            setTimeout(function(){
                alerts.setAttribute('style','display:block;');
            },500);
             // showMessage;
              setTimeout(function(){
                alerts.setAttribute('style','display:none;');
              },2000);
           // clearTimeout(showMessage);
            }
        } 
    }
    
}

function login(){
    console.log(data_from_Instructor);
    var users_details = [];
    if(data_from_Instructor == null){
        alert('please signup');
    }else{
          users_details =JSON.parse(local_data);
        // console.log(JSON.parse(local_data));
        for(let i=0;i<users_details.length;i++){
            var j=i-1;
            console.log(users_details.length);
            if(i != 0){
                j=i-1;
            }
            if(email_student_login.value == users_details[i] && pass_student_login.value == users_details[j]){
                // alert('you can login');
                // form.setAttribute('style','display:block;');
                open('index.html','self');
            }
             else {
                 
            //     console.log(users_details[i]);
            //     console.log(i,j);
            //     console.log(i,j);
            //     console.log(users_details[j]);
                
            let alerts=document.getElementById('alert');
            // form.setAttribute('style','display:none;');
            setTimeout(function(){
                alerts.setAttribute('style','display:block;');
            },500);
             // showMessage;
              setTimeout(function(){
                alerts.setAttribute('style','display:none;');
              },2000);
               // clearTimeout(showMessage);
                // alert('enter correct email or password');
                 //window.location.reload();
             }
        }
    }
    
}
// var button_login=document.getElementById('button_login');
// button_login.addEventListener('click',Login());

