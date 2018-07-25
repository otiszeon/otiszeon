// GALLERY 1 #MedPal
jQuery('#gallery1').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: true,
        download: false,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/gallery/gallery1/image1.png',
            'thumb': 'images/gallery/gallery1/thumbnail1.png',
            'subHtml': 'First Image'
        }, {
            'src': 'images/gallery/gallery1/image2.png',
            'thumb': 'images/gallery/gallery1/thumbnail2.png',
            'subHtml': "Second Image"
        }, {
            'src': 'images/gallery/gallery1/image3.png',
            'thumb': 'images/gallery/gallery1/thumbnail3.png',
            'subHtml': "Third Image"
        }, {
            'src': 'images/gallery/gallery1/image4.png',
            'thumb': 'images/gallery/gallery1/thumbnail4.png',
            'subHtml': "Forth Image"
        },
          {
            'src': 'images/gallery/gallery1/image5.png',
            'thumb': 'images/gallery/gallery1/thumbnail5.png',
            'subHtml': 'Firth Image'
        }, {
            'src': 'images/gallery/gallery1/image6.png',
            'thumb': 'images/gallery/gallery1/thumbnail6.png',
            'subHtml': "Sixth Image"
        }, {
            'src': 'images/gallery/gallery1/image7.png',
            'thumb': 'images/gallery/gallery1/thumbnail7.png',
            'subHtml': "Seventh Image"
        }, {
            'src': 'images/gallery/gallery1/image8.png',
            'thumb': 'images/gallery/gallery1/thumbnail8.png',
            'subHtml': "eighth Image"
        },
        {
          'src': 'images/gallery/gallery1/image9.png',
          'thumb': 'images/gallery/gallery1/thumbnail9.png',
          'subHtml': 'ninth Image'
      }, {
          'src': 'images/gallery/gallery1/image10.png',
          'thumb': 'images/gallery/gallery1/thumbnail10.png',
          'subHtml': "tenth Image"
      }, {
          'src': 'images/gallery/gallery1/image11.png',
          'thumb': 'images/gallery/gallery1/thumbnail11.png',
          'subHtml': "eleventh Image"
      }, {
          'src': 'images/gallery/gallery1/image12.png',
          'thumb': 'images/gallery/gallery1/thumbnail12.png',
          'subHtml': "twelveth Image"
      },
      {
          'src': 'images/gallery/gallery1/image13.png',
          'thumb': 'images/gallery/gallery1/thumbnail13.png',
          'subHtml': "thirteenth Image"
      }]
    });
});

// GALLERY 2 Video MedPal
jQuery('#gallery2').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: true,
        autoplayControls: false,
        thumbnail: true,
        download: false,
        counter: true,
        // Videos
        dynamicEl: [
            {

                "src": "https://vimeo.com/281484867",
                "subHtml": "Vimeo",
                'thumb': 'images/gallery/gallery2/thumbnail1.png'

            },
            {  "src": "https://vimeo.com/281484867",
              "subHtml": "Vimeo",
              'thumb': 'images/gallery/gallery2/thumbnail1.png'
            }
            // { // You Tube videos work only on a server.
            //     "src": "https://www.youtube.com/embed/wTzhnZo7NWk",
            //     "subHtml": "You Tube",
            //     'thumb': 'images/gallery/gallery2/thumbnail2.png'
            //
            // }
        ]
    });
});

