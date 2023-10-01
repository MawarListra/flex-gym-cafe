import React from "react";
import { Button } from "reactstrap";
import HeroIc from "../../assets/HeroImage.png";

const Hero = () => {
  return (
    <div
      className="hero-background d-flex flex-column paddingComponentRight paddingComponentLeft"
      style={{
        marginTop: 32,
        paddingBottom: 96,
        paddingTop: 24,
      }}
      id="home"
    >
      <div className="d-flex d-md-none w-100 px-4">
        <img src={HeroIc} className=" d-flex cover w-100 h-100" alt="hero-ic" />
      </div>
      <div className="d-flex justify-content-md-start justify-content-center">
        <span style={{ color: "#53F60F" }}>
          #1 Fitness Terlengkap di Yogyakarta
        </span>
      </div>
      <div
        className="mb-2 d-none d-md-flex flex-column w-50"
        style={{ fontWeight: "bolder" }}
      >
        <span className="text-white" style={{ fontSize: 72 }}>
          <span className="text-outline" style={{ fontSize: 72 }}>
            SHAPE
          </span>{" "}
          YOUR
        </span>
        <span className="text-white" style={{ fontSize: 72 }}>
          IDEAL BODY
        </span>
      </div>

      <div
        className="mb-2 d-flex d-md-none flex-column w-100 justify-content-center align-items-center"
        style={{ fontWeight: "bolder" }}
      >
        <span className="text-white text-center" style={{ fontSize: 56 }}>
          <span className="text-outline text-center" style={{ fontSize: 56 }}>
            SHAPE
          </span>{" "}
          YOUR
        </span>
        <span className="text-white" style={{ fontSize: 56 }}>
          IDEAL BODY
        </span>
      </div>
      <div className="d-none d-md-flex mb-4 w-50">
        <span style={{ fontSize: 22, color: "#999999" }}>
          Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida
          egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id
          blandit risus porttitor.
        </span>
      </div>
      <div className="d-flex d-md-none mb-4 w-100 justify-content-center align-items-center">
        <span
          className="text-center"
          style={{ fontSize: 18, color: "#999999" }}
        >
          Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida
          egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id
          blandit risus porttitor.
        </span>
      </div>
      <div className="d-none d-md-flex justify-content-between w-50">
        <Button
          className="px-4 py-2 "
          style={{
            backgroundColor: "#53F60F",
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderColor: "#53F60F",
            width: "45%",
          }}
        >
          <span className="text-black">Daftar Sekarang</span>
        </Button>
        <Button
          className="px-4 py-3"
          style={{
            backgroundColor: "black",
            borderColor: "#53F60F",
            color: "#53F60F",
            width: "45%",
          }}
        >
          Kontak Kami
        </Button>
      </div>
      <div className="d-flex d-md-none justify-content-between w-100">
        <Button
          className="px-4 py-2 "
          style={{
            backgroundColor: "#53F60F",
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderColor: "#53F60F",
            width: "45%",
          }}
        >
          <span className="text-black">Daftar Sekarang</span>
        </Button>
        <Button
          className="px-4 py-3"
          style={{
            backgroundColor: "black",
            borderColor: "#53F60F",
            color: "#53F60F",
            width: "45%",
          }}
        >
          Kontak Kami
        </Button>
      </div>
    </div>
  );
};

export default Hero;
