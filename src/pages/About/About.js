
import React from 'react';

const About = () => {
    return (
        <div className='container my-5 mx-20'>
            <div>
                <h3 className='my-2 text-4xl '>About me</h3>
                <h4 className='my-2'>NAME: <span>Abdur Rahman</span></h4>
                <h6 className='my-2'>Phone: <span>+86-13122902107</span></h6>
                <h6 className='my-2'>Email: <span>abdullahhanxin@gmail.com</span></h6>
                <h6 className='my-2'>Address: <span>Nanjing Jiangsu, China 211189</span></h6>
            </div>
            <div className='my-4'>
                <h3 className='mb-2 text-4xl '>Education</h3>
                <h6 className='my-2'>Bachelor: <span>Southeast University, Bachelor of civil Engineering. Nanjing,China</span> <small>(2019.09–2023.07) </small> </h6>
            </div>
            <div className='my-4'>
                <h3 className='mb-2 text-4xl'>Skills</h3>
                <div>
                    <h4>Tools & Technology</h4>
                    <h6>Power point, Excel, Word, CAD, HTML5, CSS3,CSS, JavaScript, React, Bootstrap, Tailwind CSS,VS code.</h6>
                </div>
                <div>
                    <h4>Interpersonal Skills</h4>
                    <h6>Time Management, Team Management, Team Leadership, Team Work, Research & Analysis. </h6>
                </div>
                <div>
                    <h4>Languages Skills</h4>
                    <h6>English: IELTS(5.5),  Chinese(HSK level- 4 And HSKK -Intermediate ),  Urdu(Speaking and Listening),  Hindi( Speaking and Listening),  Bengali(Native Language).</h6>
                </div>
                <div>
                    <h4>Other Skills</h4>
                    <h6>Reliable, loyal, responsible & hardworking, work under pressure with great efforts.</h6>
                </div>
            </div>
            <div className='my-4'>
                <h3 className='mb-2 text-4xl'>Projects</h3>
                <p>Live Site link: <span>https://benevolent-puppy-2cf4fb.netlify.app</span></p>
                <p>Live Site link: <span>https://neon-souffle-f86425.netlify.app</span></p>
                <p>Live Site link: <span>https://benevolent-puppy-2cf4fb.netlify.app</span></p>
            </div>
            <div className='my-4'>
                <h3 className='mb-2 text-4xl'>Declaration</h3>
                <p>I hereby declare that the above-mentioned information are correct up to my knowledge and I bear the responsibility for the correctness of the above-mentioned particulars.</p>
            </div>

        </div>
    );
};

export default About;