const Save =(e)=>{
    e.preventDefault();
    let result = document.getElementById("result")
    let width = e.target[0].value
    let height = e.target[1].value
    let radius = e.target[2].value
    let color = e.target[3].value
    result.style.width = `${width}px`
    result.style.height = `${height}px`
    result.style.borderRadius = `${radius}px`
    result.style.backgroundColor = `${color}`
}