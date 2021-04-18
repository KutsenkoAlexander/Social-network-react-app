export const updateObjectInArray = (items, itemId, objPropName, newObjectProps) => {
    return items.map(e => {
        if (e[objPropName] === itemId) {
            return {...e, ...newObjectProps};
        }
        return e;
    })
}