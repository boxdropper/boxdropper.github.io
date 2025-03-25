let updateTitle = "New site design!!!!"
document.getElementById("updateTitle").innerHTML = updateTitle;

let data = ["Using sadgrl's layout generator, thank you sadgrl.", "Made some attempts at porting stuff from the old design here, such as the marquees.", "Removed the pile of long-dead crack smoking ponys."];
        let list = document.getElementById("updateList");
        for (i = 0; i < data.length; ++i) {
            let li = document.createElement('li');
            li.innerText = data[i];
            list.appendChild(li);
        }