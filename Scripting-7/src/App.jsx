import { useState } from "react";

import "./App.css";

const userData = [
   {
    id: 1,
    name: 'Susan Smith',
    job: 'web developer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'Anna Johnson',
    job: 'web designer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text:
      'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'Peter Jones',
    job: 'intern',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text:
      'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'Bill Anderson',
    job: 'the boss',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

function App() {
  const [count, setCount] = useState(3);



  const incrementValue = () => {
    if (count < userData.length - 1) {
      setCount((latest) => latest + 1);
    }
  };

  const decrementValue = () => {
    if (count > 0) {
      setCount((latest) => latest - 1);
    }
  };


  return (
    <div style={{width: '100%'}}>
      <div className="outliner">
      <h1>Our Reviews</h1>
      <hr />
      <div className="main-part">
    
        <div className="user-profile">
          <div>
            <div className="profile-picture-user">
              <img className="picture-user"src={userData[count].image}></img>
              <img className="quote" src={"/public/quote-icon.svg"}></img>
            </div>
            <div className="user-name">{userData[count].name}</div>
            <div className="user-pos">{userData[count].job.toUpperCase()}</div>

            <div className="quote-user">{userData[count].text}</div>
          </div>
         
        </div>

        <div className="controls">

        <div className="left" onClick={() => decrementValue()}>
          <img src={"/public/navigate-before-icon.svg"}></img>
        </div>
        <div className="right" onClick={() => incrementValue()}>
        <img src={"/public/navigate-next-icon.svg"}></img>
        </div>
        </div>  
        <button className="btn" onClick={() => {
          const randomInt = Math.floor(Math.random() * 4);
          setCount(randomInt)
        }}>Surprise Me</button>
      </div>
      
      </div>
    </div>
  );
}

export default App;
