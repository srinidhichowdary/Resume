// function loadJSON(file,callback)
// {
// var xhr=new XMLHttpRequest();
// xhr.overrideMimeType("application/json");
// xhr.open("GET",file,true);
// xhr.onreadystatechange=function()
// {
// if(xhr.readystate==4 && xhr.status=="200")
// {
// callback(xhr.responseText);
//
// }
// }
// xhr.send();
// }
//
//=>  anonymuous arrow function to use one fn o/p in another fn

//func(resolve,reject)
// {

// }

function loadJSON(file)
{
  return new Promise((resolve,reject)=>{  //resole,reject not predefined
    return fetch(file).then(response=>{
      if(response.ok)
      {
        resolve(response.json());

      }else {
         reject(new  Error('error'));
      }

    })

  })
}

var fetchedData=loadJSON("data.json")
fetchedData.then(data=>
{
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);
  acheivements(data.acheivements);
                     // function declaration

})
var child2=document.querySelector("#child2"); //id so # use
//career function
function career(car)
{
  var heading=document.createElement("h2");   //heading
  heading.textContent="career objective";    //heading
  child2.appendChild(heading);     //heading
  var hline=document.createElement("hr");
  heading.appendChild(hline);
  var p=document.createElement("p");
  p.textContent=car.info;                 //contents
  child2.appendChild(p);
}
//education
function education(edu)
  {
    var heading=document.createElement("h2");
      heading.textContent="education";
   //edu -data.education,edu-parameter heading.textContent="Educationqualificaton";                                      //data-json file  heading.textContent="Educationqualificaton";
  child2.appendChild(heading);
    var hline=document.createElement("hr");
    heading.appendChild(hline);
    var table=document.createElement("table");  //table creation
    child2.appendChild(table);    //see in elements(console)tabletag will be
   var tr="<tr><td>sno</td><td>degree</td><td>institute</td> <td>data</td></tr>";
   // table.innerHTML=tr;
   table.border="1";
   var tr1="";
   for(var i=0;i<edu.length;i++)
   {
     tr1+="<tr><td> "+(i+1)+"</td><td> "+edu[i].degree+"</td><td> "+edu[i].institute+"</td><td> "+edu[i].data+"</td></tr>";

   }

    table.innerHTML=tr+tr1;
  }
  // skills
  function skills(skills)
  {
    var heading=document.createElement("h2");   //heading
    heading.textContent="skills";    //heading
    child2.appendChild(heading);     //heading
    var hline=document.createElement("hr");
    heading.appendChild(hline);
    for(var i=0;i<skills.length;i++){
    var title=document.createElement("h4");
    title.textContent=skills[i].title;
    child2.appendChild(title);
    var list=document.createElement("ul");
    child2.appendChild(list);
    for(var j=0;j<skills[i].set.length;j++)
    {
      var listItem=document.createElement("li");
      listItem.textContent=skills[i].set[j];
      list.appendChild(listItem);
    }
  }
}
// achievements
function acheivements(acheivement)
{
  var heading=document.createElement("h2");   //heading
  heading.textContent="acheivements";    //heading
  child2.appendChild(heading);     //heading
  var hline=document.createElement("hr");
  heading.appendChild(hline);
  var list=document.createElement("ul");
    child2.appendChild(list);
    var i=0;
    while (i<acheivement.length) {
      var listItem =document.createElement("li");
      listItem.textContent=acheivement[i].acheivedData;
        list.appendChild(listItem);
        i++;
    }
}
