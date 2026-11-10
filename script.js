const entries=[
 {category:'REFLECTIONS',date:'COMING SOON',title:'The value of staying curious',body:'A note on asking better questions, making room for discovery, and learning in public.',symbol:'✳'},
 {category:'NOTES',date:'COMING SOON',title:'A practice of paying attention',body:'Small observations can change how we see a familiar place, a project, or a day.',symbol:'◌'},
 {category:'WORK & IDEAS',date:'COMING SOON',title:'Making ideas useful',body:'Thoughts on moving from an interesting thought to something that helps someone.',symbol:'↗'}
];
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#posts').innerHTML=entries.map(p=>`<article class="post"><div class="post-top"><span>${p.category}</span><span>${p.date}</span></div><div class="post-icon" aria-hidden="true">${p.symbol}</div><h3>${p.title}</h3><p>${p.body}</p><a href="#contact">COMING SOON&nbsp; ↗</a></article>`).join('');
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}});
document.querySelectorAll('a[href="#admin"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();document.querySelector('#admin').showModal()}));
document.querySelector('#contact-form').addEventListener('submit',e=>{e.preventDefault();const status=document.querySelector('#form-status');status.textContent='Thanks for reaching out. This demo form is not connected yet; please email hello@example.com.';e.target.reset()});
