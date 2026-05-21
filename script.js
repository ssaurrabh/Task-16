let studentsArray = [
    {name:"Suresh Kumar",
     Marks:85,   
     Class:10,
     Address:"Uttarakhand"
    },
    {name:"Hrithik Singh",
     Marks:75,   
     Class:12,
     Address:"Uttarpradesh"
    },
    {name:"Sarvesh Nath",
     Marks:60,   
     Class:10,
     Address:"Kolkata"
    },
    {name:"Rishabh Pant",
     Marks:78,   
     Class:12,
     Address:"Maharashtra"
    },
    {name:"Mahendra Singh",
     Marks:84,   
     Class:8,
     Address:"Jharkhand"
    },
    {name:"Vaibhav Sharma",
     Marks:70,   
     Class:12,
     Address:"Delhi"
    },
    {name:"Abhay Rathore",
     Marks:89,   
     Class:6,
     Address:"Assam"
    },
    {name:"Nitesh Kumar",
     Marks:53,   
     Class:10,
     Address:"Rajasthan"
    },
    {name:"Bhavya Parashar",
     Marks:77,   
     Class:12,
     Address:"Punjab"
    },
    {name:"Saurabh Sharma",
     Marks:88,   
     Class:9,
     Address:"Jammu"
    },
    {name:"Ajinkya Rahane",
     Marks:81,   
     Class:11,
     Address:"Bihar"
    },{name:"Saurabh Sharma",
     Marks:88,   
     Class:9,
     Address:"Jammu"
    }
]


let name = document.getElementsByClassName("name")
let marks = document.getElementsByClassName("marks")
let city = document.getElementsByClassName("cla")
let address = document.getElementsByClassName("add")

let mapping = studentsArray.map((data,imp)=>{
    return data
})


for(let i=0;i<studentsArray.length;i++){
    name[i].innerText = mapping[i].name
    marks[i].innerText = mapping[i].Marks
    city[i].innerText = mapping[i].Class
    address[i].innerText = mapping[i].Address
}



function show(data){
    // data.preventDefault()
    let search = document.getElementById("searching").value
    let result = document.getElementById("result")
    let mainbox = document.getElementsByClassName("box")
    // result.innerHTML = " ";

    // if(search === " ") return;
    let fildata = studentsArray.filter((data)=>{
        return data.name.includes(search)
    })

    if(fildata.length > 0 && search !==""){
        let rescont = `<div>Your search result for ${search}</div>`;
        

        fildata.forEach(data =>{
            result.innerHTML = rescont += `
            <div class="sec1">
                   <span>Name:</span>&nbsp;<span class="name">${data.name}</span><br>
                    <span>Marks</span>&nbsp;<span class="marks">${data.Marks}</span><br>
                    <span>Class</span>&nbsp;<span class="cla">${data.Class}</span><br>
                    <span>Address</span>&nbsp;<span class="add">${data.Address}</span><br>
                </div>
            
            `
            mainbox[0].style.display = "none";
        })

    }
    else if(search === ""){
        mainbox[0].style.display = "grid";
        result.innerHTML = "";
    }

    else{
        result.innerHTML = "<div>No data Found</div>"
        mainbox[0].style.display = "none";
    }

}



