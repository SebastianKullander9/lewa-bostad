import Image from "next/image";
import tree from "@/public/footer/tree-test.jpg";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import FooterBlock from "./FooterBlock";

export default function Footer() {
    return (
        <footer className="no-section-p h-[50vh] grid grid-cols-10">
            <div className="col-span-2 grid grid-rows-6">
                <div className="row-start-2 row-span-4 flex flex-col flex-1">
                    <div className="inline-block">
                        <p className="heading-primary leading-13">LEWA</p>
                        <p className="heading-primary leading-13">BOSTAD</p>
                    </div>
                    <div className="relative h-full">
                        <Image src={tree} alt="" fill className="object-contain object-left" />
                    </div>
                </div>
                <div className="row-start-6 flex flex-col justify-end">
                    <p>© Copyright 2026 All rights reserved.</p>
                </div>
            </div>
            <div className="col-span-2 grid grid-rows-6">
                <div className="row-start-2 row-span-4 flex flex-col gap-lg">
                    <p>MENU</p>
                    <p>Våra projekt</p>
                    <p>Om oss</p>
                    <p>Kontakt</p>
                </div>
            </div>
            <div className="col-span-2 grid grid-rows-6">
                <div className="row-start-2 row-span-4 flex flex-col gap-lg">
                    <p>SOCIAL</p>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>LinkedIn</p>
                </div>
            </div>
            <div className="col-span-2 grid grid-rows-6">
                <div className="row-start-2 row-span-4 flex flex-col gap-lg">
                    <p>KONTAKT</p>
                    <p>Besök oss:</p>
                    <p>Lewa bostad</p>
                    <p>Storgatan 14, 114 32 Stockholm</p>
                    <p>info@lewabostad.se</p>
                </div>
            </div>
            <div className="col-span-2 grid grid-rows-6">
                <div className="row-start-2 row-span-4 flex flex-col gap-lg">
                    <p>TELEFON</p>
                    <p>+46 12345672</p>
                </div>
                <div className="row-start-6 flex flex-col justify-end items-end">
                    <p>Made by sebastian.kullander</p>
                </div>
            </div>
        </footer>
    );
}
