const search=document.querySelector('#feature-search');
const status=document.querySelector('#feature-status');
const entries=[...document.querySelectorAll('.feature-item')];
const count=document.querySelector('#feature-count');
function filter(){const q=search.value.trim().toLowerCase();let n=0;for(const item of entries){const show=(!q||item.textContent.toLowerCase().includes(q))&&(status.value==='all'||item.dataset.kind===status.value);item.hidden=!show;if(show)n++;}count.textContent=`${n} of ${entries.length} features shown`;}
const requested=new URLSearchParams(location.search).get('status');
if(['current','potential'].includes(requested))status.value=requested;
search.addEventListener('input',filter);status.addEventListener('change',filter);filter();
