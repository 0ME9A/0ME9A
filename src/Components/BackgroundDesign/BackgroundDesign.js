import './BackgroundDesign.sass'

function BackgroundDesign(){
    let wordlist = ['web','python', 'php','frontend','backend','data','react', 'github','design','loop','condition','class','list','website','omega','web','python', 'php','frontend','backend','data', 'github','design','loop','condition','class','list','website','omega',]
    const a1 = ()=>{
        let wordcontainer = document.getElementById("words")

        for (let i = 0; i < Math.round(window.innerWidth / 25); i++) {
            const element = i;

            const newE = document.createElement("h1")
            newE.id = element;
            newE.innerHTML = wordlist[Math.round(Math.random()*wordlist.length)]
            wordcontainer.appendChild(newE)
            setInterval(() => {
                newE.style.opacity = Math.random()*0.1  
                newE.style.transform = `scale(${(Math.random()*2)})`    
            }, 1000);
        }
    }
    setTimeout(() => {
        a1()
    }, 1000);



    return(
        <>
            <div className='words-container'>
                <div id="words"></div>
            </div>
        </>
    )
}

export default BackgroundDesign