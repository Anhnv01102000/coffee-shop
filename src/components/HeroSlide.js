import { Fade } from "react-reveal"

const HeroSlide = () => {
    return (
        <section
            className="hero section"
            id="home"
            style={{ backgroundImage: `url(./media/bg-hero.jpg)` }}
        >
            <Fade top>
                <h1 className="hero__title">
                    Start Your Day <br />
                    With Favorite Coffee <br />
                    And Cozy Place.
                </h1>
                <button className="hero__button">Order Now</button>
            </Fade>
        </section >
    )
}

export default HeroSlide