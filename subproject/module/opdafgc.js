console.log("opdafgc initiated")

document.body.appendChild(document.createElement("style")).innerHTML = ".plate {background-color:#EEE;} .plate h1 {font-size:1.5em;} .plate h2 {font-size:1em;} .plate h3 {font-size:1em;font-weight:100;font-style:italic} .of h1 {font-size:1.2em} .of label {font-size:0.8em;display:table-cell;vertical-align:middle;border-radius:1em;background-color:#FFF;border:2px solid #EEE;width:15%;} .of input[type=radio] + span {background-color:unset;color:#222222;font-weight:200;}.of input[type=radio]:checked + span {background-color:unset;color:#2255FF;font-weight:900;} .of textarea {font-size:0.8em;background-color:#FFF;width:100%;} .biLabel {width:40%} .biLabelH{width:25%;height:4em;} .triLabel {width:30%}"

const eval_tree = {
    'items': [
        {
            'title':"History taking",
            'subtitle':"",
            'type':"radio",
            'response':[
                'Excellence: ซักประวัติสำคัญได้ครบถ้วน กระชับและเป็นระบบ',
                'Very good',
                'Competent: ซักประวัติสำคัญได้ครบถ้วน แต่ไม่กระชับหรือไม่เป็นระบบ',
                'Borderline',
                'Fail: ขาดประวัติสำคัญ',
                'N/A'
            ]
        },
        {
            'title':"Physical examination",
            'subtitle':"",
            'type':"radio",
            'response':[
                'Excellence: ตรวจร่างกายในส่วนที่เกี่ยวข้องได้ถูกต้อง ครบถ้วน คล่องแคล่ว ดูน่าเชื่อถือ',
                'Very good',
                'Competent: ตรวจร่างกายในส่วนที่เกี่ยวข้องได้ถูกต้อง แต่ยังไม่คล่องแคล่ว',
                'Borderline',
                'Fail: กระบวนการตรวจร่างกายในส่วนที่เกี่ยวข้องไม่ถูกต้อง',
                'N/A'
            ]
        },
        {
            'title':"Clinical diagnosis",
            'subtitle':"",
            'type':"radio",
            'response':[
                'Excellence: สรุปปัญหาผู้ป่วยได้ครบถ้วน และ Dx, DDx ได้ถูกต้องเหมาะสม',
                'Very good',
                'Competent: สรุปปัญหาสำคัญของผู้ป่วย ได้ครบถ้วน และ Dx กลุ่มโรคได้ แต่ DDx ยังไม่เหมาะสม',
                'Borderline',
                'Fail: ไม่สามารถสรุปปัญหาผู้ป่วยได้ หรือ ไม่สามารถ Dx กลุ่มโรคได้',
                'N/A'
            ]
        },
        {
            'title':"Rational laboratory investigation",
            'subtitle':"",
            'type':"radio",
            'response':[
                'Excellence: ส่งตรวจได้ถูกต้อง ครบถ้วน ไม่มากเกินความจำเป็น และ แปลผลได้ถูกต้อง',
                'Very good',
                'Competent: มีข้อผิดพลาดในการส่งตรวจ หรือ แปลผลเล็กน้อย',
                'Borderline',
                'Fail: เลือกส่งตรวจไม่ถูกต้อง หรือ แปลผลไม่ถูกต้อง',
                'N/A'
            ]
        },
        {
            'title':"Patient management",
            'subtitle':"",
            'type':"radio",
            'response':[
                'Excellence: สั่งการรักษาได้ถูกต้อง เหมาะสมกับผู้ป่วย ครอบคลุมทุกมิติของ holistic care',
                'Very good',
                'Competent: สั่งการรักษาได้ถูกต้องเป็นส่วนใหญ่ มีข้อผิดพลาดเล็กน้อย',
                'Borderline',
                'Fail: สั่งการรักษาไม่ถูกต้อง',
                'N/A'
            ]
        },
        {
            'title':"Patient education",
            'subtitle':"",
            'type':"radio",
            'response':[
                'Excellence: อธิบายข้อมูลสำคัญครบถ้วน เข้าใจง่าย เหมาะกับพื้นฐานผู้ป่วย เป็นการสื่อสาร 2 ทาง',
                'Very good',
                'Competent: ขาดข้อมูลเล็กน้อย หรือ ควรพัฒนาการสื่อสารให้เป็น 2 ทางมากกว่านี้',
                'Borderline',
                'Fail: ให้ข้อมูลสำคัญไม่ครบ/ผิดพลาด หรือ สื่อสารไม่เหมาะสมกับพื้นฐานผู้ป่วย',
                'N/A'
            ]
        },
        {
            'title':"Medical record",
            'subtitle':"",
            'type':"radio",
            'response':[
                'Excellence: บันทึกข้อมูลครบถ้วน เป็นระเบียบ กระชับ',
                'Very good',
                'Competent: บันทึกข้อมูลผิดพลาดเล็กน้อย หรือ ขาดข้อมูลบางประการ',
                'Borderline',
                'Fail: บันทึกข้อมูลผิดพลาด หรือ ขาดข้อมูลสำคัญหลายประการ',
                'N/A'
            ]
        },
        {
            'title':"Professionalism",
            'subtitle':'ถ้าเลือกว่าไม่ผ่าน กรุณาระบุในกล่อง comment to staff team',
            'type':'radio',
            'response':[
                'ตรงต่อเวลา แต่งกายสะอาด ถูกระเบียบ* เหมาะสมกับความเป็นแพทย์ อ่อนน้อม สุภาพ วาจาและกิริยาแสดงถึงการให้เกียรติและเคารพสิทธิผู้ป่วย',
                'ขาดประเด็นใดประเด็นหนึ่ง'
            ]
        },
        {
            'title':"Overall performance ",
            'subtitle':"",
            'type':"radio",
            'response':[
                'Trusted to practice under on-demand supervision',
                'Trusted to practice under direct supervision',
                'Still need step-by-step supervision',
            ]
        },
        {
            'title':"Comment to staff team",
            'subtitle':'This will NOT be sent to student',
            'type':'textarea',
        },
        {
            'title':"Feedback to student",
            'subtitle':'This WILL BE SENT to student',
            'type':'textarea',
        },
        {'title':"Blood pressure measurement",'subtitle':"",'type':"radio",'response':["Observe","ตรวจด้วยตนเอง"]},
        {'title':"Orthostatic BP measurement",'subtitle':"",'type':"radio",'response':["Observe","ตรวจด้วยตนเอง"]},
        {'title':"BP 4 extremities measurement",'subtitle':"",'type':"radio",'response':["Observe","ตรวจด้วยตนเอง"]},
        {'title':"PAD (peripheral pulses/carotid bruit)",'subtitle':"",'type':"radio",'response':["Observe","ตรวจด้วยตนเอง"]},
        {'title':"Heart murmur",'subtitle':"",'type':"radio",'response':["Observe","ตรวจด้วยตนเอง"]},
        {'title':"Thyroid gland exam",'subtitle':"",'type':"radio",'response':["Observe","ตรวจด้วยตนเอง"]},
        {'title':"DM foot",'subtitle':"",'type':"radio",'response':["Observe","ตรวจด้วยตนเอง"]},
        {'title':"Waist circumference",'subtitle':"",'type':"radio",'response':["Observe","ตรวจด้วยตนเอง"]},
        {'title':"Liver examination",'subtitle':"",'type':"radio",'response':["Observe","ตรวจด้วยตนเอง"]},
        {'title':"Spleen examination",'subtitle':"",'type':"radio",'response':["Observe","ตรวจด้วยตนเอง"]},
        {'title':"Chronic liver stigmata",'subtitle':"",'type':"radio",'response':["Observe","ตรวจด้วยตนเอง"]},
        {'title':"Abdominal mass",'subtitle':"",'type':"radio",'response':["Observe","ตรวจด้วยตนเอง"]},
        {'title':"Ascites",'subtitle':"",'type':"radio",'response':["Observe","ตรวจด้วยตนเอง"]},
        {'title':"Cranial nerve II-VII, XII",'subtitle':"",'type':"radio",'response':["Observe","ตรวจด้วยตนเอง"]},
        {'title':"Motor, sensory, DTR",'subtitle':"",'type':"radio",'response':["Observe","ตรวจด้วยตนเอง"]},
        {'title':"Cerebellar sign",'subtitle':"",'type':"radio",'response':["Observe","ตรวจด้วยตนเอง"]},
        {'title':"Abnormal breath sound",'subtitle':"",'type':"radio",'response':["Observe","ตรวจด้วยตนเอง"]},
        {'title':"Rheumatological examination",'subtitle':"",'type':"radio",'response':["Observe","ตรวจด้วยตนเอง"]},
        {'title':"Lymph nodes examination",'subtitle':"",'type':"radio",'response':["Observe","ตรวจด้วยตนเอง"]},
        {
            'title':"Other observed PE",
            'subtitle':'บันทึกรายการอื่น ๆ ที่นิสิตได้ observe',
            'type':'textarea',
        },
        {
            'title':"Other practiced PE",
            'subtitle':'บันทึกรายการอื่น ๆ ที่นิสิตได้ ปฏิบัติ',
            'type':'textarea',
        },
        {
            'title':"Comment about PE",
            'subtitle':'comment เพิ่มเติม ส่วนนี้สำหรับอาจารย์ดูเอง หากต้องการ feedback นิสิต ขอให้ใส่ในข้อด้านบนก่อนบันทึกตรวจร่างกายครับ',
            'type':'textarea',
        },
    ]
}

