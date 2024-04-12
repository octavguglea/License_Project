import React from "react";
import "./Description.css";

export const Description = () => {
  return (
    <div>
      <div className="description-body">
        <div className="description padding1">
          <h3>CRAMA NOASTRA</h3>
          <img src="assets/symbol.png" className="symbol" alt="symbol" />
          <h4>Vizitarea cramei, o experienta memorabila</h4>
          <p>
            Bucură-te de vinuri artizanale de cea mai înaltă calitate la Crama
            <b> Guglea</b>. Îmbinăm pasiunea și tradiția pentru a crea vinuri
            remarcabile, reflectând autenticitatea și devotamentul nostru.
            Descoperă aromele unice și caracterul distinct al vinurilor noastre
            într-o atmosferă primitoare și autentică.
          </p>
          <p>
            Te invităm să ne vizitezi și să experimentezi esența vinului produs
            cu suflet și pasiune la Crama <b> Guglea</b>.
          </p>
          <button>DESCOPERA CRAMA NOASTRA</button>
        </div>
        <div className="image-part1"></div>
      </div>
      <div className="description-body">
        <div className="image-part2"></div>
        <div className="description padding2">
          <h3>Vinuri</h3>
          <img src="assets/symbol.png" className="symbol" alt="symbol" />
          <h4>Descoperă selecția noastră de vinuri premium</h4>
          <p>
            <b>Sauvignon Blanc</b> - Proaspăt și vibrant, cu arome de citrice și
            ierburi.<br></br> <b>Chardonnay</b> - Eleganță dată de arome de măr
            și vanilie, cu nuanțe subtile de nucă de cocos.<br></br>{" "}
            <b>Pinot Noir</b> - Fin și catifelat, cu arome de căpșuni și
            condimente delicate.<br></br> <b>Merlot</b> - Echilibrat, cu arome
            de cireșe negre și ciocolată.<br></br> <b>Cabernet Sauvignon</b> -
            Puternic, cu arome intense de fructe negre și mirodenii.<br></br>{" "}
            <b>Rosé</b> - Delicat, cu arome de căpșuni și zmeură. <br></br>{" "}
            <b>Riesling</b> - Aromatic, cu arome de piersică și iasomie.
            <br></br> <b>Syrah/Shiraz</b> - Robust, cu arome de fructe negre și
            piper negru.
          </p>

          <button>ALEGETI VINUL PERFECT</button>
        </div>
      </div>
      <div className="description-body">
        <div className="description padding1">
          <h3>POVESTEA VINULUI</h3>
          <img src="assets/symbol.png" className="symbol" alt="symbol" />
          <h4>Magia Vinului: Pasiune și Artă în Producția Noastră</h4>
          <p>
            Descoperă povestea din spatele paharului de vin! Explorează pasiunea
            și arta din fiecare etapă a procesului nostru de producție, de la
            culesul meticulos al strugurilor la fermentația și maturarea
            minuțioasă.
          </p>
          <p>
            Află mai multe despre acest proces captivant și despre modul în care
            transformăm strugurii în vinuri deosebite. Descoperă secretele din
            spatele producției noastre de vinuri și lasă-te inspirat de pasiunea
            noastră pentru această artă.
          </p>
          <button>DESCOPERA PASIUNEA!</button>
        </div>
        <div className="image-part3"></div>
      </div>
    </div>
  );
};
