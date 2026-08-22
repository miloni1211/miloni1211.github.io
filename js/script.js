// scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:0.15});
  revealEls.forEach(el=>io.observe(el));

  // rail: active node + moving indicator based on scroll progress through sections
  const sections = ['about','skills','experience','projects','looking','contact'].map(id=>document.getElementById(id));
  const nodes = document.querySelectorAll('#rail .node');
  const indicator = document.getElementById('indicator');
  const track = document.querySelector('#rail .track');

  function updateRail(){
    const trackH = track.offsetHeight;
    let activeIdx = 0;
    let progress = 0;
    const viewMid = window.scrollY + window.innerHeight * 0.4;

    sections.forEach((sec,i)=>{
      if(sec.offsetTop <= viewMid) activeIdx = i;
    });

    // progress within current section for smoother indicator motion
    const cur = sections[activeIdx];
    const next = sections[activeIdx+1];
    const start = cur.offsetTop;
    const end = next ? next.offsetTop : (document.body.scrollHeight - window.innerHeight);
    const span = Math.max(end - start, 1);
    const local = Math.min(Math.max((viewMid - start) / span, 0), 1);
    progress = (activeIdx + local) / sections.length;

    indicator.style.top = (progress*100) + '%';

    nodes.forEach((n,i)=> n.classList.toggle('active', i===activeIdx));
  }
  window.addEventListener('scroll', updateRail, {passive:true});
  window.addEventListener('resize', updateRail);
  updateRail();

  nodes.forEach(n=>{
    n.style.cursor='pointer';
    n.addEventListener('click',()=>{
      document.getElementById(n.dataset.target).scrollIntoView({behavior:'smooth'});
    });
  });
