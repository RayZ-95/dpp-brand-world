(() => {
'use strict';
const products = {
 shirt: {
  id:'CS2026101', name:'Black Camp-Collar Shirt', line:'Technical Camp-Collar Shirt', color:'Black', price:'$220', weight:'265g',
  overview:'A camp-collar short-sleeve shirt with a chest patch pocket, a vertical zip pocket, and mesh under the shoulder. Metal snaps on the placket — for summer in the city or just outside it.',
  materials:['Shell: 70d stretch nylon plain weave, DWR','Mesh: 100% recycled polyester','Snaps and zip: YKK, matte black'],
  origin:{fabric:'Japan',dye:'Japan',made:'China'},
  sizes:['XS','S','M','L','XL'],
  features:['Water-repellent','Quick-dry','Mesh vent','4-way stretch'],
  pockets:['Chest patch pocket (zip)','Vertical zip pocket'],
  sustain:{recycled:'Mesh 100% recycled polyester · shell 40% recycled nylon',carbon:'9 kg CO2e',water:'620 L',cert:'bluesign® approved fabric',energy:'60% renewable energy'},
  care:['Machine wash 30°C gentle','Do not bleach','Tumble low or hang dry','Iron low','Do not dry-clean'],
  auth:{status:'Verified',owner:'Brand stock · unsold',since:'2026-03-02',transfers:0}
 },
 bermuda: {
  id:'BS2026102', name:'Navy Cargo Bermuda', line:'Asymmetric Technical Bermuda Shorts', color:'Navy · Slate panel', price:'$260', weight:'340g',
  overview:'Below-knee cargo bermudas. A slate panel cuts across the left leg, a cargo zip sits on the right, and a webbing buckle adjusts the waist. Reflective piping follows the seams.',
  materials:['Shell: 4-way stretch nylon twill, DWR','Panel: recycled polyester ripstop','Belt: recycled nylon webbing · aluminium buckle'],
  origin:{fabric:'China',dye:'China',made:'Vietnam'},
  sizes:['28','30','32','34','36'],
  features:['Water-repellent','Abrasion-resistant','Reflective piping','Adjustable waist'],
  pockets:['Two zip hand pockets','Right-leg cargo zip','Back pocket'],
  sustain:{recycled:'Panels and webbing 100% recycled',carbon:'12 kg CO2e',water:'840 L',cert:'OEKO-TEX® Standard 100',energy:'55% renewable energy'},
  care:['Machine wash 30°C','Do not bleach','Hang dry','Do not iron reflective areas','Do not dry-clean'],
  auth:{status:'Verified',owner:'Brand stock · unsold',since:'2026-03-02',transfers:0}
 },
 vest: {
  id:'VT2026103', name:'Charcoal Utility Vest', line:'Charcoal Utility Vest', color:'Charcoal', price:'$280', weight:'390g',
  overview:'A stand-collar utility vest. Mesh sits under the shoulder overlay, four zip pockets run chest to hem, and drawcords sit at the sides. Reflective tape outlines pockets and seams.',
  materials:['Shell: 3-layer nylon softshell','Mesh: 100% recycled polyester','Cords and toggles: recycled nylon'],
  origin:{fabric:'Korea',dye:'Korea',made:'China'},
  sizes:['XS','S','M','L','XL'],
  features:['Windproof','Water-repellent','Breathable','Reflective tape'],
  pockets:['Chest vertical zip','Chest square zip','Two hem zips'],
  sustain:{recycled:'Mesh 100% recycled · shell 30% recycled nylon',carbon:'14 kg CO2e',water:'910 L',cert:'bluesign® approved fabric',energy:'60% renewable energy'},
  care:['Machine wash 30°C gentle','Do not bleach','Hang dry','Do not iron','Do not dry-clean','Close all zips before washing'],
  auth:{status:'Verified',owner:'Brand stock · unsold',since:'2026-03-02',transfers:0}
 },
 top: {
  id:'TP2026104', name:'Ivory Zip Top', line:'Ivory Cobalt Zip-Collar Tech Top', color:'Ivory · Navy · Cobalt', price:'$190', weight:'210g',
  overview:'A half-zip stand-collar short-sleeve top. Navy and cobalt panels on the shoulders, a horizontal zip pocket on the right chest, and side vents at the hem.',
  materials:['Shell: recycled polyester pique, UPF 40','Panel: stretch polyester','Zip: YKK, silver'],
  origin:{fabric:'Taiwan',dye:'Taiwan',made:'China'},
  sizes:['XS','S','M','L','XL'],
  features:['Moisture-wicking','UPF 40','4-way stretch','Anti-pilling'],
  pockets:['Right-chest horizontal zip'],
  sustain:{recycled:'Shell 100% recycled polyester',carbon:'7 kg CO2e',water:'480 L',cert:'GRS Global Recycled Standard',energy:'70% renewable energy'},
  care:['Machine wash 30°C','Do not bleach','Tumble low','Do not iron print or zip','Do not dry-clean'],
  auth:{status:'Verified',owner:'Brand stock · unsold',since:'2026-03-02',transfers:0}
 },
 shorts: {
  id:'TS2026105', name:'Graphite Trail Shorts', line:'Graphite Trail Shorts', color:'Graphite · Cobalt', price:'$170', weight:'180g',
  overview:'Two-layer trail shorts. Graphite shell with cobalt side panels and reflective hem piping; a black liner underneath. Drawcord waist and a small zip at the back.',
  materials:['Outer: recycled polyester ripstop, DWR','Liner: recycled nylon · elastane','Drawcord: recycled polyester'],
  origin:{fabric:'Taiwan',dye:'Taiwan',made:'Vietnam'},
  sizes:['XS','S','M','L','XL'],
  features:['Lightweight','Quick-dry','Two-layer','Reflective piping'],
  pockets:['Back-waist zip','Liner side pocket'],
  sustain:{recycled:'Outer 100% recycled · liner 78% recycled',carbon:'6 kg CO2e',water:'410 L',cert:'GRS Global Recycled Standard',energy:'70% renewable energy'},
  care:['Machine wash 30°C','Do not bleach','Hang dry','Do not iron','Do not dry-clean','No fabric softener'],
  auth:{status:'Verified',owner:'Brand stock · unsold',since:'2026-03-02',transfers:0}
 },
 trousers: {
  id:'HT2026106', name:'Stone Convertible Trousers', line:'Stone Gray Convertible Hiking Trousers', color:'Stone Gray', price:'$300', weight:'420g',
  overview:'Hiking trousers that zip off at the knee. Webbing buckle at the waist, a cargo zip on the right thigh, and drawcords at the hem. Cobalt zipper pulls stay usable in gloves.',
  materials:['Shell: stretch nylon twill, DWR','Knee zip: YKK two-way','Belt: recycled nylon webbing · aluminium buckle'],
  origin:{fabric:'China',dye:'China',made:'China'},
  sizes:['28','30','32','34','36'],
  features:['Zip-off legs','Water-repellent','Abrasion-resistant','UPF 50'],
  pockets:['Two zip hand pockets','Right-leg cargo zip','Two back pockets'],
  sustain:{recycled:'Webbing 100% recycled · shell 35% recycled nylon',carbon:'15 kg CO2e',water:'980 L',cert:'bluesign® approved fabric',energy:'55% renewable energy'},
  care:['Machine wash 30°C','Do not bleach','Hang dry','Iron low','Do not dry-clean','Close knee zips before washing'],
  auth:{status:'Verified',owner:'Brand stock · unsold',since:'2026-03-02',transfers:0}
 },
 'w-bootcut': {
  id:'WT2026201', name:'Graphite Soft-Bootcut Trousers', line:'Graphite High-Waist Soft-Bootcut Performance Trousers', color:'Graphite', price:'$240', weight:'310g',
  overview:'High-waist soft-bootcut performance trousers. A hidden zip in the wide waistband, a close zip on the right thigh, and pale-grey reflective stitching on the seams.',
  materials:['Shell: recycled nylon · elastane 4-way knit, matte brushed','Waistband: double-layer high-stretch knit','Zip: YKK, matte'],
  origin:{fabric:'Taiwan',dye:'Taiwan',made:'China'},
  sizes:['XS','S','M','L','XL'],
  features:['4-way stretch','High-waist hold','Moisture-wicking','Reflective stitch'],
  pockets:['Hidden waistband zip','Right-leg zip'],
  sustain:{recycled:'Shell 76% recycled nylon',carbon:'8 kg CO2e',water:'560 L',cert:'GRS Global Recycled Standard',energy:'70% renewable energy'},
  care:['Machine wash 30°C gentle','Do not bleach','Lay flat to dry','Do not iron','Do not dry-clean','No fabric softener'],
  auth:{status:'Verified',owner:'Brand stock · unsold',since:'2026-03-02',transfers:0}
 },
 'w-leggings': {
  id:'WL2026202', name:'Espresso 7/8 Leggings', line:'Espresso Sculpted 7/8 Performance Leggings', color:'Espresso · Grey panel', price:'$150', weight:'220g',
  overview:'Sculpted 7/8 leggings. Grey side panels run from waist to calf, close zip pockets sit on both thighs, and a small zip sits at the back of the waistband.',
  materials:['Shell: recycled polyester · elastane high-density knit','Panel: recycled nylon · elastane','Zip: YKK, silver'],
  origin:{fabric:'Taiwan',dye:'Taiwan',made:'Vietnam'},
  sizes:['XS','S','M','L','XL'],
  features:['Sculpted high waist','Opaque','Moisture-wicking','4-way stretch'],
  pockets:['Two thigh zips','Back waistband zip'],
  sustain:{recycled:'Shell 82% recycled polyester',carbon:'6 kg CO2e',water:'430 L',cert:'GRS Global Recycled Standard',energy:'70% renewable energy'},
  care:['Machine wash 30°C gentle','Do not bleach','Lay flat to dry','Do not iron','Do not dry-clean','No fabric softener'],
  auth:{status:'Verified',owner:'Brand stock · unsold',since:'2026-03-02',transfers:0}
 },
 'w-zipneck': {
  id:'WZ2026203', name:'Ivory Cobalt Zip-Neck', line:'Ivory Cobalt Performance Zip-Neck Top', color:'Ivory · Cobalt · Grey', price:'$180', weight:'240g',
  overview:'A half-zip stand-collar long-sleeve. Cobalt at the shoulder and side, a dark-grey breathable panel under the arm, a vertical zip on the left chest, and reflective stitching at the elbow.',
  materials:['Shell: recycled polyester brushed knit, fleece inside','Panel: stretch polyester','Zip: YKK, silver'],
  origin:{fabric:'Taiwan',dye:'Taiwan',made:'China'},
  sizes:['XS','S','M','L','XL'],
  features:['Brushed warmth','Moisture-wicking','4-way stretch','Reflective stitch'],
  pockets:['Left-chest vertical zip'],
  sustain:{recycled:'Shell 100% recycled polyester',carbon:'8 kg CO2e',water:'520 L',cert:'GRS Global Recycled Standard',energy:'70% renewable energy'},
  care:['Machine wash 30°C','Do not bleach','Tumble low','Do not iron the zip','Do not dry-clean'],
  auth:{status:'Verified',owner:'Brand stock · unsold',since:'2026-03-02',transfers:0}
 },
 'w-jacket': {
  id:'WJ2026204', name:'Ivory Lilac Training Jacket', line:'Ivory Lilac-Panel Zip Training Jacket', color:'Ivory · Lilac', price:'$260', weight:'330g',
  overview:'A slim stand-collar training jacket. Lilac panels run from chest to sleeve, pale-grey stitching follows the waist seams, two hidden zip pockets sit at the sides, and the cuffs have thumb holes.',
  materials:['Shell: recycled nylon · elastane brushed knit','Panel: recycled polyester · elastane','Zip: YKK, silver, two-way'],
  origin:{fabric:'Korea',dye:'Korea',made:'China'},
  sizes:['XS','S','M','L','XL'],
  features:['Slim fit','4-way stretch','Thumb holes','Moisture-wicking'],
  pockets:['Two hidden side zips'],
  sustain:{recycled:'Shell 74% recycled nylon · panel 100% recycled polyester',carbon:'10 kg CO2e',water:'680 L',cert:'bluesign® approved fabric',energy:'60% renewable energy'},
  care:['Machine wash 30°C gentle','Do not bleach','Lay flat to dry','Do not iron','Do not dry-clean','Close the zip before washing'],
  auth:{status:'Verified',owner:'Brand stock · unsold',since:'2026-03-02',transfers:0}
 },
 'w-skort': {
  id:'WS2026205', name:'Ivory Technical Skort', line:'Ivory Technical Wrap Skort', color:'Ivory · Navy liner', price:'$210', weight:'260g',
  overview:'An asymmetric wrap skort. A crisp ivory shell, pleated on the right, a vertical zip with a cobalt pull on the left, and an adjustable webbing buckle. Navy liner shorts underneath.',
  materials:['Outer: recycled polyester · elastane twill, DWR','Liner: recycled nylon · elastane','Belt: recycled polyester webbing · aluminium buckle'],
  origin:{fabric:'China',dye:'China',made:'China'},
  sizes:['XS','S','M','L','XL'],
  features:['Water-repellent','Two-layer','Adjustable waist','Reflective tape'],
  pockets:['Left vertical zip','Liner side pocket'],
  sustain:{recycled:'Outer 100% recycled polyester · liner 78% recycled',carbon:'7 kg CO2e',water:'470 L',cert:'OEKO-TEX® Standard 100',energy:'65% renewable energy'},
  care:['Machine wash 30°C','Do not bleach','Hang dry','Iron the shell on low','Do not dry-clean'],
  auth:{status:'Verified',owner:'Brand stock · unsold',since:'2026-03-02',transfers:0}
 },
 'w-vest': {
  id:'WV2026206', name:'Oxblood Technical Vest', line:"Women's Oxblood Technical Vest", color:'Oxblood', price:'$250', weight:'300g',
  overview:'A women\'s stand-collar softshell vest. Mesh under the shoulder overlay, a vertical zip on the chest, two angled zips at the waist, and pale-grey reflective stitching on the seams.',
  materials:['Shell: 3-layer nylon softshell, DWR','Mesh: 100% recycled polyester','Zip: YKK, silver, two-way'],
  origin:{fabric:'Korea',dye:'Korea',made:'China'},
  sizes:['XS','S','M','L','XL'],
  features:['Windproof','Water-repellent','Breathable','Reflective stitch'],
  pockets:['Chest vertical zip','Two angled waist zips'],
  sustain:{recycled:'Mesh 100% recycled · shell 30% recycled nylon',carbon:'11 kg CO2e',water:'720 L',cert:'bluesign® approved fabric',energy:'60% renewable energy'},
  care:['Machine wash 30°C gentle','Do not bleach','Hang dry','Do not iron','Do not dry-clean','Close all zips before washing'],
  auth:{status:'Verified',owner:'Brand stock · unsold',since:'2026-03-02',transfers:0}
 }
};
const esc = x => String(x ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const list = arr => `<ul>${arr.map(x => `<li>${esc(x)}</li>`).join('')}</ul>`;
const rows = pairs => `<dl>${pairs.map(([k,v]) => `<div class="row"><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>`;
const host = document.getElementById('dpp');
if (!host) return;
const p = products[host.dataset.id];
if (!p) return;
host.innerHTML = `
 <div class="dpp-head"><span class="kicker">DIGITAL PRODUCT PASSPORT · display only</span><p class="dpp-id">${esc(p.id)} · ${esc(p.line)}</p></div>
 <div class="dpp-tabs" aria-hidden="true"><span>Digital Twin</span><span>Authentication</span><span>Product Info</span><span>Supply Chain</span><span>Sustainability</span><span>Care Guide</span></div>
 <div class="dpp-grid">
  <section class="dpp-card"><h3>Authentication</h3><p class="verified"><i>✓</i>${esc(p.auth.status)}</p>${rows([['Product ID',p.id],['Made in',p.origin.made],['Current Owner',p.auth.owner],['Listed',p.auth.since],['Transfer Count',p.auth.transfers]])}</section>
  <section class="dpp-card"><h3>Product Info</h3><p class="overview">${esc(p.overview)}</p>${rows([['Color',p.color],['Price',p.price],['Weight',p.weight],['Sizes',p.sizes.join(' / ')]])}<h4>Core Features</h4>${list(p.features)}<h4>Pockets</h4>${list(p.pockets)}</section>
  <section class="dpp-card"><h3>Supply Chain</h3><h4>Fabric Composition</h4>${list(p.materials)}<h4>Origin</h4>${rows([['Fabric Origin',p.origin.fabric],['Dyeing',p.origin.dye],['Assembly',p.origin.made]])}</section>
  <section class="dpp-card"><h3>Sustainability</h3>${rows([['Recycled Materials',p.sustain.recycled],['Carbon Footprint',p.sustain.carbon],['Water Footprint',p.sustain.water],['Certification',p.sustain.cert],['Energy',p.sustain.energy]])}</section>
  <section class="dpp-card"><h3>Care Guide</h3>${list(p.care)}</section>
 </div>
 <p class="fine">Prototype sample data. This page is display-only; the sections do not open further pages.</p>`;
})();
