export class Container{
    
    constructor(data){
        this.id=data.id;
        this.containerId=data.containerId;
        this.title=data.title;
        this.navigateTo=data.navigateTo;
        this.navigateAs=data.navigateAs;
        this.subtitle=data.subtitle;
        this.details=data.details;
        this.backgroundImage=data.backgroundImage;
        this.headingStyle=data.headingStyle;
        this.subheadingStyle=data.subheadingStyle;
        this.containerStyle=data.containerStyle;
        this.productBody=data.productBody;
        this.activeModule=data.activeModule;
        this.visitUsLink=data.visitUsLink;
    }
}

export class ProductBody{
    constructor(data){
        this.id=data.id;
        this.unifiedPlatform=data.unifiedPlatform;
        this.whyUs=data.whyUs;
    }
}

export class UnifiedPlatform{
    constructor(data){
        this.id=data.id;
        this.heading=data.heading;
        this.subHeading=data.subHeading;
        this.platformIconList=data.platformIconList;
        this.platformSubdetails=data.platformSubdetails;
    }
}

export class WhyUs{
    constructor(data){
        this.id=data.id;
        this.heading=data.heading;
        this.subHeading=data.subHeading;
        this.whyUsIconList=data.whyUsIconList;
        this.whyUsSubDetails=data.whyUsSubDetails;
    }
}