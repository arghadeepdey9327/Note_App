export default function Note({note}){
    return <ul>{note.map(a=><li key={a.id}>{a.content}</li>)}</ul>
}