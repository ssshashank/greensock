import React,{Fragment,useState,useEffect,useRef} from 'react';
import { Link } from 'react-router-dom';
import {Container, ProductBody, UnifiedPlatform, WhyUs} from './container.model';
import styles from './style.module.css';
import one from "../../assets/images/one.jpg";
import two from "../../assets/images/two.jpg"
import MyButton from '../button/button';
/**
 * @function getUnifiedPlatform()
 * @returns Single Object
 *      @Object UnifiedPlatform Class
 *          @param id
 *          @param heading
 *          @param IconList
 *          @param subHeading
 *          @param platformSubdetails
 */

const getUnifiedPlatform=function(){
    return new UnifiedPlatform({
        id:"UPOne",
        heading:"A fully integrated suite for Automation",
        platformIconList:[
            one,
            two,
           one,
            two
        ],
        subHeading:[
            "Create and build test cases for Web Applications",
            "Create and automate Mobile Applications test cases.",
            "Create and build API automation test suits and test cases.",
            "Automate database queries and data validations"
        ],
        platformSubdetails:[
            "Web testing is the name given to software testing that focuses on web applications.No need to source extra skills to automate test cases.Built in automation scripting interface and custom keywords.",
            "Mobile application testing is a process by which application software developed for handheld mobile devices is tested for its functionality, usability and consistency. Native , Hybrid and mobile web apps. Both Android and ioS.",
            "API testing involves testing application programming interfaces (APIs) directly and as part of integration testing to determine if they meet expectations for functionality, reliability, performance, and security.",
            "Database testing consists of a layered process, including the user interface layer, the business layer, the data access layer and the database itself.Understanding of database concept and query construction needed."
        ]
    });
}

/**
 * @function getWhyUs()
 * @returns Single Object
 *      @Object WhyUs Class
 *          @param id
 *          @param heading
 *          @param IconList
 *          @param subHeading
 *          @param Subdetails
 */
const getWhyUs=function(){
    return new WhyUs({
        id:"UPOne",
        heading:"A technology-first approach for automation",
        whyUsIconList:[
            one,
            two,
           one,
            two
        ],
        subHeading:[
            "Create and build test cases for Web Applications",
            "Create and automate Mobile Applications test cases.",
            "Create and build API automation test suits and test cases.",
            "Automate database queries and data validations"
        ],
        whyUsSubDetails:[
            "Web testing is the name given to software testing that focuses on web applications.No need to source extra skills to automate test cases.Built in automation scripting interface and custom keywords.",
            "Mobile application testing is a process by which application software developed for handheld mobile devices is tested for its functionality, usability and consistency. Native , Hybrid and mobile web apps. Both Android and ioS.",
            "API testing involves testing application programming interfaces (APIs) directly and as part of integration testing to determine if they meet expectations for functionality, reliability, performance, and security.",
            "Database testing consists of a layered process, including the user interface layer, the business layer, the data access layer and the database itself.Understanding of database concept and query construction needed."
        ]
    });
}


const getProductBody=function(){
    let unifiedPlatformList=getUnifiedPlatform();
    let whyUsList=getWhyUs();

    
    let productBodyList=[
        new ProductBody({
            id:"PBOne",
            unifiedPlatform:unifiedPlatformList,
            whyUs:whyUsList
        }),
    ];

    return productBodyList;
}

/**
 * @function getContainer()
 * @returns List of Objects
 *   @List containerList
 *      @Object Container Class
 *          @param id
 *          @param title
 *          @param subTitle
 *          @param details
 * 
 */


export const getContainer=function(){
    let productBodyList=getProductBody();
    let containerList=[
        new Container({
            id:"one",
            containerId:"containerOne",
            title:"Digital",
            navigateTo:"ui/screens/soliteraDigital",
            navigateAs:"/soliteraDigital",
            subtitle:"Visit us",
            backgroundImage:one,
            details:" We stepped up Ace & Tate's omnichannel presence with a refined brand positioning,coherent design language and a North Star for aceandtate.com",
            headingStyle:styles.h1,
            subheadingStyle:styles.d1,
            containerStyle:styles.one,
            activeModule:"digital",
            productBody:productBodyList
        }),
        new Container({
            id:"two",
            containerId:"containerTwo",
            navigateTo:"ui/screens/soliteraTA",
            navigateAs:"/soliteraTA",
            title:"Test Automation",
            subtitle:"Visit us",
            backgroundImage:two,
            details:" The automation framework is based on BDD that is scalable and easy maintainable that provides various benefits and guidelines that help to Develop, Execute, Report and Manage the automation test scripts efficiently.",
            headingStyle:styles.h2,
            subheadingStyle:styles.d2,
            containerStyle:styles.two,
            activeModule:"ta",
            productBody:productBodyList
        }),
        new Container({
            id:"three",
            containerId:"containerThree",
            navigateTo:"ui/screens/soliteraTM",
            navigateAs:"/soliteraTM",
            title:"Test Management",
            subtitle:"Visit us",
            backgroundImage:one,
            details:" We stepped up Ace & Tate's omnichannel presence with a refined brand positioning,coherent design language and a North Star for aceandtate.com",
            headingStyle:styles.h3,
            subheadingStyle:styles.d3,
            containerStyle:styles.two,
            activeModule:"tm",
            productBody:productBodyList
        }),
        new Container({
            id:"four",
            containerId:"containerFour",
            navigateTo:"ui/screens/soliteraTE",
            navigateAs:"/soliteraTE",
            title:"Test Estimation",
            subtitle:"Visit us",
            backgroundImage:two,
            details:" We stepped up Ace & Tate's omnichannel presence with a refined brand positioning,coherent design language and a North Star for aceandtate.com",
            headingStyle:styles.h3,
            subheadingStyle:styles.d3,
            containerStyle:styles.two,
            activeModule:"te",
            productBody:productBodyList
        }),
        
    ];
    return containerList;
}



