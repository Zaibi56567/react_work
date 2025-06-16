import React from 'react'
import "../Make Css/ThirdCon.css"

function ThirdContainer() {
  const  projectarray = [
    {
      name : "Landing Page",
      imgsrc : "https://web.dev/images/social-wide.jpg",
      desciption:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam alias modi vel, dolore sed eaque.."
    },
    {
      name : "Landing Page2",
      imgsrc : "https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg",
      desciption:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam alias modi vel, dolore sed eaque.."
    },
    {
      name : "Landing Page3",
      imgsrc : "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210310114057/web-development-image.png",
      desciption:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam alias modi vel, dolore sed eaque.."
    },
  ]
//   let style1 = {
//     background: "blue",
//     color: "white",
//     padding: "10px",
//     borderRadius: "5px",
//     fontSize: "16px",
//     border: "none",
//     cursor: "pointer",
//     marginTop : "20px",
//     width:"50%",
//     textAlign: "center"
// };
  return (
    <div className="">
      <div className="allbtn">Recently Projects</div>
      <div className="rcntprjcts">
        {
          projectarray.map((projectelm, projectindx)=>{
            return(
              <div className="rcntdiv">
          <img src={projectelm.imgsrc} alt="" />
          <p className='text-center mt-3 text-light p'>{projectelm.name}</p>
          <p className='text-center mt-3 text-light'>{projectelm.desciption}</p>
        </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ThirdContainer
