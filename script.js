function changeBackgroundColor(color){
    let section = document.getElementById('coding-journey');
    section.style.backgroundColor = color;
}

document.getElementById('intro').addEventListener('click', () => changeBackgroundColor("purple"));

document.getElementById('react').addEventListener('click', () => changeBackgroundColor("green"));

document.getElementById('backend').addEventListener('click', () => changeBackgroundColor("blue"));