const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Bob',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'
        },
        {
            id: 2,
            name: 'Marty',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'
        },
        {
            id: 3,
            name: 'Tom',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'
        },
        {
            id: 4,
            name: 'Jerry',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'
        },
        {
            id: 5,
            name: 'Barbara',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'
        }
    ],
    messages: [
        {id: 1, text: 'Hello'},
        {id: 2, text: 'Morning!'},
        {id: 3, text: 'Yo'}
    ]
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let id = state.messages.length + 1;
            let text = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: id, text: text}]
            };
        default:
            return state;
    }
};

export const sendMessage = (newMessageText) => ({type: SEND_MESSAGE, newMessageText});

export default dialogReducer;