import { siteData, userData } from "../assets/interfaces/General";

const DataBar: React.FC = () => {
    const brokenKettleData : userData = {
        username: "brokenKettle",
        factorPoints: 2000,
        invitations: 9,
        seedingCount: 1300,
        downloadingCount: 10,
        seedAmount: 12123123,
        downloadAmount: 392133,
        factorPerHour: 90
    };

    const freeleech: siteData = {
        type: "FL",
        color: "green",
        endDate: new Date((new Date).getDate() + 1)
    };

    return (
        <h1>Data bar</h1>
    );
};

export default DataBar;