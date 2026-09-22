"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { navigation, portfolio } from "@/data/portfolio";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1040px)");
    const close = () => { if (mq.matches) setOpen(false); };
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);
  return <header className="site-header"><a className="skip-link" href="#main-content">Skip to content</a><div className="container header-inner">
    <Link href="/#home" className="identity" aria-label="Devanshu Jamwal home"><span className="monogram" aria-hidden="true">dj<span>.</span></span><span>Devanshu Jamwal</span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(n => <Link key={n} href={`/#${n.toLowerCase()}`}>{n}</Link>)}</nav>
    <div className="header-actions"><Sheet open={open} onOpenChange={setOpen}><SheetTrigger asChild><Button variant="ghost" className="mobile-menu-trigger" aria-label="Open navigation"><Menu aria-hidden="true" /><span>Menu</span></Button></SheetTrigger><SheetContent side="right" showCloseButton={false} className="mobile-sheet"><div className="sheet-top"><SheetTitle>Devanshu Jamwal</SheetTitle><SheetClose asChild><Button variant="ghost" className="close-menu" aria-label="Close navigation"><X aria-hidden="true" /></Button></SheetClose></div><SheetDescription>IT support, systems, networking & cloud</SheetDescription><nav aria-label="Mobile navigation">{navigation.map((n,i) => <Link href={`/#${n.toLowerCase()}`} onClick={() => setOpen(false)} key={n}><span className="nav-index">0{i+1}</span>{n}<ArrowUpRight aria-hidden="true" /></Link>)}</nav><div className="sheet-bottom"><p>{portfolio.location}</p><a className="text-link" href={portfolio.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" /></a></div></SheetContent></Sheet></div>
  </div></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-inner"><Link href="/#home" className="identity"><span className="monogram" aria-hidden="true">dj<span>.</span></span><span>Devanshu Jamwal</span></Link><p>IT support · Systems · Networking · Cloud</p><a href={portfolio.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" /></a></div></footer>;
}
