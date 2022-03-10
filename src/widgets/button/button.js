import { Button } from "./button.model"
import buttonStyles from './style.module.css';



/**
 * @function getButton()
 * @returns List of Objects
 *   @List buttonList
 *      @Object Button Class
 *          @param id
 *          @param btnDirection
 *          @param btnText
 * 
 */

const getButton=function(){
    let buttonList=[
        new Button({
            id:"buttonOne",
            btnDirection:"left",
            btnText:"Scroll Left"
        }),
        new Button({
            id:"buttonTwo",
            btnDirection:"right",
            btnText:"Scroll Right"
        }),       
    ]
    return buttonList;
}

const MyButton = () => {
    let buttonData=getButton();
    const scrollToLeft=()=>{
        const elementId=document.getElementById("outerLayer");
        elementId.scrollTo({
            top:+2000,
        });
    }
    const scrollToRight=()=>{
        const elementId=document.getElementById("outerLayer");
        elementId.scrollTo({
            top:-1000,
        });
    }
    return (
        <center>
            <div>
                {
                    buttonData.map((data)=>{
                    return data.btnDirection==="left"?
                    <div className={buttonStyles.leftPart} key={data.id} id="buttonLeft" onClick={scrollToRight}>
                        <div className={buttonStyles.buttonLeft}>
                            <svg className={buttonStyles.arrow_svg} >
                                <use href='#left_arrow' x='0' y='0' >
                                    <polygon id='left_arrow' points='6.001,4.995 7.501,6.662 5.396,9 17.993,9 17.993,11 5.404,11 7.501,13.329 6.001,14.995 1.5,9.995'>
                                    </polygon>
                                </use>
                            </svg>
                        </div>
                        <div  className={buttonStyles.btnContainer1}>
                            <p>{data.btnText} </p>
                        </div>
                    </div>
                    :
                    (<div className={buttonStyles.rightPart} key={data.id} onClick={scrollToLeft}>
                        <div  className={buttonStyles.btnContainer2}>
                            <p>{data.btnText} </p>
                        </div>
                        <div  className={buttonStyles.buttonRight}>
                            <svg  className={buttonStyles.arrow_svg} >
                                <use href='#right_arrow' >
                                    <polygon id='right_arrow' points="13.493,4.995 11.993,6.662 14.097,9 1.5,9 1.5,11 14.089,11 11.993,13.329 13.493,14.995 17.993,9.995">
                                    </polygon>
                                </use>
                            </svg>
                        </div>
                    </div>)
                })
                }
            </div>
        </center>
    )
}

export default MyButton