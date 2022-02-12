import faker from "@faker-js/faker";


export const DataGenerator = () =>
{
    const SourceData =
        {
            posts : [],
            users : []
        }

    let C = 0
    let I = 0

    do {
        SourceData.users.push({
            id : faker.datatype.uuid(),
            firstName : faker.name.firstName(),
            lastName : faker.name.lastName(),
        })

        C++;
    }
    while (C < 6)

    do {
        SourceData.posts.push({
            id : faker.datatype.uuid(),
            title : faker.lorem.text(),
            content : faker.lorem.sentences(),
            date: faker.date.past().getTime(),
            reactions: {
                eyes: 0,
                heart: 0,
                hooray: 0,
                rocket: 0,
                thumbsUp: 0
            },
            usersId : faker.random.arrayElement(SourceData.users).id
        })
        I++ ;
    }
    while (I < 6)


    return {SourceData}
}
