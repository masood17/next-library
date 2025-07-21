// app/api/books/[id]/edit/page.js
export default async function Page(props){
    const params = await props.params;
    const id = params.id
    console.log(id);
    return (
    
    
    
    <p>update Page</p>);
}