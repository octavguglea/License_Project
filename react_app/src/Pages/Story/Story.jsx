import React from "react";
import "./Story.css";
import { Steps3img } from "./Parts/Steps3img/Steps3img";
import { StepsGroup1 } from "./Parts/StepsGroup/StepsGroup1";
import { StepsGroup2 } from "./Parts/StepsGroup/StepsGroup2";
import { StepsCombined } from "./Parts/StepsCombined/StepsCombined";
import { Introduction } from "./Parts/Introduction/Introduction";

export const Story = () => {
  return (
    <div className="Home-container">
      <Introduction/>

      <StepsGroup1
        title="Recoltarea și selecția strugurilor"
        subtitle="Alegeri de excepție, transformate în vinuri remarcabile"
        description={[
          "Strugurii sunt culeși la maturitate optimă, fiind aleși cu atenție pentru a asigura gustul și caracteristicile dorite. Selecția se realizează manual sau cu mașini specializate, eliminând strugurii necorespunzători pentru a obține o materie primă de calitate superioară, esențială pentru vinurile rafinate.",
          "Transportul rapid la cramă este crucial pentru a menține prospețimea și aroma strugurilor. Această etapă reflectă angajamentul vinificatorilor pentru obținerea vinurilor de cea mai bună calitate.",
        ]}
        imgsrc="/Assets/recoltare.jpg"
      />

      <Steps3img
        title="Zdrobirea și stoarcerea strugurilor"
        subtitle="De la strugure la suc, pasiune în fiecare picătură"
        description={[
          "În prima fază, strugurii sunt zdrobiți pentru a elibera sucul din interiorul boabelor. După zdrobire, urmează stoarcerea, în care mustul obținut este separat de semințe, coji și alte resturi solide. Această operațiune este crucială pentru obținerea unui must curat și bogat în substanțe esențiale pentru fermentație.",
          "Calitatea zdrobirii și a stoarcerii influențează direct gustul, aroma și calitatea vinului final. Un must de calitate superioară, obținut prin zdrobire și stoarcere atentă, reprezintă fundamentul pentru un vin excelent. Este un proces meticulos și important în vinificație, unde fiecare detaliu contează pentru obținerea unui produs final deosebit.",
        ]}
        images={[
          "/Assets/zdrobire1.jpg",
          "/Assets/zdrobire2.jpg",
          "/Assets/zdrobire3.jpg",
        ]}
      />

      <StepsGroup2
        title="Fermentația primară"
        subtitle="Arome bogate, fermentație fină - esența timpului!"
        description={[
          "Fermentația primară transformă mustul de struguri în vin sub acțiunea drojdiilor. Acestea consumă zaharurile, producând alcool și dioxid de carbon în procesul numit fermentație alcoolică. Temperatura și condițiile sunt monitorizate și ajustate pentru a oferi un mediu optim.",
          "Pe durata fermentației, vinificatorii gestionează procesul.Durata fermentației variază în funcție de tipul de vin și obiectivele producătorului, de la câteva zile la săptămâni. Vinul capătă arome și caracteristici specifice soiului și tehnicilor de vinificație.",
          "Fermentația primară este crucială, reprezentând un echilibru între știința controlului procesului și arta de a crea vinuri de calitate superioară. Este momentul crucial în dezvoltarea vinului, influențând gustul și calitatea finală.",
        ]}
        images="/Assets/zdrobirea.jpg"
      />
      <StepsCombined />

      <StepsGroup1
        title="Maturarea și îmbătrânirea"
        subtitle="Răbdare în butoaie, bogăție în fiecare picătură"
        description={[
          "Maturarea și îmbătrânirea sunt etape importante în producția vinului. După fermentație, vinul este transferat în butoaie de lemn sau tancuri de oțel pentru a se odihni și a-și dezvolta aromele și structura. Unele vinuri sunt supuse și unei îmbătrâniri suplimentare în sticlă pentru a-și îmbunătăți complexitatea și echilibrul. În acest timp, vinul este clarificat și stabilizat pentru a obține o limpezime optimă. Aceste etape sunt cruciale pentru a produce vinuri de calitate, bogate în arome și caracteristici distincte.",
        ]}
        imgsrc="/Assets/maturarea.jpg"
      />

      <Steps3img
        title="Filtrarea, clarificarea și îmbutelierea"
        subtitle="De la natură la rafinament, descoperă vinul în toată splendoarea sa"
        description={[
          "Filtrarea și clarificarea reprezintă etape esențiale în producția vinului, contribuind la calitatea și stabilitatea acestuia. Filtrarea elimină particulele solide și impuritățile din vin, asigurându-i un aspect clar și atractiv. Clarificarea completează acest proces, îmbunătățind limpezimea și eliminând defectele vizibile. Aceste practici sunt cruciale pentru a oferi consumatorilor un vin plăcut, fără sedimente sau impurități, reflectând atenția la detalii a producătorilor și pasiunea pentru obținerea unui produs de calitate. Filtrarea și clarificarea demonstrează respectul pentru tradiția vinicolă și determinarea de a oferi un vin excelent.",
        ]}
        images={[
          "/Assets/filtrare1.jpg",
          "/Assets/filtrare2.jpg",
          "/Assets/filtrare3.jpg",
        ]}
      />

      <StepsGroup2
        title="Degustarea și evaluarea"
        subtitle="Savoare în fiecare pahar, arta gustului la fiecare degustare!"
        description={[
          "Degustarea și evaluarea reprezintă momente critice în experiența vinicolă, oferind cunoștințe și apreciere pentru consumatorii și producătorii de vin. Aceste activități permit explorarea aromelor, gusturilor și texturii vinului, dezvăluind subtilități și complexități unice. Prin degustare, consumatorii își pot dezvolta palatul și înțelegerea pentru diferitele stiluri de vin, în timp ce producătorii folosesc feedback-ul pentru a îmbunătăți procesele de producție și a satisface preferințele pieței.",
          "Degustarea și evaluarea vinului reprezintă o punte între arta vinificației și experiența umană, promovând aprecierea și rafinamentul într-un domeniu încărcat de tradiție și inovație.",
        ]}
        images="/Assets/degustare.jpg"
      />
    </div>
  );
};
