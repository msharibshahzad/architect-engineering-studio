"use client";
import {useEffect,useState} from "react";
import {ArrowDownRight,ArrowUpRight,Menu,X,ChevronRight,Mail,Phone,MapPin,MessageCircle} from "lucide-react";
import Link from "next/link";
import {projects,services} from "@/lib/data";

const EMAIL="msharibshahzad1@gmail.com";
const PHONE="03703907327";
const WHATSAPP="+923703907327";
const WHATSAPP_URL="https://wa.me/923703907327?text=Hello%20Marina%20Associate%2C%20I%27d%20like%20to%20discuss%20a%20project.";
const TIKTOK="https://www.tiktok.com/@marinaasociateheadoffice";
const CONTACT="#contact";

function Label({n,t}:{n:string,t:string}){return <div className="flex justify-between border-b border-white/10 pb-4 text-[10px] uppercase tracking-[.25em] text-[#b08a55]"><span>{n} / {t}</span><span className="text-white/30">Marina Associate</span></div>}

export default function Studio(){
 const[menu,setMenu]=useState(false);
 const[filter,setFilter]=useState("ALL");
 const[openFaq,setOpenFaq]=useState<number|null>(null);
 const[form,setForm]=useState({name:"",email:"",phone:"",location:"",plot:"",budget:"",message:""});
 const shown=filter==="ALL"?projects:projects.filter(p=>p.type.toUpperCase()===filter);

 useEffect(()=>{
   const items=document.querySelectorAll(".reveal");
   const observer=new IntersectionObserver(entries=>{
     entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}});
   },{threshold:.12});
   items.forEach(item=>observer.observe(item));
   return()=>observer.disconnect();
 },[]);

 const submit=(e:React.FormEvent)=>{
   e.preventDefault();
   const subject=encodeURIComponent("New Project Inquiry — Marina Associate");
   const body=encodeURIComponent("Name: "+form.name+"\nEmail: "+form.email+"\nPhone: "+form.phone+"\nLocation: "+form.location+"\nPlot Size: "+form.plot+"\nEstimated Budget: "+form.budget+"\n\nProject details:\n"+form.message);
   window.location.href=`mailto:${EMAIL}?subject=${subject}&body=${body}`;
 };

 return <main className="overflow-hidden">
<header className="fixed inset-x-0 top-0 z-40">
  <div className="container-x mt-3 sm:mt-4">
    <nav className="glass flex h-14 items-center justify-between px-3 sm:h-16 sm:px-4">
      <a href="#" aria-label="Marina Associate home"><img src="/marina-logo.svg" alt="Marina Associate" className="h-10 w-auto object-contain sm:h-12"/></a>
      <div className="hidden gap-5 text-[10px] uppercase tracking-widest md:flex">{["About","Services","Projects","Process","Testimonials","FAQs","Insights","Contact"].map(x=><a key={x} href={"#"+x.toLowerCase()} className="text-white/60 transition-colors hover:text-white">{x}</a>)}</div>
      <a href={CONTACT} className="btn btn-primary hidden md:inline-flex">Start a project</a>
      <a href={CONTACT} className="btn btn-primary px-3 py-2 text-[9px] md:hidden">Start</a>
      <button className="ml-2 md:hidden" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">{menu?<X/>:<Menu/>}</button>
    </nav>
  </div>
  {menu&&<div className="glass mx-3 mt-2 p-4 md:hidden">{["About","Services","Projects","Process","Testimonials","FAQs","Insights","Contact"].map(x=><a onClick={()=>setMenu(false)} key={x} href={"#"+x.toLowerCase()} className="block border-b border-white/10 py-3 text-sm uppercase last:border-0">{x}</a>)}</div>}
</header>

