import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../page/home/home";
import LayouInit from "../commponents/LayouInit";
import Presensi from "../page/pemerintahan/presensi/Presensi";
import Profil from "../page/profil/profil";
import Lembaga from "../page/pemerintahan/lembaga/lembaga";
import Pegawai from "../page/pemerintahan/pegawai/pegawai";
import Agenda from "../page/agenda/agenda";
import Program from "../page/program/program";
import Informasi from "../page/informasi/informasi";

const BaseRoute = () => {
  return (
    <div>
      <React.Suspense>
        <LayouInit>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/profil-desa" element={<Profil />} />
            <Route path="/presensi" element={<Presensi />} />
            <Route path="/lembaga-desa" element={<Lembaga />} />
            <Route path="/pegawai-desa" element={<Pegawai />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/program" element={<Program />} />
            <Route path="/informasi" element={<Informasi />} />
          </Routes>
        </LayouInit>
      </React.Suspense>
    </div>
  );
};

export default BaseRoute;
