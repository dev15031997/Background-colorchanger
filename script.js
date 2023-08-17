function changeColor(color)
        {
            document.body.style.backgroundColor=color
            let cls=document.getElementsByClassName("cls")
            if(color=='#000000')
            {
                for(let elm of cls)
                {
                        elm.style.color="white"
                }
            }
            else{
                for(let elm of cls)
                {
                        elm.style.color="#000000"
                }
            }
        }