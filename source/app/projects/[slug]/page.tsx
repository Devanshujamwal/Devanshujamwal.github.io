import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects, type CaseNote } from "@/data/portfolio";
import { Architecture } from "@/components/portfolio/architecture";

const baseSections=[["Overview","overview"],["Objective","objective"],["Architecture","architecture"],["Technologies","technologies"]] as const;
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const{slug}=await params;const p=projects.find(p=>p.slug===slug);return{title:p?`${p.title} | Devanshu Jamwal`:"Case study not found",description:p?.summary,openGraph:{title:p?.title,description:p?.summary}};}
function Notes({items}:{items:CaseNote[]}){return <div className="case-notes">{items.map((item,i)=><article key={item.title}><span className="note-number">{String(i+1).padStart(2,"0")}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>}
export default async function CaseStudy({params}:{params:Promise<{slug:string}>}){
  const{slug}=await params;const p=projects.find(p=>p.slug===slug);if(!p)notFound();const next=projects[(projects.indexOf(p)+1)%projects.length];const sections=[...baseSections,...(p.implementation.length?[["Implementation","implementation"] as const]:[]),...(p.troubleshooting.length?[["Troubleshooting","troubleshooting"] as const]:[]),...(p.validation.length?[["Validation","validation"] as const]:[]),...(p.learned.length?[["What I Learned","what-i-learned"] as const]:[])];
  return <main id="main-content" className="case-page"><div className="container"><Link href="/#projects" className="back-link"><ArrowLeft aria-hidden="true"/>All projects</Link><header className="case-header"><p className="eyebrow">Case study {p.number} <span>/</span> {p.category}</p><h1>{p.title}</h1><p className="case-summary">{p.summary}</p><div className="case-meta"><div><span>Context</span><p>{p.type}</p></div><div><span>Environment</span><p>{p.environment}</p></div><div><span>Contribution</span><p>{p.role}</p></div></div>{p.github&&<a className="text-link" href={p.github} target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight aria-hidden="true"/></a>}</header>
    <div className="case-layout"><aside className="case-toc"><p className="eyebrow">In this case study</p><nav aria-label="Case study sections">{sections.map(([s,a],i)=><a href={`#${a}`} key={s}><span>{String(i+1).padStart(2,"0")}</span>{s}</a>)}</nav></aside><article className="case-content">
      <section id="overview"><p className="eyebrow">01 / Context</p><h2>Overview</h2><p>{p.overview}</p></section>
      <section id="objective"><p className="eyebrow">02 / Intent</p><h2>Objective</h2><p className="objective-text">{p.objective}</p></section>
      <section id="architecture"><p className="eyebrow">03 / System design</p><h2>Architecture</h2><figure><Architecture type={p.diagram}/><figcaption>{p.diagramCaption}</figcaption></figure></section>
      <section id="technologies"><p className="eyebrow">04 / Toolkit</p><h2>Technologies</h2><ul className="technology-list">{p.technologies.map(t=><li key={t}>{t}</li>)}</ul></section>
      {p.implementation.length>0&&<section id="implementation"><p className="eyebrow">05 / Build notes</p><h2>Implementation</h2><Notes items={p.implementation}/></section>}
      {p.troubleshooting.length>0&&<section id="troubleshooting"><p className="eyebrow">06 / Diagnostic reasoning</p><h2>Troubleshooting</h2><Notes items={p.troubleshooting}/></section>}
      {p.validation.length>0&&<section id="validation"><p className="eyebrow">07 / Verification</p><h2>Validation</h2><Notes items={p.validation}/></section>}
      {p.learned.length>0&&<section id="what-i-learned"><p className="eyebrow">08 / Reflection</p><h2>What I Learned</h2><Notes items={p.learned}/></section>}
    </article></div><Link className="next-project" href={`/projects/${next.slug}/`}><div><p className="eyebrow">Next case study</p><h2>{next.title}</h2></div><ArrowRight aria-hidden="true"/></Link>
  </div></main>;
}
