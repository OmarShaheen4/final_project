function checkName(goingTo) {
    let urlRGEX = /^[a-zA-Z\s]{0,255}$/;
    if (urlRGEX.test(goingTo) && (goingTo != '')) {
        return true;
    } else {
        return false;
    }
}

export { checkName }