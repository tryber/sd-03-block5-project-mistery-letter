    let generateLetter = document.getElementById("criar-carta")
    generateLetter.addEventListener('click', createLetter); 
    
    function createLetter(){
        let textoInput = document.getElementById("carta-texto").value 
        let textBox = textoInput.split(" ")
    
        for (let i = 0; i < textBox.length; i++){
            
            let word = document.createElement("span")
            document.getElementById("carta-gerada").appendChild(word)
            word.innerHTML = textBox[i]


            let classListEstilo = ["newspaper","magazine1","magazine2"]
            let classListSize = ["medium","big","reallybig"]
            let classListRotation = ["rotateleft","rotateright"]
            let classListAngle = ["skewleft","skewright"]
            classRandon1 = classListEstilo[Math.floor(Math.random() * classListEstilo.length)]
            classRandon2 = classListSize[Math.floor(Math.random() * classListSize.length)]
            classRandon3 = classListRotation[Math.floor(Math.random() * classListRotation.length)]
            classRandon4 = classListAngle[Math.floor(Math.random() * classListAngle.length)]
            word.classList.add(classRandon1, classRandon2, classRandon3, classRandon4)
            word.addEventListener("click", changeStyle)

            function changeStyle(){
                word.classList.remove(classRandon1, classRandon2, classRandon3, classRandon4)
                classRandon1 = classListEstilo[Math.floor(Math.random() * classListEstilo.length)]
                classRandon2 = classListSize[Math.floor(Math.random() * classListSize.length)]
                classRandon3 = classListRotation[Math.floor(Math.random() * classListRotation.length)]
                classRandon4 = classListAngle[Math.floor(Math.random() * classListAngle.length)]
                word.classList.add(classRandon1, classRandon2, classRandon3, classRandon4)
                
            }
        } document.getElementById("carta-contador").innerHTML = textBox.length
    } 


