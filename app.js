const siteData = {

"video-u4":"https://drive.google.com/file/d/1sR3R0fGdjKcO3D-rrPdmquyh7jqGiihF/preview",
"link-video-u4":"https://drive.google.com/file/d/1sR3R0fGdjKcO3D-rrPdmquyh7jqGiihF/view",
"link-pdf-u4":"#",
"link-sol-u4":"#",

"video-u5":"https://drive.google.com/file/d/10GQ3Ybjbuu3pD9WyxnVDCHW08CeXjQMt/preview",
"link-video-u5":"https://drive.google.com/file/d/10GQ3Ybjbuu3pD9WyxnVDCHW08CeXjQMt/view",
"link-pdf-u5":"#",
"link-sol-u5":"#",

"video-u67":"https://drive.google.com/file/d/15eulQ0OeOSfaG-81cd8Flri0U5484auX/preview",
"link-video-u67":"https://drive.google.com/file/d/15eulQ0OeOSfaG-81cd8Flri0U5484auX/view",
"link-pdf-u67":"#",
"link-sol-u67":"#",

"exam-start-u4":"#",
"exam-solve-u4":"#"
};

function applyData(){

for(let id in siteData){

const el=document.getElementById(id);

if(!el) continue;

if(el.tagName==="IFRAME"){
el.src=siteData[id];
}else{
el.href=siteData[id];
el.target="_blank";
}

}

}

function showUnit(unitId,btn){

document.querySelectorAll('.unit-card').forEach(card=>{
card.classList.add('hidden');
});

document.querySelectorAll('.tab').forEach(tab=>{
tab.classList.remove('active-tab');
});

document.getElementById(unitId).classList.remove('hidden');

btn.classList.add('active-tab');

}

function switchSection(section){

const units=document.getElementById('section-units');
const exams=document.getElementById('section-exams');

if(section==="units"){
units.classList.remove('hidden-section');
exams.classList.add('hidden-section');
}else{
exams.classList.remove('hidden-section');
units.classList.add('hidden-section');
}

window.scrollTo({
top:0,
behavior:'smooth'
});

}

applyData();