function render_individual(datum){
    let plate = document.createElement("form")
    plate.className = "plate"
    plate.dataset['datetime'] = datum[0]
    plate.dataset['studentmail'] = datum[1]
    plate.dataset['clinic'] = datum[2]
    plate.dataset['staff'] = datum[3]
    plate.dataset['hn'] = datum[4]
    plate.dataset['diagnosis'] = datum[5]
    plate.dataset['comment'] = datum[6]
    plate.dataset['secret'] = datum[7]
    plate.dataset['studentname'] = datum[9]

    plate.appendChild(document.createElement("h1")).innerText = plate.dataset['studentname']
    plate.appendChild(document.createElement("h2")).innerText = plate.dataset['studentmail']
    plate.appendChild(document.createElement("h2")).innerText = plate.dataset['datetime']
    plate.appendChild(document.createElement("h2")).innerText = plate.dataset['hn'] + ": " + plate.dataset['diagnosis']
    plate.appendChild(document.createElement("h3")).innerText = plate.dataset['comment']

    let survey1 = plate.appendChild(document.createElement("details"))
    survey1.appendChild(document.createElement("summary")).innerText = "Performance evaluation"
    // insert main 6 domains
    for(let i = 0; i<7; i++){
        let item = document.createElement("div")
        item.className = "of"
        item.appendChild(document.createElement("h1")).innerText = eval_tree.items[i].title
        item.appendChild(document.createElement("h2")).innerText = eval_tree.items[i].subtitle
        for(let j = 0; j<eval_tree.items[i].response.length;j++){
            let choice = document.createElement("input")
            choice.name = "item"+i
            choice.type = "radio"
            choice.value = eval_tree.items[i].response[j]
            let label = item.appendChild(document.createElement("label"))
            label.appendChild(choice)
            label.appendChild(document.createElement("span")).innerText = eval_tree.items[i].response[j]
        }
        survey1.appendChild(item)
    }
    {//i6
        let i=7
        let item = document.createElement("div")
        item.className = "of"
        item.appendChild(document.createElement("h1")).innerText = eval_tree.items[i].title
        item.appendChild(document.createElement("h2")).innerText = eval_tree.items[i].subtitle
        for(let j = 0; j<eval_tree.items[i].response.length;j++){
            let choice = document.createElement("input")
            choice.name = "item"+i
            choice.type = "radio"
            choice.value = eval_tree.items[i].response[j]
            let label = item.appendChild(document.createElement("label"))
            label.className = "biLabel"
            label.appendChild(choice)
            label.appendChild(document.createElement("span")).innerText = eval_tree.items[i].response[j]
        }
        survey1.appendChild(item)
    }
    {//i7
        let i=8
        let item = document.createElement("div")
        item.className = "of"
        item.appendChild(document.createElement("h1")).innerText = eval_tree.items[i].title
        item.appendChild(document.createElement("h2")).innerText = eval_tree.items[i].subtitle
        for(let j = 0; j<eval_tree.items[i].response.length;j++){
            let choice = document.createElement("input")
            choice.name = "item"+i
            choice.type = "radio"
            choice.value = eval_tree.items[i].response[j]
            let label = item.appendChild(document.createElement("label"))
            label.className = "triLabel"
            label.appendChild(choice)
            label.appendChild(document.createElement("span")).innerText = eval_tree.items[i].response[j]
        }
        survey1.appendChild(item)
    }
    for(let i = 9; i<11; i++){//i 8-9
        let item = document.createElement("div")
        item.className = "of"
        item.appendChild(document.createElement("h1")).innerText = eval_tree.items[i].title
        item.appendChild(document.createElement("h2")).innerText = eval_tree.items[i].subtitle
        item.appendChild(document.createElement("textarea")).name = "item"+i
        survey1.appendChild(item)
    }

    let survey2 = plate.appendChild(document.createElement("details"))
    survey2.appendChild(document.createElement("summary")).innerText = "Physical examination record"
    for(let i = 11; i<30; i++){
        let item = document.createElement("div")
        item.className = "of"
        item.appendChild(document.createElement("h1")).innerText = eval_tree.items[i].title
        item.appendChild(document.createElement("h2")).innerText = eval_tree.items[i].subtitle
        for(let j = 0; j<eval_tree.items[i].response.length;j++){
            let choice = document.createElement("input")
            choice.name = "item"+i
            choice.type = "radio"
            choice.value = eval_tree.items[i].response[j]
            let label = item.appendChild(document.createElement("label"))
            label.className = "biLabelH"
            label.appendChild(choice)
            label.appendChild(document.createElement("span")).innerText = eval_tree.items[i].response[j]
        }
        survey2.appendChild(item)
    }
    for(let i = 30; i<=32; i++){//i 8-9
        let item = document.createElement("div")
        item.className = "of"
        item.appendChild(document.createElement("h1")).innerText = eval_tree.items[i].title
        item.appendChild(document.createElement("h2")).innerText = eval_tree.items[i].subtitle
        item.appendChild(document.createElement("textarea")).name = "item"+i
        survey2.appendChild(item)
    }

    let button = plate.appendChild(document.createElement("input"))
    button.type = "button"
    button.value = "Submit"
    button.addEventListener('click',function(e){submission(e.target)})
    return plate
}