// GALLERY 3 LifePOM
jQuery('#gallery3').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplay: true,
        pause: 5000,
        thumbnail: true,
        download: false,
        counter: true,
        // Images
        // Images
        dynamicEl: [{
            'src': 'images/gallery/gallery3/image1.png',
            'thumb': 'images/gallery/gallery3/thumbnail1.png',
            'subHtml': 'First Image'
        }, {
            'src': 'images/gallery/gallery3/image2.png',
            'thumb': 'images/gallery/gallery3/thumbnail2.png',
            'subHtml': "Second Image"
        }, {
            'src': 'images/gallery/gallery3/image3.png',
            'thumb': 'images/gallery/gallery3/thumbnail3.png',
            'subHtml': "Third Image"
        }, {
            'src': 'images/gallery/gallery3/image4.png',
            'thumb': 'images/gallery/gallery3/thumbnail4.png',
            'subHtml': "Forth Image"
        },
          {
            'src': 'images/gallery/gallery3/image5.png',
            'thumb': 'images/gallery/gallery3/thumbnail5.png',
            'subHtml': 'Firth Image'
        }, {
            'src': 'images/gallery/gallery3/image6.png',
            'thumb': 'images/gallery/gallery3/thumbnail6.png',
            'subHtml': "Sixth Image"
        }, {
            'src': 'images/gallery/gallery3/image7.png',
            'thumb': 'images/gallery/gallery3/thumbnail7.png',
            'subHtml': "Seventh Image"
        }, {
            'src': 'images/gallery/gallery3/image8.png',
            'thumb': 'images/gallery/gallery3/thumbnail8.png',
            'subHtml': "eighth Image"
        },
        {
          'src': 'images/gallery/gallery3/image9.png',
          'thumb': 'images/gallery/gallery3/thumbnail9.png',
          'subHtml': 'ninth Image'
      }, {
          'src': 'images/gallery/gallery3/image10.png',
          'thumb': 'images/gallery/gallery3/thumbnail10.png',
          'subHtml': "tenth Image"
      }, {
          'src': 'images/gallery/gallery3/image11.png',
          'thumb': 'images/gallery/gallery3/thumbnail11.png',
          'subHtml': "eleventh Image"
      }, {
          'src': 'images/gallery/gallery3/image12.png',
          'thumb': 'images/gallery/gallery3/thumbnail12.png',
          'subHtml': "twelveth Image"
      }]
    });
});

// GALLERY 4 LifePOM
jQuery('#gallery4').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplayControls: false,
        thumbnail: true,
        download: false,
        counter: true,
        // Videos
        dynamicEl: [
            {

                "src": "https://vimeo.com/70301553",
                "subHtml": "Vimeo",
                'thumb': 'images/gallery/gallery4/thumbnail1.png'

            },
            { // You Tube videos work only on a server.
                "src": "https://www.youtube.com/embed/wTzhnZo7NWk",
                "subHtml": "You Tube",
                'thumb': 'images/gallery/gallery4/thumbnail2.png'

            }
        ]
    });
});


// GALLERY 5 EbonyAlert
jQuery('#gallery5').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplay: true,
        pause: 5000,
        thumbnail: true,
        download: false,
        counter: true,
        // Images
        // Images
        dynamicEl: [{
            'src': 'images/gallery/gallery5/image1.png',
            'thumb': 'images/gallery/gallery5/thumbnail1.png',
            'subHtml': 'First Image'
        }, {
            'src': 'images/gallery/gallery5/image2.png',
            'thumb': 'images/gallery/gallery5/thumbnail2.png',
            'subHtml': "Second Image"
        }, {
            'src': 'images/gallery/gallery5/image3.png',
            'thumb': 'images/gallery/gallery5/thumbnail3.png',
            'subHtml': "Third Image"
        }, {
            'src': 'images/gallery/gallery5/image4.png',
            'thumb': 'images/gallery/gallery5/thumbnail4.png',
            'subHtml': "Forth Image"
        },
          {
            'src': 'images/gallery/gallery5/image5.png',
            'thumb': 'images/gallery/gallery5/thumbnail5.png',
            'subHtml': 'Firth Image'
        }, {
            'src': 'images/gallery/gallery5/image6.png',
            'thumb': 'images/gallery/gallery5/thumbnail6.png',
            'subHtml': "Sixth Image"
        }, {
            'src': 'images/gallery/gallery5/image7.png',
            'thumb': 'images/gallery/gallery5/thumbnail7.png',
            'subHtml': "Seventh Image"
        }, {
            'src': 'images/gallery/gallery5/image8.png',
            'thumb': 'images/gallery/gallery5/thumbnail8.png',
            'subHtml': "eighth Image"
        },
        {
          'src': 'images/gallery/gallery5/image9.png',
          'thumb': 'images/gallery/gallery5/thumbnail9.png',
          'subHtml': 'ninth Image'
      }, {
          'src': 'images/gallery/gallery5/image10.png',
          'thumb': 'images/gallery/gallery5/thumbnail10.png',
          'subHtml': "tenth Image"
      }, {
          'src': 'images/gallery/gallery5/image11.png',
          'thumb': 'images/gallery/gallery5/thumbnail11.png',
          'subHtml': "eleventh Image"
      }, {
          'src': 'images/gallery/gallery5/image12.png',
          'thumb': 'images/gallery/gallery5/thumbnail12.png',
          'subHtml': "twelveth Image"
      }]
    });
});

