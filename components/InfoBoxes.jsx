import InfoBox from "@/components/InfoBox";
const InfoBoxes = () => {
    return (
        <section>
            <div class="container-xl lg:container m-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <InfoBox
                     headingText="For Renters"
                      buttonInfo={{
                        text:"Browse properties",
                         link:"/properties",
                          backgroundColor:"bg-black"
                          }}>Find your dream rental property. Bookmark properties and contact owners.</InfoBox>
                    <InfoBox 
                    headingText="For Property Owners" 
                    backgroundColor="bg-blue-100"
                    buttonInfo={{
                        text:"Add property", link:"/properties/add", backgroundColor:"bg-blue-500"
                    }}
                    >List your properties and reach potential tenants. Rent as an
                    airbnb or long term.</InfoBox> 
                </div>
            </div>
    </section>
    );
};

export default InfoBoxes;