<section className="relative flex min-h-screen items-center bg-[#0b0b0a]">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(176,138,85,.25),transparent_35%)]"/>
  <div className="container-x relative z-10 py-28 sm:py-32">
    <p className="reveal text-[10px] uppercase tracking-[.25em] text-[#b08a55]">Architecture · Engineering · Construction</p>
    <h1 className="hero-title display mt-5 max-w-5xl text-5xl leading-[.92] sm:text-7xl md:text-[8.5rem]">WE DESIGN THE<br/><span className="text-white/40">FUTURE OF SPACE.</span></h1>
    <p className="reveal reveal-delay-1 mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">Marina Associate brings architectural thinking, engineering precision and construction expertise together to create spaces shaped around performance, purpose and human experience.</p>
    <div className="reveal reveal-delay-2 mt-7 flex flex-wrap gap-2 sm:gap-3">
      <a className="btn btn-primary" href="#projects">Explore projects <ArrowDownRight size={15}/></a>
      <a className="btn" href={CONTACT}>Start your project <ArrowUpRight size={15}/></a>
      <a className="btn" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={15}/> WhatsApp</a>
    </div>
    <div className="mt-16 border-t border-white/10 pt-4 text-[10px] uppercase tracking-widest text-white/40 sm:mt-20">Marina Associate / Designer & Builders / Lalamusa, Gujrat</div>
  </div>
</section>

<section id="about" className="section scroll-mt-24 bg-[#f3f0e9] text-[#11110f]">
  <div className="container-x">
    <div className="border-b border-black/15 pb-4 text-[10px] uppercase tracking-widest">01 / Studio statement</div>
    <div className="grid gap-8 pt-10 sm:pt-12 lg:grid-cols-[1.2fr_.8fr] lg:gap-12">
      <h2 className="reveal display text-5xl sm:text-6xl md:text-8xl">IDEAS BECOME<br/><span className="text-black/35">STRUCTURES.</span></h2>
      <div className="reveal reveal-delay-1">
        <p className="text-lg leading-7 text-black/65 sm:text-xl sm:leading-8">At Marina Associate, design and delivery are considered together—from concept and planning to engineering coordination, construction and handover.</p>
        <div className="mt-8 grid grid-cols-2 gap-5 sm:mt-10 sm:gap-6">{[["15+","Years Experience"],["120+","Projects"],["35+","Cities"],["98%","Client Satisfaction"]].map(([a,b])=><div key={b} className="border-t border-black/15 pt-3"><div className="display text-3xl sm:text-4xl">{a}</div><div className="text-[10px] uppercase sm:text-xs">{b}</div></div>)}</div>
      </div>
    </div>
  </div>
</section>

<section id="services" className="section scroll-mt-24">
  <div className="container-x">
    <Label n="02" t="What we do"/>
    <div className="mt-6 divide-y divide-white/10 sm:mt-8">{services.map((s,i)=><Link href={"/services/"+s.slug} key={s.slug}><div className="service-row reveal grid gap-2 py-5 sm:py-6 md:grid-cols-[70px_1fr_2fr_30px] md:gap-4"><span className="text-xs text-[#b08a55]">{s.number}</span><h3 className="display text-2xl sm:text-3xl">{s.title}</h3><p className="text-sm leading-6 text-white/45">{s.description}</p><ChevronRight className="hidden text-white/30 md:block"/></div></Link>)}</div>
  </div>
</section>

