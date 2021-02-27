let initialState = {
    navigation: [
        {path: '/profile', name: 'Profile'},
        {path: '/dialogs', name: 'Dialogs'},
        {path: '/news', name: 'News'},
        {path: '/music', name: 'Music'},
        {path: '/settings', name: 'Settings'}
    ],
    friends: [
        {
            id: 1,
            name: 'Kim',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'
        },
        {
            id: 2,
            name: 'Tom',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'
        },
        {
            id: 3,
            name: 'Rich',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'
        },
        {
            id: 4,
            name: 'Mike',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'
        }
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
};

export default sidebarReducer;