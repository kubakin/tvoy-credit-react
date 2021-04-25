const setSomething = (newObj) => {
    return {
        type: 'TEST',
        payload: newObj,
    }
}
export {
    setSomething
}