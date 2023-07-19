export default function BlogPost({params}) {
    const {slug}=params;
    
  return (
    <div>
      <h2>{slug}</h2>
    </div>
  )
}
