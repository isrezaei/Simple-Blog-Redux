import faker from "@faker-js/faker";

export default function LocalSetNewData (NewData)
{
    const {Title , Author , Content} = NewData

    const OldData = JSON.parse(localStorage.getItem('SetData'))

    // console.log(OldData)

    const UUIDS = faker.datatype.uuid()

    const AddNewUsers = {
        id : UUIDS ,
        firstName : Author,
        lastName : ''
    }

    const AddNewPost = {
        id : faker.datatype.uuid(),
        title : Title,
        content : Content,
        date: faker.date.past().getTime(),
        reactions: {
            eyes: 0,
            heart: 0,
            hooray: 0,
            rocket: 0,
            thumbsUp: 0
        },
        usersId : UUIDS
    }




    const Data = {
        posts : [ ...OldData.posts , AddNewPost],
        users : [...OldData.users , AddNewUsers]
    }











    return localStorage.setItem('SetData' , JSON.stringify(Data))
}