const MyContainer = () => {

    let containerData=getContainer();
    const [activeOffset, setActiveOffset] = useState(false);
    const offsetRef = useRef()

    /* useEffect(()=>{
        const getOffsetValue=()=>{
            let outerLayerOffset =offsetRef.current.getBoundingClientRect().top
            // console.log(outerLayerOffset)
            if(outerLayerOffset<=-850){
                setActiveOffset(true)
                offsetRef.current.style.overflowY="scroll";    
            }else{
                setActiveOffset(false)
                offsetRef.current.style.overflowY="hidden";
            }        
        }
        window.addEventListener("scroll",getOffsetValue)
        return ()=>{
            window.removeEventListener("scroll",getOffsetValue)
        }
        
    },[activeOffset]) */
console.log(styles)
 return (
    <>
    <div className="outerLayer" >
    <div className="carousel">
        <div className="container one" id="cOne" >
            <div className="heading h1">
                <h2>Sample <br/>Digital</h2>
            </div>
            <div className="details">
                <p>
                    We stepped up Ace & Tate's omnichannel presence with a 
                    refined brand positioning,coherent design language and a 
                    North Star for aceandtate.com
                </p>
            </div>
            <div className="subheading d1">
                <p>Visit us</p>
            </div>
        </div>
        
        <div className="container two " id="cTwo" >
            <div className="heading h2">
                <h2>Sample <br/> Test Automation</h2>
            </div>
            <div className="details">
                <p>
                    We helped Mollie with their rebranding.
                    From brand positioning to brand identity.
                </p>
            </div>
            <div className="subheading d2">
                <p>Visit us</p>
            </div>
        </div>
        <div className="container three">
            <div className="heading h3">
                <h2>Sample <br/> Test Management</h2>
            </div>
            <div className="details">
                <p>
                    We helped Powerhouse Company with a complete rebranding, 
                    from brand positioning to brand identity to platform.
                </p>
            </div>
            <div className="subheading d3">
                <p>Visit us</p>
            </div>
        </div>
        <div className="container four">
            <div className="heading h3">
                <h2>Sample <br/> Test Estimation</h2>
            </div>
            <div className="details">
                <p>
                    We helped Powerhouse Company with a complete rebranding, 
                    from brand positioning to brand identity to platform.
                </p>
            </div>
            <div className="subheading d3">
                <p>Visit us</p>
            </div>
        </div>
        
    </div>
</div>
<center>
        <div class="buttons">
            <div class="leftPart">
                <div class="buttonLeft">
                    <svg className='arrow_svg' >
                        <use href='#left_arrow' x='0' y='0' >
                            <polygon id='left_arrow' points='6.001,4.995 7.501,6.662 5.396,9 17.993,9 17.993,11 5.404,11 7.501,13.329 6.001,14.995 1.5,9.995'>
                            </polygon>
                        </use>
                    </svg>
                </div>
                <div class="btnContainer1">
                    <p>More Cases </p>
                </div>
            </div>
            <div class="rightPart" id="buttonRight">
                <div class="btnContainer2">
                    <p>More Cases </p>
                </div>
                <div class="buttonRight" >
                    <svg className='arrow_svg' >
                        <use href='#right_arrow' >
                            <polygon id='right_arrow' points="13.493,4.995 11.993,6.662 14.097,9 1.5,9 1.5,11 14.089,11 11.993,13.329 13.493,14.995 17.993,9.995">
                            </polygon>
                        </use>
                    </svg>
                </div>
            </div>
            
        </div>
        
    </center>
    </>
    );
}

export default MyContainer