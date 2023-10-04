import React, { useEffect, useRef } from 'react'
import "./main.css";
import $ from "jquery";

const Home = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    // Function to play the video when the component mounts
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          // Handle any errors here
          console.error('Video playback error:', error);
        });
      }
    };

    // Call the playVideo function to start video playback
    playVideo();
  }, []);

  useEffect(() => {
    function bannerSwitcher() {
      const next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
      if (next.length) next.prop('checked', true);
      else $('.sec-1-input').first().prop('checked', true);
    }

    let bannerTimer = setInterval(bannerSwitcher, 5000);

    $('nav .controls label').click(function () {
      clearInterval(bannerTimer);
      bannerTimer = setInterval(bannerSwitcher, 5000);
    });

    return () => {
      clearInterval(bannerTimer); // Clear the interval when the component unmounts
    };
  }, []);

  return (
    <div className='banner-women'>
    <body>

  <section id="section-1">
    <div class="content-slider">
      <input type="radio" id="banner1" class="sec-1-input" name="banner" checked />
      <input type="radio" id="banner2" class="sec-1-input" name="banner" />
      <input type="radio" id="banner3" class="sec-1-input" name="banner" />
      <input type="radio" id="banner4" class="sec-1-input" name="banner" />
      <div class="slider">
        <div id="top-banner-1" class="banner">
          <div class="banner-inner-wrapper">
            <h2>Want Pro Membership Benefits.</h2>
          
            <div class="line"></div> 
            <div class="learn-more-button"><a href="#section-2">Register</a></div>
          </div>
        </div>
        <div id="top-banner-2" class="banner">
          <div class="banner-inner-wrapper">
            <h2> Sale is live. Get 3 items for 30$ and 6 for 45$</h2>
           
            <div class="line"></div> 
            <div class="learn-more-button"><a href="#section-4">Login</a></div>
          </div>
        </div>
        <div id="top-banner-3" class="banner">
          <div class="banner-inner-wrapper">
            {/* <h2>Check out our new fall Collection</h2>
            
            <div class="line"></div> 
            <div class="learn-more-button"><a href="#section-6">Visit</a></div> */}

<video
      autoPlay
      loop
      playsInline
      muted
      className="img-responsive hp-Hero-videoWrap"
      data-mobile-video="https://images.calzedonia.com/get/v/fr_HP_HeroBanner_CW3623_NewArrivals_m_int.mp4"
      data-desktop-video="https://images.calzedonia.com/get/v/fr_HP_HeroBanner_CW3623_NewArrivals_int.mp4"
      src="https://images.calzedonia.com/get/v/fr_HP_HeroBanner_CW3623_NewArrivals_int.mp4"
      ref={videoRef}
    ></video>

          </div>
        </div>
        <div id="top-banner-4" class="banner">
          <div class="banner-inner-wrapper">
            <h2>New Offers, Available Now.</h2>
           
            <div class="line"></div> 
            <div class="learn-more-button"><a href="#main-footer">Visit</a></div>
          </div>
        </div>
      </div>
      <nav>
        
        <div class="controls">
          <label for="banner1"><span class="progressbar"><span class="progressbar-fill"></span></span><span>01</span> Lorem Ipsum</label>
          <label for="banner2"><span class="progressbar"><span class="progressbar-fill"></span></span><span>02</span> Lorem Ipsum</label>
          <label for="banner3"><span class="progressbar"><span class="progressbar-fill"></span></span><span>03</span> Lorem Ipsum</label>
          <label for="banner4"><span class="progressbar"><span class="progressbar-fill"></span></span><span>04</span> Lorem Ipsum</label>
        </div>
      </nav>
    </div>
  </section>
</body>
    </div>
  )
}

export default Home