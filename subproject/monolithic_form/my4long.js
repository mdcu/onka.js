let tree = {
  'student_name':"mock student name",
  'student_id':"007",
  'teacher':"ชื่ออาจารย์",
  'date':"2021-01-01",
  'patient_hn':"11223344",
  'patient_age':"60",
  'patient_gender':"M",
  'diagnosis':"xxxxxx",
  'diagnosis_category':"must know",// should know, good to know
  'module':[
    {
      'type':"section",
      'text':"1. การสัมภาษณ์ประวัติ ( 30 )"
    },
    {
      'type':"item",
      'text':"1.1 การสัมภาษณ์ประวัติครบถ้วนเป็นระบบ ( 10 )",
      'helper':"",
      'id':"history_style",
      'score_preset':[['A',10],['B+',9],['B',8],['C+',7],['C',6],['D',4],['E',2]],// [0] is label, [1] second is score
      'score':undefined,
      'keypoints':[],//[0]text [1]status: 0-not selected 1-corrected 2-wrong 3-marked
      'note':"???"
    },
    {
      'type':"item",
      'text':"1.2 เทคนิคและความสามารถในการสัมภาษณ์ประวัติ ( 5 )",
      'helper':"",
      'id':"history_technique",
      'score_preset':[['A',5],['B+',4.5],['B',4],['C+',3.5],['C',3],['D',2],['E',1]],// [0] is label, [1] second is score
      'score':undefined,
      'keypoints':[],//[0]text [1]status: 0-not selected 1-corrected 2-wrong 3-marked
      'note':""
    },
    {
      'type':"item",
      'text':"1.3 ผลการสัมภาษณ์ประวัติ ( 15 ))",
      'helper':"",
      'id':"history_content",
      'score_preset':[['A',15],['B+',13.5],['B',12],['C+',10.5],['C',9],['D',6],['E',3]],// [0] is label, [1] second is score
      'score':undefined,
      'keypoints':[["abdominal pain",2],["jaundice",1]],//[0]text [1]status: 0-not selected 1-corrected 2-wrong 3-marked
      'note':""
    },
    {
      'type':"section",
      'text':"2. การตรวจร่างกาย ( 30 )"
    },
    {
      'type':"item",
      'text':"2.1 การตรวจร่างกายครบถ้วนเป็นระบบ ( 10 )",
      'helper':"",
      'id':"pe_pattern",
      'score_preset':[['A',10],['B+',9],['B',8],['C+',7],['C',6],['D',4],['E',2]],// [0] is label, [1] second is score
      'score':3,
      'keypoints':[],//[0]text [1]status: 0-not selected 1-corrected 2-wrong 3-marked
      'note':""
    },
    {
      'type':"item",
      'text':"2.2 วิธีการและเทคนิคการตรวจร่างกาย ( 10 )",
      'helper':"รวมทั้งการใช้อุปกรณ์การตรวจ",
      'id':"pe_technique",
      'score_preset':[['A',10],['B+',9],['B',8],['C+',7],['C',6],['D',4],['E',2]],// [0] is label, [1] second is score
      'score':undefined,
      'keypoints':[],//[0]text [1]status: 0-not selected 1-corrected 2-wrong 3-marked
      'note':""
    },
    {
      'type':"item",
      'text':"2.3 ผลการตรวจร่างกาย ( 10 )",
      'helper':"",
      'id':"pe_content",
      'score_preset':[['A',10],['B+',9],['B',8],['C+',7],['C',6],['D',4],['E',2]],// [0] is label, [1] second is score
      'score':undefined,
      'keypoints':[],//[0]text [1]status: 0-not selected 1-corrected 2-wrong 3-marked
      'note':""
    },
    {
      'type':"item",
      'text':"3. เจตคติและการปฏิบัติต่อผู้ป่วย ( 10 )",
      'helper':"",
      'id':"manner",
      'score_preset':[['A',10],['B+',9],['B',8],['C+',7],['C',6],['D',4],['E',2]],// [0] is label, [1] second is score
      'score':undefined,
      'keypoints':[],//[0]text [1]status: 0-not selected 1-corrected 2-wrong 3-marked
      'note':""
    },
    {
      'type':"item",
      'text':"4. การนำเสนอประวัติ และตรวจร่างกาย ( 5 )",
      'helper':"",
      'id':"presentation",
      'score_preset':[['A',5],['B+',4.5],['B',4],['C+',3.5],['C',3],['D',2],['E',1]],// [0] is label, [1] second is score
      'score':undefined,
      'keypoints':[],//[0]text [1]status: 0-not selected 1-corrected 2-wrong 3-marked
      'note':""
    },
    {
      'type':"section",
      'text':"5. การรวบรวมประเด็นปัญหา การวินิจฉัยโรค การวินิจฉัยแยกโรค และกระบวนการคิดอย่างเป็นเหตุเป็นผล ( 15 )"
    },
    {
      'type':"item",
      'text':"5.1 การรวบรวมประเด็นปัญหา (Problem list ) ( 5 )",
      'helper':"",
      'id':"problemlist",
      'score_preset':[['A',5],['B+',4.5],['B',4],['C+',3.5],['C',3],['D',2],['E',1]],// [0] is label, [1] second is score
      'score':undefined,
      'keypoints':[],//[0]text [1]status: 0-not selected 1-corrected 2-wrong 3-marked
      'note':""
    },
    {
      'type':"item",
      'text':"5.2 การวินิจฉัยโรค, การวินิจฉัยแยกโรค, และแนวทางการสืบค้นโรค ( 10 )",
      'helper':"",
      'id':"diagnosis",
      'score_preset':[['A',10],['B+',9],['B',8],['C+',7],['C',6],['D',4],['E',2]],// [0] is label, [1] second is score
      'score':undefined,
      'keypoints':[],//[0]text [1]status: 0-not selected 1-corrected 2-wrong 3-marked
      'note':""
    },
    {
      'type':"item",
      'text':"6. การศึกษาและค้นคว้าด้วยตนเอง ( 10 )",
      'helper':"",
      'id':"selfstudy",
      'score_preset':[['A',10],['B+',9],['B',8],['C+',7],['C',6],['D',4],['E',2]],// [0] is label, [1] second is score
      'score':undefined,
      'keypoints':[],//[0]text [1]status: 0-not selected 1-corrected 2-wrong 3-marked
      'note':""
    }
  ],
  'note':""
}

