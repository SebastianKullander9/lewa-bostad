export type ObjectInfoType = {
    buildStart: string;
    moveIn: string;
    estateAmount: string;
    roomAmount: string;
    size: string;
    energyClass: string;
};

export type ProjectType = {
    title: string;
    introText: string;
    showcaseImages: string[];
    galleryImages: string[];
    objectInfo: ObjectInfoType;
    aboutText: string;
    placement: string[];
    sustainability: string[];
};
