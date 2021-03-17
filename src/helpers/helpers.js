//make handy data
export const makerPresetsOfGame = (fetchData) => {
    return Object.entries(fetchData).reduce((res, item, index) => {
        res[index] = {name: item[0], field: Object.values(item[1])[0]}
        return res

    }, [])
}


//random array
export const randomArray = (length) =>
    Array(length).fill().map((item,index)=> ({id:index,checked:false}))



//set result

export const setResult =( idItem ,presets)=>{
    const result={
        row:null,
        column:null
    }
    const integer =Math.floor(idItem/presets)
    const rest =idItem%presets
    if(rest>0){
        result.row=integer+1
        result.column=rest
    }
    else if(rest===0){
        result.row=integer
        result.column=presets
    }
    return result
}