// GALLERY 6 EbonyAlert
jQuery('#gallery6').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplayControls: false,
        thumbnail: true,
        download: false,
        counter: true,
        // Videos
        dynamicEl: [
            {

                "src": "https://vimeo.com/70301553",
                "subHtml": "Vimeo",
                'thumb': 'images/gallery/gallery6/thumbnail1.png'

            },
            { // You Tube videos work only on a server.
                "src": "https://www.youtube.com/embed/wTzhnZo7NWk",
                "subHtml": "You Tube",
                'thumb': 'images/gallery/gallery6/thumbnail2.png'

            }
        ]
    });
});


// GALLERY 7 InstaPOM
jQuery('#gallery7').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplay: true,
        pause: 5000,
        thumbnail: true,
        download: false,
        counter: true,
        // Images
        // Images
        dynamicEl: [{
            'src': 'images/gallery/gallery7/image1.png',
            'thumb': 'images/gallery/gallery7/thumbnail1.png',
            'subHtml': 'First Image'
        }, {
            'src': 'images/gallery/gallery7/image2.png',
            'thumb': 'images/gallery/gallery7/thumbnail2.png',
            'subHtml': "Second Image"
        }, {
            'src': 'images/gallery/gallery7/image3.png',
            'thumb': 'images/gallery/gallery7/thumbnail3.png',
            'subHtml': "Third Image"
        }, {
            'src': 'images/gallery/gallery7/image4.png',
            'thumb': 'images/gallery/gallery7/thumbnail4.png',
            'subHtml': "Forth Image"
        },
          {
            'src': 'images/gallery/gallery7/image5.png',
            'thumb': 'images/gallery/gallery7/thumbnail5.png',
            'subHtml': 'Firth Image'
        }, {
            'src': 'images/gallery/gallery7/image6.png',
            'thumb': 'images/gallery/gallery7/thumbnail6.png',
            'subHtml': "Sixth Image"
        }, {
            'src': 'images/gallery/gallery7/image7.png',
            'thumb': 'images/gallery/gallery7/thumbnail7.png',
            'subHtml': "Seventh Image"
        }, {
            'src': 'images/gallery/gallery7/image8.png',
            'thumb': 'images/gallery/gallery7/thumbnail8.png',
            'subHtml': "eighth Image"
        },
        {
          'src': 'images/gallery/gallery7/image9.png',
          'thumb': 'images/gallery/gallery7/thumbnail9.png',
          'subHtml': 'ninth Image'
      }, {
          'src': 'images/gallery/gallery7/image10.png',
          'thumb': 'images/gallery/gallery7/thumbnail10.png',
          'subHtml': "tenth Image"
      }, {
          'src': 'images/gallery/gallery7/image11.png',
          'thumb': 'images/gallery/gallery7/thumbnail11.png',
          'subHtml': "eleventh Image"
      }, {
          'src': 'images/gallery/gallery7/image12.png',
          'thumb': 'images/gallery/gallery7/thumbnail12.png',
          'subHtml': "twelveth Image"
      }]
    });
});

