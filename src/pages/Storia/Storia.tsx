import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../static/svg/logofestone.svg";
import "./style.css";

const Storia: React.FC = () => {
  return (
    <div className="screen">
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="info">
        <div className="main-button no-cursor first">
          <h2 className="section-title">Cosa è il Festone?</h2>
        </div>
        <div className="info-container">
          <p>
            Quest’anno il 17 luglio (giorno del ricordo liturgico di Santa
            Marcellina) cadrà in domenica. Quando ciò accade (cioè ogni 5, 6, 5
            e 11 anni) la Festa Patronale che annualmente si svolge la terza
            domenica di settembre, diventa grande: FESTONE!
          </p>
        </div>
      </div>
      <div className="info">
        <div className="main-button no-cursor">
          <h2 className="section-title">Carugate e Santa Marcellina</h2>
        </div>
        <div className="info-container">
          <p>
            Dati storici attestano che Santa Marcellina, sorella di
            Sant’Ambrogio, Suora ad appena 15 anni con voto di castità, visse
            per alcuni anni nella cascina Sant’Ambrogio che oggi rientra nel
            Comune di Brugherio, ma che nel 300 d.C. era nel territorio di
            Carugate
          </p>
        </div>
        <div className="info-container">
          <p>
            In virtù di ciò, Santa Marcellina (alla quale è dedicato un altare
            laterale della Basilica di Sant’Ambrogio in Milano), è co-patrona
            della nostra città insieme a Sant’Andrea. A lei sono intitolate la
            Scuola dell’Infanzia parrocchiale e il Corpo Musicale cittadino.
          </p>
        </div>
        <div className="info-container">
          <p>
            Inoltre, nella nostra Chiesa parrocchiale troviamo nella nicchia a
            destra dell’altare la statua della Santa, realizzata dagli artigiani
            della val Gardena per il festone del 1955 e sull’altare consacrato
            nel festone del 1983 scolpito in basso rilievo, troviamo sul primo
            frontale la figura di Sant’Andrea, mente sulla facciata di retro la
            figura di Santa Marcellina in posizione orante.
          </p>
        </div>
      </div>
      <div className="info">
        <div className="main-button no-cursor">
          <h2 className="section-title">Cosa si fa al Festone?</h2>
        </div>
        <div className="info-container">
          <p>
            Il Festone ha una doppia anima: non solo è solenne occasione
            liturgica e spirituale, ma anche festa civile. Tutti infatti siamo
            invitati ad addobbare le nostre case, balconi, cancellate e portoni
            con sandaline, catene, fiocchi e tutto ciò che la fantasia ci
            suggerisce. I colori degli addobbi sono legati al rione di
            appartenenza.
          </p>
        </div>
        <div className="info-container">
          <p>
            L’appuntamento col Festone di quest’anno è arricchito anche dalla
            felice coincidenza con il 50° di Sacerdozio del nostro Arciprete don
            Claudio Silva ed i 10 anni di permanenza alla guida della nostra
            Parrocchia.
          </p>
        </div>
      </div>
      <div className="info">
        <div className="main-button no-cursor">
          <h2 className="section-title">Cosa sono i Rioni?</h2>
        </div>
        <div className="info-container">
          <p>
            Dal 1980, Carugate è stata divisa in quattro rioni, i cui nomi
            evocao luoghi storici del paese:
          </p>
          <ul>
            <li>
              <p>- Rione 1 - Le Corti</p>
            </li>
            <li>
              <p>- Rione 2 - Gallarana</p>
            </li>
            <li>
              <p>- Rione 3 - Felicità</p>
            </li>
            <li>
              <p>- Rione 4 - Vecchio Mulino</p>
            </li>
          </ul>
        </div>
        <div className="info-container">
          <p>
            Inizialmente il ruolo dei rioni era quello di creare una “sana
            competizione” durante la Festa Oratorio e durante il Palio di Rioni
            proposto. Dal 1994 (Festone) ai rioni, è stato assegnato un preciso
            colore che, affiancato al bianco, lo contraddistingue e sono stati
            anche associati al Festone come stimolo e momento aggregante per
            fare festa insieme, rafforzando l’identità comunitaria con eventi e
            momenti di svago.
          </p>
        </div>
      </div>
      <div className="link-wrapper" style={{ marginBottom: "2rem" }}>
        <a
          href="https://www.parrocchiacarugate.it/festone-2022"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.parrocchiacarugate.it/festone-2022
        </a>
      </div>
    </div>
  );
};

export default Storia;
