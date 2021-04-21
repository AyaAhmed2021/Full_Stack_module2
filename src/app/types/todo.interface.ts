export interface TODO_INTERFACE {
    _id : string ,
    title : string,
    isCompleted : boolean,
    User : {
        id : string,
        name : string
    }
    createdAt : string
}