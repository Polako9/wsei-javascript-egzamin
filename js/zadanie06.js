window.onload = () => {
    let list = document.getElementById('shopping-list')

    document.getElementById('button-1').onclick = () => {
        let li = document.createElement('LI')
        li.appendChild(document.createTextNode('Chleb'))
        list.appendChild(li)
    }

    document.getElementById('button-2').onclick = () => {
        list.removeChild(list.lastElementChild)
    }

    document.getElementById('button-3').onclick = () => {
        let child = list.children[1].innerText
        let li = document.createElement('LI')
        li.appendChild(document.createTextNode(child))
        list.appendChild(li)
    }
}