export default  {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
      extend: {
          colors:{
            blue_dark:'#0c5273',
            blue_light:'#0c5273',
            light_blue:'rgb(231, 235, 248)',
             "darkpurple":"#031026",
            "darkcolor":"#06193a",
             "light-white":"rgba(255,255,255,0.18)",
             "light":"rgba(192,152,152,0.1)",
             "color1":"#746855"
            },
            fontWeight: {
              thin: '100',
              hairline: '100',
              extralight: '200',
              light: '300',
              normal: '400',
              medium: '500',
              semibold: '600',
              bold: '700',
              extrabold: '800',
              'extra-bold': '800',
              black: '900',
            },        
            fontFamily: {
                    sans1:['JioType', 'helvetica', 'arial', 'sans-serif'],
                    sans: ['Helvetica', 'Arial', 'sans-serif'],
                    serif: ['ui-serif', 'Georgia'],
                    mono: ['ui-monospace', 'SFMono-Regular'],
                    display: ['Oswald'],
                    dmsans: ["DM Sans", "sans-serif"],
                    poppins: ["Poppins", ""],
                    productsansr: ["productsans-regular"],
                    productsansb: ["productsans-bold"],
                  },
              backgroundImage:{
                'image1':"url('https://res.cloudinary.com/dnghkq7oo/image/upload/v1695376368/shape_1_1_uloxay.png')",
                'image2':"url('https://res.cloudinary.com/dnghkq7oo/image/upload/v1695395198/image6_r3olhf.png')",
                'image3':"url('https://res.cloudinary.com/dnghkq7oo/image/upload/v1695395197/image7_vucvgv.png')",
                'image4':"url('https://res.cloudinary.com/dnghkq7oo/image/upload/v1695395197/image1_bkzicz.png')",
                'image5':"url('https://res.cloudinary.com/dnghkq7oo/image/upload/v1695530407/breadcumb-bg_dgw2cv.png')",
                'image6':"url('https://res.cloudinary.com/dnghkq7oo/image/upload/v1695549326/contact_bg_1_o645wa.png')",
                'image7':"url('https://res.cloudinary.com/dnghkq7oo/image/upload/v1695549851/logo-icon_ufxeau.svg')",
                'image8':"url('https://res.cloudinary.com/dnghkq7oo/image/upload/v1695553960/breadcumb_shape_1_1_yn6afp.png)",
                'image9':"url(https://res.cloudinary.com/dnghkq7oo/image/upload/v1695562737/footer-bg_m0pugz.png)",
                'image10':"url(https://res.cloudinary.com/dnghkq7oo/image/upload/v1695574943/about-5-bg_zqzffp.png)",
                'image11':"url(https://res.cloudinary.com/dnghkq7oo/image/upload/v1695574942/about_5_1_s6p4u5.png)",
                'image12':"url(https://res.cloudinary.com/dnghkq7oo/image/upload/v1695574942/about_5_2_mfumgi.png)",
                'image13':"url(https://res.cloudinary.com/dnghkq7oo/image/upload/v1695586327/category-arrow_1_qfklti.svg)",
                'image14':"url(https://res.cloudinary.com/dnghkq7oo/image/upload/v1695891545/pattern_bg_2_mrdisx.png)",
                'image15':"url(https://res.cloudinary.com/dnghkq7oo/image/upload/v1695896364/blue-background-with-dark-blue-background-that-says-blue_noaktc.jpg)",
              }     
          },
        },
        plugins: [
          
          //..
        ],
      }