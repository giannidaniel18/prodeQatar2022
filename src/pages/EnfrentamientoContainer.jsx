import React, { useEffect, useState } from "react";
import Enfrentamiento from "../components/Enfrentamiento";

export default function EnfrentamientoContainer({ horario, local, visitante, id, getMatchPrediction, paises }) {
  const [teamNames, setTeamNames] = useState({});

  useEffect(() => {
    getEquipos(local, visitante);
  }, []);

  const getEquipos = (local, visitante) => {
    const localTeam = paises.find((pais) => pais.id === local);
    const visitTeam = paises.find((pais) => pais.id === visitante);

    setTeamNames({ equipoLocal: localTeam, equipoVisitante: visitTeam });
  };

  return <Enfrentamiento teamNames={teamNames} horario={horario} getMatchPrediction={getMatchPrediction} id={id} />;
}
