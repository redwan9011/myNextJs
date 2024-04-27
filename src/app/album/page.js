import Image from "next/image";
// import  WcShakib from "../../Assets/WcShakib.jpg"
import  WcShakib from "@/Assets/Wcshakib.jpg"

const album = () => {
    return (
        <div>
            <h1>this is album page</h1>
         
            <Image src="https://media.gettyimages.com/id/1711546167/photo/bangladesh-portraits-icc-mens-cricket-world-cup-india-2023.jpg?s=594x594&w=gi&k=20&c=Dqw005-5YgNkKWjCP9ZbDcSdPkzZPvRXcSrUaHHLeUk=" alt="mehengi image" width={200} height={0} ></Image>
            <Image src={WcShakib} alt="shakib al Hasan"></Image>

            {/* <img src="https://media.gettyimages.com/id/1711546167/photo/bangladesh-portraits-icc-mens-cricket-world-cup-india-2023.jpg?s=594x594&w=gi&k=20&c=Dqw005-5YgNkKWjCP9ZbDcSdPkzZPvRXcSrUaHHLeUk=" alt="dkfjd" width={200}></img> */}
        </div>

    );
};

export default album;