let module_id_index = {}

function main(){
  infra()
  render()
}

function infra(){
  let B = document.body
  B.appendChild(CE("div",{'id':"topdiv"}))
  B.appendChild(CE("div",{'id':"maindiv",'className':"topdiv"}))
  B.appendChild(CE("div",{'id':"summarydiv"}))
  for(m in tree.module){
    tree.module[m].id?module_id_index[tree.module[m].id]=m:0;
  }
}

function render(){
  ID('topdiv').innerText = "This is the top"
  tree.module.forEach(I=>{
    switch(I.type){
      case 'section':render_section(I);break;
      case 'item':render_item(I);break;
      case 'default':console.log(I);
    }
  })
  render_summary();
  $("textarea").forEach(t=>{t.addEventListener("input",function(e){textarea_resize(e.target)})})
  //[...document.getElementsByTagName("textarea")].forEach(t=>{t.addEventListener("input",textarea_resize)})
}

function render_section(S){
  ID('maindiv').appendChild(CE("div",{'className':"sectiondiv",'innerText':S.text}))
}

function render_item(I){
  let thisdiv = ID('maindiv').appendChild(CE("div",{'className':"itemdiv",'id':I.id}))
  let leftdiv = thisdiv.appendChild(CE("div",{'className':"leftdiv"}))
    leftdiv.appendChild(CE("h1",{'innerText':I.text}))
    let score = leftdiv.appendChild(CE("select"))
    I.score_preset.forEach(s => {
      score.appendChild(CE("option",{'innerText':s[0]+" ("+s[1]+")",'value':s[1],'className':s[0]}))
    })
    score.appendChild(CE("option",{'innerText':"NA",'value':undefined,'className':"NA"}))
    score.options[I.score === undefined? (I.score_preset.length):I.score].selected = true
    score.className = score.options[score.selectedIndex].className
    score.addEventListener("change",function(e){action_score(e.target)})
  let rightdiv = thisdiv.appendChild(CE("div",{'className':"rightdiv"}))
    let keydiv = rightdiv.appendChild(CE("div",{'className':"keydiv"}))
      I.keypoints.forEach(k=>{
        let thisk = keydiv.appendChild(build_keypoint(k[0],k[1]))
      })
    rightdiv.appendChild(CE("div",{'className':"newkeydiv"})).appendChild(CE('input',{'placeholder':"new key here..."})).addEventListener("keypress",function(e){
      if(e.keyCode == 13){
        keydiv.appendChild(build_keypoint(e.target.value,0))
        tree.module[module_id_index[e.target.parentElement.parentElement.parentElement.id]].keypoints.push([e.target.value,0])
        e.target.value = ""
      }
    })
    rightdiv.appendChild(CE("div",{'className':"commentdiv"})).appendChild(CE('textarea',{'value':I.note,'placeholder':"comment here..."}))
      .addEventListener("change",function(e){action_comment(e.target)})
}


