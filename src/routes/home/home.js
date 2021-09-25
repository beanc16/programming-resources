import data from "../../helpers/queries/dataStorageSingleton";

function Home()
{
    console.log("data:", data);

    return(
        <div id="home">
            <h1>Home</h1>
            <p>
                This is a living document that will contain various 
                free programming resources to assist with development 
                or help developers learn.
            </p>
        </div>
    )
}



export default Home;