"use client";
import { Cloud, Monitor, Network, Router, Server, Shield, Terminal } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { labItems } from "@/data/portfolio";
const icons=[Router,Network,Shield,Server,Terminal,Cloud,Monitor];
export function ITLab(){return <Tabs defaultValue="Router" className="lab-tabs"><TabsList aria-label="Explore IT lab components" className="lab-selectors" variant="line">{labItems.map((item,i)=>{const Icon=icons[i];return <TabsTrigger key={item.name} value={item.name} className="lab-selector"><Icon aria-hidden="true"/><span>{item.name}</span></TabsTrigger>})}</TabsList>{labItems.map((item,i)=>{const Icon=icons[i];return <TabsContent key={item.name} value={item.name} className="lab-panel"><span className="lab-symbol"><Icon aria-hidden="true"/></span><div><p className="eyebrow">Lab concepts / {item.short}</p><h3>{item.name}</h3><p>{item.description}</p><ul className="inline-terms">{item.concepts.map(c=><li key={c}>{c}</li>)}</ul></div></TabsContent>})}</Tabs>}
