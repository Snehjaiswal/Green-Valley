import React from 'react'
import { Link ,useNavigate} from 'react-router-dom';

function Grocer() {
  const navigate = useNavigate();


const Grocerhome =()=>{
  navigate('/grocerhome');
}

  return (
    <>


      <div className="eight">
        <h1 className='GrocerHeading'>All Grocers</h1>
      </div>

      <div className='card-group' id='GrocerCenter'>

        <div className="card1">
          <div className="img">
            <img className='GroImg' src="data:image/png;base64,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" />
          </div>
          <div className="infos">
            <div className="name">
              <h2>Sneh jaiswal</h2>
              <h4>@snehjaiswal2002</h4>
            </div>
            <p className="text">
              I'm a Full Stack Developer.
            </p>
            <ul className="stats">
              <li>
                <h3>15K</h3>
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
              <button className="view" onClick={Grocerhome}>View profile</button>
            </div>
          </div>
        </div>


        <div className="card1">
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
        </div>
{/* 
        <div className="card1">
          <div className="img">
            <img className='GroImg' src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          </div>
          <div className="infos">
            <div className="name">
              <h2>Bradley Steve</h2>
              <h4>@bradsteve</h4>
            </div>
            <p className="text">
              I'm a Front End Developer, follow me to be the first
              who see my new work.
            </p>
            <ul className="stats">
              <li>
                <h3>15K</h3>
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


{/* 
        <div className="card1">
          <div className="img">
            <img className='GroImg' src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          </div>
          <div className="infos">
            <div className="name">
              <h2>Bradley Steve</h2>
              <h4>@bradsteve</h4>
            </div>
            <p className="text">
              I'm a Front End Developer, follow me to be the first
              who see my new work.
            </p>
            <ul className="stats">
              <li>
                <h3>15K</h3>
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