// Write your code here
import './index.css'

const Home = () => (
<nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src="https://seeklogo.com/images/A/airbnb-logo-7F4086530F-seeklogo.com.png" className="airbnb-logo" />
            </a>


            <a className="nav-link" href="#exploreMenuSection" id="navItem2">Become a Host</a>

            <a className="navbar-brand" href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Globo_Logo_1966.png" className="globe-logo" />
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>

                <a className="navbar-brand" href="#">
                    <img src="https://cdn.icon-icons.com/icons2/2645/PNG/512/person_circle_icon_159926.png" className="person-logo" />
                </a>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav mr-auto">
                    <a className="nav-link active" id="navItem1" href="#wcuSection">
                        sign up
                        <span className="sr-only">(current)</span>
                    </a>
                    <a className="nav-link" href="#exploreMenuSection" id="navItem2">login</a>
                    <hr style="height:2px;border-width:1px;color:black;background-color:black">
                    <a className="nav-link" href="#deliveryPaymentSection" id="navItem3">Host Your Room</a>

                    <a className="nav-link" href="#followUsSection" id="navItem4">Host an Experience</a>
                    <a className="nav-link" href="#followUsSection" id="navItem4">Help</a>
                </div>
            </div>
        </div>
    </nav>

    <div className="columnContainer">
        <div className="imageContainer1 d-flex justify-content-start flex-column">
            <h1 className="heading">Collection</h1>

            <h1 className="main-heading mb-3">Most popular <br>around the world</h1>
            <div className="btn-container d-flex justify-content-end flex-column">
                <button className="button">Show all</button>
            </div>
        </div>
        <div className="imageContainer2 d-flex justify-content-start flex-column">
            <h1 className="heading">Collection</h1>
            <h1 className="main-heading mb-3">Great for <br>
                Team Building</h1>
            <div className="btn-container d-flex justify-content-end flex-column">
                <button className="button">Show all</button>
            </div>
        </div>
        <div className="imageContainer3 d-flex justify-content-start flex-column">
            <h1 className="heading">Collection</h1>
            <h1 className="main-heading mb-3">Fun For The Family</h1>
            <div className="btn-container d-flex justify-content-end flex-column">
                <button className="button">Show all</button>
            </div>
        </div>


    </div>


    <div className="button-container1   d-flex justify-content-center flex-column">
        <ul>

            <button className="btn1">Dates</button>
            <button className="btn1">Group Size</button>
            <button className="btn1">More filters</button>
            <button className="btn">Great for Groups</button>
            <button className="btn">Family-friendly</button>
            <button className="btn">Animals</button>
            <button className="btn">Arts & Writing</button>
            <button className="btn">Baking</button>
            <button className="btn">Cooking</button>
            <button className="btn">Dance</button>
            <button className="btn">Drinks</button>
            <button className="btn">Entertainment</button>
        </ul>
    </div>


    <div className="section-heading">
        <h1 className="section-heading">Top Sellers</h1>
    </div>

    <div className="row col-md-12 col-lg-12">

        <div className="column">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGOV2gPRWmzcSgn_aM5SfvVWrR8lW4UQrrOg&usqp=CAU" alt="hallowen" className="image">
            <h1 className="img-heading">the plague doctor of plague-halloween edition<strong>From rs 1321</strong>/person</h1>

        </div>
        <div className="column col-md-12">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8CpZ533tMc0SUN8GevJ3brmVFPvIdUxSLmJEaUlIp&s" className="image">
            <h1 className="img-heading">Solve the mystery escape room also with hallowen <strong>From rs 1272</strong>/person</h1>
        </div>
        <div className="column">
            <img src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2340325-media_library/original/599c584e-f401-4f67-958a-18277ee7dd10.png?im_w=320" className="image">
            <h1 className="img-heading">Murder /mystery escape room Game-Perfect for hallowen <strong>From rs 1272</strong>/person</h1>
        </div>

        <div className="column">
            <img src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1718920-media_library/original/ca228931-6da0-4f13-96ec-a4079eaeb6c1.jpg?im_w=720" className="image">
            <h1 className="img-heading">'No spain No gamer'The fabulous game<strong>From rs 1298</strong>/person</h1>
        </div>
        <div className="column">
            <img src="https://static.wixstatic.com/media/ab2e11_e15a3ebaf1b24896b970dcd405c89e00~mv2.jpeg/v1/fill/w_278,h_278,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ab2e11_e15a3ebaf1b24896b970dcd405c89e00~mv2.jpeg" className="image">
            <h1 className="img-heading">The circus factory <strong>From rs 2028</strong>/person</h1>
        </div>

        <div className="column">
            <img src="https://i.pinimg.com/736x/7a/da/38/7ada38b11b009a0e4893ef58d3e13783--design-posters-flat-design.jpg" className="image">
            <h1 className="img-heading">Design your trip to barcelona with gemma<strong>From rs 3102</strong>/person</h1>
        </div>
        <div className="column">
            <img src="https://cache.marriott.com/content/dam/marriott-renditions/NYCMQ/nycmq-exterior-0166-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=750px:*" className="image">
            <h1 className="img-heading">plan the perfect newyork vaccation <strong>From rs 1558</strong>/person</h1>
        </div>
        <div className="column">
            <img src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2563542-active_media/original/512e69be-ae89-45a9-8f49-530a99f96c4f.jpeg?im_w=320" className="image">
            <h1 className="img-heading">Craft acustom trip to korea with jay <strong>From rs 3504</strong>/person</h1>
        </div>
        <div className="column">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEw-1zLMvvaLB4jcjVvOrAKkNWCqyFku3lew&usqp=CAU" className="image">
            <h1 className="img-heading">Live Tulum like a local <strong>From rs 1272</strong>/person</h1>

        </div>
        <div className="column">
            <img src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_xy_center,h_320,q_75,w_640,x_3326,y_2943/v1/clients/austin/Paddleboarding_on_Lady_Bird_Lake_credit_Nick_Simonite_expires_September_2021_1__58d68578-e856-4dda-8279-3ff23745e3ea.jpg" className="image">
            <h1 className="img-heading">Plan a trip to Amazing Austun <strong>From rs 2050</strong>/person</h1>
        </div>
        <div className="column">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxvVqY0hi87lOc3TdudXH-5YbJOfeuTU7Qfw&usqp=CAU" className="image">
            <h1 className="img-heading">Pasta with grandmas <strong>From rs 2694</strong>/person</h1>
        </div>
        <div className="column">
            <img src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2422459-media_library/original/8262d6c7-f0dc-45f0-9610-53f6577cc380.jpeg?im_w=480" className="image">
            <h1 className="img-heading">'From paris with laughs'The Scavenger hunt <strong>From rs 1143</strong>/person</h1>
        </div>

    </div>

)

export default Home