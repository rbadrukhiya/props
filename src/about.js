function About(n)
{
    return(
        <>
        
       <h1> {n.name}</h1>
       <h1> {n.email}</h1>
       {/* <h1>{n.img}</h1> */}
<img src={n.img}></img>        
        
        </>
    )
}
export default About