function action_score(score){
  score.className = score.options[score.selectedIndex].className
  tree.module[module_id_index[score.parentNode.parentNode.id]].score = score.selectedIndex
  render_summary();
}

function action_key(keypoint){
  //console.log(keypoint)
  while(!keypoint.classList.contains("keypoint")){
    //console.log(keypoint)
    keypoint = keypoint.parentElement
  }
  let keyset = tree.module[module_id_index[keypoint.parentElement.parentElement.parentElement.id]].keypoints
  let k=0
  for(k in keyset)if(keyset[k][0]==keypoint.childNodes[1].innerText)break;
  keyset[k][1] = (keyset[k][1]+1)%4
  keypoint.className = "keypoint style"+keyset[k][1]
  render_summary();
}

function action_comment(comment){
  tree.module[module_id_index[comment.parentElement.parentElement.parentElement.id]].note = comment.value
  render_summary();
}

function textarea_resize(textarea){
  textarea.style.height = "auto";
  textarea.style.height = (textarea.scrollHeight) + "px";
}

function build_keypoint(keytext,status){
  let thisk = CE("p",{'className':"keypoint style"+status})
  thisk.addEventListener("click",function(e){action_key(e.target)})
  thisk.appendChild(CE("span",{'className':"keycode"}))
  thisk.appendChild(CE("span",{'className':"keytext",'innerText':keytext}))
  thisk.appendChild(CE("span",{'className':"keydelete",'innerText':"✖"})).addEventListener("click",function(e){delete_keypoint(e.target)})
  return thisk
}

function delete_keypoint(delbutton){
  if(confirm("You are going to delete the key '"+delbutton.parentElement.innerText+"'")){
    let  keyset = tree.module[module_id_index[delbutton.parentElement.parentElement.parentElement.parentElement.id]].keypoints
    for(k in keyset)if(keyset[k][0]==delbutton.parentElement.childNodes[1].innerText){keyset.splice(k,1);break;}
    delbutton.parentElement.parentElement.removeChild(delbutton.parentElement)
    render_summary();
  }
}

function render_summary(){
  let sum = 0
  $(".leftdiv select").forEach(score=>{if(score.value!="undefined")sum+=(+score.value)})
  ID('summarydiv').innerHTML = ""
  ID('summarydiv').appendChild(CE("h1",{'innerText':"Summary [toal score:"+sum+"]"}))
  tree.module.forEach(module=>{
    if(module.type=="section"){
      ID('summarydiv').appendChild(CE("h2",{'innerText':module.text}))
    }else if(module.type=="item"){
      ID('summarydiv').appendChild(CE("h3",{'innerText':(module.text+": "+ (module.score?module.score_preset[module.score][1]:"NA"))}))
      module.keypoints.forEach(kp=>{
        ID('summarydiv').appendChild(CE("ul",{'innerText':kp[0],'className':"style"+kp[1]}))
      })
      if(module.note!="")ID('summarydiv').appendChild(CE("p",{'innerText':module.note}))
    }
  })
}
