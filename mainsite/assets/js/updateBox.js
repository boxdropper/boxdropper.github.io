let updateTitle = "Autoplaying music!"
document.getElementById("updateTitle").innerHTML = updateTitle;

let data = ["No, you can't adjust the volume, deal with it.",];
        let list = document.getElementById("updateList");
        for (i = 0; i < data.length; ++i) {
            let li = document.createElement('li');
            li.innerText = data[i];
            list.appendChild(li);
        }