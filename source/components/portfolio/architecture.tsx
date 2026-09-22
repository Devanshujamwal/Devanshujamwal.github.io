import { useId } from "react";
import type { Project } from "@/data/portfolio";

type BoxProps = { x:number; y:number; w:number; h?:number; label:string; detail?:string; accent?:boolean };
function Box({x,y,w,h=60,label,detail,accent=false}:BoxProps) {
  return <g><rect x={x} y={y} width={w} height={h} rx="4" className={accent ? "diagram-box diagram-accent" : "diagram-box"}/><text x={x+w/2} y={y+(detail?25:h/2+5)} textAnchor="middle" className="diagram-label">{label}</text>{detail&&<text x={x+w/2} y={y+44} textAnchor="middle" className="diagram-detail">{detail}</text>}</g>;
}
export function Architecture({ type, compact = false }: { type:Project["diagram"]; compact?:boolean }) {
  const id=useId().replace(/:/g, "");
  const title={network:"Multi-site network concept",azure:"Azure infrastructure concept",security:"Security-event investigation flow",python:"Python module relationships"}[type];
  return <div className={`architecture ${compact ? "architecture-compact" : ""}`}>
    <svg viewBox="0 0 660 370" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
      <title id={`${id}-title`}>{title}</title><desc id={`${id}-desc`}>{type==="network"?"Calgary, Red Deer, and Edmonton site routers connect through a conceptual inter-site routing layer; local switches and VLAN endpoints sit below.":type==="azure"?"An Azure resource group contains a virtual network, conceptual subnets with Windows and Linux virtual machines, network security and access control, and storage and monitoring services.":type==="security"?"Windows endpoints, Linux endpoints, and network events feed Wazuh and SIEM concepts, followed by detection and investigation.":"library_app.py imports the Book class and handles a catalogue file. test_book.py imports and exercises Book."}</desc>
      <defs><marker id={`${id}-arrow`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0L6 3L0 6" fill="var(--diagram-line)"/></marker></defs>
      {type==="network"&&<>
        <text x="28" y="28" className="diagram-caption">CONCEPTUAL NETWORK</text>
        <Box x={215} y={52} w={230} label="Inter-site routing" detail="OSPF · addressing" accent/>
        <path d="M330 112V143M110 143H550M110 143V164M330 143V164M550 143V164" className="diagram-line"/>
        {[{x:28,name:"Calgary"},{x:248,name:"Red Deer"},{x:468,name:"Edmonton"}].map(s=><g key={s.name}><rect x={s.x} y="155" width="164" height="182" rx="5" className="diagram-boundary"/><text x={s.x+82} y="181" textAnchor="middle" className="diagram-label">{s.name}</text><Box x={s.x+14} y={194} w={136} h={36} label="Router"/><path d={`M${s.x+82} 230V246`} className="diagram-line"/><Box x={s.x+14} y={246} w={136} h={36} label="Switch / VLANs"/><path d={`M${s.x+82} 282V300`} className="diagram-line"/><text x={s.x+82} y="316" textAnchor="middle" className="diagram-detail">Endpoints</text></g>)}
      </>}
      {type==="azure"&&<>
        <text x="28" y="28" className="diagram-caption">MICROSOFT AZURE · CONCEPTUAL</text>
        <rect x="26" y="47" width="608" height="287" rx="6" className="diagram-boundary"/><text x="44" y="74" className="diagram-detail">Resource group</text>
        <rect x="45" y="90" width="360" height="157" rx="5" className="diagram-boundary"/><text x="62" y="117" className="diagram-label">Virtual network</text>
        <Box x={62} y={141} w={155} label="Windows VM" detail="Subnet"/><Box x={233} y={141} w={155} label="Linux VM" detail="Subnet"/>
        <text x="224" y="230" textAnchor="middle" className="diagram-detail">NSGs · network access</text>
        <Box x={433} y={106} w={181} label="RBAC" detail="Access control" accent/><Box x={433} y={184} w={181} label="Azure Storage" detail="Storage resources"/>
        <path d="M225 247V268M524 244V268" className="diagram-line"/>
        <Box x={62} y={272} w={552} h={43} label="Azure Monitor / Log Analytics"/>
      </>}
      {type==="security"&&<>
        <text x="28" y="28" className="diagram-caption">CONCEPTUAL EVENT FLOW</text>
        <Box x={28} y={57} w={185} label="Windows endpoint" detail="Endpoint events"/><Box x={238} y={57} w={184} label="Linux endpoint" detail="System events"/><Box x={447} y={57} w={185} label="Network events" detail="Network context"/>
        <path d="M120 117V144H540V117M330 117V173" className="diagram-line" markerEnd={`url(#${id}-arrow)`}/>
        <Box x={205} y={178} w={250} label="Wazuh / SIEM" detail="Event collection & review" accent/>
        <path d="M330 238V265H172V278M330 265H491V278" className="diagram-line"/>
        <Box x={63} y={283} w={220} h={52} label="Detection"/><Box x={381} y={283} w={220} h={52} label="Investigation"/>
        <path d="M283 309H374" className="diagram-line" markerEnd={`url(#${id}-arrow)`}/>
      </>}
      {type==="python"&&<>
        <text x="28" y="28" className="diagram-caption">REPOSITORY MODULES</text>
        <Box x={38} y={58} w={245} label="library_app.py" detail="CLI & catalogue functions" accent/><Box x={377} y={58} w={245} label="test_book.py" detail="Print-based checks"/>
        <path d="M161 118V154H500V118M330 154V179" className="diagram-line" markerEnd={`url(#${id}-arrow)`}/>
        <Box x={207} y={185} w={246} label="book.py" detail="Book class · record behaviour"/>
        <path d="M161 118V299H201" className="diagram-line" markerEnd={`url(#${id}-arrow)`}/>
        <Box x={207} y={272} w={246} label="Catalogue file" detail="Comma-separated records"/>
        <text x="480" y="213" className="diagram-detail">imports</text><text x="480" y="299" className="diagram-detail">file I/O</text>
      </>}
    </svg>
  </div>;
}
