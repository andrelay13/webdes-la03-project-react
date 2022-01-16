import React from "react";
import Navbar from "../navbar/Navbar";
import "./Advisor.css"
import diet from "./img/diet.png"
import fitness  from "./img/fitness.jpeg"
import food from "./img/food.jpeg"
import care from "./img/care.jpeg"
import informed from "./img/informed.jpeg"
import learn from "./img/learn.jpeg"
import relax from "./img/relax.jpeg"
import lifestyle from "./img/lifestyle.jpeg"
import closeIcon from "./img/close.png"

function Advisor() {
    
    const onClick = (id) => {
        document.getElementById("advisor-detail").style.display = "inline-block"

        let change_id = "preview".concat(id)
        document.getElementById(change_id).style.display = "inline-block" 
    }

    const onClose = (id) => {
        document.getElementById("advisor-detail").style.display = "none"

        let change_id = "preview".concat(id)
        document.getElementById(change_id).style.display = "none" 
    }

  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="header-title">
                <h1>Advisor Page</h1>
            </div>
            <div className="card" data-name="a-1" onClick={() => {onClick(1)}}>
                <div className="image">
                    <img src={relax} width="100" height="150"/>
                </div>
                <div className="title">
                    <h1>Relax</h1>
                </div>
                <div className="des">
                    <p>Stress can be detrimental to your health.</p>
                </div>
            </div>

            <div className="card" data-name="a-2" onClick={() => {onClick(2)}}>
                <div className="image">
                    <img src={learn} width="100" height="150"/>
                </div>
                <div className="title">
                    <h1>Learn your numbers</h1>
                </div>
                <div className="des">
                    <p>Staying healthy means monitoring a few key numbers.</p>
                </div>
            </div>


            <div className="card" data-name="a-3" onClick={() => {onClick(3)}}>
                <div className="image">
                    <img src={informed} width="100" height="150"/>
                </div>
                <div className="title">
                    <h1>Get informed</h1>
                </div>
                <div className="des">
                    <p>Medical expertise and advice are constantly changing
                        when new research emerges.</p>
                </div>
            </div>


            <div className="card" data-name="a-4" onClick={() => {onClick(4)}}>
                <div className="image">
                    <img src={food} width="100" height="150"/>
                </div>
                <div className="title">
                    <h1>Healthy eating</h1>
                </div>
                <div className="des">
                    <p>All humans have to eat food for growth and maintenance
                        of a healthy body.</p>
                </div>
            </div>


            <div className="card" data-name="a-5" onClick={() => {onClick(5)}}>
                <div className="image">
                    <img src={fitness} width="100" height="150"/>
                </div>
                <div className="title">
                    <h1>Fitness and Sport</h1>
                </div>
                <div className="des">
                    <p>Playing sports is a generally a fantastic way
                        to improve your fitness and health.</p>
                </div>
            </div>


            <div className="card" data-name="a-6" onClick={() => {onClick(6)}}>
                <div className="image">
                    <img src={care}width="100" height="150"/>
                </div>
                <div className="title">
                    <h1>Get preventive care</h1>
                </div>
                <div className="des">
                    <p>Preventing a disease or illness can be much
                        less expensive than treating one.</p>
                </div>
            </div>


            <div className="card" data-name="a-7" onClick={() => {onClick(7)}}>
                <div className="image">
                    <img src={lifestyle} width="100" height="150"/>
                </div>
                <div className="title">
                    <h1>Healthy Lifestyle</h1>
                </div>
                <div className="des">
                    <p>When you're not at your healthiest,
                        you can probably tell.</p>
                </div>
            </div>


            <div className="card" data-name="a-8" onClick={() => {onClick(8)}}>
                <div className="image">
                    <img src={diet} width="100" height="150"/>
                </div>
                <div className="title">
                    <h1>Diet</h1>
                </div>
                <div className="des">
                    <p>Consuming a healthy diet throughout the
                        life-course helps to prevent malnutrition.</p>
                </div>
            </div>
            </div>

            <div className="advisor-detail" id="advisor-detail">
                <div className="center">
                <div className="preview" data-target="a-1" id="preview1">
                <img src={closeIcon} alt="close" width="30" height="30" className="close" onClick={() => {onClose(1)}}/>
                <img src={relax} width="500" height="300"/>
                <h3>Relax</h3>
                <p>Stress can be detrimental to your health. Maintaining
                    friendships, focusing on hobbies, and
                    taking time to relax may help ensure good
                    mental health. In fact, research shows
                    that staying socially active in retirement
                    is correlated with lower stress levels and
                    a reduced risk of depression. It is also
                    associated with a lowered incidence of
                    Alzheimer’s disease. There are lots of ways to relax. 
                    Some ways are designed to relax your mind and some to 
                    relax your body. But because of the way the mind and 
                    body are connected, many relaxation methods work on 
                    both the mind and the body. You may want to try one 
                    or more of the following relaxation tips to see what 
                    works best for you.</p>
            </div>

            <div className="preview" data-target="a-2" id="preview2">
                <img src={closeIcon} alt="close" width="30" height="30" className="close" onClick={() => {onClose(2)}}/>
                <img src={learn} width="500" height="300"/>
                <h3>Learn your numbers</h3>
                <p>Unhealthy eating habits and less physical activity 
                    had led to the growing number of obesity population 
                    and becoming a health problem in Malaysia. The objective 
                    of this study is to monitor the BMI index by using LabVIEW 
                    and to create a proper filing system. This monitoring system 
                    will use LabVIEW as the data processing and result display 
                    while Microsoft Excel will be used as the storing medium. This 
                    BMI monitoring system by using LabVIEW is user-friendly and 
                    provides real-time data storing. This system will the user height 
                    and weight based on the BMI categories and automatically stored 
                    the information such as time, date, name, age, BMI index, and 
                    category accordingly. Continuous BMI monitoring system will help 
                    the user to maintain and monitor their fitness by controlling their 
                    diet and increased the physical activity and it also can save government 
                    costs in health problems.</p>
            </div>

            <div className="preview" data-target="a-3" id="preview3">
                <img src={closeIcon} alt="close" width="30" height="30" className="close" onClick={() => {onClose(3)}}/>
                <img src={informed} width="500" height="300"/>
                <h3>Get informed</h3>
                <p>The BMI ranges are based on the effect excessive body fat 
                    has on disease and death and are reasonably well related 
                    to adiposity. BMI was developed as a risk indicator of disease; 
                    as BMI increases, so does the risk for some diseases. Some 
                    common conditions related to overweight and obesity include: 
                    premature death, cardiovascular diseases, high blood pressure, 
                    osteoarthritis, some cancers and diabetes. BMI is also recommended 
                    for use in children and adolescents. In children, BMI is calculated 
                    as for adults and then compared with z-scores or percentiles. During 
                    childhood and adolescence the ratio between weight and height varies 
                    with sex and age, so the cut-off values that determine the nutritional 
                    status of those aged 0–19 years are gender- and age-specific. The cut-off 
                    points of the 2006 BMI-for-age reference for children aged 0–5 years for 
                    the diagnosis of overweight and obesity were set as the 97th and the 99th 
                    percentile, respectively. For those aged 5–19 years, overweight is defined 
                    as a BMI-for-age value over +1 SD and obesity as a BMI-for-age value over +2 SD.</p>
            </div>

            <div className="preview" data-target="a-4" id="preview4">
                <img src={closeIcon} alt="close" width="30" height="30" className="close" onClick={() => {onClose(4)}}/>
                <img src={food} width="500" height="300"/>
                <h3>Healthy eating</h3>
                <p>All humans have to eat food for growth and maintenance 
                    of a healthy body, but we humans have different nutrition 
                    requirements as infants, children (kids), teenagers, young 
                    adults, adults, and seniors. For example, infants may require 
                    feeding every 4 hours until they gradually age and begin to 
                    take in more solid foods. Eventually they develop into the more 
                    normal pattern of eating three times per day as young kids. 
                    However, as most parents know, kids, teenagers, and young adults 
                    often snack between meals. Snacking is often not limited to these 
                    age groups because adults and seniors often do the same.</p>
            </div>

            <div className="preview" data-target="a-5" id="preview5">
                <img src={closeIcon} alt="close" width="30" height="30" className="close" onClick={() => {onClose(5)}}/>
                <img src={fitness} width="500" height="300"/>
                <h3>Fitness and Sport</h3>
                <p>For sure, playing sports is a generally a fantastic 
                    way to improve your fitness and health. Many of us 
                    may not feel at home pounding away on a treadmill or 
                    working up a sweat in the gym, but we’ll happily chase 
                    a ball around endlessly while playing a game of some sort. 
                    For most people, taking part in sport will improve your 
                    general health and wellbeing. There are plenty of reasons 
                    why you should become involved in sport with reduced body 
                    fat, bone strengthening, improved stamina and flexibility 
                    being some of the reasons why you should take up a sport.</p>
            </div>

            <div className="preview" data-target="a-6" id="preview6">
                <img src={closeIcon} alt="close" width="30" height="30" className="close" onClick={() => {onClose(6)}}/>
                <img src={care} width="500" height="300"/>
                <h3>Get preventive care</h3>
                <p>Preventing a disease or illness can be much
                    less expensive than treating one. As recommended
                    by your doctor, take advantage of free or low-cost
                    diabetes and heart disease screenings, mammograms,
                    and vaccinations. And make sure to get your annual 
                    physical. Preventive care helps detect or prevent 
                    serious diseases and medical problems before they 
                    can become major. Annual check-ups, immunizations, 
                    and flu shots, as well as certain tests and screenings, 
                    are a few examples of preventive care. This may also be 
                    called routine care.</p>
            </div>

            <div className="preview" data-target="a-7" id="preview7">
                <img src={closeIcon} alt="close" width="30" height="30" className="close" onClick={() => {onClose(7)}}/>
                <img src={lifestyle} width="500" height="300"/>
                <h3>Healthy Lifestyle</h3>
                <p>When you’re not at your healthiest, you can probably tell. 
                    You may simply feel “off.” You may find that you feel tired, 
                    your digestive system isn’t functioning as well as it normally does, 
                    and you seem to catch colds. Mentally, you may find you can’t 
                    concentrate and feel anxious or depressed. The good news: a healthy 
                    lifestyle can help you feel better. Even better, you don’t have to 
                    overhaul your entire life overnight. It’s pretty easy to make a couple 
                    of small changes that can steer you in the direction of improved well-being. 
                    And once you make one change, that success can motivate you to continue 
                    to make more positive shifts.</p>
            </div>

            <div className="preview" data-target="a-8" id="preview8">
                <img src={closeIcon} alt="close" width="30" height="30" className="close" onClick={() => {onClose(8)}}/>
                <img src={diet} width="500" height="300"/>
                <h3>Diet</h3>
                <p>Consuming a healthy diet throughout the
                    life-course helps to prevent malnutrition
                    in all its forms as well as a range of
                    noncommunicable diseases (NCDs) and conditions.
                    However, increased production of processed foods,
                    rapid urbanization and changing lifestyles have
                    led to a shift in dietary patterns. People are now 
                    consuming more foods high in energy, fats, free sugars 
                    and salt/sodium, and many people do not eat enough fruit, 
                    vegetables and other dietary fibre such as whole grains.
                    The exact make-up of a diversified, balanced and healthy 
                    diet will vary depending on individual characteristics (e.g. age, 
                    gender, lifestyle and degree of physical activity), cultural 
                    context, locally available foods and dietary customs. However, 
                    the basic principles of what constitutes a healthy diet remain the same.</p>
            </div>
                </div>
            

            
        </div>
      </div>
  );
}

export default Advisor;
