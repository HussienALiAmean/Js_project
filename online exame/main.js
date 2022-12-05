let addquestion = document.getElementById('addquestion');
let question_content=document.getElementById('question_content');
let save_question = document.getElementById('save_queations');
let numberid = [0];
var index=0;
var id=1;


function add_question(){
    var question_div = document.createElement("div");
    question_div.className='question_div';
    let ques_input = document.createElement("input");
    let select_ques_type = document.createElement("select");
    let option_ques_one = document.createElement("option");
    let option_ques_two = document.createElement("option");
    let option_ques_default = document.createElement("option");
    // let option_ques_one = document.createElement("option");
    let default_option = document.createTextNode('Choose question type');
    let choose_question = document.createTextNode('Multiply Choose');
    let essay_question = document.createTextNode('Short Note');
    let delet = document.createElement("button");
    let addChoice = document.createElement("button");
    let choiceArea = document.createElement("div");
    let choiceArea_text = document.createTextNode("choiceArea");
    let addChoice_mark = document.createTextNode("Add choices");
    let delet_ques = document.createTextNode("X");
    // var index=&index;

    ques_input.className = 'question_text';
    var id=numberid.length;
    numberid.push(id);
    console.log(numberid[index]);
    addChoice.className = `add_Choice${numberid[index]}`;
    addChoice.appendChild(addChoice_mark);

    choiceArea.appendChild(choiceArea_text);
    choiceArea.className=`add_Choice`;

    option_ques_default.appendChild(default_option);
    option_ques_one.appendChild(choose_question);
    option_ques_two.appendChild(essay_question);

    select_ques_type.appendChild(option_ques_default);
    select_ques_type.appendChild(option_ques_one);
    select_ques_type.appendChild(option_ques_two);

    question_div.appendChild(select_ques_type);
    question_div.appendChild(ques_input);
    question_div.appendChild(addChoice);
    delet.className='delete_question';
    delet.appendChild(delet_ques);
    question_div.appendChild(delet);
    question_div.appendChild(choiceArea);
    question_content.appendChild(question_div);
    var ques_list = document.getElementsByClassName('question_div');
    // for(var i=0;i<ques_list.length;i++){
        addChoice.addEventListener('click',function(){
            // console.log(e.target.classList);
            console.log(this);
            console.log(document.getElementsByClassName(`add_Choice${numberid[0]}`));
            // if(e.target.className == `add_Choice${0}`){
                // var 
                console.log('yes');
                let choice_content=document.createElement('div');
                choice_content.className="choice_div";
                let checkpoint = document.createElement('input');
                checkpoint.setAttribute('type','checkbox');
                // checkpoint.value="kk"
                let anwser_content = document.createElement('input');
                let delet_choice = document.createElement("span");
                let deletChoice_mark = document.createTextNode("x");
                checkpoint.className="check_answer";
                delet_choice.className="delet_choice";
                delet_choice.appendChild(deletChoice_mark);
                anwser_content.className="answer_text";
                choice_content.appendChild(checkpoint);
                choice_content.appendChild(delet_choice);
                choice_content.appendChild(anwser_content);
                // var choice_specific_Area = document.getElementsByClassName(`add_Choice${numberid[0]}`);
                // console.log(choiceArea.hasAttribute('class'));
                // choiceArea.hasClassName(`choiceArea${numberid[i]}`).appendChild(choice_content);
                // console.log(choice_specific_Area);
                // choice_content.prepend()
                console.log(choiceArea.classList[index-1]);
                console.log(choiceArea.classList);
                // choice_specific_Area[1].appendChild(choice_content);
                choiceArea.appendChild(choice_content);
            // }else{  
            //     console.log('no');
            //     console.log(i);
            // }
            delet_choice.addEventListener('click', function() {

                // if (d.classList.contains('deleted')) {
                    // console.log('dd');
                    choice_content.remove();
                    // dd[0].innerHTML = "Your Movie has been deleted";
                // }
    
            })
        
            
        });

        delet.addEventListener('click', function() {

            // if (d.classList.contains('deleted')) {
                // console.log('dd');
                question_div.remove();
                // dd[0].innerHTML = "Your Movie has been deleted";
            // }

        })
    // }
    id++;
    index++
}
var array_questions=[];
var array_answers=[];
var array_check_answer=[];
var Subject=document.getElementById('subject');
var subject_title; 
function choose_subject(){
    console.log(Subject.value);
    subject_title=Subject.value;
}
let all_questions = document.getElementsByClassName('question_text');
let all_answers = document.getElementsByClassName('answer_text');
let al_answers = document.getElementsByClassName("choice_div");
let add_Choice = document.getElementsByClassName("add_Choice");
let check_answers = document.getElementsByClassName('check_answer');
const array_choice_answer =new Array(add_Choice.length);
// var paren = all_answers[0].parentElement.parentNode.firstElementChild
;;;;;;;;;;;;;;;
console.log(al_answers);
console.log(add_Choice);
console.log(array_choice_answer.length);

