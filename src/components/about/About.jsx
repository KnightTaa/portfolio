import "./about.css"
import Pic from "../../img/about.jpg"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://i.ibb.co/XZYxxRS/Developer-following-scheme-when-programming-at-his-workplace.jpg" alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Problem Solver. Innovator. Quick Learner
                </p>
                <p className="a-desc">
                    To obtain a challenging responsible position in a dynamic organization
                    which would enable me to utilize and enhance all my talents,
                    capabilities, and knowledge to bring out the best in me for the success
                    of the organization, thereby gain experience in working and congenial
                    environment with opportunities for learning and growth for a fulfilling
                    career.

                </p>
            </div>
        </div>
    )
}

export default About
