export default function Footer() {
    return (
        <footer className="no-section-p grid grid-cols-16 md:mt-12">
            <div className="col-span-16 md:col-span-4 mb-12">
                <div className="flex flex-col mt-lg md:mt-0">
                    <p className="heading-primary leading-7 sm:leading-7 md:leading-7 lg:leading-9 xl:leading-11">
                        LEWA
                    </p>
                    <p className="heading-primary leading-7 sm:leading-7 md:leading-7 lg:leading-9 xl:leading-11">
                        BOSTAD
                    </p>
                </div>
            </div>
            <div className="col-span-8 md:col-span-3 mb-2xl">
                <div className="flex flex-col gap-base text-medium">
                    <p className="text-medium">MENU</p>
                    <p>Våra projekt</p>
                    <p>Om oss</p>
                    <p>Kontakt</p>
                </div>
            </div>
            <div className="col-span-8 md:col-span-3 mb-2xl col-start-11">
                <div className="flex flex-col gap-base text-medium">
                    <p className="text-medium">SOCIAL</p>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>LinkedIn</p>
                </div>
            </div>
            <div className="col-span-8 md:col-span-3">
                <div className="flex flex-col gap-base text-medium">
                    <p className="text-medium">KONTAKT</p>
                    <p>+46 12345672</p>
                    <p>info@lewabostad.se</p>
                </div>
            </div>
            <div className="col-span-8 md:col-span-3 col-start-11">
                <div className="flex flex-col gap-base text-medium">
                    <p className="text-medium">BESÖK OSS</p>
                    <p>Lewa bostad</p>
                    <p>Storgatan 14</p>
                    <p>114 32 Stockholm</p>
                </div>
            </div>
            <div className="grid grid-cols-16 col-span-16 mt-24 md:mt-36 mb-base text-medium gap-md md:gap-0">
                <p className="col-span-16 md:col-span-4">Privacy Policy</p>
                <p className="col-span-16 md:col-span-3">Svenska</p>
                <p className="col-span-16 md:col-span-3 whitespace-nowrap">
                    © Copyright 2026 All rights reserved.
                </p>
                <p className="col-span-16 md:col-span-3 md:col-start-14 whitespace-nowrap">
                    Made by Sebastian.Kullander
                </p>
            </div>
        </footer>
    );
}