var ques_answer_length=[];

// console.log(checkpoint.checked);
function save(){
    
    // for(let i=0;i<add_Choice.length;i++){
    //     array_choice_answer.push(i);
    // }
    for(let i=0;i<all_questions.length;i++){

        array_questions.push(all_questions[i].value);
        console.log(all_questions[i].value);
    }
    for(let i=0;i<all_answers.length;i++){

        array_answers.push(all_answers[i].value);
        console.log(all_answers[i].value);
    }
    for(let i=0;i<add_Choice.length;i++){
        ques_answer_length.push(add_Choice[i].children.length);
        for(let j=0;j<add_Choice[i].children.length;j++){
            array_choice_answer.push(add_Choice[i].children[j].lastChild.value);
            
        }
       
        // array_answers.push(all_answers[i].value);
        // console.log(all_answers[i].value);
    }
    for(let i=0;i<check_answers.length;i++){

        array_check_answer.push(check_answers[i].checked);
        console.log(check_answers[i].value);
    }
    var time=document.getElementById('time').value;
    console.log(array_choice_answer);
    localStorage.setItem("question_text",JSON.stringify(array_questions));
    localStorage.setItem("answer_text",JSON.stringify(array_choice_answer));
    localStorage.setItem("check_answer",JSON.stringify(array_check_answer));
    localStorage.setItem("ques_answer_length",JSON.stringify(ques_answer_length));
    localStorage.setItem("subject",subject_title);
    localStorage.setItem("timer",time);
    open('questions.html','self');
};
// var choice_specific_Area = document.getElementsByClassName(`choiceArea${numberid[index]}`);

// var i=22;
// var objREf = {num: [100]};
// function pointer(obj){
// obj.num++;
// }
// pointer(objREf);
// pointer(objREf);
// console.log(objREf.num);


// var email = document.getElementById("email");
// var password = document.getElementById("password");
// // var emailes=
// // [
// //     {
// //         "username": email.value ,
// //         "passwored": password.value
// //     }
// //     ,
// //     {
// //         "username": email.value ,
// //         "passwored": password.value
// //     }
// // ];
// var local_data = localStorage.getItem('email_students');
// var data_from_l_S=[];
// console.log(data_from_l_S);
// function setData()
//    { 
    
//     // localStorage.clear();
//     var json = '{"users":{"test1":""}}';
//     var obj  = JSON.parse(json);
//     var newuser = 'test4';
//     obj.users[email.value] = `${password.value}`;
    
//     JSON.stringify(obj);
//     //=> {"users":{"test1":{},"test2":{},"test3":{}}}
   
//      console.log(local_data);
//     //  console.log(json.parse(local_data));
    
//     if(local_data == null){
//         data_from_l_S.push(password.value);
//          data_from_l_S.push(email.value);
//          localStorage.setItem("email_students",JSON.stringify(data_from_l_S));
//     }else{
//         data_from_l_S=JSON.parse(local_data);
//         data_from_l_S.push(password.value);
//          data_from_l_S.push(email.value);
//          localStorage.setItem("email_students",JSON.stringify(data_from_l_S));
//     }

//     // data_from_l_S.push(local_data);
    
//     console.log(data_from_l_S[0]);
//     // data_from_l_S.push(localStorage.getItem('email_students'));
//     //  data_from_l_S= [localStorage.getItem('email_students')];
//     // data_from_l_S+= [`,{"username": ${email.value},"passwored": ${password.value}}`];
//     //  JSON.parse(data_from_l_S);
//     // json.parse()


//      alert("Data Saved Suucessfully");
// }

// var students = [];

// students.push(localStorage.getItem('email_students'));
// console.log(students);


// var email_login = document.getElementById('email_login');
// var pass_login = document.getElementById('pass_login');

// function login(){
//     console.log(data_from_l_S);
//     var users_details = [];
//     if(data_from_l_S == null){
//         alert('please signup');
//     }else{
//           users_details =JSON.parse(local_data);
//         // console.log(JSON.parse(local_data));
//         for(let i=0;i<users_details.length;i++){
//             if(email_login.value == users_details[i]){
//                 // alert('you can login');
//                 open('index.html');
//             }
//         }
//     }

    
// }

