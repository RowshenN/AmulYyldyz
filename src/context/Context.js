import React ,{ useState, useEffect,createContext} from "react";

export const Context = createContext();

const ContextProvider = (props)=>{
    
     
    let localFav; 
        const favHarytlar = localStorage.getItem("FavHarytlar");
 
 
    if(favHarytlar){
        localFav = JSON.parse(favHarytlar);
    }else{
        localFav = [];
    }

     
    const [favorites,setFavorites] = useState(localFav);



    const AddToFav = async(product)=>{
        console.log("addtoo",product);
        let id = product.id;
        let barmy=false;
              favorites.map((haryt)=>{
                if(haryt.id===product.id){
                   barmy=true;
                }
            });
            if(!barmy){   
                let harytlar = favorites;
                harytlar.push() ;        
                setFavorites([
                        ...favorites,
                            product
                    ]);
                }else{
                   let harytlar = favorites.filter((haryt,i)=>{
                    return product.id !== haryt.id;
                   });
                   setFavorites(harytlar);

                }
    } 

    useEffect(()=>{
        
        localStorage.setItem("FavHarytlar",JSON.stringify(favorites));
    
    },[favorites]);

  
   
    let [dil,setDil]=useState();
        useEffect(()=>{
                let dilData = localStorage.getItem("AmulDil");
            if(dilData){
                setDil(JSON.parse(dilData));
            }else{
                setDil("EN");
            }
        },[])

    const ChangeDil = (event)=>{
            setDil(event);
            localStorage.setItem("AmulDil",JSON.stringify(event));
    }

    return(
        <Context.Provider value={{dil,favorites,ChangeDil,AddToFav}}>
            {props.children}
        </Context.Provider>
    );
};
 

export default ContextProvider;