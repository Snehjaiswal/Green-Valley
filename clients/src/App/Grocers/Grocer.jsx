import React from 'react'
import { useNavigate } from 'react-router-dom';

function Grocer() {
  const navigate = useNavigate();


  const Grocerhome = () => {
    navigate('/grocerhome');
  }
  const GrocersData = [
    {
      id: 1,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0mpEAFXv-iIa50q5rA2L6nnHGy_akXDFyQQ&usqp=CAU",
      name: "Sneh jaiswal",
      username: "@snehjaiswal2002",
      work: " I'm a Full Stack Developer.",
      views: "15K",
      project: "82",
      Followers: "1 M"
    },
    {
      id: 2,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0mpEAFXv-iIa50q5rA2L6nnHGy_akXDFyQQ&usqp=CAU",
      name: "Anmol Pagal",
      username: "@Goli",
      work: " I'm a Full Stack Developer.",
      views: "15K",
      project: "82",
      Followers: "1 M"
    },
    {
      id: 3,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0mpEAFXv-iIa50q5rA2L6nnHGy_akXDFyQQ&usqp=CAU",
      name: "Yogita Tomar",
      username: "@yogita",
      work: " I'm a Full Stack Developer.",
      views: "15K",
      project: "82",
      Followers: "1 M"
    }
  ]


  return (
    <>
      <div className="eight">
        <h1 className='GrocerHeading'>All Grocers</h1>
      </div>

      <div className='card-group' id='GrocerCenter'>

        {GrocersData.map((a) => {
          return (
            <>
              <div className="card1">
                <div className="img">
                  <img className='GroImg' src={a.imgUrl} alt="okk" />
                </div>
                <div className="infos">
                  <div className="name">
                    <h2>{a.name}</h2>
                    <h4>{a.username}</h4>
                  </div>
                  <p className="text">{a.work}

                  </p>
                  <ul className="stats">
                    <li>
                      <h3>{a.views}</h3>
                      <h4>Views</h4>
                    </li>
                    <li>
                      <h3>{a.project}</h3>
                      <h4>Projects</h4>
                    </li>
                    <li>
                      <h3>{a.Followers}</h3>
                      <h4>Followers</h4>
                    </li>
                  </ul>
                  <div className="links">
                    <button className="follow">Follow</button>
                    <button className="view" onClick={Grocerhome}>View profile</button>
                  </div>
                </div>
              </div></>

          )
        })

        }






        {/* <div className="card1">
          <div className="img">
            <img className='GroImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0mpEAFXv-iIa50q5rA2L6nnHGy_akXDFyQQ&usqp=CAU" />
          </div>
          <div className="infos">
            <div className="name">
              <h2>Yogita Tomar</h2>
              <h4>@yogita</h4>
            </div>
            <p className="text">
              I'm a Front End Developer.
            </p>
            <ul className="stats">
              <li>
                <h3>20K</h3>
                <h4>Views</h4>
              </li>
              <li>
                <h3>82</h3>
                <h4>Projects</h4>
              </li>
              <li>
                <h3>1.3M</h3>
                <h4>Followers</h4>
              </li>
            </ul>
            <div className="links">
              <button className="follow">Follow</button>
              <button className="view">View profile</button>
            </div>
          </div>
        </div> */}




      </div>


    </>
  )
}

export default Grocer