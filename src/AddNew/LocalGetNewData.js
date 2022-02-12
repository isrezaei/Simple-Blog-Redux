import LocalSetNewData from "./LocalSetNewData";

export default function LocalGetNewData (NewData)
{
    LocalSetNewData(NewData)

    return new Promise((resolve, reject) => {

        const Data = JSON.parse(localStorage.getItem('SetData'))

        if (Data)
        {
            return  setTimeout(()=> resolve(Data) , 1500)
        }
        else
        if (!Data)
        {
            return setTimeout(()=> reject('Data Base is Undefined') , 1500)
        }
    })
}