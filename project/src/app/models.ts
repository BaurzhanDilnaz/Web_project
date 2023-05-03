export interface AuthToken{
    token : string
}

export interface Task{
    title : string,
    subject : string,
    description : string,
    isActive : boolean,
    active : number
}

export const tasks = [
    {
        title : "aadasd",
        subject : "pp1",
        description : `sdljansd
        asdasda
        sdljansdasd
        asdsfrefvweer`,
        isActive : false,
        active : 0
    },
    {
        title : "aada21sd",
        subject : "pp1",
        description : "asdasd",
        isActive : false,
        active : 0
    },
    {
        title : "aada21asdsd",
        subject : "pp1",
        description : "asdasd",
        isActive : false,
        active : 0

    },
    {
        title : "aada21asdsd",
        subject : "pp1",
        description : "asdasd",
        isActive : false,
        active : 0
    }
]