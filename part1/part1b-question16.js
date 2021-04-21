function loop(obj)
{
    for(let elem in obj)
    {
        //log value if elem starts with 'r' or obj[elem] is odd
        if(elem.startsWith('r') || obj[elem] % 2 == 1)
        {
            console.log(obj[elem]);
        }
    }
}
