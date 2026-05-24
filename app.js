let tr=JSON.parse(localStorage.getItem('tr')||'[]');
function render(arr=tr){
tb.innerHTML='';
arr.forEach((x,i)=>tb.innerHTML+=`<tr><td>${x.t}</td><td>${x.c}</td><td>${x.s}</td><td><button onclick='delRec(${i})'>Delete</button></td></tr>`);
localStorage.setItem('tr',JSON.stringify(tr));
}
function addTruck(){
tr.push({t:t.value,c:c.value,s:s.value});
render();
}
function delRec(i){tr.splice(i,1);render();}
function searchTruck(){
let q=search.value.toLowerCase();
render(tr.filter(x=>x.t.toLowerCase().includes(q)));
}
render();