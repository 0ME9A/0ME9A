import "./Grid.sass"

const GridTemplate=(probs)=>{
    return(
        <div className="grid">
            {probs.children}
        </div>
    )
}

export default GridTemplate