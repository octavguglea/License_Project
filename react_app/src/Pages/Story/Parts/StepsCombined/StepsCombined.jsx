import React from "react";
import "./StepsCombined.css";
export const StepsCombined = () => {
  return (
    <div>
      <div className="StepsCombined-container">
        <div
          className="StepsCombined-bg"
          style={{
            backgroundImage: `url("/Assets/combined-bg.jpg")`,
          }}
        ></div>

        <div className="StepsCombined-block">
          <div className="StepsCombined-collection">
            <div className="StepsCombined-img-block">
              <img src="Assets/macerare.jpg" alt="" />
            </div>
            <div className="StepsCombined-body">
              <h3>Macerarea </h3>
              <img
                src="assets/symbol.png"
                className="symbol-combined"
                alt="symbol"
              />
              <h4>Secretele vinului dezvăluite prin macerare rafinată!</h4>
              <p>
                Macerarea este un pas vital în producția vinului roșu, în care
                mustul este lăsat în contact cu coaja pentru a extrage aromele,
                taninurile și pigmenții. Astfel, macerarea este esențială pentru
                producția de vinuri roșii de calitate, contribuind la extragerea
                componentelor esențiale și definirea caracteristicilor unice ale
                fiecărui vin.
              </p>
            </div>
          </div>
          <div className="StepsCombined-collection">
            <div className="StepsCombined-img-block">
              <img src="Assets/presare.jpg" alt="" />
            </div>
            <div className="StepsCombined-body">
              <h3>Presare</h3>
              <img
                src="assets/symbol.png"
                className="symbol-combined"
                alt="symbol"
              />
              <h4>Presat cu pasiune și pricepere</h4>
              <p>
                După ce mustul a fost lăsat să macereze și să extragă aromele și
                taninurile din coajă, urmează etapa de presare. Această
                operațiune constă în aplicarea unei presiuni asupra resturilor
                solide de struguri, cum ar fi cojile și semințele, pentru a
                extrage mustul rămas.Mustul obținut în urma presării este apoi
                transferat în vase de fermentare sau în alte recipiente pentru a
                continua procesul de fermentație. Calitatea presării este
                crucială pentru obținerea unui must curat și bogat în arome,
                care va sta la baza vinului final.
              </p>
            </div>
          </div>
          <div className="StepsCombined-collection">
            <div className="StepsCombined-img-block">
              <img src="Assets/fermentatie2.jpg" alt="" />
            </div>
            <div className="StepsCombined-body">
              <h3>Fermentația secundară</h3>
              <img
                src="assets/symbol.png"
                className="symbol-combined"
                alt="symbol"
              />
              <h4>Strălucire și bule fine</h4>
              <p>
                Fermentația secundară este esențială în producția vinurilor
                spumante. Aici, vinul de bază este transferat în sticle pentru a
                suferi o a doua fermentație. Adăugarea de drojdii și zahăr
                inițiază fermentația, producând alcool și dioxid de carbon.
                Dioxidul de carbon rămâne în sticlă sub formă de bule fine,
                conferind vinului caracteristica sa spumoasă. Etapa finală
                implică degorjarea pentru a elimina drojdiile înainte de
                închiderea finală. Fermentația secundară conferă vinurilor
                spumante bulele și aromele distincte asociate cu acestea.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
