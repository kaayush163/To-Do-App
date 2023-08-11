
let url = "http://localhost:3000/todo";
let url2 = "http://localhost:3000/todocompleted";
//const btn = document.querySelector('.addTask > button');
const form=document.getElementById('form');
const text = document.getElementById('text');

let token =localStorage.getItem('token');
form.addEventListener('submit', addList);
const notCompleted = document.getElementById('notCompleted');
const Completed = document.getElementsByTagName('Completed');
console.log(Completed);

window.addEventListener('DOMContentLoaded',onload);
async function onload(e)
{
    let res=await axios.get(`${url}/get-todo`,{headers:{"Authorization":token}})
    let sec=await axios.get(`${url2}/get-completed`,{headers:{"Authorization":token}});
    try
    {
        console.log(res);
        console.log(res.data);
        res.data.forEach((key)=>  //this key here is working same like i in c++
        {
            console.log(key);   // this is passing as data[i] data[0],data[1]
            onScreen(key);
        })

        console.log(sec);
        console.log(sec.data);
        if(sec.data){
            
            sec.data.forEach((key) => {
                console.log(key);
                displaycompleted(key);
            })
        }
        
    }
    catch(err)
    {
        console.log(err)
    }
}

async function addList(e){
    try{
        e.preventDefault();

        let activity = {
            text : text.value,
        }
        console.log(activity);
        let res=await axios.post(`${url}/post-todo`,activity,{headers:{"Authorization":token}}) //on submit new and fresh form post request will be sent
        console.log(res);
        onScreen(res.data);    //dont worry this will conatin the id 
    }
    catch(err){
        console.log(err);
    }
}
	

async function onScreen(activity)
{
	console.log(activity);

    const newLi = document.createElement('li');	
    const checkBtn = document.createElement('button');
	const delBtn = document.createElement('button');
	checkBtn.innerHTML = '<i class="fa fa-check"></i>';
	delBtn.innerHTML = '<i class="fa fa-trash"></i>';
    newLi.setAttribute("id", activity.id);
		newLi.textContent = activity.text;
		text.value = '';
		notCompleted.appendChild(newLi);
		newLi.appendChild(checkBtn);
		newLi.appendChild(delBtn);
	
		checkBtn.addEventListener('click', async() => {
            let parent = document.getElementById('notCompleted');
            console.log(parent);
            let child = document.getElementById(activity.id);            ////I will remeber this how much to struggle to get this correct
            console.log(child);
            parent.removeChild(child);
            await axios.get(`${url}/delete-todo/${activity.id}`,{headers:{"Authorization":token}})
            console.log(activity);

            done(activity);
            // const parent = this.parentNode;
            // parent.remove();
         });
		delBtn.addEventListener('click', async() => {
          await axios.get(`${url}/delete-todo/${activity.id}`,{headers:{"Authorization":token}});
		  let child = document.getElementById(activity.id);
          console.log(child);
		  child.remove();
		});
}

async function done(data){
    console.log(data.id);
    try{
        
        await axios.post(`${url2}/post-completed`, data,{headers:{"Authorization":token}}); 
        displaycompleted(data);
    }
    catch(err) {
        console.log(err);
    }  
}

function displaycompleted(data){
    let parent = document.getElementById('Completed');
        console.log(parent);
        
        const newLi = document.createElement('li');	
        const delBtn = document.createElement('button');
        delBtn.innerHTML = '<i class="fa fa-trash"></i>';
        newLi.setAttribute("id", data.id);
        newLi.textContent = data.text;
        text.value = '';
        parent.appendChild(newLi);
        newLi.appendChild(delBtn);

        let child = document.getElementById(data.id);            ////I will remeber this how much to struggle to get this correct
        console.log(child);
        parent.appendChild(child);

        delBtn.addEventListener('click', async() => {
            await axios.get(`${url2}/delete-completed/${data.id}`,{headers:{"Authorization":token}});
            let child = document.getElementById(data.id);
            console.log(child);
            child.remove();
          });
}