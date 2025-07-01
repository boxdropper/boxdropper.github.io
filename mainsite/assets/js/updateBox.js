let updateTitle = "New Domain Name!"
document.getElementById("updateTitle").innerHTML = updateTitle;

let data = ["Had I known that it was this easy, I would've done it sooner, but hey, it's here now!",];
        let list = document.getElementById("updateList");
        for (i = 0; i < data.length; ++i) {
            let li = document.createElement('li');
            li.innerText = data[i];
            list.appendChild(li);
        }