// GALLERY 8 InstaPOM
jQuery('#gallery8').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplayControls: false,
        thumbnail: true,
        download: false,
        counter: true,
        // Videos
        dynamicEl: [
            {

                "src": "https://vimeo.com/70301553",
                "subHtml": "Vimeo",
                'thumb': 'images/gallery/gallery8/thumbnail1.png'

            },
            { // You Tube videos work only on a server.
                "src": "https://www.youtube.com/embed/wTzhnZo7NWk",
                "subHtml": "You Tube",
                'thumb': 'images/gallery/gallery8/thumbnail2.png'

            }
        ]
    });
});
// GALLERY Photo 9
jQuery('#gallery9').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: true,
        download: false,
        counter: true,
        // Images
        // Images
        dynamicEl: [{
            'src': 'images/gallery/gallery9/image1.png',
            'thumb': 'images/gallery/gallery9/thumbnail1.png',
            'subHtml': 'First Image'
        }, {
            'src': 'images/gallery/gallery9/image2.png',
            'thumb': 'images/gallery/gallery9/thumbnail2.png',
            'subHtml': "Second Image"
        }, {
            'src': 'images/gallery/gallery9/image3.png',
            'thumb': 'images/gallery/gallery9/thumbnail3.png',
            'subHtml': "Third Image"
        }, {
            'src': 'images/gallery/gallery9/image4.png',
            'thumb': 'images/gallery/gallery9/thumbnail4.png',
            'subHtml': "Forth Image"
        },
          {
            'src': 'images/gallery/gallery9/image5.png',
            'thumb': 'images/gallery/gallery9/thumbnail5.png',
            'subHtml': 'Firth Image'
        }, {
            'src': 'images/gallery/gallery9/image6.png',
            'thumb': 'images/gallery/gallery9/thumbnail6.png',
            'subHtml': "Sixth Image"
        }, {
            'src': 'images/gallery/gallery9/image7.png',
            'thumb': 'images/gallery/gallery9/thumbnail7.png',
            'subHtml': "Seventh Image"
        }, {
            'src': 'images/gallery/gallery9/image8.png',
            'thumb': 'images/gallery/gallery9/thumbnail8.png',
            'subHtml': "eighth Image"
        },
        {
          'src': 'images/gallery/gallery9/image9.png',
          'thumb': 'images/gallery/gallery9/thumbnail9.png',
          'subHtml': 'ninth Image'
      }, {
          'src': 'images/gallery/gallery9/image10.png',
          'thumb': 'images/gallery/gallery9/thumbnail10.png',
          'subHtml': "tenth Image"
      }, {
          'src': 'images/gallery/gallery9/image11.png',
          'thumb': 'images/gallery/gallery9/thumbnail11.png',
          'subHtml': "eleventh Image"
      }, {
          'src': 'images/gallery/gallery9/image12.png',
          'thumb': 'images/gallery/gallery9/thumbnail12.png',
          'subHtml': "twelveth Image"
      }]
    });
});
// GALLERY event Photo 91
jQuery('#gallery13').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: true,
        download: false,
        counter: true,
        // Images
        // Images
        dynamicEl: [{
            'src': 'images/gallery/gallery13/image1.png',
            'thumb': 'images/gallery/gallery13/thumbnail1.png',
            'subHtml': 'First Image'
        }, {
            'src': 'images/gallery/gallery13/image2.png',
            'thumb': 'images/gallery/gallery13/thumbnail2.png',
            'subHtml': "Second Image"
        }, {
            'src': 'images/gallery/gallery13/image3.png',
            'thumb': 'images/gallery/gallery13/thumbnail3.png',
            'subHtml': "Third Image"
        }, {
            'src': 'images/gallery/gallery13/image4.png',
            'thumb': 'images/gallery/gallery13/thumbnail4.png',
            'subHtml': "Forth Image"
        },
          {
            'src': 'images/gallery/gallery13/image5.png',
            'thumb': 'images/gallery/gallery13/thumbnail5.png',
            'subHtml': 'Firth Image'
        }, {
            'src': 'images/gallery/gallery13/image6.png',
            'thumb': 'images/gallery/gallery13/thumbnail6.png',
            'subHtml': "Sixth Image"
        }, {
            'src': 'images/gallery/gallery13/image7.png',
            'thumb': 'images/gallery/gallery13/thumbnail7.png',
            'subHtml': "Seventh Image"
        }, {
            'src': 'images/gallery/gallery13/image8.png',
            'thumb': 'images/gallery/gallery13/thumbnail8.png',
            'subHtml': "eighth Image"
        },
        {
          'src': 'images/gallery/gallery13/image9.png',
          'thumb': 'images/gallery/gallery13/thumbnail9.png',
          'subHtml': 'ninth Image'
      }, {
          'src': 'images/gallery/gallery13/image10.png',
          'thumb': 'images/gallery/gallery13/thumbnail10.png',
          'subHtml': "tenth Image"
      }, {
          'src': 'images/gallery/gallery13/image11.png',
          'thumb': 'images/gallery/gallery13/thumbnail11.png',
          'subHtml': "eleventh Image"
      }, {
          'src': 'images/gallery/gallery13/image12.png',
          'thumb': 'images/gallery/gallery13/thumbnail12.png',
          'subHtml': "twelveth Image"
      }]
    });
});

