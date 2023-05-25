export const setName = (name) => {
    return { type: "setName", updatedName: name };
}

export const setAge = (age) => {
    return { type: "setAge", updateAge: age };
}

export const setGender = (gender) => {
    return { type: "setGender", updateGender: gender };
}

export const setDesignation = (designation) => {
    return { type: "setDesignation", updateDesignation: designation };
}

export const getName = () => {
    return { type: "getName" };
}
export const getAge = () => {
    return { type: "getAge" };
}

export const getGender = () => {
    return { type: "getGender" };
}

export const getDesignation = () => {
    return { type: "getDesignation" };
}