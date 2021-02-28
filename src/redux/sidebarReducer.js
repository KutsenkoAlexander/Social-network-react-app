let initialState = {
    navigation: [
        {id: 1, path: '/profile', name: 'Profile'},
        {id: 2, path: '/dialogs', name: 'Dialogs'},
        {id: 3, path: '/news', name: 'News'},
        {id: 4, path: '/music', name: 'Music'},
        {id: 5, path: '/settings', name: 'Settings'},
        {id: 6, path: '/users', name: 'Users'}
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
    switch (action.type) {
        default:
            return state;
    }
};

export default sidebarReducer;