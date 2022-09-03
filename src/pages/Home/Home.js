import React from 'react';
import Extra from '../Extra/Extra';
import Items from '../Items/Items';
import Review from '../Review/Review';
import Bannar from './Bannar';
import Footer from '../shared/Footer';

const Home = () => {
    return (
        <div> 
          <Bannar />
          <Items />
          <Extra />
          <Review />
          <Footer />
        </div>
    );
};

export default Home;





// import React from 'react';

// const About = () => {
//     return (
//         <div>
//             <h1>This is for About</h1>
//         </div>
//     );
// };

// export default About;