<section id="projects" className="section scroll-mt-24 bg-[#111110]">
  <div className="container-x">
    <Label n="03" t="Selected work"/>
    <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">{["ALL","RESIDENTIAL","COMMERCIAL","HOSPITALITY","INSTITUTIONAL"].map(x=><button key={x} onClick={()=>setFilter(x)} className={"btn !px-3 !py-2 "+(filter===x?"bg-white text-black":"")}>{x}</button>)}</div>
    <div className="mt-7 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2">{shown.map((p,i)=><Link href={"/projects/"+p.slug} key={p.slug} className={i===0?"md:col-span-2":""}><article className="project-card group relative overflow-hidden bg-black"><img src={p.image} alt={p.title} className={"w-full object-cover transition duration-700 group-hover:scale-105 "+(i===0?"aspect-[4/3] md:aspect-[2/1]":"aspect-[4/3]")}/><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 pt-20 sm:p-6 sm:pt-24"><div className="text-[10px] uppercase tracking-widest text-[#c49b62]">{p.type} · {p.location}</div><h3 className="display mt-1 text-2xl sm:text-3xl">{p.title}</h3></div></article></Link>)}</div>
  </div>
</section>

<section id="process" className="section scroll-mt-24">
  <div className="container-x">
    <Label n="08" t="Our process"/>
    <div className="mt-8 grid md:grid-cols-3">{[["01","Discover"],["02","Concept"],["03","Design"],["04","Approval"],["05","Construction"],["06","Handover"]].map(([n,t])=><div key={n} className="reveal min-h-[150px] border-b border-white/10 p-5 sm:min-h-[175px] sm:p-7"><div className="text-xs text-[#b08a55]">{n}</div><h3 className="display mt-9 text-2xl sm:mt-12 sm:text-3xl">{t}</h3></div>)}</div>
  </div>
</section>

<section id="testimonials" className="section scroll-mt-24 bg-[#f3f0e9] text-[#11110f]">
  <div className="container-x">
    <div className="border-b border-black/15 pb-4 text-[10px] uppercase tracking-widest">09 / Client voices</div>
    <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">{[["Muhammad Hamza","Lahore","Marina Associate gave our residence a clear design direction from the first concept through the construction details. The communication and attention to detail made the process much easier for our family."],["Ayesha Farooq","Gujrat","We wanted a modern commercial space that still felt practical for everyday use. The team balanced the architectural character with technical and construction requirements beautifully."],["Usman Tariq","Islamabad","The design discussions were structured, the drawings were easy to understand, and the team stayed focused on the project goals. We are very happy with the final result."]].map(([name,place,quote])=><article key={name} className="reveal border border-black/15 p-5 sm:p-7"><div className="text-4xl">“</div><p className="mt-2 text-base leading-7 text-black/70 sm:text-lg sm:leading-8">{quote}</p><div className="mt-6 border-t border-black/15 pt-4"><div className="font-semibold">{name}</div><div className="text-[10px] uppercase tracking-widest text-black/45 sm:text-xs">Client · {place}</div></div></article>)}</div>
    <p className="mt-6 text-xs text-black/40">Sample website testimonials — replace these with verified client feedback before publishing.</p>
  </div>
</section>

<section id="faqs" className="section scroll-mt-24">
  <div className="container-x">
    <Label n="10" t="FAQs"/>
    <div className="mt-6 divide-y divide-white/10 sm:mt-8">{[["What services does Marina Associate provide?","We provide architecture, structural engineering, interior design, master planning, project management, construction, renovation and restoration, 3D visualization, landscape design and building consultancy."],["Do you handle both design and construction?","Yes. Marina Associate can support projects from early design and technical coordination through construction, site supervision and handover, depending on the project scope."],["Can you work on residential and commercial projects?","Yes. Our portfolio and service structure cover residential, commercial, hospitality and institutional project types."],["How do I start a project with Marina Associate?","Send your project details through the contact form, email us at msharibshahzad1@gmail.com, call 03703907327, or message us on WhatsApp. We can then discuss the site, requirements, budget and next steps."],["Where is Marina Associate located?","Our listed office address is Lalamusa Main Bazaar, Gujrat, Pakistan. Project work can be discussed based on location and scope."],["Can I request a project consultation?","Yes. Use the Start a Project button or contact Marina Associate directly to share your requirements and request an initial discussion."]].map(([q,a],i)=><div key={q} className="reveal py-5 sm:py-6"><button className="flex w-full items-center justify-between gap-4 text-left" onClick={()=>setOpenFaq(openFaq===i?null:i)}><span className="display text-xl sm:text-2xl md:text-3xl">{q}</span><span className="faq-icon text-[#b08a55] text-2xl">{openFaq===i?"−":"+"}</span></button><div className={openFaq===i?"faq-answer faq-open":"faq-answer"}><p className="max-w-3xl text-sm leading-7 text-white/50">{a}</p></div></div>)}</div>
  </div>
</section>

<section id="insights" className="section scroll-mt-24">
  <div className="container-x">
    <Label n="11" t="Insights"/>
    <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">{["How Much Does It Cost to Build a House?","7 Architectural Mistakes to Avoid","How Structural Engineering Shapes Architecture"].map(t=><article key={t} className="reveal border border-white/10 p-5 sm:p-6"><div className="text-[10px] uppercase text-[#b08a55]">Architecture · 06 min read</div><h3 className="display mt-16 text-2xl sm:mt-24 sm:text-3xl">{t}</h3><p className="mt-3 text-sm text-white/45">Field notes on decisions that shape better spaces, performance and delivery.</p></article>)}</div>
  </div>
</section>

<section id="contact" className="section scroll-mt-24 bg-[#f3f0e9] text-[#11110f]">
  <div className="container-x">
    <div className="border-b border-black/15 pb-4 text-[10px] uppercase tracking-widest">12 / Start a project</div>
    <div className="grid gap-8 pt-10 sm:pt-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-12">
      <div className="reveal">
        <h2 className="display text-5xl sm:text-6xl md:text-8xl">READY TO BUILD SOMETHING <span className="text-black/35">EXTRAORDINARY?</span></h2>
        <div className="mt-7 grid gap-3 text-sm sm:mt-8 sm:gap-4"><a href={"mailto:"+EMAIL} className="flex items-center gap-3 hover:underline"><Mail size={17}/> {EMAIL}</a><a href={"tel:"+PHONE} className="flex items-center gap-3 hover:underline"><Phone size={17}/> {PHONE}</a><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:underline"><MessageCircle size={17}/> WhatsApp: +92 370 3907327</a><div className="flex items-center gap-3"><MapPin size={17}/> Lalamusa Main Bazaar, Gujrat, Pakistan</div><a href={TIKTOK} target="_blank" rel="noreferrer" className="mt-1 inline-flex w-fit border-b border-black/20 pb-1 text-xs uppercase tracking-widest">TikTok @marinaasociateheadoffice</a></div>
      </div>
      <form onSubmit={submit} className="reveal reveal-delay-1 grid gap-3 sm:gap-4">{[["name","Name"],["email","Email"],["phone","Phone"],["location","Location"],["plot","Plot Size"],["budget","Estimated Budget"]].map(([key,label])=><input key={key} required={key==="name"||key==="email"} value={form[key as keyof typeof form]} onChange={e=>setForm({...form,[key]:e.target.value})} placeholder={label} className="border-b border-black/20 bg-transparent py-3.5 outline-none transition-colors focus:border-black/60"/>) }<textarea rows={4} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell us about the project" className="border-b border-black/20 bg-transparent py-3.5 outline-none transition-colors focus:border-black/60"/><button type="submit" className="btn btn-primary mt-2 w-full sm:w-fit">Send project inquiry <ArrowUpRight size={15}/></button><p className="text-xs text-black/45">Submitting opens your email app with the project details prepared for Marina Associate.</p></form>
    </div>
  </div>
</section>

<footer className="border-t border-white/10 bg-[#080807] py-10 sm:py-12">
  <div className="container-x flex flex-col justify-between gap-7 md:flex-row">
    <div><img src="/marina-logo.svg" alt="Marina Associate" className="h-16 w-auto sm:h-20"/><p className="mt-2 max-w-sm text-sm text-white/40">Architecture, engineering and construction for spaces that matter.</p></div>
    <div className="grid gap-2 text-sm text-white/45 sm:gap-3"><a href={"mailto:"+EMAIL} className="hover:text-white">{EMAIL}</a><a href={"tel:"+PHONE} className="hover:text-white">{PHONE}</a><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp +92 370 3907327</a><span>Lalamusa Main Bazaar, Gujrat, Pakistan</span><a href={TIKTOK} target="_blank" rel="noreferrer" className="hover:text-white">TikTok</a></div>
  </div>
  <div className="container-x mt-7 border-t border-white/10 pt-4 text-[10px] uppercase tracking-widest text-white/25">© {new Date().getFullYear()} Marina Associate · Designer & Builders</div>
</footer>
</main>}