// GALLERY Art 10
jQuery('#gallery10').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: true,
        download: false,
        counter: true,
        // Images
        // Images
        dynamicEl: [{
            'src': 'images/gallery/gallery10/image1.png',
            'thumb': 'images/gallery/gallery10/thumbnail1.png',
            'subHtml': 'First Image'
        }, {
            'src': 'images/gallery/gallery10/image2.png',
            'thumb': 'images/gallery/gallery10/thumbnail2.png',
            'subHtml': "Second Image"
        }, {
            'src': 'images/gallery/gallery10/image3.png',
            'thumb': 'images/gallery/gallery10/thumbnail3.png',
            'subHtml': "Third Image"
        }, {
            'src': 'images/gallery/gallery10/image4.png',
            'thumb': 'images/gallery/gallery10/thumbnail4.png',
            'subHtml': "Forth Image"
        },
          {
            'src': 'images/gallery/gallery10/image5.png',
            'thumb': 'images/gallery/gallery10/thumbnail5.png',
            'subHtml': 'Firth Image'
        }, {
            'src': 'images/gallery/gallery10/image6.png',
            'thumb': 'images/gallery/gallery10/thumbnail6.png',
            'subHtml': "Sixth Image"
        }, {
            'src': 'images/gallery/gallery10/image7.png',
            'thumb': 'images/gallery/gallery10/thumbnail7.png',
            'subHtml': "Seventh Image"
        }, {
            'src': 'images/gallery/gallery10/image8.png',
            'thumb': 'images/gallery/gallery10/thumbnail8.png',
            'subHtml': "eighth Image"
        },
        {
          'src': 'images/gallery/gallery10/image9.png',
          'thumb': 'images/gallery/gallery10/thumbnail9.png',
          'subHtml': 'ninth Image'
      }, {
          'src': 'images/gallery/gallery10/image10.png',
          'thumb': 'images/gallery/gallery10/thumbnail10.png',
          'subHtml': "tenth Image"
      }, {
          'src': 'images/gallery/gallery10/image11.png',
          'thumb': 'images/gallery/gallery10/thumbnail11.png',
          'subHtml': "eleventh Image"
      }, {
          'src': 'images/gallery/gallery10/image12.png',
          'thumb': 'images/gallery/gallery10/thumbnail12.png',
          'subHtml': "twelveth Image"
      }]
    });
});

// GALLERY 11 Videos Motivations
jQuery('#gallery11').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplayControls: false,
        thumbnail: true,
        download: false,
        counter: true,
        // Videos
        dynamicEl: [
            {

                "src": "https://vimeo.com/70301553",
                "subHtml": "Vimeo",
                'thumb': 'images/gallery/gallery11/thumbnail1.png'

            },
            { // You Tube videos work only on a server.
                "src": "https://www.youtube.com/embed/wTzhnZo7NWk",
                "subHtml": "You Tube",
                'thumb': 'images/gallery/gallery11/thumbnail1.png'
            }
        ]
    });
});
// GALLERY 12 Videos Teachings
jQuery('#gallery12').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplayControls: false,
        thumbnail: true,
        download: false,
        counter: true,
        // Videos
        dynamicEl: [
            {

                "src": "https://vimeo.com/70301553",
                "subHtml": "Vimeo",
                'thumb': 'images/gallery/gallery12/thumbnail1.png'

            },
            { // You Tube videos work only on a server.
                "src": "https://www.youtube.com/embed/wTzhnZo7NWk",
                "subHtml": "You Tube",
                'thumb': 'images/gallery/gallery12/thumbnail2.png'

            }
        ]
    });
});
