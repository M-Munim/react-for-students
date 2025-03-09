// function Welcome() {
//     return <div>
//         <h1>Contact</h1>
//         <p>contact me here: 0303030330</p>
//     </div>

// }
// export default Welcome;


// -------------------
// rafce 
import React from 'react'   // importing react from react

const card = (props) => {
    return (
        <div className='card'>
            <div className='border'>
                <h1>{props.heading}</h1>
                <p>Details are : {props.content}</p>
                {/* <p>2 + 2 = {2 + 2}</p> */}
            </div>
        </div>
    )
}
// card() ✋❌

export default card












// const card = ({heading, content}) => {
//     return (
//         <div className='card'>
//             <div className='border'>
//                 <h1>{heading}</h1>
//                 <p>Details are : {content}</p>
//                 {/* <p>2 + 2 = {2 + 2}</p> */}
//             </div>
//         </div>
//     )
// }