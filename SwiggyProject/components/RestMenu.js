
import { useParams } from "react-router";

export default function RestMenu(){

    let id = useParams();
    console.log(id);

    return(
        <>
            <h1>
                Hello coder Army
            </h1>
        </>
    )

}