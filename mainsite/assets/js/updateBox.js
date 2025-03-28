let updateTitle = "New Banners Added!"
document.getElementById("updateTitle").innerHTML = updateTitle;

let data = ["New Raidou Kuzunoha themed banners and logos, Raidou Remaster coming, get hyped.",];
        let list = document.getElementById("updateList");
        for (i = 0; i < data.length; ++i) {
            let li = document.createElement('li');
            li.innerText = data[i];
            list.appendChild(li);
        }