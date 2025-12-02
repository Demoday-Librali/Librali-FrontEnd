import React, { useState, useEffect } from "react";
import Styles from './css/BannerEmpresa.module.css';

export default function EditableBanner() {
  const [banner, setBanner] = useState(null);

  // Carrega o banner salvo assim que o componente abre
  useEffect(() => {
    const savedBanner = localStorage.getItem("bannerEmpresa");
    if (savedBanner) {
      setBanner(savedBanner);
    }
  }, []);

  // Quando o usuário escolhe um novo banner
  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBanner(reader.result);
        localStorage.setItem("bannerEmpresa", reader.result); // salva no localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full relative">
      <div className="w-full h-40 bg-gray-200 rounded-lg overflow-hidden">
        {banner ? (
        <img
            src={banner}
            alt="Banner da empresa"
            className="w-full h-full object-cover"
        />

        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Banner da preferência da empresa
          </div>
        )}
      </div>

      <label
        htmlFor="banner-upload"
        className="absolute top-2 right-2 bg-indigo-600 text-white px-3 py-1 rounded cursor-pointer hover:bg-indigo-700"
      >
        Editar banner
      </label>
      <input
        id="banner-upload"
        type="file"
        accept="image/*"
        onChange={handleBannerChange}
        className="hidden"
      />
    </div>
  );
}
