import {DataGenerator} from "./DataGenerator";

export const LocalStorageSetData = () =>
{
    const {SourceData} = DataGenerator()
    return localStorage.setItem('SetData' , JSON.stringify(SourceData))
}



