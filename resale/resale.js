(() => {
'use strict';
const listings = [
 {id:'TJ2024001',name:'TECH SHELL JACKET',line:'Technical Performance Jacket · Knit & Woven Hybrid',color:'Sage Green',image:'../assets/details/front.webp',ask:320,retail:'$400',weight:'585g',origin:'China',material:'100% Hemp · 100% Silk',owner:'You',mine:true,since:'2024-01-15',transfers:0,place:'With you now',passport:'../passport/index.html'},
 {id:'WH2024001',name:'HERITAGE LUXURY WATCH',line:'Precision Craftsmanship · Heritage Classic',color:'Black · Brown strap',image:'../assets/resale/watch.png',ask:2900,retail:'$3,800',weight:'55–65g',origin:'Switzerland',material:'Stainless steel · Cowhide leather',owner:'Lin',since:'2024-06-02',transfers:1,place:'New York'},
 {id:'SN2025001',name:'UPTOWN LOW-TOP SNEAKER',line:'Premium Sustainable Sneaker',color:'Beige / Off-white',image:'../assets/resale/shoe.jpg',ask:820,retail:'$1,100',weight:'320g',origin:'Italy',material:'Suede leather · Polyester knit · Rubber sole',owner:'Mei',since:'2024-09-18',transfers:0,place:'Los Angeles'},
 {id:'JC2026001',name:'LUXURY JEWELRY',line:'Japanese Akoya pearls · Platinum',color:'Pearl',image:'../assets/resale/jewelry.png',ask:12000,retail:'$15,000',weight:'25g',origin:'Pearls Japan',material:'Japanese Akoya pearls · Platinum',owner:'Noah',since:'2025-01-11',transfers:0,place:'London'},
 {id:'BAG2025F001',name:'LEATHER SHOULDER BAG',line:'Premium Leather Handbag',color:'Black',image:'../assets/resale/bag.png?v=orig',ask:2600,retail:'$3,400',weight:'1.3 kg',origin:'Italy',material:'Cowhide · Recycled nylon lining',owner:'Ava',since:'2026-01-14',transfers:0,place:'Chicago'}
];
const $=id=>document.getElementById(id);
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const byId=id=>listings.find(item=>item.id===id);

function listView(){
 document.title='Verified resale';
 $('view').innerHTML=`<p class="kicker">DIRECT RESALE</p><h1>The next chapter</h1><p class="lead">A piece appears here only when both are true: the digital passport has verified it as authentic, and the current owner agrees to resell. Open one to see its passport and owner, then write them directly — no third-party platform.</p><div class="grid">${listings.map(item=>`<button class="piece" data-id="${item.id}"><img src="${item.image}" alt="${esc(item.name)}"><div><strong>${esc(item.name)}</strong><span>${esc(item.id)} · ${esc(item.color)}</span><span>Owner asking $${item.ask}</span><em class="badge">Verified · open to resale</em></div></button>`).join('')}</div>`;
}

function detailView(item){
 document.title=`${item.id} · Verified resale`;
 const contact=item.mine
  ?`<p>This is a piece you agreed to resell. Other buyers can write you here.</p>`
  :`<form id="contactForm"><label for="note">Message for ${esc(item.owner)}</label><textarea id="note" maxlength="240" required placeholder="I would like to take over this verified piece."></textarea><button class="submit" type="submit">Contact the owner</button></form><p id="sent" class="sent" hidden></p>`;
 const passport=item.passport?`<a class="passport-link" href="${item.passport}">Open the full digital passport</a>`:'';
 $('view').innerHTML=`<p class="kicker">ITEM PASSPORT</p><div class="detail"><figure><img src="${item.image}" alt="${esc(item.name)}"></figure><div><p class="verified"><i>✓</i>Verified authentic</p><h2>${esc(item.name)}</h2><p>${esc(item.line)}</p><p class="ask"><small>Owner asking</small>$${item.ask}</p><dl><div class="row"><dt>Item ID</dt><dd>${esc(item.id)}</dd></div><div class="row"><dt>Colour</dt><dd>${esc(item.color)}</dd></div><div class="row"><dt>Retail</dt><dd>${esc(item.retail)}</dd></div><div class="row"><dt>Weight</dt><dd>${esc(item.weight)}</dd></div><div class="row"><dt>Origin</dt><dd>${esc(item.origin)}</dd></div><div class="row"><dt>Material</dt><dd>${esc(item.material)}</dd></div><div class="row"><dt>Status</dt><dd>Verified · owner open to resale</dd></div></dl><section class="owner"><h3>Owner</h3><dl><div class="row"><dt>Current owner</dt><dd>${esc(item.owner)}</dd></div><div class="row"><dt>Location</dt><dd>${esc(item.place)}</dd></div><div class="row"><dt>Acquired</dt><dd>${esc(item.since)}</dd></div><div class="row"><dt>Transfers</dt><dd>${item.transfers}</dd></div></dl>${contact}</section>${passport}</div></div>`;
 const form=$('contactForm');
 if(!form)return;
 form.onsubmit=e=>{
  e.preventDefault();
  const note=$('note').value.trim();
  if(!note)return;
  const key='resale-direct-notes';
  let notes=[];
  try{notes=JSON.parse(localStorage.getItem(key)||'[]')||[];}catch{}
  notes.unshift({id:item.id,owner:item.owner,note});
  try{localStorage.setItem(key,JSON.stringify(notes.slice(0,20)));}catch{}
  $('sent').hidden=false;
  $('sent').textContent=`Sent directly to ${item.owner}. This note reaches only the owner of this piece, with no third-party platform. In the demo it stays in this browser.`;
  form.reset();
 };
}

function render(){
 const id=(location.hash||'').replace(/^#/,'');
 if(id==='all'){history.replaceState(null,'','index.html');}
 const item=byId(id==='all'?'':id);
 if(item)detailView(item);else listView();
}
document.addEventListener('click',e=>{
 const piece=e.target.closest('[data-id]');
 if(!piece)return;
 location.hash=piece.dataset.id;
});
window.addEventListener('hashchange',render);
render();
})();
