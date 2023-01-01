export default function CreateNode(value,type,text)
{
    const node=document.createElement(type);
    node.setAttribute("id",type);
    if(type==="img")
        node.src=value;
    else
    {
        node.innerHTML=`${text+value}`;
    }
    return node;
}