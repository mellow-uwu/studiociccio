
import React from 'react';

const LandingPage = () => {
    return (
        <div>
            <div style={{ textAlign: 'center', backgroundColor: '#4CAF50', color: 'white', padding: '1em 0' }}>
                <h1>Welcome to Studio Kitchen</h1>
                <p>Join the Alpha and revolutionize your study experience!</p>
            </div>
            <div style={{ margin: '2em 5%' }}>
                <img src='/study_group_image.png' alt='Study Group' style={{ width: '100%', height: 'auto' }} />
    <h2>Why Join Studio Kitchen?</h2>
                <p>Access a wide range of academic resources tailored for university students. From textbooks to lecture notes, we have it all.</p>
                <h2>How It Works</h2>
                <p>Simply upload your study materials and gain access to a community-driven library of academic content.</p>
                <h2>Sign Up Now!</h2>
                <p>Be among the first to experience the future of studying. Sign up for the Alpha version today!</p>
            </div>
            <div style={{ textAlign: 'center', backgroundColor: '#333', color: 'white', padding: '1em 0' }}>
                <p>&copy; 2023 Studio Kitchen. All rights reserved.</p>
            </div>
        </div>
    );
}

export default LandingPage;