function submission(b){
    console.log(b)
    b = b.parentElement
    let fb = new FormData(b)
    if(fb.get("item0")==null||fb.get("item1")==null||fb.get("item2")==null||fb.get("item3")==null||
    fb.get("item4")==null||fb.get("item5")==null||fb.get("item6")==null||fb.get("item7")==null||fb.get("item8")==null){
      alert("Performance evaluation is incompleted!")
      return false;
    }
    let dataToPost = new FormData();
    dataToPost.append("entry.816105758",b.dataset.secret)//"SECRET CODE"
    dataToPost.append("entry.964924526",b.dataset.staff)//"อาจารย์ผู้ประเมิน"
    dataToPost.append("entry.1366050700",b.dataset.studentmail)//"ชื่อนิสิต"
    dataToPost.append("entry.2017593494",b.dataset.studentmail)//"email นิสิต"
    dataToPost.append("entry.1624177543",b.dataset.hn)//"HN"
    dataToPost.append("entry.569112786",b.dataset.diagnosis)//"Problem / CC / Diagnosis"
    dataToPost.append("entry.1936075058",fb.get("item0"))//"History taking"
    dataToPost.append("entry.1491696049",fb.get("item1"))//"Physical examination"
    dataToPost.append("entry.657939190",fb.get("item2"))//"Clinical diagnosis"
    dataToPost.append("entry.1588010152",fb.get("item3"))//"Rational laboratory investigation"
    dataToPost.append("entry.1462036256",fb.get("item4"))//"Patient management"
    dataToPost.append("entry.909612859",fb.get("item5"))//"Patient education"
    dataToPost.append("entry.48361767",fb.get("item6"))//"Medical record"
    dataToPost.append("entry.436195700",(fb.get("item7")=="ขาดประเด็นใดประเด็นหนึ่ง")?"":fb.get("item7"))//"Professionalism"
    dataToPost.append("entry.452459076",fb.get("item8"))//"Overall performance"
    dataToPost.append("entry.1758848871",fb.get("item9"))//"Comment to staff team"
    dataToPost.append("entry.1719138925",fb.get("item10"))//"Feedback to student"
    if(fb.get("item11")!=null)dataToPost.append("entry.2046221280",fb.get("item11"))//Blood pressure measurement
    if(fb.get("item12")!=null)dataToPost.append("entry.59244866",fb.get("item12"))//Orthostatic BP measurement
    if(fb.get("item13")!=null)dataToPost.append("entry.1571602702",fb.get("item13"))//BP 4 extremities measurement
    if(fb.get("item14")!=null)dataToPost.append("entry.1933191801",fb.get("item14"))//PAD (peripheral pulses/carotid bruit)
    if(fb.get("item15")!=null)dataToPost.append("entry.74680792",fb.get("item15"))//Heart murmur
    if(fb.get("item16")!=null)dataToPost.append("entry.1494387907",fb.get("item16"))//Thyroid gland exam
    if(fb.get("item17")!=null)dataToPost.append("entry.1271975454",fb.get("item17"))//DM foot
    if(fb.get("item18")!=null)dataToPost.append("entry.1932016578",fb.get("item18"))//Waist circumference
    if(fb.get("item19")!=null)dataToPost.append("entry.1221357209",fb.get("item19"))//Liver examination
    if(fb.get("item20")!=null)dataToPost.append("entry.1464278324",fb.get("item20"))//Spleen examination
    if(fb.get("item21")!=null)dataToPost.append("entry.1658722845",fb.get("item21"))//Chronic liver stigmata
    if(fb.get("item22")!=null)dataToPost.append("entry.1091217323",fb.get("item22"))//Abdominal mass
    if(fb.get("item23")!=null)dataToPost.append("entry.1410454874",fb.get("item23"))//Ascites
    if(fb.get("item24")!=null)dataToPost.append("entry.1671319664",fb.get("item24"))//Cranial nerve II-VII, XII
    if(fb.get("item25")!=null)dataToPost.append("entry.757346235",fb.get("item25"))//Motor, sensory, DTR
    if(fb.get("item26")!=null)dataToPost.append("entry.352503479",fb.get("item26"))//Cerebellar sign
    if(fb.get("item27")!=null)dataToPost.append("entry.1356559717",fb.get("item27"))//Abnormal breath sound
    if(fb.get("item28")!=null)dataToPost.append("entry.1418617715",fb.get("item28"))//Rheumatological examination
    if(fb.get("item29")!=null)dataToPost.append("entry.1108949900",fb.get("item29"))//Lymph nodes examination
    dataToPost.append("entry.925314099",fb.get("item30"))//PE-OTHER-OBSERVE
    dataToPost.append("entry.2134581669",fb.get("item31"))//PE-OTHER-PRACTICE
    dataToPost.append("entry.972948946",fb.get("item32"))//PE-COMMENT
    dataToPost.append("fvv",1)
    dataToPost.append("hud",true)
    /**/
    console.log(fb)
    console.log(dataToPost)
    fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSfn1rD-yK7UTtI8xU5DKG3DySjIAMw5mDFIzKPY0VRzKtlmIw/formResponse",{ // the form URL
      method: "POST",
      mode: "no-cors",
      header:{'Content-Type': 'application/json'},
      body: dataToPost
    }).then(response=>{
      console.log(response);
      b.innerHTML = "Cleared"
    }).catch(err=>alert(err));

}

const data = JSON.parse(params.get("var"))

data.forEach(datum => {
    //console.log(datum)
    document.body.appendChild(render_individual(datum))
})
