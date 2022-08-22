
import React,{ useEffect,useState } from 'react'
import axios from 'axios';
import "./CouncilComponent.css"
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineMail, AiFillMail } from "react-icons/ai";

const headMembers = [
    // { name: "Amit Singh", pos: "Head of E-Cell", img: "https://vesit.ves.ac.in/storage/faculty/1586847238amitsingh.jpg" },
    // { name: "Abhishek Chaudhari", pos: "HR department", img: "https://vesit.ves.ac.in/storage/faculty/1581602176Abhishek%20Chaudhari.jpg" },
    { name: "Ekta Rohra", pos: "Technical Associate", img: "https://drive.google.com/uc?id=1L6omBoUSKx-_zG8su-Yqv7LApPoFtVh7", insta: "twinblessed1707", gmail: "2019ekta.rohra@ves.ac.in", ln: "" },
    // { name: "Niyanti Padave", pos: "Chief Creativity Officer", img: "https://drive.google.com/uc?id=1N6VBAD9qqYMgJzjydzzBz7qz8_U0eUAp", insta: "niyanti_p", gmail: "d2019.niyanti.padave@ves.ac.in", ln: "" },
    // { name: "Dhwani Serai", pos: "Chief Finance Officer", img: "https://drive.google.com/uc?id=186IsG5PWM4S2KAaUGIJyG9vyikvpv_t7", insta: "dhwaniserai", gmail: "2018.dhwani.serai@ves.ac.in", ln: "" },
    // { name: "Suyog Sawant", pos: "Chief Technical Officer(Hardware)", img: "https://drive.google.com/uc?id=18iBy4wOmE2KtLydGpK-hCN3JBfEGtpTl", insta: "suyog_s_sawant", gmail: "2018.suyog.sawant@ves.ac.in", ln: "" },
    { name: "Sakshi Gattani", pos: "Chief Technical Officer(Software)", img: "https://drive.google.com/uc?id=1LQtQDuKMkmGBmbJ9j71vnWvMUJRnO8gd", insta: "ssg_gattani.23", gmail: "2019sakshi.gattani@ves.ac.in", ln: "in/sakshigattani231" },
    // { name: "Krishik Rao", pos: "Public Relation Officer", img: "https://drive.google.com/uc?id=1Hq_b4kZ15SA699SgnVnUJhU5Q2DKNmIs", insta: "", gmail: "2019krishik.rao@ves.ac.in", ln: "" },
    // { name: "Aryan Gupta", pos: "Chief Operation Officer", img: "https://drive.google.com/uc?id=1AJ7I2mVxWkvT7vjK1HLMRCcKe1IBgGEt", insta: "aryan.r.gupta_", gmail: "2019aryan.r.gupta@ves.ac.in", ln: "" },
    // { name: "Deepika Gambani", pos: "Chief Executive Officer", img: "https://drive.google.com/uc?id=10JYwNXezf3ual0FXR3QBb2QGU1Fv-MBh", insta: "deepikagambani", gmail: "2018.deepika.gambani@ves.ac.in", ln: "in/deepika-gambani-b653161ba/" }, 
// ]
// const members = [
//     {
//         department: "Core",
//         members: [
//            { name: "Niyanti Padave", pos: "Chief Creativity Officer", img: "https://drive.google.com/uc?id=1N6VBAD9qqYMgJzjydzzBz7qz8_U0eUAp", insta: "niyanti_p", gmail: "d2019.niyanti.padave@ves.ac.in", ln: "" },
//             { name: "Dhwani Serai", pos: "Chief Finance Officer", img: "https://drive.google.com/uc?id=186IsG5PWM4S2KAaUGIJyG9vyikvpv_t7", insta: "dhwaniserai", gmail: "2018.dhwani.serai@ves.ac.in", ln: "" },
//             { name: "Suyog Sawant", pos: "Chief Technical Officer(Hardware)", img: "https://drive.google.com/uc?id=18iBy4wOmE2KtLydGpK-hCN3JBfEGtpTl", insta: "suyog_s_sawant", gmail: "2018.suyog.sawant@ves.ac.in", ln: "" },
//             { name: "Sakshi Gattani", pos: "Chief Technical Officer(Software)", img: "https://drive.google.com/uc?id=1LQtQDuKMkmGBmbJ9j71vnWvMUJRnO8gd", insta: "ssg_gattani.23", gmail: "2019sakshi.gattani@ves.ac.in", ln: "in/sakshigattani231" },
//             { name: "Krishik Rao", pos: "Public Relation Officer", img: "https://drive.google.com/uc?id=1Hq_b4kZ15SA699SgnVnUJhU5Q2DKNmIs", insta: "", gmail: "2019krishik.rao@ves.ac.in", ln: "" },
//             { name: "Aryan Gupta", pos: "Chief Operation Officer", img: "https://drive.google.com/uc?id=1AJ7I2mVxWkvT7vjK1HLMRCcKe1IBgGEt", insta: "aryan.r.gupta_", gmail: "2019aryan.r.gupta@ves.ac.in", ln: "" },
//             { name: "Deepika Gambani", pos: "Chief Executive Officer", img: "https://drive.google.com/uc?id=10JYwNXezf3ual0FXR3QBb2QGU1Fv-MBh", insta: "deepikagambani", gmail: "2018.deepika.gambani@ves.ac.in", ln: "in/deepika-gambani-b653161ba/" },           
//         ]
//     },
//     {
//         department: "Software",
//         members: [
//             { name: "Ekta Rohra", pos: "Technical Associate", img: "https://drive.google.com/uc?id=1L6omBoUSKx-_zG8su-Yqv7LApPoFtVh7", insta: "twinblessed1707", gmail: "2019ekta.rohra@ves.ac.in", ln: "" },
//             { name: "Avantika Agarwal", pos: "Technical Associate", img: "https://drive.google.com/uc?id=1OeMZUaaH7xwO_Xr0NQ_6lWg2mLYHRoZB", insta: "", gmail: "2020avantika.agarwal@ves.ac.in", ln: "" },
//             { name: "Ritesh Tahilramani", pos: "Technical Associate", img: "https://drive.google.com/uc?id=164xBCYPOGIyNm4mE1J1CCXOM1iF5zNk0", insta: "___ritesh___26", gmail: "2020ritesh.tahilramani@ves.ac.in", ln: "" },
//             { name: "Anuj Patil", pos: "Technical Manager", img: "https://drive.google.com/uc?id=1eMXcLxHYoN71hALJg96SjGY-zsrdaYVZ", insta: "_anuj_p.18", gmail: "2019anuj.patil@ves.ac.in", ln: "" },
//             { name: "Vrushank Dhande", pos: "Technical Manager", img: "https://drive.google.com/uc?id=1rtMVxw4HIjS9gZXl6iScNF3tLkNRDfb9", insta: "_the_prometheus__", gmail: "2019vrushank.dhande@ves.ac.in", ln: "" },
//             { name: "Rohan Padhye", pos: "Technical Manager", img: "https://drive.google.com/uc?id=1g77iLBZ_sQJQMFr1U-rkQkgbOxiSC3kx", insta: "iam.rsp", gmail: "2019rohan.padhye@ves.ac.in", ln: "" },
//             ]
//     },
//     {
//         department: "Hardware",
//         members: [
//             { name: "Shubham Kumar", pos: "Technical Manager", img: "https://drive.google.com/uc?id=1EO6zmfEhJeH3GGp9-9VdPuNriy4T44Y5", insta: "_shubham_2408_", gmail: "Shubham Kumar@ves.ac.in", ln: "" },
//             { name: "Chaitanya Joshi", pos: "Technical Manager", img: "https://drive.google.com/uc?id=15wa8hgNL8dz2DUtvjfDmIgR5AMAazYiP", insta: "chaiiitanyaaa", gmail: "2018.chaitanya.joshi@ves.ac.in", ln: "" },
//             { name: "Vansh Pahuja", pos: "Technical Manager", img: "https://drive.google.com/uc?id=1Afp63DW94-LiSASTINJgVDgUJOAOQCgV", insta: "vanshpahuja_", gmail: "2020.vansh.pahuja@ves.ac.in", ln: "" },
//             ]
//     },
//     {
//         department: "Public Relation",
//         members: [
//             { name: "Yashkumar Kewlani", pos: "PR Analyst", img: "https://drive.google.com/uc?id=1gUwSb_MxdT_bdOgWrXSciFfgdBB36NBU", insta: "L_i_f_e_r_a_c_e_r_24", gmail: "2020.yash.kewlani@ves.ac.in", ln: "" },
//             { name: "Ratnakshi Gore", pos: "PR Analyst", img: "https://drive.google.com/uc?id=16izqWZLj0hBGyw5bCNaSxsCCkozibtsx", insta: " ratnakshigore", gmail: "2020.ratnakshi.gore@ves.ac.in", ln: "" },
//             { name: "Sudhanshu Sabale", pos: "PR Analyst", img: "https://drive.google.com/uc?id=144SSGHcqChfr4UT-9gR2-sD30If46Y-7", insta: "___scube___", gmail: "2020.sudhanshu.sabale@ves.ac.in", ln: "" },
//             { name: "Prathamesh Pradhan", pos: "PR Manager", img: "https://drive.google.com/uc?id=14AqVdnkGp792pO2uArRIhWfNVav56KsP", insta: "_i_m_prathamesh", gmail: "2020.prathamesh.pradhan@ves.ac.in", ln: "" },
//             { name: "Anishka Bajpai", pos: "PR Manager", img: "https://drive.google.com/uc?id=1M4SszVeIQMWU6M3nMcSnsUFdbG0BFawM", insta: "anishka_bajpai23", gmail: "2020.anishka.bajpai@ves.ac.in", ln: "" },
//             { name: "Shantanu Deshmukh", pos: "PR Analyst", img: "https://drive.google.com/uc?id=10Wg5ydlItJKTKPjeUwBdWR6Aap2h1bjN", insta: "shant___anu", gmail: "2020.shantanu.deshmukh@ves.ac.in", ln: "" },
//         ]
//     },
//     {
//         department: "Operation",
//         members: [
//             { name: "Shubhangi Zope", pos: "Operation Manager", img: "https://drive.google.com/uc?id=1prMWt5-fHCnmuAB1vmfxUC4cbkTlPjjD", insta: "", gmail: "2019shubhangi.zope@ves.ac.in", ln: "" },
//             { name: "Sarvesh Chandnani", pos: "Operation Analyst", img: "https://drive.google.com/uc?id=1znQQG03_uwbBbdktV483_3nkQjLoSqs2", insta: "sarvesh_chandnani", gmail: "2020.sarvesh.chandnani@ves.ac.in", ln: "" },
//             { name: "Saumya Padmane", pos: "Operation Analyst", img: "https://drive.google.com/uc?id=1NVOPI9FhdNye1KR6NbIYkYo6mmgkGjdE", insta: "_saumya_2428", gmail: "2020.saumya.padmane@ves.ac.in", ln: "" },
//             { name: "Manav Kukreja", pos: "Operation Manager", img: "https://drive.google.com/uc?id=1_94X15tqiXixm8o00ch7ub56ej8x9_ZY", insta: "manav.kukreja_", gmail: "2019manav.kukreja@ves.ac.in", ln: "" },
//             { name: "Siddhi Mudras", pos: "Operation Manager", img: "https://drive.google.com/uc?id=19017bXUTd4Yf4o3mYNxlE1rU8-WioSlZ", insta: "siddhi_mudras", gmail: "2019siddhi.mudras@ves.ac.in", ln: "" },
//             { name: "Sumit Jadhav", pos: "Operation Manager", img: "https://drive.google.com/uc?id=1VtwhNh4olCrISuL_MD1idfF-jDDJx6f_", insta: "", gmail: "2019sumit.jadhav@ves.ac.in", ln: "" },
//         ]
//     },
//     {
//         department: "Creativity",
//         members: [
//             { name: "Sagar Pujari", pos: "Creativity Lead", img: "https://drive.google.com/uc?id=1jYtRG3_LmE5wPRzDFzBRSfhCv-Ull75u", insta: "ii_sagar_ii", gmail: "2019sagar.pujari@ves.ac.in", ln: "" },
//             { name: "Prachi Thombare", pos: "Creativity Lead", img: "https://drive.google.com/uc?id=1VSXkr-j229wY2yzsZR-jIPvWCPt6Vzn8", insta: "__prachu06", gmail: "2020.prachi.thombare@ves.ac.in", ln: "" },
//             { name: "Nikhil Chhabria", pos: "Creativity Lead", img: "https://drive.google.com/uc?id=1zrCWE2cNFzIeo_yjY8U1ELdS-akCAf7s", insta: "_nikhilchhabria", gmail: "2020.nikhil.chhabria@ves.ac.in ", ln: "" },
//         ]
//     },
//     {
//         department: "Finance",
//         members: [
//             { name: "Hrishikesh Patil", pos: "Financial Manager", img: "https://drive.google.com/uc?id=1x42yMH8-RWodRb1NsrxmukFX2mguvdN6", insta: "hrishikeshhh_", gmail: "2020.hrishikesh.patil@ves.ac.in", ln: "" },
//             { name: "Saptarshi Das", pos: "Financial Manager", img: "https://drive.google.com/uc?id=1x8Y7e3FPls6dYQ_rdL1I-9m-dNIKhCiR", insta: "saptadas9081", gmail: "2019saptarshi.das@ves.ac.in", ln: "" },
//         ]
//     },
//  ]
]
const CouncilComponent = () => {
    const[members,setMembers]=useState([])
    useEffect(() => {
       axios.get("http://localhost:8000/department/").then(data=>setMembers(data.data))
    }, [])
    return (
        <div>
            <div className="intro" style={{ display: "flex", marginTop: "20px" }}>
                <div style={{ width: "93%", marginLeft: "40px", marginTop: "100px" }}>
                    <h1 style={{ fontWeight: "bold", marginBottom:"30px" , color:"rgb(92,73,58)"}}>
                    Meet <br/>
                    <span style={{ color: "rgb(132,164,68)" }}>Our Team</span>
                    </h1>
                    <p style={{ fontSize: "20px" }}>The core team carries out day to day activities of the E-Cell as well as the  Institute’s Entrepreneurship Hub for all entrepreneurial activities. The unit is responsible for coordination between various teams and prepares agendas for E-Cell meetings. It mediates the interaction between the students and successful entrepreneurs. It is also responsible for  carrying out the selection process and keeps students informed about relevant matters. It
                        enforces rules and procedures and avoids mishandling misinterpretation, and manhandling of facts within the E-Cell.</p>
                </div>
                <div class="container" style={{ margin: "auto" }}>
                {/* {headMembers.members[0].members.map((member) => ( */}
                    {headMembers.map((member) => (
                        <div class="card">
                            <div class="imgBx">
                                <img
                                    src={member.img}
                                    alt=""
                                />
                            </div>
                            <div class="content">
                                <div class="contentBx" >
                                    <h3>{member.name} <br /><span>{member.pos}</span></h3>
                                </div>
                                <ul class="sci" style={{ padding: "0" }}>
                                    <li >
                                        <a href="#"><AiFillMail /></a>
                                    </li>
                                    <li >
                                        <a href="#"><AiFillGithub /></a>
                                    </li>
                                    <li >
                                        <a href="#"><AiFillLinkedin /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    ))}



                </div >
            </div>
            {members.map((department) => (
                <div id="cubeContainer" style={{ marginTop: "50px" }}>
                    <div id="cubeWrapper">
                        <div class="head" style={{ marginBottom: "20px"}}>
                            <h1>{department.name} Team</h1>
                        </div>
                        <div id="cubes">

                            {department.members.map((member) =>
                                <div class="cube p1" style={{
                                    background: `url(${member.image}) center`, backgroundSize: 'cover',
                                }}>
                                    <div class="name">
                                        <h1>{member.name}</h1>
                                        <p>{member.position}</p>
                                    </div>
                                    <div class="innerBorder"></div>
                                    <div class="darken"></div>
                                    <div class="content">
                                        <ul>

                                        {member.insta && <li><a href={`https://www.instagram.com/${member.insta}`} target='_blank'><AiFillInstagram style={{ height: "35px", width: "auto" }} /></a></li>}
                                        {member.gmail && <li><a href={`mailto:${member.gmail}`}><AiOutlineMail style={{ height: "35px", width: "auto" }} /></a></li>}
                                        {member.linkedIn && <li><a href={`https://www.linkedin.com/${member.linkedIn}`}target='_blank'><AiFillLinkedin style={{ height: "35px", width: "auto" }} /></a></li>}
                                    </ul>
                                </div>
                                </div>
                            )}



                    </div>
                    {/* <div class="moreTeam"><a href="#"><span>Meet more of the team</span><span class="fas fa-angle-right"></span></a></div> */}
                </div>
                </div>

    ))
}
        </div >
    )
}

export default CouncilComponent
