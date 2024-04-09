const cleanUp = (targetId) =>
{
    let targetElem = document.getElementById(targetId);
    while(targetElem.firstChild)
    {
        targetElem.removeChild(targetElem.lastChild);
    }
    return true;
};


export default cleanUp;