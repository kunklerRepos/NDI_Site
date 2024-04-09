<<<<<<< Updated upstream
const cleanUp = (targetId) =>
{
    let targetElem = document.getElementById(targetId);
    while(targetElem.firstChild)
    {
        targetElem.removeChild(targetElem.lastChild);
    }
    return true;
};


=======
const cleanUp = (targetId) =>
{
    let targetElem = document.getElementById(targetId);
    while(targetElem.firstChild)
    {
        targetElem.removeChild(targetElem.lastChild);
    }
    return true;
};


>>>>>>> Stashed changes
export default cleanUp;